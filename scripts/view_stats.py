import json

with open('scripts/vaers_aggregated.json') as f:
    data = json.load(f)

for vax in sorted(data.keys()):
    d = data[vax]
    print(f'\n=== {vax.upper()} ===')
    print(f'  Total Reports: {d["totalReports"]:,}')
    print(f'  Deaths: {d["deaths"]:,}')
    print(f'  Life-Threatening: {d["lifeThreatening"]:,}')
    print(f'  Serious Reports: {d["seriousReports"]:,}')
    print(f'  Hospitalizations: {d["hospitalizations"]:,}')
    print(f'  ER Visits: {d["erVisits"]:,}')
    print(f'  Permanent Disability: {d["permanentDisability"]:,}')
    print(f'  Birth Defects: {d["birthDefects"]:,}')
    
    symptoms = [s for s in d['topSymptoms'] if s['symptom'] != 'No adverse event'][:10]
    print(f'  Top 10 Symptoms:')
    for s in symptoms:
        print(f'    {s["symptom"]}: {s["count"]:,}')
    
    ages = sorted(d['ageGroups'].items(), key=lambda x: -x[1])
    print(f'  Age Groups:')
    for a, c in ages:
        print(f'    {a}: {c:,}')

    # Recent 5-year data (2020-2024)
    recent = [y for y in d['yearlyData'] if y['year'] in ['2020','2021','2022','2023','2024','2025']]
    if recent:
        r_reports = sum(y['reports'] for y in recent)
        r_deaths = sum(y['deaths'] for y in recent)
        r_serious = sum(y['serious'] for y in recent)
        print(f'  Recent (2020-2025): reports={r_reports:,} deaths={r_deaths:,} serious={r_serious:,}')
