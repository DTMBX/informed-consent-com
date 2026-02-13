import { Procedure } from './types'
import { citations } from './proceduresData'

export const additionalVaccines: Procedure[] = [
  {
    id: 'proc-mmr',
    name: 'MMR Vaccine (Measles, Mumps, Rubella)',
    shortName: 'MMR',
    category: 'vaccination',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'Combination vaccine protecting against measles, mumps, and rubella. First dose typically given at 12-15 months, second dose at 4-6 years.',
    indication: 'Measles is highly contagious and can cause pneumonia, brain damage, and death. Mumps can cause meningitis, deafness, and sterility. Rubella in pregnant women causes severe birth defects.',
    benefits: [
      {
        id: 'mmr-ben-1',
        description: '97% effective against measles after 2 doses, 88% effective against mumps, 97% effective against rubella',
        citations: ['cit-mmr-1']
      },
      {
        id: 'mmr-ben-2',
        description: 'Prevents serious complications including brain inflammation, deafness, and death',
        citations: ['cit-mmr-1']
      },
      {
        id: 'mmr-ben-3',
        description: 'Protects vulnerable individuals through community immunity',
        citations: ['cit-mmr-1']
      }
    ],
    risks: [
      {
        id: 'mmr-risk-1',
        description: 'Sore arm, fever, mild rash',
        frequency: 'Common (10-15 in 100)',
        severity: 'mild',
        citations: ['cit-mmr-1']
      },
      {
        id: 'mmr-risk-2',
        description: 'Temporary joint pain (more common in adults)',
        frequency: 'Uncommon in children (up to 25 in 100 women)',
        severity: 'mild',
        citations: ['cit-mmr-1']
      },
      {
        id: 'mmr-risk-3',
        description: 'Temporary low platelet count (thrombocytopenia)',
        frequency: 'Rare (1 in 30,000)',
        severity: 'moderate',
        citations: ['cit-mmr-1']
      },
      {
        id: 'mmr-risk-4',
        description: 'Febrile seizures',
        frequency: 'Rare (1 in 3,000-4,000)',
        severity: 'moderate',
        citations: ['cit-mmr-2']
      },
      {
        id: 'mmr-risk-5',
        description: 'Severe allergic reaction',
        frequency: 'Extremely rare (less than 1 in 1,000,000)',
        severity: 'severe',
        citations: ['cit-mmr-1']
      }
    ],
    alternatives: [],
    whatIfWeWait: 'Measles is extremely contagious (90% of unvaccinated contacts will become infected). Before vaccine, measles killed 400-500 people annually in US, mostly children. Recent outbreaks show unvaccinated children are at high risk in communities with declining vaccination rates.',
    contraindications: [
      {
        id: 'mmr-contra-1',
        condition: 'Severe immunodeficiency',
        severity: 'absolute',
        explanation: 'Live virus vaccine not safe for severely immunocompromised individuals',
        citations: ['cit-mmr-1']
      },
      {
        id: 'mmr-contra-2',
        condition: 'Pregnancy',
        severity: 'absolute',
        explanation: 'Theoretical risk to fetus',
        citations: ['cit-mmr-1']
      },
      {
        id: 'mmr-contra-3',
        condition: 'Severe allergic reaction to previous dose or gelatin/neomycin',
        severity: 'absolute',
        explanation: 'Risk of anaphylaxis',
        citations: ['cit-mmr-1']
      }
    ],
    questionsToAsk: [
      'What are all the vaccine ingredients?',
      'Has the link between MMR and autism been disproven?',
      'Can my child get measles from the vaccine?',
      'What should I watch for after vaccination?',
      'Are there current measles outbreaks in our area?'
    ],
    citations: [citations['cit-mmr-1'], citations['cit-mmr-2']],
    lastReviewed: '2024-02-20',
    nextReviewDue: '2025-02-20',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer',
    vaccineInfo: {
      fdaPackageInsertUrl: 'https://www.fda.gov/media/75191/download',
      ingredients: [
        {
          id: 'mmr-ing-1',
          name: 'Live Attenuated Measles Virus',
          purpose: 'Active ingredient - stimulates immunity to measles',
          amount: 'Not less than 1,000 TCID50 per dose',
          safetyProfile: 'Weakened live virus grown in chicken embryo cell culture. Cannot cause measles disease but stimulates immunity. Extremely rare cases of vaccine-strain measles in severely immunocompromised individuals.'
        },
        {
          id: 'mmr-ing-2',
          name: 'Live Attenuated Mumps Virus',
          purpose: 'Active ingredient - stimulates immunity to mumps',
          amount: 'Not less than 12,500 TCID50 per dose',
          safetyProfile: 'Weakened live virus. Cannot cause mumps but triggers immune response.'
        },
        {
          id: 'mmr-ing-3',
          name: 'Live Attenuated Rubella Virus',
          purpose: 'Active ingredient - stimulates immunity to rubella',
          amount: 'Not less than 1,000 TCID50 per dose',
          safetyProfile: 'Weakened live virus grown in human diploid lung fibroblasts (WI-38 cell line, from 1960s fetal tissue sample). Cannot cause rubella disease.'
        },
        {
          id: 'mmr-ing-4',
          name: 'Sorbitol and Hydrolyzed Gelatin',
          purpose: 'Stabilizers',
          amount: '14.5 mg sorbitol, 14.5 mg hydrolyzed gelatin',
          safetyProfile: 'Gelatin (from porcine source) stabilizes vaccine. Rare allergic reactions possible in individuals with severe gelatin allergy.'
        },
        {
          id: 'mmr-ing-5',
          name: 'Recombinant Human Albumin',
          purpose: 'Stabilizer',
          amount: '≤0.3 mg',
          safetyProfile: 'Human-derived protein produced through recombinant technology. Generally safe.'
        },
        {
          id: 'mmr-ing-6',
          name: 'Neomycin',
          purpose: 'Antibiotic - prevents bacterial contamination',
          amount: '≤25 mcg (trace amounts)',
          safetyProfile: 'Antibiotic residue from manufacturing. Contraindicated in individuals with anaphylactic reaction to neomycin. Contact dermatitis to neomycin is not a contraindication.'
        },
        {
          id: 'mmr-ing-7',
          name: 'Fetal Bovine Serum',
          purpose: 'Growth medium component',
          amount: 'Residual trace amounts',
          safetyProfile: 'Used in cell culture; removed during purification. Trace amounts remain.'
        },
        {
          id: 'mmr-ing-8',
          name: 'WI-38 Human Diploid Lung Fibroblasts',
          purpose: 'Cell culture substrate for rubella virus',
          amount: 'Residual cellular DNA and protein',
          safetyProfile: 'Rubella component grown on cell line established in 1960s from one fetal tissue sample (no new fetal tissue is used). Residual DNA amounts are extremely small and fragmented. No evidence of harm.'
        },
        {
          id: 'mmr-ing-9',
          name: 'Sodium Phosphate, Sodium Chloride, Potassium Phosphate, Potassium Chloride',
          purpose: 'Buffers and salts',
          amount: 'Standard amounts for pH and osmolarity',
          safetyProfile: 'Standard pharmaceutical ingredients. No safety concerns.'
        }
      ],
      vaersData: {
        reportYear: '2019-2023 (5-year aggregate)',
        totalReports: 15827,
        seriousReports: 2943,
        deaths: 108,
        permanentDisability: 287,
        hospitalizations: 1856,
        emergencyRoomVisits: 1432,
        note: 'Reports for MMR vaccine given to children and adults. Reports do NOT prove causation. Multiple large-scale studies have found NO link between MMR and autism. The fraudulent 1998 Wakefield study claiming a link was retracted, and the author lost his medical license. VAERS data includes coincidental events.',
        sourceUrl: 'https://wonder.cdc.gov/vaers.html'
      },
      vicpInfo: {
        vaccineName: 'MMR Vaccine',
        totalCasesCompensated: 2847,
        totalAmountAwarded: '$687 million',
        timeframe: '1988-2023',
        mostCommonInjuries: [
          'Encephalopathy/Encephalitis',
          'Seizure disorder',
          'Thrombocytopenic purpura (ITP)',
          'Anaphylaxis',
          'Shoulder injury related to vaccine administration (SIRVA)',
          'Chronic arthritis',
          'Transverse myelitis',
          'Guillain-Barré Syndrome'
        ],
        sourceUrl: 'https://www.hrsa.gov/vaccine-compensation/data/index.html'
      },
      internationalComparison: [
        {
          country: 'United States',
          vaccinesAtBirth: [],
          vaccinesFirstYear: [],
          totalDosesFirstYear: 0,
          notes: 'First MMR at 12-15 months, second at 4-6 years.'
        },
        {
          country: 'United Kingdom',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['MMR at 12 months (1 dose in first year)'],
          totalDosesFirstYear: 1,
          notes: 'First dose at 12 months, second at 3 years 4 months.'
        },
        {
          country: 'Japan',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['Measles-Rubella (MR) at 12 months - separate from mumps'],
          totalDosesFirstYear: 1,
          notes: 'Japan uses separate measles-rubella vaccine and optional mumps vaccine due to past MMR safety concerns.'
        }
      ]
    }
  },
  {
    id: 'proc-rotavirus',
    name: 'Rotavirus Vaccine (Oral)',
    shortName: 'Rotavirus',
    category: 'vaccination',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'Oral vaccine protecting against rotavirus, the leading cause of severe diarrhea in infants and young children worldwide. Two brands: RotaTeq (3 doses) and Rotarix (2 doses), given at 2, 4, and 6 months (RotaTeq) or 2 and 4 months (Rotarix).',
    indication: 'Before vaccine, rotavirus caused approximately 400,000 doctor visits, 55,000-70,000 hospitalizations, and 20-60 deaths annually in US children under 5. Causes severe dehydration.',
    benefits: [
      {
        id: 'rota-ben-1',
        description: 'Prevents approximately 85-98% of severe rotavirus disease',
        citations: ['cit-rotavirus-1']
      },
      {
        id: 'rota-ben-2',
        description: 'Reduces rotavirus hospitalizations by about 85-94%',
        citations: ['cit-rotavirus-1']
      },
      {
        id: 'rota-ben-3',
        description: 'Reduces emergency department visits for rotavirus by 86-94%',
        citations: ['cit-rotavirus-2']
      }
    ],
    risks: [
      {
        id: 'rota-risk-1',
        description: 'Mild temporary diarrhea or vomiting',
        frequency: 'Uncommon (less than 5 in 100)',
        severity: 'mild',
        citations: ['cit-rotavirus-1']
      },
      {
        id: 'rota-risk-2',
        description: 'Irritability',
        frequency: 'Occasional',
        severity: 'mild',
        citations: ['cit-rotavirus-1']
      },
      {
        id: 'rota-risk-3',
        description: 'Intussusception (bowel blockage) - increased risk in first week after dose',
        frequency: 'Rare (approximately 1-5 in 100,000 infants)',
        severity: 'severe',
        citations: ['cit-rotavirus-1', 'cit-rotavirus-2']
      }
    ],
    alternatives: [],
    whatIfWeWait: 'Rotavirus vaccine has strict age limits due to intussusception risk. First dose must be given before 15 weeks of age, series completed by 8 months. Waiting too long means child cannot receive vaccine and will be vulnerable to severe rotavirus disease.',
    contraindications: [
      {
        id: 'rota-contra-1',
        condition: 'Severe combined immunodeficiency (SCID)',
        severity: 'absolute',
        explanation: 'Live virus vaccine not safe for SCID',
        citations: ['cit-rotavirus-1']
      },
      {
        id: 'rota-contra-2',
        condition: 'History of intussusception',
        severity: 'absolute',
        explanation: 'Increased risk of recurrence',
        citations: ['cit-rotavirus-1']
      },
      {
        id: 'rota-contra-3',
        condition: 'Severe allergic reaction to previous dose',
        severity: 'absolute',
        explanation: 'Risk of anaphylaxis',
        citations: ['cit-rotavirus-1']
      }
    ],
    questionsToAsk: [
      'Which brand do you use (RotaTeq or Rotarix)?',
      'What are the ingredients?',
      'What are signs of intussusception I should watch for?',
      'What if my baby spits up the dose?',
      'Can siblings be around my baby after vaccination?'
    ],
    citations: [citations['cit-rotavirus-1'], citations['cit-rotavirus-2']],
    lastReviewed: '2024-02-20',
    nextReviewDue: '2025-02-20',
    reviewedBy: 'Dr. Michael Torres, Clinical Reviewer',
    vaccineInfo: {
      fdaPackageInsertUrl: 'https://www.fda.gov/vaccines-blood-biologics/vaccines/rotavirus',
      ingredients: [
        {
          id: 'rota-ing-1',
          name: 'Live Attenuated Rotavirus (5 strains in RotaTeq or 1 strain in Rotarix)',
          purpose: 'Active ingredient - stimulates immunity to rotavirus',
          amount: 'RotaTeq: minimum 2.0-2.8 x 10^6 infectious units per strain. Rotarix: minimum 10^6 median cell culture infective dose',
          safetyProfile: 'Weakened live virus given orally. RotaTeq is bovine-human reassortant (cow-human hybrid). Rotarix is human attenuated strain. Virus is shed in stool for days after vaccination; good hand hygiene needed.'
        },
        {
          id: 'rota-ing-2',
          name: 'Sucrose',
          purpose: 'Stabilizer',
          amount: '1,080 mg (RotaTeq) or 9,000 mg (Rotarix)',
          safetyProfile: 'Table sugar. Safe.'
        },
        {
          id: 'rota-ing-3',
          name: 'Sodium Citrate, Sodium Phosphate',
          purpose: 'Buffer',
          amount: 'Standard amounts',
          safetyProfile: 'Common pharmaceutical ingredients. Safe.'
        },
        {
          id: 'rota-ing-4',
          name: 'Sodium Hydroxide',
          purpose: 'pH adjuster',
          amount: 'Small amount for pH control',
          safetyProfile: 'Standard pharmaceutical ingredient.'
        },
        {
          id: 'rota-ing-5',
          name: 'Polysorbate 80 (RotaTeq)',
          purpose: 'Stabilizer',
          amount: '<23 mcg',
          safetyProfile: 'Common food and pharmaceutical additive. Generally recognized as safe.'
        },
        {
          id: 'rota-ing-6',
          name: 'Cell Culture Media Components (amino acids, dextran, sorbitol)',
          purpose: 'Residual from manufacturing',
          amount: 'Trace amounts',
          safetyProfile: 'Manufacturing residues in very small amounts.'
        },
        {
          id: 'rota-ing-7',
          name: 'Fetal Bovine Serum (RotaTeq)',
          purpose: 'Growth medium',
          amount: 'Less than 2.5 mcg (trace)',
          safetyProfile: 'Trace amounts from cell culture process.'
        },
        {
          id: 'rota-ing-8',
          name: 'Porcine Circovirus (PCV) - Contamination (Rotarix)',
          purpose: 'Unintended contamination',
          amount: 'DNA fragments detected',
          safetyProfile: 'In 2010, PCV viral DNA (not live virus) was discovered in Rotarix. FDA reviewed and determined no safety risk to humans - PCV only infects pigs. Vaccine was not withdrawn. RotaTeq does not contain PCV.'
        }
      ],
      vaersData: {
        reportYear: '2019-2023 (5-year aggregate)',
        totalReports: 12384,
        seriousReports: 2156,
        deaths: 87,
        permanentDisability: 143,
        hospitalizations: 1523,
        emergencyRoomVisits: 987,
        note: 'Reports for rotavirus vaccines. The most serious concern is intussusception, a type of bowel blockage that occurs in approximately 1-5 per 100,000 infants within the first week after vaccination. Symptoms include severe stomach pain, vomiting, blood in stool, and lethargy. Seek immediate care if these occur. Reports do NOT prove causation.',
        sourceUrl: 'https://wonder.cdc.gov/vaers.html'
      },
      vicpInfo: {
        vaccineName: 'Rotavirus Vaccine',
        totalCasesCompensated: 287,
        totalAmountAwarded: '$98.4 million',
        timeframe: '2006-2023',
        mostCommonInjuries: [
          'Intussusception',
          'Bowel perforation',
          'Death following intussusception',
          'Anaphylaxis',
          'Chronic gastrointestinal complications'
        ],
        sourceUrl: 'https://www.hrsa.gov/vaccine-compensation/data/index.html'
      },
      internationalComparison: [
        {
          country: 'United States',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['RotaTeq at 2, 4, 6 months (3 doses) OR Rotarix at 2, 4 months (2 doses)'],
          totalDosesFirstYear: 3,
          notes: 'Universal recommendation since 2006.'
        },
        {
          country: 'United Kingdom',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['Rotarix at 8 and 12 weeks (2 doses)'],
          totalDosesFirstYear: 2,
          notes: 'Added to UK schedule in 2013.'
        },
        {
          country: 'Sweden',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['Rotavirus at 6, 12, 20 weeks (3 doses)'],
          totalDosesFirstYear: 3,
          notes: 'Added to Swedish schedule in 2019.'
        },
        {
          country: 'Denmark',
          vaccinesAtBirth: [],
          vaccinesFirstYear: [],
          totalDosesFirstYear: 0,
          notes: 'Denmark does not include rotavirus in routine schedule due to low disease burden and cost considerations.'
        }
      ]
    }
  },
  {
    id: 'proc-pneumococcal',
    name: 'Pneumococcal Conjugate Vaccine (PCV)',
    shortName: 'Pneumococcal',
    category: 'vaccination',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'Vaccine protecting against Streptococcus pneumoniae bacteria, which cause pneumonia, meningitis, bloodstream infections, and ear infections. PCV13 or PCV15 given at 2, 4, 6, and 12-15 months.',
    indication: 'Pneumococcal disease can cause severe illness in young children. Before vaccine, it caused 700 cases of meningitis, 13,000 bloodstream infections, and about 200 deaths in children under 5 annually in the US.',
    benefits: [
      {
        id: 'pneumo-ben-1',
        description: 'Reduces invasive pneumococcal disease by approximately 80-90%',
        citations: ['cit-pneumo-1']
      },
      {
        id: 'pneumo-ben-2',
        description: 'Decreases pneumococcal meningitis cases by 88-93%',
        citations: ['cit-pneumo-2']
      },
      {
        id: 'pneumo-ben-3',
        description: 'Reduces ear infections (otitis media) by about 7-20%',
        citations: ['cit-pneumo-2']
      },
      {
        id: 'pneumo-ben-4',
        description: 'Community immunity protects unvaccinated individuals',
        citations: ['cit-pneumo-1']
      }
    ],
    risks: [
      {
        id: 'pneumo-risk-1',
        description: 'Redness, swelling, pain at injection site',
        frequency: 'Common (20-30 in 100)',
        severity: 'mild',
        citations: ['cit-pneumo-1']
      },
      {
        id: 'pneumo-risk-2',
        description: 'Fever, irritability, decreased appetite, drowsiness',
        frequency: 'Common (10-30 in 100)',
        severity: 'mild',
        citations: ['cit-pneumo-1']
      },
      {
        id: 'pneumo-risk-3',
        description: 'High fever over 102.2°F',
        frequency: 'Uncommon (5-10 in 100)',
        severity: 'mild',
        citations: ['cit-pneumo-1']
      },
      {
        id: 'pneumo-risk-4',
        description: 'Severe allergic reaction',
        frequency: 'Extremely rare (less than 1 in 1,000,000)',
        severity: 'severe',
        citations: ['cit-pneumo-1']
      }
    ],
    alternatives: [],
    whatIfWeWait: 'Pneumococcal disease is most dangerous in children under 2 years. Invasive disease can rapidly progress to meningitis or sepsis. Delaying vaccination leaves infants vulnerable during high-risk period. Some serotypes can cause death within 24-48 hours of symptom onset.',
    contraindications: [
      {
        id: 'pneumo-contra-1',
        condition: 'Severe allergic reaction to previous dose or any component',
        severity: 'absolute',
        explanation: 'Risk of anaphylaxis',
        citations: ['cit-pneumo-1']
      }
    ],
    questionsToAsk: [
      'Which version do you use (PCV13, PCV15, or PCV20)?',
      'What are all the ingredients?',
      'Can it be given with other vaccines?',
      'Will my child need a booster?',
      'What should I do if fever develops?'
    ],
    citations: [citations['cit-pneumo-1'], citations['cit-pneumo-2']],
    lastReviewed: '2024-02-20',
    nextReviewDue: '2025-02-20',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer',
    vaccineInfo: {
      fdaPackageInsertUrl: 'https://www.fda.gov/vaccines-blood-biologics/vaccines/pneumococcal-vaccine',
      ingredients: [
        {
          id: 'pneumo-ing-1',
          name: 'Pneumococcal Polysaccharides (13, 15, or 20 serotypes)',
          purpose: 'Active ingredients - stimulate immunity to specific pneumococcal strains',
          amount: '2.2 mcg of each polysaccharide per dose (PCV13)',
          safetyProfile: 'Purified polysaccharide capsules from pneumococcal bacteria, conjugated to protein carrier. Cannot cause disease.'
        },
        {
          id: 'pneumo-ing-2',
          name: 'CRM197 Protein (Diphtheria Toxin Mutant)',
          purpose: 'Carrier protein - helps immune system recognize polysaccharides',
          amount: 'Approximately 34 mcg',
          safetyProfile: 'Non-toxic mutant form of diphtheria toxin. Cannot cause diphtheria. Used as carrier protein to enhance immune response in young children.'
        },
        {
          id: 'pneumo-ing-3',
          name: 'Aluminum Phosphate',
          purpose: 'Adjuvant - enhances immune response',
          amount: '0.125 mg aluminum',
          safetyProfile: 'Common vaccine adjuvant. Amount is within FDA safety limits for vaccines.'
        },
        {
          id: 'pneumo-ing-4',
          name: 'Polysorbate 80',
          purpose: 'Stabilizer',
          amount: '100 mcg',
          safetyProfile: 'Common pharmaceutical and food additive. Generally recognized as safe.'
        },
        {
          id: 'pneumo-ing-5',
          name: 'Succinate Buffer',
          purpose: 'Buffer - maintains pH',
          amount: 'Standard amount',
          safetyProfile: 'Standard pharmaceutical ingredient. No safety concerns.'
        },
        {
          id: 'pneumo-ing-6',
          name: 'Sodium Chloride',
          purpose: 'Isotonic solution',
          amount: '4.5 mg',
          safetyProfile: 'Saline. No safety concerns.'
        },
        {
          id: 'pneumo-ing-7',
          name: 'Casamino Acids and Yeast Extract (residual)',
          purpose: 'Growth medium residue',
          amount: 'Trace amounts',
          safetyProfile: 'Residual from bacterial culture process. Very small amounts.'
        },
        {
          id: 'pneumo-ing-8',
          name: 'Ammonium Sulfate (residual)',
          purpose: 'Used in purification',
          amount: 'Trace amounts',
          safetyProfile: 'Manufacturing residue. Trace amounts are safe.'
        }
      ],
      vaersData: {
        reportYear: '2019-2023 (5-year aggregate)',
        totalReports: 16942,
        seriousReports: 3287,
        deaths: 142,
        permanentDisability: 334,
        hospitalizations: 2156,
        emergencyRoomVisits: 1678,
        note: 'Reports for pneumococcal conjugate vaccines (PCV13, PCV15, PCV20). Most reports involve fever, injection site reactions, or fussiness that resolve without lasting effects. Reports do NOT establish causation. Events may be coincidental.',
        sourceUrl: 'https://wonder.cdc.gov/vaers.html'
      },
      vicpInfo: {
        vaccineName: 'Pneumococcal Conjugate Vaccine',
        totalCasesCompensated: 1284,
        totalAmountAwarded: '$312 million',
        timeframe: '2000-2023',
        mostCommonInjuries: [
          'Shoulder injury related to vaccine administration (SIRVA)',
          'Anaphylaxis',
          'Guillain-Barré Syndrome',
          'Brachial neuritis',
          'Seizure disorder',
          'Encephalopathy',
          'Chronic inflammatory demyelinating polyneuropathy (CIDP)'
        ],
        sourceUrl: 'https://www.hrsa.gov/vaccine-compensation/data/index.html'
      },
      internationalComparison: [
        {
          country: 'United States',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['PCV at 2, 4, 6 months (3 doses); 4th dose at 12-15 months'],
          totalDosesFirstYear: 3,
          notes: 'Uses PCV13, PCV15, or PCV20.'
        },
        {
          country: 'United Kingdom',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['PCV at 12 weeks, 1 year (only 1 dose in first year at 12 weeks)'],
          totalDosesFirstYear: 1,
          notes: 'UK uses reduced schedule: dose at 12 weeks and booster at 1 year.'
        },
        {
          country: 'Australia',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['PCV at 2, 4, 6 months (3 doses)'],
          totalDosesFirstYear: 3,
          notes: 'Similar to US schedule.'
        }
      ]
    }
  }
]
