"""
Parse VAERS CSV files and aggregate statistics per vaccine type.
Outputs a JSON file that can be used to update the site's vaccine data.
"""
import csv
import json
import os
import sys
from collections import defaultdict
from pathlib import Path

VAERS_DIR = Path(__file__).resolve().parent.parent / "data" / "vaers"

# Map VAERS VAX_TYPE codes to the vaccine IDs used on the site
VAX_TYPE_MAP = {
    # DTaP / DTP / Td / Tdap family
    'DTAP': 'dtap',
    'DTP': 'dtap',
    'DT': 'dtap',
    'TD': 'dtap',
    'TDAP': 'dtap',
    'DTAPIPV': 'dtap',
    'DTAPIPVHIB': 'dtap',
    'DTAPHEPBIP': 'dtap',
    'DTPIPV': 'dtap',
    # Hepatitis B
    'HEPB': 'hepb',
    'HEP': 'hepb',
    'HEPATBP': 'hepb',
    'HIBHEPB': 'hepb',
    # Hepatitis A
    'HEPA': 'hepa',
    'HEPAB': 'hepa',
    # IPV / Polio
    'IPV': 'ipv',
    'OPV': 'ipv',
    'POLIO': 'ipv',
    # Hib
    'HIB': 'hib',
    'HIBV': 'hib',
    # PCV / Pneumococcal
    'PNC': 'pcv',
    'PNC13': 'pcv',
    'PNC15': 'pcv',
    'PNC20': 'pcv',
    'PPV': 'pcv',
    'PNEU': 'pcv',
    # Rotavirus
    'RV': 'rotavirus',
    'RV1': 'rotavirus',
    'RV5': 'rotavirus',
    'ROTAV': 'rotavirus',
    # MMR
    'MMR': 'mmr',
    'MMRV': 'mmr',
    'MEA': 'mmr',
    'MUR': 'mmr',
    'RUB': 'mmr',
    # Varicella
    'VARCEL': 'varicella',
    'VARZOS': 'varicella',
    # Influenza
    'FLU': 'flu',
    'FLU3': 'flu',
    'FLU4': 'flu',
    'FLUA3': 'flu',
    'FLUA4': 'flu',
    'FLUC3': 'flu',
    'FLUC4': 'flu',
    'FLUN3': 'flu',
    'FLUN4': 'flu',
    'FLUR3': 'flu',
    'FLUR4': 'flu',
    'FLUX': 'flu',
    'FLUX(H1N1)': 'flu',
    'H1N1': 'flu',
    'FLU(H1N1)': 'flu',
    'FLUN(H1N1)': 'flu',
    # HPV
    'HPV2': 'hpv',
    'HPV4': 'hpv',
    'HPV9': 'hpv',
    'HPVX': 'hpv',
    # Meningococcal
    'MNQ': 'meningococcal',
    'MENB': 'meningococcal',
    'MEN': 'meningococcal',
    # COVID-19
    'COVID19': 'covid19',
    'COVID19-2': 'covid19',
    # RSV
    'RSV': 'rsv',
    # Vitamin K (newborn)
    'VITK': 'vitk',
    # Erythromycin eye ointment (newborn)
    'UNK': None,  # Unknown - skip
}

def yn_to_bool(val):
    """Convert Y/N to boolean."""
    return val.strip().upper() == 'Y' if val else False

def parse_vaers_data():
    """Parse all VAERS files and aggregate by vaccine type."""
    
    # First, build a mapping of VAERS_ID -> vaccine types
    print("Building VAERS_ID -> vaccine type mapping...", file=sys.stderr)
    id_to_vax = defaultdict(set)
    
    vax_files = sorted(VAERS_DIR.glob("*VAERSVAX.csv"))
    for vf in vax_files:
        print(f"  Processing {vf.name}...", file=sys.stderr)
        with open(vf, 'r', encoding='latin-1') as f:
            reader = csv.DictReader(f)
            for row in reader:
                vaers_id = row.get('VAERS_ID', '').strip()
                vax_type = row.get('VAX_TYPE', '').strip()
                if vaers_id and vax_type:
                    mapped = VAX_TYPE_MAP.get(vax_type)
                    if mapped:
                        id_to_vax[vaers_id].add(mapped)
    
    print(f"  Mapped {len(id_to_vax)} unique VAERS IDs to vaccine types", file=sys.stderr)
    
    # Build VAERS_ID -> symptoms mapping
    print("Building VAERS_ID -> symptoms mapping...", file=sys.stderr)
    id_to_symptoms = defaultdict(set)
    
    symptom_files = sorted(VAERS_DIR.glob("*VAERSSYMPTOMS.csv"))
    for sf in symptom_files:
        print(f"  Processing {sf.name}...", file=sys.stderr)
        with open(sf, 'r', encoding='latin-1') as f:
            reader = csv.DictReader(f)
            for row in reader:
                vaers_id = row.get('VAERS_ID', '').strip()
                for i in range(1, 6):
                    symptom = row.get(f'SYMPTOM{i}', '').strip()
                    if symptom:
                        id_to_symptoms[vaers_id].add(symptom)
    
    print(f"  Mapped symptoms for {len(id_to_symptoms)} unique VAERS IDs", file=sys.stderr)
    
    # Now parse VAERSDATA files - the main report data
    print("Parsing VAERSDATA files...", file=sys.stderr)
    
    # Per-vaccine aggregations
    stats = defaultdict(lambda: {
        'totalReports': 0,
        'deaths': 0,
        'lifeThreatening': 0,
        'permanentDisability': 0,
        'hospitalizations': 0,
        'erVisits': 0,
        'birthDefects': 0,
        'seriousReports': 0,
        'ageGroups': defaultdict(int),  # infant, child, adult
        'yearlyReports': defaultdict(int),
        'yearlyDeaths': defaultdict(int),
        'yearlySerious': defaultdict(int),
        'topSymptoms': defaultdict(int),
        'sexBreakdown': defaultdict(int),
    })
    
    data_files = sorted(VAERS_DIR.glob("*VAERSDATA.csv"))
    
    for df in data_files:
        # Extract year from filename
        basename = df.stem  # e.g. "2024VAERSDATA"
        file_year = ''.join(c for c in basename if c.isdigit())
        if not file_year:
            file_year = 'NonDomestic'
        
        print(f"  Processing {df.name}...", file=sys.stderr)
        with open(df, 'r', encoding='latin-1') as f:
            reader = csv.DictReader(f)
            for row in reader:
                vaers_id = row.get('VAERS_ID', '').strip()
                if not vaers_id or vaers_id not in id_to_vax:
                    continue
                
                died = yn_to_bool(row.get('DIED', ''))
                l_threat = yn_to_bool(row.get('L_THREAT', ''))
                hospital = yn_to_bool(row.get('HOSPITAL', ''))
                disable = yn_to_bool(row.get('DISABLE', ''))
                er_visit = yn_to_bool(row.get('ER_VISIT', '')) or yn_to_bool(row.get('ER_ED_VISIT', ''))
                birth_defect = yn_to_bool(row.get('BIRTH_DEFECT', ''))
                is_serious = died or l_threat or hospital or disable
                
                # Determine age group
                age_str = row.get('AGE_YRS', '').strip()
                age_group = 'unknown'
                if age_str:
                    try:
                        age = float(age_str)
                        if age < 1:
                            age_group = 'infant (<1 yr)'
                        elif age < 6:
                            age_group = 'child (1-5 yrs)'
                        elif age < 12:
                            age_group = 'child (6-11 yrs)'
                        elif age < 18:
                            age_group = 'adolescent (12-17 yrs)'
                        elif age < 65:
                            age_group = 'adult (18-64 yrs)'
                        else:
                            age_group = 'elderly (65+ yrs)'
                    except ValueError:
                        pass
                
                sex = row.get('SEX', '').strip()
                
                # Extract report year from RECVDATE (MM/DD/YYYY)
                recv_date = row.get('RECVDATE', '').strip()
                report_year = file_year
                if recv_date and '/' in recv_date:
                    parts = recv_date.split('/')
                    if len(parts) == 3 and len(parts[2]) == 4:
                        report_year = parts[2]
                
                # Get symptoms for this report
                symptoms = id_to_symptoms.get(vaers_id, set())
                
                # Apply to each vaccine this report covers
                for vax in id_to_vax[vaers_id]:
                    s = stats[vax]
                    s['totalReports'] += 1
                    s['yearlyReports'][report_year] += 1
                    s['ageGroups'][age_group] += 1
                    s['sexBreakdown'][sex or 'U'] += 1
                    
                    if died:
                        s['deaths'] += 1
                        s['yearlyDeaths'][report_year] += 1
                    if l_threat:
                        s['lifeThreatening'] += 1
                    if disable:
                        s['permanentDisability'] += 1
                    if hospital:
                        s['hospitalizations'] += 1
                    if er_visit:
                        s['erVisits'] += 1
                    if birth_defect:
                        s['birthDefects'] += 1
                    if is_serious:
                        s['seriousReports'] += 1
                        s['yearlySerious'][report_year] += 1
                    
                    for sym in symptoms:
                        s['topSymptoms'][sym] += 1
    
    # Post-process: sort top symptoms and yearly data
    result = {}
    for vax, s in stats.items():
        # Get top 20 symptoms
        top_symptoms = sorted(s['topSymptoms'].items(), key=lambda x: -x[1])[:20]
        
        # Sort yearly data
        yearly = []
        all_years = set(s['yearlyReports'].keys())
        for y in sorted(all_years):
            yearly.append({
                'year': y,
                'reports': s['yearlyReports'][y],
                'deaths': s['yearlyDeaths'].get(y, 0),
                'serious': s['yearlySerious'].get(y, 0),
            })
        
        result[vax] = {
            'totalReports': s['totalReports'],
            'deaths': s['deaths'],
            'lifeThreatening': s['lifeThreatening'],
            'permanentDisability': s['permanentDisability'],
            'hospitalizations': s['hospitalizations'],
            'erVisits': s['erVisits'],
            'birthDefects': s['birthDefects'],
            'seriousReports': s['seriousReports'],
            'ageGroups': dict(s['ageGroups']),
            'sexBreakdown': dict(s['sexBreakdown']),
            'topSymptoms': [{'symptom': sym, 'count': cnt} for sym, cnt in top_symptoms],
            'yearlyData': yearly,
        }
    
    return result


if __name__ == '__main__':
    data = parse_vaers_data()
    
    # Print summary to stderr
    print("\n=== VAERS Data Summary ===", file=sys.stderr)
    for vax in sorted(data.keys()):
        d = data[vax]
        print(f"\n{vax.upper()}:", file=sys.stderr)
        print(f"  Total Reports: {d['totalReports']:,}", file=sys.stderr)
        print(f"  Deaths: {d['deaths']:,}", file=sys.stderr)
        print(f"  Life-Threatening: {d['lifeThreatening']:,}", file=sys.stderr)
        print(f"  Permanent Disability: {d['permanentDisability']:,}", file=sys.stderr)
        print(f"  Hospitalizations: {d['hospitalizations']:,}", file=sys.stderr)
        print(f"  ER Visits: {d['erVisits']:,}", file=sys.stderr)
        print(f"  Birth Defects: {d['birthDefects']:,}", file=sys.stderr)
        print(f"  Serious Reports: {d['seriousReports']:,}", file=sys.stderr)
        print(f"  Top 5 Symptoms: {', '.join(s['symptom'] for s in d['topSymptoms'][:5])}", file=sys.stderr)
    
    # Output JSON to stdout
    json.dump(data, sys.stdout, indent=2)
