"""
Generate a TypeScript file with real VAERS data from the aggregated JSON.
"""
import json

with open('scripts/vaers_aggregated.json') as f:
    data = json.load(f)

# Map our IDs to vaccine labels used in site
LABELS = {
    'dtap': 'DTaP / DTP / Tdap',
    'hepb': 'Hepatitis B',
    'hepa': 'Hepatitis A', 
    'ipv': 'Polio (IPV/OPV)',
    'hib': 'Hib (Haemophilus influenzae type b)',
    'pcv': 'Pneumococcal (PCV)',
    'rotavirus': 'Rotavirus',
    'mmr': 'MMR (Measles, Mumps, Rubella)',
    'varicella': 'Varicella (Chickenpox) / Zoster (Shingles)',
    'flu': 'Influenza',
    'hpv': 'HPV (Human Papillomavirus)',
    'meningococcal': 'Meningococcal',
    'covid19': 'COVID-19',
    'rsv': 'RSV (Respiratory Syncytial Virus)',
}

lines = []
lines.append("/**")
lines.append(" * Real VAERS (Vaccine Adverse Event Reporting System) data")
lines.append(" * Aggregated from official VAERS CSV downloads (1990-2026)")
lines.append(" * Source: https://vaers.hhs.gov/data/datasets.html")
lines.append(" *")
lines.append(" * IMPORTANT: VAERS is a passive surveillance system. Reports do NOT")
lines.append(" * establish causation. Anyone can submit a report. Healthcare providers")
lines.append(" * are required to report certain events regardless of whether they believe") 
lines.append(" * the vaccine caused the event. These numbers represent raw report counts.")
lines.append(" */")
lines.append("import { VAERSData } from './types'")
lines.append("")
lines.append("export const vaersRealData: Record<string, VAERSData> = {")

for vax_id in sorted(data.keys()):
    d = data[vax_id]
    label = LABELS.get(vax_id, vax_id.upper())
    
    # Filter meaningful symptoms (exclude "No adverse event", storage errors etc)
    skip_symptoms = {'No adverse event', 'Incorrect product storage', 'Product storage error', 
                     'Extra dose administered', 'SARS-CoV-2 test', 'Rotavirus test positive',
                     'Exposure during pregnancy'}
    symptoms = [s for s in d['topSymptoms'] if s['symptom'] not in skip_symptoms][:15]
    
    # Sort age groups in logical order
    age_order = ['infant (<1 yr)', 'child (1-5 yrs)', 'child (6-11 yrs)', 
                 'adolescent (12-17 yrs)', 'adult (18-64 yrs)', 'elderly (65+ yrs)', 'unknown']
    age_groups = []
    for ag in age_order:
        if ag in d['ageGroups']:
            age_groups.append({'group': ag, 'count': d['ageGroups'][ag]})
    
    # Get yearly data (last 10 years)
    yearly = [y for y in d['yearlyData'] if y['year'].isdigit() and int(y['year']) >= 2015]
    
    lines.append(f"  '{vax_id}': {{")
    lines.append(f"    reportYear: '1990-2026 (all available VAERS data)',")
    lines.append(f"    totalReports: {d['totalReports']},")
    lines.append(f"    seriousReports: {d['seriousReports']},")
    lines.append(f"    deaths: {d['deaths']},")
    lines.append(f"    lifeThreatening: {d['lifeThreatening']},")
    lines.append(f"    permanentDisability: {d['permanentDisability']},")
    lines.append(f"    hospitalizations: {d['hospitalizations']},")
    lines.append(f"    emergencyRoomVisits: {d['erVisits']},")
    lines.append(f"    birthDefects: {d['birthDefects']},")
    
    # Top symptoms
    lines.append(f"    topReportedSymptoms: [")
    for s in symptoms:
        sym_escaped = s['symptom'].replace("'", "\\'")
        lines.append(f"      {{ symptom: '{sym_escaped}', count: {s['count']} }},")
    lines.append(f"    ],")
    
    # Age breakdown
    lines.append(f"    ageBreakdown: [")
    for ag in age_groups:
        lines.append(f"      {{ group: '{ag['group']}', count: {ag['count']} }},")
    lines.append(f"    ],")
    
    # Yearly trend
    lines.append(f"    yearlyTrend: [")
    for y in yearly:
        lines.append(f"      {{ year: '{y['year']}', reports: {y['reports']}, deaths: {y['deaths']}, serious: {y['serious']} }},")
    lines.append(f"    ],")
    
    # Note
    note = (
        f"VAERS reports for {label} vaccines. Total of {d['totalReports']:,} reports "
        f"including {d['deaths']:,} deaths, {d['hospitalizations']:,} hospitalizations, "
        f"{d['permanentDisability']:,} permanent disabilities, and {d['erVisits']:,} ER visits "
        f"reported to VAERS since 1990. These are raw adverse event reports and do not establish "
        f"that the vaccine caused the reported event."
    )
    lines.append(f"    note: '{note}',")
    lines.append(f"    sourceUrl: 'https://vaers.hhs.gov/data/datasets.html',")
    lines.append(f"    dataAsOf: 'February 2026',")
    lines.append(f"  }},")

lines.append("}")
lines.append("")

print('\n'.join(lines))
