"""
Replace all vaersData blocks in the vaccine data files with references to vaersRealData.
Also adds the import statement to each file.
"""
import re

# Define all replacements: (file, line_of_vaersData_start, vaers_key)
# Line numbers are 1-based (from our analysis)
replacements = [
    # enhancedVaccineData.ts - note the import was already added by the first multi_replace
    ('src/lib/enhancedVaccineData.ts', 198, 'dtap'),      # proc-dtap-enhanced ~L197+1 (import shifted)
    ('src/lib/enhancedVaccineData.ts', 423, 'pcv'),        # proc-pneumococcal-enhanced  
    ('src/lib/enhancedVaccineData.ts', 675, 'dtap'),       # proc-dtap-enhanced-duplicate
    ('src/lib/enhancedVaccineData.ts', 900, 'pcv'),        # proc-pneumococcal-enhanced (dup)
    ('src/lib/enhancedVaccineData.ts', 1117, 'rotavirus'), # proc-rotavirus-enhanced
    ('src/lib/enhancedVaccineData.ts', 1324, 'dtap'),      # proc-tdap-maternal
    ('src/lib/enhancedVaccineData.ts', 1511, 'flu'),       # proc-flu-maternal
    
    ('src/lib/additionalVaccines.ts', 171, 'mmr'),         # proc-mmr
    ('src/lib/additionalVaccines.ts', 369, 'rotavirus'),   # proc-rotavirus
    ('src/lib/additionalVaccines.ts', 569, 'pcv'),         # proc-pneumococcal
    
    ('src/lib/childVaccinesContinued.ts', 164, 'flu'),     # proc-influenza-child
    ('src/lib/childVaccinesContinued.ts', 416, 'varicella'), # proc-varicella
    
    ('src/lib/proceduresData.ts', 247, 'hepb'),            # proc-hepatitis-b
    ('src/lib/proceduresData.ts', 5246, 'dtap'),           # proc-dtap-vaccine
]

def replace_vaers_block(filepath, approx_line, vaers_key):
    """Replace inline vaersData object starting near approx_line with a reference."""
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Find the actual "vaersData: {" line near the approximate line
    search_start = max(0, approx_line - 5)
    search_end = min(len(lines), approx_line + 5)
    
    start_line = None
    for i in range(search_start, search_end):
        if 'vaersData: {' in lines[i]:
            start_line = i
            break
    
    if start_line is None:
        print(f"  WARNING: Could not find vaersData block near line {approx_line} in {filepath}")
        return False
    
    # Find the closing "},", counting brace depth
    depth = 0
    end_line = None
    for i in range(start_line, min(len(lines), start_line + 20)):
        depth += lines[i].count('{') - lines[i].count('}')
        if depth == 0:
            end_line = i
            break
    
    if end_line is None:
        print(f"  WARNING: Could not find end of vaersData block starting at line {start_line+1} in {filepath}")
        return False
    
    # Get the indentation
    indent = ''
    match = re.match(r'^(\s*)', lines[start_line])
    if match:
        indent = match.group(1)
    
    # Replace the block
    replacement = f"{indent}vaersData: vaersRealData['{vaers_key}'],\n"
    lines[start_line:end_line+1] = [replacement]
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    
    print(f"  Replaced vaersData block at line {start_line+1} -> vaersRealData['{vaers_key}'] in {filepath}")
    return True


def add_import(filepath):
    """Add import for vaersRealData if not already present."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'vaersRealData' in content:
        print(f"  Import already present in {filepath}")
        return
    
    # Add after the last import line
    lines = content.split('\n')
    last_import = 0
    for i, line in enumerate(lines):
        if line.startswith('import '):
            last_import = i
    
    lines.insert(last_import + 1, "import { vaersRealData } from './vaersRealData'")
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))
    
    print(f"  Added vaersRealData import to {filepath}")


# Process files - need to work backwards (highest line first) to avoid line shifts
# Group by file
from collections import defaultdict
by_file = defaultdict(list)
for filepath, line, key in replacements:
    by_file[filepath].append((line, key))

for filepath in by_file:
    print(f"\nProcessing {filepath}...")
    
    # Add import first
    add_import(filepath)
    
    # Sort replacements by line number DESCENDING so we don't shift earlier lines
    file_replacements = sorted(by_file[filepath], key=lambda x: -x[0])
    
    for line, key in file_replacements:
        replace_vaers_block(filepath, line, key)

print("\nDone!")
