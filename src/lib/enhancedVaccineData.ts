import { Procedure } from './types'
import { citations } from './citations'
import { vaersRealData } from './vaersRealData'

export const enhancedVaccineData: Procedure[] = [
  {
    id: 'proc-dtap-enhanced',
    name: 'DTaP Vaccine (Diphtheria, Tetanus, Pertussis)',
    shortName: 'DTaP',
    category: 'vaccination',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'Combination vaccine protecting against diphtheria, tetanus, and pertussis (whooping cough). Given as a 5-dose series at 2, 4, 6, and 15-18 months, and 4-6 years.',
    indication: 'Diphtheria causes throat swelling that can block airways. Tetanus (lockjaw) causes painful muscle spasms and death in 10-20% of cases. Pertussis causes severe coughing fits that can lead to pneumonia, seizures, brain damage, and death, especially in infants under 1 year.',
    benefits: [
      {
        id: 'dtap-ben-1',
        description: '95-99% effective against diphtheria after complete series',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-ben-2',
        description: 'Nearly 100% effective against tetanus after complete series',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-ben-3',
        description: '80-85% effective against pertussis after 5 doses; effectiveness wanes over time',
        citations: ['cit-dtap-2']
      },
      {
        id: 'dtap-ben-4',
        description: 'Reduces severity of pertussis if breakthrough infection occurs',
        citations: ['cit-dtap-2']
      }
    ],
    risks: [
      {
        id: 'dtap-risk-1',
        description: 'Pain, redness, or swelling at injection site',
        frequency: 'Very common (50-80 in 100)',
        severity: 'mild',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-risk-2',
        description: 'Fever over 100.4°F (38°C)',
        frequency: 'Common (25-30 in 100)',
        severity: 'mild',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-risk-3',
        description: 'Fussiness, tiredness, loss of appetite',
        frequency: 'Common (30-50 in 100)',
        severity: 'mild',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-risk-4',
        description: 'Swelling of entire arm or leg (more common with 4th and 5th doses)',
        frequency: 'Uncommon (2-10 in 100)',
        severity: 'mild',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-risk-5',
        description: 'Fever over 105°F (40.5°C)',
        frequency: 'Rare (1 in 10,000)',
        severity: 'moderate',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-risk-6',
        description: 'Non-stop crying for 3+ hours',
        frequency: 'Rare (1 in 1,000)',
        severity: 'moderate',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-risk-7',
        description: 'Seizure (usually febrile)',
        frequency: 'Rare (1 in 14,000)',
        severity: 'moderate',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-risk-8',
        description: 'Severe allergic reaction',
        frequency: 'Extremely rare (less than 1 in 1,000,000)',
        severity: 'severe',
        citations: ['cit-dtap-1']
      }
    ],
    alternatives: [],
    whatIfWeWait: 'Pertussis is most dangerous for infants under 6 months (highest risk of death). Tetanus has no immunity passed from mother. Diphtheria and pertussis circulate in communities; unvaccinated children are at risk. Pertussis outbreaks occur regularly in undervaccinated communities.',
    contraindications: [
      {
        id: 'dtap-contra-1',
        condition: 'Severe allergic reaction to previous DTaP dose',
        severity: 'absolute',
        explanation: 'Risk of anaphylaxis',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-contra-2',
        condition: 'Encephalopathy within 7 days of previous pertussis-containing vaccine',
        severity: 'absolute',
        explanation: 'Pertussis component contraindicated; DT (without pertussis) can be used instead',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-contra-3',
        condition: 'Progressive neurological disorder',
        severity: 'relative',
        explanation: 'Defer until condition stabilized',
        citations: ['cit-dtap-1']
      }
    ],
    questionsToAsk: [
      'What are all the ingredients in the DTaP vaccine?',
      'How do I manage fever and pain after the vaccine?',
      'What is the difference between DTaP and older DTP vaccine?',
      'If my child has a severe reaction, can they still receive future doses?',
      'Are there current pertussis cases in our community?'
    ],
    citations: [citations['cit-dtap-1'], citations['cit-dtap-2']],
    lastReviewed: '2024-02-22',
    nextReviewDue: '2025-02-22',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer',
    vaccineInfo: {
      fdaPackageInsertUrl: 'https://www.fda.gov/vaccines-blood-biologics/vaccines/diphtheria-tetanus-and-pertussis-vaccines',
      ingredients: [
        {
          id: 'dtap-ing-1',
          name: 'Diphtheria Toxoid',
          purpose: 'Active ingredient - stimulates immunity to diphtheria',
          amount: 'At least 15 Lf per dose',
          safetyProfile: 'Inactivated diphtheria toxin. Cannot cause diphtheria disease. Highly purified protein.'
        },
        {
          id: 'dtap-ing-2',
          name: 'Tetanus Toxoid',
          purpose: 'Active ingredient - stimulates immunity to tetanus',
          amount: 'At least 5 Lf per dose',
          safetyProfile: 'Inactivated tetanus toxin. Cannot cause tetanus disease. Highly purified protein.'
        },
        {
          id: 'dtap-ing-3',
          name: 'Acellular Pertussis Antigens (3-5 components)',
          purpose: 'Active ingredient - stimulates immunity to pertussis',
          amount: 'Varies by brand (pertussis toxoid, filamentous hemagglutinin, pertactin, fimbrial proteins)',
          safetyProfile: 'Purified pertussis bacterial proteins. Acellular (not whole cell) vaccine has fewer side effects than old DTP vaccine. Cannot cause pertussis disease.'
        },
        {
          id: 'dtap-ing-4',
          name: 'Aluminum Salts (Aluminum Hydroxide, Aluminum Phosphate)',
          purpose: 'Adjuvant - enhances immune response',
          amount: '170-625 mcg aluminum per dose (varies by brand)',
          safetyProfile: 'Aluminum has been used in vaccines since 1930s. Amount is less than aluminum in infant formula or breast milk consumed in same period. Body eliminates aluminum. FDA-approved maximum is 850 mcg per dose. No evidence of harm at vaccine levels; safety studies extensive.'
        },
        {
          id: 'dtap-ing-5',
          name: 'Formaldehyde (residual)',
          purpose: 'Used to inactivate toxins',
          amount: 'Less than 100 mcg per dose (trace amounts)',
          safetyProfile: 'Used to detoxify diphtheria and tetanus toxins, then removed. Residual amounts far less than formaldehyde naturally produced in human body (50-70 times more in a single apple).'
        },
        {
          id: 'dtap-ing-6',
          name: 'Polysorbate 80',
          purpose: 'Stabilizer',
          amount: 'Small amount',
          safetyProfile: 'Common emulsifier used in foods, medications, and vaccines. Generally recognized as safe by FDA.'
        },
        {
          id: 'dtap-ing-7',
          name: 'Glutaraldehyde (residual, some brands)',
          purpose: 'Used in inactivation process',
          amount: 'Trace amounts',
          safetyProfile: 'Chemical used to inactivate toxins, then removed. Only trace residues remain.'
        },
        {
          id: 'dtap-ing-8',
          name: 'Sodium Chloride, Sodium Phosphate',
          purpose: 'Buffering agents',
          amount: 'Standard amounts',
          safetyProfile: 'Salt and phosphate buffers. Standard pharmaceutical ingredients. No safety concerns.'
        },
        {
          id: 'dtap-ing-9',
          name: '2-Phenoxyethanol',
          purpose: 'Preservative (some brands)',
          amount: '0.5% maximum',
          safetyProfile: 'Antibacterial preservative used in some cosmetics and vaccines. Considered safe at vaccine concentrations.'
        }
      ],
      vaersData: vaersRealData['dtap'],
      vicpInfo: {
        vaccineName: 'DTaP, DTP, DT, Td, or Tdap',
        totalCasesCompensated: 4892,
        totalAmountAwarded: '$2.1 billion',
        timeframe: '1988-2023',
        mostCommonInjuries: [
          'Shoulder injury related to vaccine administration (SIRVA)',
          'Brachial neuritis',
          'Anaphylaxis',
          'Encephalopathy/Encephalitis',
          'Chronic inflammatory demyelinating polyneuropathy (CIDP)',
          'Guillain-Barré Syndrome (GBS)',
          'Seizure disorder',
          'Vasovagal syncope with secondary injury',
          'Thrombocytopenia',
          'Death (in cases where causation could not be ruled out)'
        ],
        sourceUrl: 'https://www.hrsa.gov/vaccine-compensation/data/index.html'
      },
      internationalComparison: [
        {
          country: 'United States',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['DTaP at 2, 4, 6 months'],
          totalDosesFirstYear: 3,
          notes: '5-dose series: 2, 4, 6, 15-18 months, 4-6 years. Boosters (Tdap, Td) continue through adolescence and adulthood.'
        },
        {
          country: 'United Kingdom',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['DTaP at 2, 3, 4 months (3-in-1 vaccine)'],
          totalDosesFirstYear: 3,
          notes: 'Similar schedule with booster at 3 years 4 months. Part of 6-in-1 vaccine with Polio, Hib, and Hep B.'
        },
        {
          country: 'Germany',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['DTaP at 2, 3, 4 months'],
          totalDosesFirstYear: 3,
          notes: 'Typically given as part of combination vaccine (6-in-1) including polio, Hib, and Hep B. Booster at 11-14 months.'
        },
        {
          country: 'Japan',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['DPT at 3, 4, 5 months'],
          totalDosesFirstYear: 3,
          notes: 'Japan suspended pertussis vaccination 1975-1981 due to concerns; pertussis cases soared from 393 (1974) to 13,000 (1979) with 41 deaths. Vaccination resumed with acellular pertussis vaccine.'
        },
        {
          country: 'Sweden',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['DTaP at 3, 5, 12 months'],
          totalDosesFirstYear: 3,
          notes: 'Sweden stopped pertussis vaccination 1979-1996 due to concerns about old whole-cell vaccine. Pertussis cases increased dramatically. Resumed with safer acellular vaccine.'
        }
      ],
      alternativeSchedules: [
        {
          name: 'Delayed Schedule (Dr. Sears)',
          description: 'Delays DTaP to 3, 4, 5, 6, 7, and 18 months. Spreads out vaccines to reduce number of vaccines given simultaneously. May reduce immediate adverse event clustering but leaves infant vulnerable to pertussis during critical first months.',
          evidenceLevel: 'expert-consensus',
          citation: 'Sears, R. (2007). The Vaccine Book. Note: Not endorsed by CDC, AAP, or mainstream medical organizations. No clinical trials demonstrate safety or efficacy advantages.'
        },
        {
          name: 'Selective DTaP Only (Skip Combinations)',
          description: 'Some parents request standalone DTaP instead of combination vaccines (e.g., Pediarix includes DTaP+Hep B+Polio). Requires more injections. No safety advantage; combination vaccines are tested together and reduce total number of shots.',
          evidenceLevel: 'expert-consensus',
          citation: 'No evidence-based rationale. CDC and AAP recommend combination vaccines to reduce injection frequency.'
        },
        {
          name: 'Decline Pertussis Component (DT Only)',
          description: 'DT vaccine (without pertussis) available for children with contraindications to pertussis component. Leaves child vulnerable to pertussis, which is currently circulating and most dangerous to infants. Not recommended unless medical contraindication exists.',
          evidenceLevel: 'expert-consensus',
          citation: 'CDC recommends DT only when pertussis component is medically contraindicated.'
        }
      ]
    }
  },
  {
    id: 'proc-pneumococcal-enhanced',
    name: 'Pneumococcal Conjugate Vaccine (PCV15/PCV20)',
    shortName: 'PCV',
    category: 'vaccination',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'Vaccine protecting against Streptococcus pneumoniae bacteria, which cause pneumonia, meningitis, bloodstream infections, and ear infections. Given as a 4-dose series at 2, 4, 6, and 12-15 months.',
    indication: 'Pneumococcal bacteria cause serious invasive diseases (meningitis, bacteremia, pneumonia) and are a leading cause of bacterial meningitis in young children. Before vaccine, pneumococcal disease caused 17,000 cases of invasive disease and 200 deaths annually in children under 5 in the US.',
    benefits: [
      {
        id: 'pcv-ben-1',
        description: '75-80% effective against invasive pneumococcal disease caused by vaccine serotypes',
        citations: ['cit-pcv-1']
      },
      {
        id: 'pcv-ben-2',
        description: 'Reduces severe pneumonia, meningitis, and bloodstream infections',
        citations: ['cit-pcv-1']
      },
      {
        id: 'pcv-ben-3',
        description: 'Reduces ear infections (otitis media) by approximately 6-7%',
        citations: ['cit-pcv-2']
      },
      {
        id: 'pcv-ben-4',
        description: 'Provides "herd immunity" protection for unvaccinated individuals and elderly',
        citations: ['cit-pcv-1']
      }
    ],
    risks: [
      {
        id: 'pcv-risk-1',
        description: 'Redness, swelling, or pain at injection site',
        frequency: 'Common (15-30 in 100)',
        severity: 'mild',
        citations: ['cit-pcv-1']
      },
      {
        id: 'pcv-risk-2',
        description: 'Fever (over 100.4°F)',
        frequency: 'Common (15-25 in 100)',
        severity: 'mild',
        citations: ['cit-pcv-1']
      },
      {
        id: 'pcv-risk-3',
        description: 'Fussiness, drowsiness, decreased appetite',
        frequency: 'Common (30-50 in 100)',
        severity: 'mild',
        citations: ['cit-pcv-1']
      },
      {
        id: 'pcv-risk-4',
        description: 'Severe allergic reaction',
        frequency: 'Extremely rare (less than 1 in 1,000,000)',
        severity: 'severe',
        citations: ['cit-pcv-1']
      }
    ],
    alternatives: [],
    whatIfWeWait: 'Pneumococcal disease is most dangerous for infants and young children under 2. Risk of invasive disease decreases with age. Unvaccinated children remain at risk for serious pneumococcal infections. Ear infections more common in unvaccinated children.',
    contraindications: [
      {
        id: 'pcv-contra-1',
        condition: 'Severe allergic reaction to previous PCV dose or diphtheria toxoid',
        severity: 'absolute',
        explanation: 'Risk of anaphylaxis',
        citations: ['cit-pcv-1']
      },
      {
        id: 'pcv-contra-2',
        condition: 'Moderate to severe acute illness',
        severity: 'relative',
        explanation: 'Should wait until recovered',
        citations: ['cit-pcv-1']
      }
    ],
    questionsToAsk: [
      'What are all the ingredients in PCV?',
      'What is the difference between PCV13, PCV15, and PCV20?',
      'Does this vaccine prevent ear infections?',
      'Will my child still need PPSV23 vaccine later?',
      'What symptoms should I watch for after vaccination?'
    ],
    citations: [citations['cit-pcv-1'], citations['cit-pcv-2']],
    lastReviewed: '2024-02-22',
    nextReviewDue: '2025-02-22',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer',
    vaccineInfo: {
      fdaPackageInsertUrl: 'https://www.fda.gov/vaccines-blood-biologics/vaccines/pneumococcal-vaccines',
      ingredients: [
        {
          id: 'pcv-ing-1',
          name: 'Pneumococcal Polysaccharide Antigens (15 or 20 serotypes)',
          purpose: 'Active ingredients - stimulate immunity to pneumococcal bacteria',
          amount: '2.2 mcg per serotype (conjugate vaccine)',
          safetyProfile: 'Purified capsular polysaccharides from pneumococcal bacteria, conjugated to protein carrier (CRM197, a non-toxic variant of diphtheria toxin). Cannot cause pneumococcal disease. Newer vaccines cover more serotypes (PCV20 vs PCV13).'
        },
        {
          id: 'pcv-ing-2',
          name: 'CRM197 Protein (Diphtheria Carrier Protein)',
          purpose: 'Carrier protein - helps immune system recognize polysaccharides',
          amount: 'Approximately 34-51 mcg per dose',
          safetyProfile: 'Non-toxic mutant of diphtheria toxin. Cannot cause diphtheria disease. Used to make vaccine more immunogenic in young children.'
        },
        {
          id: 'pcv-ing-3',
          name: 'Aluminum Phosphate',
          purpose: 'Adjuvant - enhances immune response',
          amount: '125 mcg aluminum per dose',
          safetyProfile: 'Same aluminum salt used in other childhood vaccines. Well-studied safety profile. Amount is within FDA limits and comparable to aluminum consumed from food/water.'
        },
        {
          id: 'pcv-ing-4',
          name: 'Polysorbate 80',
          purpose: 'Stabilizer',
          amount: 'Small amount',
          safetyProfile: 'Common food and pharmaceutical additive. Generally recognized as safe.'
        },
        {
          id: 'pcv-ing-5',
          name: 'Sodium Chloride',
          purpose: 'Isotonic solution',
          amount: 'Standard amount',
          safetyProfile: 'Table salt. No safety concerns.'
        },
        {
          id: 'pcv-ing-6',
          name: 'Succinate Buffer',
          purpose: 'pH buffering',
          amount: 'Standard amount',
          safetyProfile: 'Standard pharmaceutical buffer. No safety concerns.'
        }
      ],
      vaersData: vaersRealData['pcv'],
      vicpInfo: {
        vaccineName: 'Pneumococcal Conjugate Vaccine (PCV)',
        totalCasesCompensated: 412,
        totalAmountAwarded: '$187 million',
        timeframe: '1988-2023',
        mostCommonInjuries: [
          'Shoulder injury related to vaccine administration (SIRVA)',
          'Anaphylaxis',
          'Brachial neuritis',
          'Thrombocytopenia',
          'Seizure disorder',
          'Encephalopathy',
          'Vasovagal syncope with secondary injury',
          'Chronic inflammatory demyelinating polyneuropathy (CIDP)'
        ],
        sourceUrl: 'https://www.hrsa.gov/vaccine-compensation/data/index.html'
      },
      internationalComparison: [
        {
          country: 'United States',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['PCV at 2, 4, 6 months (booster at 12-15 months)'],
          totalDosesFirstYear: 3,
          notes: '4-dose series. US uses PCV15 or PCV20 (covers more serotypes than older PCV13).'
        },
        {
          country: 'United Kingdom',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['PCV at 3, 12 months (reduced schedule)'],
          totalDosesFirstYear: 1,
          notes: 'UK uses 2-dose schedule (3 months and 1 year) instead of US 4-dose schedule. Studies show adequate protection with reduced schedule in low-incidence settings.'
        },
        {
          country: 'Germany',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['PCV at 2, 4, 11 months'],
          totalDosesFirstYear: 2,
          notes: '3-dose schedule (2+1 regimen). Different from US 4-dose approach.'
        },
        {
          country: 'Australia',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['PCV at 2, 4, 6 months'],
          totalDosesFirstYear: 3,
          notes: '3+0 schedule (no 12-month booster). Demonstrates effectiveness of different dosing strategies based on local epidemiology.'
        }
      ]
    }
  },
  {
    id: 'proc-dtap-enhanced-duplicate',
    name: 'DTaP Vaccine (Diphtheria, Tetanus, Pertussis)',
    shortName: 'DTaP',
    category: 'vaccination',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'Combination vaccine protecting against diphtheria, tetanus, and pertussis (whooping cough). Given as a 5-dose series at 2, 4, 6, and 15-18 months, and 4-6 years.',
    indication: 'Diphtheria causes throat swelling that can block airways. Tetanus (lockjaw) causes painful muscle spasms and death in 10-20% of cases. Pertussis causes severe coughing fits that can lead to pneumonia, seizures, brain damage, and death, especially in infants under 1 year.',
    benefits: [
      {
        id: 'dtap-ben-1',
        description: '95-99% effective against diphtheria after complete series',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-ben-2',
        description: 'Nearly 100% effective against tetanus after complete series',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-ben-3',
        description: '80-85% effective against pertussis after 5 doses; effectiveness wanes over time',
        citations: ['cit-dtap-2']
      },
      {
        id: 'dtap-ben-4',
        description: 'Reduces severity of pertussis if breakthrough infection occurs',
        citations: ['cit-dtap-2']
      }
    ],
    risks: [
      {
        id: 'dtap-risk-1',
        description: 'Pain, redness, or swelling at injection site',
        frequency: 'Very common (50-80 in 100)',
        severity: 'mild',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-risk-2',
        description: 'Fever over 100.4°F (38°C)',
        frequency: 'Common (25-30 in 100)',
        severity: 'mild',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-risk-3',
        description: 'Fussiness, tiredness, loss of appetite',
        frequency: 'Common (30-50 in 100)',
        severity: 'mild',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-risk-4',
        description: 'Swelling of entire arm or leg (more common with 4th and 5th doses)',
        frequency: 'Uncommon (2-10 in 100)',
        severity: 'mild',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-risk-5',
        description: 'Fever over 105°F (40.5°C)',
        frequency: 'Rare (1 in 10,000)',
        severity: 'moderate',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-risk-6',
        description: 'Non-stop crying for 3+ hours',
        frequency: 'Rare (1 in 1,000)',
        severity: 'moderate',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-risk-7',
        description: 'Seizure (usually febrile)',
        frequency: 'Rare (1 in 14,000)',
        severity: 'moderate',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-risk-8',
        description: 'Severe allergic reaction',
        frequency: 'Extremely rare (less than 1 in 1,000,000)',
        severity: 'severe',
        citations: ['cit-dtap-1']
      }
    ],
    alternatives: [],
    whatIfWeWait: 'Pertussis is most dangerous for infants under 6 months (highest risk of death). Tetanus has no immunity passed from mother. Diphtheria and pertussis circulate in communities; unvaccinated children are at risk. Pertussis outbreaks occur regularly in undervaccinated communities.',
    contraindications: [
      {
        id: 'dtap-contra-1',
        condition: 'Severe allergic reaction to previous DTaP dose',
        severity: 'absolute',
        explanation: 'Risk of anaphylaxis',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-contra-2',
        condition: 'Encephalopathy within 7 days of previous pertussis-containing vaccine',
        severity: 'absolute',
        explanation: 'Pertussis component contraindicated; DT (without pertussis) can be used instead',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-contra-3',
        condition: 'Progressive neurological disorder',
        severity: 'relative',
        explanation: 'Defer until condition stabilized',
        citations: ['cit-dtap-1']
      }
    ],
    questionsToAsk: [
      'What are all the ingredients in the DTaP vaccine?',
      'How do I manage fever and pain after the vaccine?',
      'What is the difference between DTaP and older DTP vaccine?',
      'If my child has a severe reaction, can they still receive future doses?',
      'Are there current pertussis cases in our community?'
    ],
    citations: [citations['cit-dtap-1'], citations['cit-dtap-2']],
    lastReviewed: '2024-02-22',
    nextReviewDue: '2025-02-22',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer',
    vaccineInfo: {
      fdaPackageInsertUrl: 'https://www.fda.gov/vaccines-blood-biologics/vaccines/diphtheria-tetanus-and-pertussis-vaccines',
      ingredients: [
        {
          id: 'dtap-ing-1',
          name: 'Diphtheria Toxoid',
          purpose: 'Active ingredient - stimulates immunity to diphtheria',
          amount: 'At least 15 Lf per dose',
          safetyProfile: 'Inactivated diphtheria toxin. Cannot cause diphtheria disease. Highly purified protein.'
        },
        {
          id: 'dtap-ing-2',
          name: 'Tetanus Toxoid',
          purpose: 'Active ingredient - stimulates immunity to tetanus',
          amount: 'At least 5 Lf per dose',
          safetyProfile: 'Inactivated tetanus toxin. Cannot cause tetanus disease. Highly purified protein.'
        },
        {
          id: 'dtap-ing-3',
          name: 'Acellular Pertussis Antigens (3-5 components)',
          purpose: 'Active ingredient - stimulates immunity to pertussis',
          amount: 'Varies by brand (pertussis toxoid, filamentous hemagglutinin, pertactin, fimbrial proteins)',
          safetyProfile: 'Purified pertussis bacterial proteins. Acellular (not whole cell) vaccine has fewer side effects than old DTP vaccine. Cannot cause pertussis disease.'
        },
        {
          id: 'dtap-ing-4',
          name: 'Aluminum Salts (Aluminum Hydroxide, Aluminum Phosphate)',
          purpose: 'Adjuvant - enhances immune response',
          amount: '170-625 mcg aluminum per dose (varies by brand)',
          safetyProfile: 'Aluminum has been used in vaccines since 1930s. Amount is less than aluminum in infant formula or breast milk consumed in same period. Body eliminates aluminum. FDA-approved maximum is 850 mcg per dose. No evidence of harm at vaccine levels; safety studies extensive.'
        },
        {
          id: 'dtap-ing-5',
          name: 'Formaldehyde (residual)',
          purpose: 'Used to inactivate toxins',
          amount: 'Less than 100 mcg per dose (trace amounts)',
          safetyProfile: 'Used to detoxify diphtheria and tetanus toxins, then removed. Residual amounts far less than formaldehyde naturally produced in human body (50-70 times more in a single apple).'
        },
        {
          id: 'dtap-ing-6',
          name: 'Polysorbate 80',
          purpose: 'Stabilizer',
          amount: 'Small amount',
          safetyProfile: 'Common emulsifier used in foods, medications, and vaccines. Generally recognized as safe by FDA.'
        },
        {
          id: 'dtap-ing-7',
          name: 'Glutaraldehyde (residual, some brands)',
          purpose: 'Used in inactivation process',
          amount: 'Trace amounts',
          safetyProfile: 'Chemical used to inactivate toxins, then removed. Only trace residues remain.'
        },
        {
          id: 'dtap-ing-8',
          name: 'Sodium Chloride, Sodium Phosphate',
          purpose: 'Buffering agents',
          amount: 'Standard amounts',
          safetyProfile: 'Salt and phosphate buffers. Standard pharmaceutical ingredients. No safety concerns.'
        },
        {
          id: 'dtap-ing-9',
          name: '2-Phenoxyethanol',
          purpose: 'Preservative (some brands)',
          amount: '0.5% maximum',
          safetyProfile: 'Antibacterial preservative used in some cosmetics and vaccines. Considered safe at vaccine concentrations.'
        }
      ],
      vaersData: vaersRealData['dtap'],
      vicpInfo: {
        vaccineName: 'DTaP, DTP, DT, Td, or Tdap',
        totalCasesCompensated: 4892,
        totalAmountAwarded: '$2.1 billion',
        timeframe: '1988-2023',
        mostCommonInjuries: [
          'Shoulder injury related to vaccine administration (SIRVA)',
          'Brachial neuritis',
          'Anaphylaxis',
          'Encephalopathy/Encephalitis',
          'Chronic inflammatory demyelinating polyneuropathy (CIDP)',
          'Guillain-Barré Syndrome (GBS)',
          'Seizure disorder',
          'Vasovagal syncope with secondary injury',
          'Thrombocytopenia',
          'Death (in cases where causation could not be ruled out)'
        ],
        sourceUrl: 'https://www.hrsa.gov/vaccine-compensation/data/index.html'
      },
      internationalComparison: [
        {
          country: 'United States',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['DTaP at 2, 4, 6 months'],
          totalDosesFirstYear: 3,
          notes: '5-dose series: 2, 4, 6, 15-18 months, 4-6 years. Boosters (Tdap, Td) continue through adolescence and adulthood.'
        },
        {
          country: 'United Kingdom',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['DTaP at 2, 3, 4 months (3-in-1 vaccine)'],
          totalDosesFirstYear: 3,
          notes: 'Similar schedule with booster at 3 years 4 months. Part of 6-in-1 vaccine with Polio, Hib, and Hep B.'
        },
        {
          country: 'Germany',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['DTaP at 2, 3, 4 months'],
          totalDosesFirstYear: 3,
          notes: 'Typically given as part of combination vaccine (6-in-1) including polio, Hib, and Hep B. Booster at 11-14 months.'
        },
        {
          country: 'Japan',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['DPT at 3, 4, 5 months'],
          totalDosesFirstYear: 3,
          notes: 'Japan suspended pertussis vaccination 1975-1981 due to concerns; pertussis cases soared from 393 (1974) to 13,000 (1979) with 41 deaths. Vaccination resumed with acellular pertussis vaccine.'
        },
        {
          country: 'Sweden',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['DTaP at 3, 5, 12 months'],
          totalDosesFirstYear: 3,
          notes: 'Sweden stopped pertussis vaccination 1979-1996 due to concerns about old whole-cell vaccine. Pertussis cases increased dramatically. Resumed with safer acellular vaccine.'
        }
      ],
      alternativeSchedules: [
        {
          name: 'Delayed Schedule (Dr. Sears)',
          description: 'Delays DTaP to 3, 4, 5, 6, 7, and 18 months. Spreads out vaccines to reduce number of vaccines given simultaneously. May reduce immediate adverse event clustering but leaves infant vulnerable to pertussis during critical first months.',
          evidenceLevel: 'expert-consensus',
          citation: 'Sears, R. (2007). The Vaccine Book. Note: Not endorsed by CDC, AAP, or mainstream medical organizations. No clinical trials demonstrate safety or efficacy advantages.'
        },
        {
          name: 'Selective DTaP Only (Skip Combinations)',
          description: 'Some parents request standalone DTaP instead of combination vaccines (e.g., Pediarix includes DTaP+Hep B+Polio). Requires more injections. No safety advantage; combination vaccines are tested together and reduce total number of shots.',
          evidenceLevel: 'expert-consensus',
          citation: 'No evidence-based rationale. CDC and AAP recommend combination vaccines to reduce injection frequency.'
        },
        {
          name: 'Decline Pertussis Component (DT Only)',
          description: 'DT vaccine (without pertussis) available for children with contraindications to pertussis component. Leaves child vulnerable to pertussis, which is currently circulating and most dangerous to infants. Not recommended unless medical contraindication exists.',
          evidenceLevel: 'expert-consensus',
          citation: 'CDC recommends DT only when pertussis component is medically contraindicated.'
        }
      ]
    }
  },
  {
    id: 'proc-pneumococcal-enhanced',
    name: 'Pneumococcal Conjugate Vaccine (PCV15/PCV20)',
    shortName: 'PCV',
    category: 'vaccination',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'Vaccine protecting against Streptococcus pneumoniae bacteria, which cause pneumonia, meningitis, bloodstream infections, and ear infections. Given as a 4-dose series at 2, 4, 6, and 12-15 months.',
    indication: 'Pneumococcal bacteria cause serious invasive diseases (meningitis, bacteremia, pneumonia) and are a leading cause of bacterial meningitis in young children. Before vaccine, pneumococcal disease caused 17,000 cases of invasive disease and 200 deaths annually in children under 5 in the US.',
    benefits: [
      {
        id: 'pcv-ben-1',
        description: '75-80% effective against invasive pneumococcal disease caused by vaccine serotypes',
        citations: ['cit-pcv-1']
      },
      {
        id: 'pcv-ben-2',
        description: 'Reduces severe pneumonia, meningitis, and bloodstream infections',
        citations: ['cit-pcv-1']
      },
      {
        id: 'pcv-ben-3',
        description: 'Reduces ear infections (otitis media) by approximately 6-7%',
        citations: ['cit-pcv-2']
      },
      {
        id: 'pcv-ben-4',
        description: 'Provides "herd immunity" protection for unvaccinated individuals and elderly',
        citations: ['cit-pcv-1']
      }
    ],
    risks: [
      {
        id: 'pcv-risk-1',
        description: 'Redness, swelling, or pain at injection site',
        frequency: 'Common (15-30 in 100)',
        severity: 'mild',
        citations: ['cit-pcv-1']
      },
      {
        id: 'pcv-risk-2',
        description: 'Fever (over 100.4°F)',
        frequency: 'Common (15-25 in 100)',
        severity: 'mild',
        citations: ['cit-pcv-1']
      },
      {
        id: 'pcv-risk-3',
        description: 'Fussiness, drowsiness, decreased appetite',
        frequency: 'Common (30-50 in 100)',
        severity: 'mild',
        citations: ['cit-pcv-1']
      },
      {
        id: 'pcv-risk-4',
        description: 'Severe allergic reaction',
        frequency: 'Extremely rare (less than 1 in 1,000,000)',
        severity: 'severe',
        citations: ['cit-pcv-1']
      }
    ],
    alternatives: [],
    whatIfWeWait: 'Pneumococcal disease is most dangerous for infants and young children under 2. Risk of invasive disease decreases with age. Unvaccinated children remain at risk for serious pneumococcal infections. Ear infections more common in unvaccinated children.',
    contraindications: [
      {
        id: 'pcv-contra-1',
        condition: 'Severe allergic reaction to previous PCV dose or diphtheria toxoid',
        severity: 'absolute',
        explanation: 'Risk of anaphylaxis',
        citations: ['cit-pcv-1']
      },
      {
        id: 'pcv-contra-2',
        condition: 'Moderate to severe acute illness',
        severity: 'relative',
        explanation: 'Should wait until recovered',
        citations: ['cit-pcv-1']
      }
    ],
    questionsToAsk: [
      'What are all the ingredients in PCV?',
      'What is the difference between PCV13, PCV15, and PCV20?',
      'Does this vaccine prevent ear infections?',
      'Will my child still need PPSV23 vaccine later?',
      'What symptoms should I watch for after vaccination?'
    ],
    citations: [citations['cit-pcv-1'], citations['cit-pcv-2']],
    lastReviewed: '2024-02-22',
    nextReviewDue: '2025-02-22',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer',
    vaccineInfo: {
      fdaPackageInsertUrl: 'https://www.fda.gov/vaccines-blood-biologics/vaccines/pneumococcal-vaccines',
      ingredients: [
        {
          id: 'pcv-ing-1',
          name: 'Pneumococcal Polysaccharide Antigens (15 or 20 serotypes)',
          purpose: 'Active ingredients - stimulate immunity to pneumococcal bacteria',
          amount: '2.2 mcg per serotype (conjugate vaccine)',
          safetyProfile: 'Purified capsular polysaccharides from pneumococcal bacteria, conjugated to protein carrier (CRM197, a non-toxic variant of diphtheria toxin). Cannot cause pneumococcal disease. Newer vaccines cover more serotypes (PCV20 vs PCV13).'
        },
        {
          id: 'pcv-ing-2',
          name: 'CRM197 Protein (Diphtheria Carrier Protein)',
          purpose: 'Carrier protein - helps immune system recognize polysaccharides',
          amount: 'Approximately 34-51 mcg per dose',
          safetyProfile: 'Non-toxic mutant of diphtheria toxin. Cannot cause diphtheria disease. Used to make vaccine more immunogenic in young children.'
        },
        {
          id: 'pcv-ing-3',
          name: 'Aluminum Phosphate',
          purpose: 'Adjuvant - enhances immune response',
          amount: '125 mcg aluminum per dose',
          safetyProfile: 'Same aluminum salt used in other childhood vaccines. Well-studied safety profile. Amount is within FDA limits and comparable to aluminum consumed from food/water.'
        },
        {
          id: 'pcv-ing-4',
          name: 'Polysorbate 80',
          purpose: 'Stabilizer',
          amount: 'Small amount',
          safetyProfile: 'Common food and pharmaceutical additive. Generally recognized as safe.'
        },
        {
          id: 'pcv-ing-5',
          name: 'Sodium Chloride',
          purpose: 'Isotonic solution',
          amount: 'Standard amount',
          safetyProfile: 'Table salt. No safety concerns.'
        },
        {
          id: 'pcv-ing-6',
          name: 'Succinate Buffer',
          purpose: 'pH buffering',
          amount: 'Standard amount',
          safetyProfile: 'Standard pharmaceutical buffer. No safety concerns.'
        }
      ],
      vaersData: vaersRealData['pcv'],
      vicpInfo: {
        vaccineName: 'Pneumococcal Conjugate Vaccine (PCV)',
        totalCasesCompensated: 412,
        totalAmountAwarded: '$187 million',
        timeframe: '1988-2023',
        mostCommonInjuries: [
          'Shoulder injury related to vaccine administration (SIRVA)',
          'Anaphylaxis',
          'Brachial neuritis',
          'Thrombocytopenia',
          'Seizure disorder',
          'Encephalopathy',
          'Vasovagal syncope with secondary injury',
          'Chronic inflammatory demyelinating polyneuropathy (CIDP)'
        ],
        sourceUrl: 'https://www.hrsa.gov/vaccine-compensation/data/index.html'
      },
      internationalComparison: [
        {
          country: 'United States',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['PCV at 2, 4, 6 months (booster at 12-15 months)'],
          totalDosesFirstYear: 3,
          notes: '4-dose series. US uses PCV15 or PCV20 (covers more serotypes than older PCV13).'
        },
        {
          country: 'United Kingdom',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['PCV at 3, 12 months (reduced schedule)'],
          totalDosesFirstYear: 1,
          notes: 'UK uses 2-dose schedule (3 months and 1 year) instead of US 4-dose schedule. Studies show adequate protection with reduced schedule in low-incidence settings.'
        },
        {
          country: 'Germany',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['PCV at 2, 4, 11 months'],
          totalDosesFirstYear: 2,
          notes: '3-dose schedule (2+1 regimen). Different from US 4-dose approach.'
        },
        {
          country: 'Australia',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['PCV at 2, 4, 6 months'],
          totalDosesFirstYear: 3,
          notes: '3+0 schedule (no 12-month booster). Demonstrates effectiveness of different dosing strategies based on local epidemiology.'
        }
      ]
    }
  },
  {
    id: 'proc-rotavirus-enhanced',
    name: 'Rotavirus Vaccine (RV1/RV5)',
    shortName: 'Rotavirus',
    category: 'vaccination',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'Oral vaccine protecting against rotavirus, the leading cause of severe diarrhea in infants and young children. Given as 2-dose (RV1) or 3-dose (RV5) series starting at 2 months.',
    indication: 'Rotavirus causes severe, dehydrating diarrhea and vomiting in infants and young children. Before vaccine, rotavirus caused 20-60 deaths, 55,000-70,000 hospitalizations, and 400,000 emergency visits annually in US children under 5.',
    benefits: [
      {
        id: 'rv-ben-1',
        description: '85-95% effective at preventing severe rotavirus gastroenteritis',
        citations: ['cit-rotavirus-1']
      },
      {
        id: 'rv-ben-2',
        description: '94-100% effective at preventing severe dehydration from rotavirus',
        citations: ['cit-rotavirus-1']
      },
      {
        id: 'rv-ben-3',
        description: 'Reduces hospitalizations for diarrhea by 85-94%',
        citations: ['cit-rotavirus-2']
      },
      {
        id: 'rv-ben-4',
        description: 'Provides some cross-protection against non-vaccine rotavirus strains',
        citations: ['cit-rotavirus-1']
      }
    ],
    risks: [
      {
        id: 'rv-risk-1',
        description: 'Mild, temporary diarrhea or vomiting',
        frequency: 'Uncommon (2-5 in 100)',
        severity: 'mild',
        citations: ['cit-rotavirus-1']
      },
      {
        id: 'rv-risk-2',
        description: 'Irritability',
        frequency: 'Uncommon (5-10 in 100)',
        severity: 'mild',
        citations: ['cit-rotavirus-1']
      },
      {
        id: 'rv-risk-3',
        description: 'Intussusception (bowel blockage)',
        frequency: 'Very rare (1-5 in 100,000 within 7 days of first dose)',
        severity: 'severe',
        citations: ['cit-rotavirus-3']
      },
      {
        id: 'rv-risk-4',
        description: 'Severe allergic reaction',
        frequency: 'Extremely rare (less than 1 in 1,000,000)',
        severity: 'severe',
        citations: ['cit-rotavirus-1']
      }
    ],
    alternatives: [],
    whatIfWeWait: 'Rotavirus vaccine must be started by 15 weeks of age and completed by 8 months due to higher intussusception risk in older infants. Delaying increases risk of severe rotavirus infection before immunity develops. Rotavirus is highly contagious and most children are infected in first 2 years of life.',
    contraindications: [
      {
        id: 'rv-contra-1',
        condition: 'Severe combined immunodeficiency (SCID)',
        severity: 'absolute',
        explanation: 'Live virus vaccine; risk of vaccine-strain infection in SCID patients',
        citations: ['cit-rotavirus-1']
      },
      {
        id: 'rv-contra-2',
        condition: 'History of intussusception',
        severity: 'absolute',
        explanation: 'Increased risk of recurrent intussusception',
        citations: ['cit-rotavirus-3']
      },
      {
        id: 'rv-contra-3',
        condition: 'Severe allergic reaction to previous dose',
        severity: 'absolute',
        explanation: 'Risk of anaphylaxis',
        citations: ['cit-rotavirus-1']
      },
      {
        id: 'rv-contra-4',
        condition: 'Age over 8 months (RV1) or over 8 months (RV5)',
        severity: 'absolute',
        explanation: 'Increased intussusception risk; vaccine not recommended if series not completed by 8 months',
        citations: ['cit-rotavirus-3']
      }
    ],
    questionsToAsk: [
      'What is intussusception and what are the warning signs?',
      'What are all the ingredients in the rotavirus vaccine?',
      'What is the difference between RV1 (Rotarix) and RV5 (RotaTeq)?',
      'Can the vaccine be given to premature infants?',
      'Can my baby be around immunocompromised people after receiving the vaccine?'
    ],
    citations: [citations['cit-rotavirus-1'], citations['cit-rotavirus-2'], citations['cit-rotavirus-3']],
    lastReviewed: '2024-02-22',
    nextReviewDue: '2025-02-22',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer',
    vaccineInfo: {
      fdaPackageInsertUrl: 'https://www.fda.gov/vaccines-blood-biologics/vaccines/rotavirus-vaccine',
      ingredients: [
        {
          id: 'rv-ing-1',
          name: 'Live Attenuated Rotavirus (1 strain RV1 or 5 strains RV5)',
          purpose: 'Active ingredient - stimulates immunity to rotavirus',
          amount: 'At least 10^6 infectious units per dose (RV1) or specified units per strain (RV5)',
          safetyProfile: 'Live but weakened rotavirus. RV1 contains human rotavirus strain; RV5 contains human-bovine reassortant strains. Cannot cause severe disease. Oral vaccine, not injected. Virus may be shed in stool for days after vaccination but transmission rare.'
        },
        {
          id: 'rv-ing-2',
          name: 'Sucrose',
          purpose: 'Stabilizer and excipient',
          amount: 'Standard amount',
          safetyProfile: 'Table sugar. No safety concerns.'
        },
        {
          id: 'rv-ing-3',
          name: 'Sodium Citrate, Citric Acid',
          purpose: 'pH buffer',
          amount: 'Standard amounts',
          safetyProfile: 'Common food and pharmaceutical buffers. No safety concerns.'
        },
        {
          id: 'rv-ing-4',
          name: 'Sodium Phosphate, Sodium Hydroxide',
          purpose: 'pH adjustment',
          amount: 'Standard amounts',
          safetyProfile: 'Standard pharmaceutical ingredients. No safety concerns.'
        },
        {
          id: 'rv-ing-5',
          name: 'Polysorbate 80 (RV5 only)',
          purpose: 'Stabilizer',
          amount: 'Small amount',
          safetyProfile: 'Common emulsifier in foods and vaccines. Generally recognized as safe.'
        },
        {
          id: 'rv-ing-6',
          name: 'Cell Culture Media Components (trace amounts)',
          purpose: 'Residuals from vaccine production',
          amount: 'Trace amounts',
          safetyProfile: 'RV1 grown on Vero cells (monkey kidney cells); RV5 grown on Vero cells. Trace amounts of cell culture components may remain. Extensively purified.'
        },
        {
          id: 'rv-ing-7',
          name: 'Fetal Bovine Serum (RV5, trace amounts)',
          purpose: 'Cell culture medium component',
          amount: 'Less than 2.5 mcg (trace)',
          safetyProfile: 'Used in cell culture during manufacturing. Trace amounts remain after purification. No safety concerns at these levels.'
        }
      ],
      vaersData: vaersRealData['rotavirus'],
      vicpInfo: {
        vaccineName: 'Rotavirus Vaccine',
        totalCasesCompensated: 187,
        totalAmountAwarded: '$94 million',
        timeframe: '1988-2023',
        mostCommonInjuries: [
          'Intussusception',
          'Anaphylaxis',
          'Encephalopathy',
          'Seizure disorder',
          'Death (in cases where causation could not be ruled out)'
        ],
        sourceUrl: 'https://www.hrsa.gov/vaccine-compensation/data/index.html'
      },
      internationalComparison: [
        {
          country: 'United States',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['Rotavirus at 2, 4 months (RV1) or 2, 4, 6 months (RV5)'],
          totalDosesFirstYear: 2,
          notes: 'Must start by 15 weeks and complete by 8 months. Universal recommendation for all infants.'
        },
        {
          country: 'United Kingdom',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['Rotavirus at 2, 3 months (RV1)'],
          totalDosesFirstYear: 2,
          notes: 'UK uses 2-dose RV1 schedule. Introduced in 2013; led to dramatic reduction in rotavirus hospitalizations.'
        },
        {
          country: 'Australia',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['Rotavirus at 2, 4 months (RV1) or 2, 4, 6 months (RV5)'],
          totalDosesFirstYear: 2,
          notes: 'Rotavirus vaccine on national schedule since 2007. Significant reduction in hospitalizations observed.'
        },
        {
          country: 'Many European Countries',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['Varies by country - some include, others do not'],
          totalDosesFirstYear: 0,
          notes: 'Rotavirus vaccination not universal in Europe. Some countries (Austria, Belgium, Finland, Luxembourg) include on schedule; others do not due to cost-benefit considerations in low-mortality settings.'
        }
      ]
    }
  },
  {
    id: 'proc-tdap-maternal',
    name: 'Tdap Vaccine During Pregnancy (Maternal)',
    shortName: 'Maternal Tdap',
    category: 'vaccination',
    stage: 'prenatal',
    urgencyLevel: 'routine',
    summary: 'Tetanus, diphtheria, and pertussis vaccine recommended for pregnant individuals during each pregnancy, ideally between 27-36 weeks gestation. Provides passive immunity to newborn for first months of life.',
    indication: 'Pertussis (whooping cough) is most dangerous for newborns, causing severe coughing, apnea (breathing pauses), pneumonia, seizures, brain damage, and death. Infants cannot be vaccinated until 2 months old. Maternal vaccination transfers antibodies to baby before birth, providing critical protection during vulnerable newborn period.',
    benefits: [
      {
        id: 'tdap-mat-ben-1',
        description: '91% effective at preventing pertussis in infants under 2 months old',
        citations: ['cit-tdap-maternal-1']
      },
      {
        id: 'tdap-mat-ben-2',
        description: '69% effective at preventing pertussis in infants 2-12 months old',
        citations: ['cit-tdap-maternal-1']
      },
      {
        id: 'tdap-mat-ben-3',
        description: 'Reduces infant pertussis hospitalizations by 90%',
        citations: ['cit-tdap-maternal-2']
      },
      {
        id: 'tdap-mat-ben-4',
        description: 'Protects mother during late pregnancy and postpartum period',
        citations: ['cit-tdap-maternal-1']
      }
    ],
    risks: [
      {
        id: 'tdap-mat-risk-1',
        description: 'Pain, redness, or swelling at injection site',
        frequency: 'Very common (60-80 in 100)',
        severity: 'mild',
        citations: ['cit-tdap-maternal-1']
      },
      {
        id: 'tdap-mat-risk-2',
        description: 'Body aches, fatigue',
        frequency: 'Common (20-30 in 100)',
        severity: 'mild',
        citations: ['cit-tdap-maternal-1']
      },
      {
        id: 'tdap-mat-risk-3',
        description: 'Headache',
        frequency: 'Common (15-25 in 100)',
        severity: 'mild',
        citations: ['cit-tdap-maternal-1']
      },
      {
        id: 'tdap-mat-risk-4',
        description: 'Fever',
        frequency: 'Uncommon (5-10 in 100)',
        severity: 'mild',
        citations: ['cit-tdap-maternal-1']
      },
      {
        id: 'tdap-mat-risk-5',
        description: 'Severe allergic reaction',
        frequency: 'Extremely rare (less than 1 in 1,000,000)',
        severity: 'severe',
        citations: ['cit-tdap-maternal-1']
      }
    ],
    alternatives: [],
    whatIfWeWait: 'Newborns are most vulnerable to pertussis in first 2 months before they can be vaccinated. Pertussis is currently circulating; outbreaks occur regularly. Infants too young to be vaccinated rely on maternal antibodies for protection. "Cocooning" strategy (vaccinating household members) is less effective than maternal vaccination.',
    contraindications: [
      {
        id: 'tdap-mat-contra-1',
        condition: 'Severe allergic reaction to previous Tdap or DTaP',
        severity: 'absolute',
        explanation: 'Risk of anaphylaxis',
        citations: ['cit-tdap-maternal-1']
      },
      {
        id: 'tdap-mat-contra-2',
        condition: 'Encephalopathy within 7 days of previous pertussis-containing vaccine',
        severity: 'absolute',
        explanation: 'Pertussis component contraindicated',
        citations: ['cit-tdap-maternal-1']
      }
    ],
    questionsToAsk: [
      'When is the optimal time during pregnancy to receive Tdap?',
      'Will my baby still need DTaP vaccines starting at 2 months?',
      'What are all the ingredients in Tdap?',
      'Can I get Tdap in the same visit as flu vaccine?',
      'Do I need Tdap with every pregnancy?'
    ],
    citations: [citations['cit-tdap-maternal-1'], citations['cit-tdap-maternal-2']],
    lastReviewed: '2024-02-22',
    nextReviewDue: '2025-02-22',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer',
    vaccineInfo: {
      fdaPackageInsertUrl: 'https://www.fda.gov/vaccines-blood-biologics/vaccines/diphtheria-tetanus-and-pertussis-vaccines',
      ingredients: [
        {
          id: 'tdap-mat-ing-1',
          name: 'Tetanus Toxoid',
          purpose: 'Active ingredient - stimulates immunity to tetanus',
          amount: '5 Lf per dose',
          safetyProfile: 'Inactivated tetanus toxin. Cannot cause tetanus disease. Highly purified protein. Safely used in pregnancy for decades.'
        },
        {
          id: 'tdap-mat-ing-2',
          name: 'Diphtheria Toxoid (reduced dose)',
          purpose: 'Active ingredient - stimulates immunity to diphtheria',
          amount: '2.5 Lf per dose (lower than DTaP)',
          safetyProfile: 'Inactivated diphtheria toxin. Cannot cause diphtheria disease. Lower dose than pediatric vaccine to reduce side effects in adults.'
        },
        {
          id: 'tdap-mat-ing-3',
          name: 'Acellular Pertussis Antigens (3-5 components)',
          purpose: 'Active ingredient - stimulates immunity to pertussis',
          amount: 'Varies by brand (pertussis toxoid, filamentous hemagglutinin, pertactin, fimbrial proteins)',
          safetyProfile: 'Purified pertussis proteins. Acellular vaccine has fewer side effects than old whole-cell vaccine. Cannot cause pertussis disease. Safely used in millions of pregnant individuals.'
        },
        {
          id: 'tdap-mat-ing-4',
          name: 'Aluminum Hydroxide or Aluminum Phosphate',
          purpose: 'Adjuvant - enhances immune response',
          amount: '330-390 mcg aluminum per dose (varies by brand)',
          safetyProfile: 'Same aluminum salts used in other vaccines for decades. Pregnancy-specific studies show no adverse effects on maternal or fetal outcomes. Amount is comparable to aluminum consumed from food/water.'
        },
        {
          id: 'tdap-mat-ing-5',
          name: 'Formaldehyde (residual)',
          purpose: 'Used to inactivate toxins',
          amount: 'Less than 100 mcg per dose (trace)',
          safetyProfile: 'Used to detoxify tetanus and diphtheria toxins. Residual amounts far less than formaldehyde naturally in body. No pregnancy safety concerns.'
        },
        {
          id: 'tdap-mat-ing-6',
          name: 'Polysorbate 80',
          purpose: 'Stabilizer',
          amount: 'Small amount',
          safetyProfile: 'Common emulsifier. Generally recognized as safe. No pregnancy concerns.'
        },
        {
          id: 'tdap-mat-ing-7',
          name: 'Sodium Chloride, Sodium Phosphate',
          purpose: 'Buffering agents',
          amount: 'Standard amounts',
          safetyProfile: 'Salt and phosphate buffers. Standard pharmaceutical ingredients. No pregnancy concerns.'
        }
      ],
      vaersData: vaersRealData['dtap'],
      vicpInfo: {
        vaccineName: 'Tdap (Tetanus, Diphtheria, acellular Pertussis)',
        totalCasesCompensated: 1847,
        totalAmountAwarded: '$523 million',
        timeframe: '1988-2023',
        mostCommonInjuries: [
          'Shoulder injury related to vaccine administration (SIRVA)',
          'Brachial neuritis',
          'Guillain-Barré Syndrome (GBS)',
          'Vasovagal syncope with secondary injury',
          'Anaphylaxis',
          'Chronic inflammatory demyelinating polyneuropathy (CIDP)'
        ],
        sourceUrl: 'https://www.hrsa.gov/vaccine-compensation/data/index.html'
      },
      internationalComparison: [
        {
          country: 'United States',
          vaccinesAtBirth: [],
          vaccinesFirstYear: [],
          totalDosesFirstYear: 0,
          notes: 'Tdap recommended during each pregnancy at 27-36 weeks gestation. Policy since 2012. Protects newborn through passive immunity transfer.'
        },
        {
          country: 'United Kingdom',
          vaccinesAtBirth: [],
          vaccinesFirstYear: [],
          totalDosesFirstYear: 0,
          notes: 'UK recommends pertussis-containing vaccine from 16 weeks of pregnancy. Similar rationale to US approach.'
        },
        {
          country: 'Australia',
          vaccinesAtBirth: [],
          vaccinesFirstYear: [],
          totalDosesFirstYear: 0,
          notes: 'Tdap recommended at 20-32 weeks of each pregnancy since 2015. Free under National Immunization Program.'
        },
        {
          country: 'Canada',
          vaccinesAtBirth: [],
          vaccinesFirstYear: [],
          totalDosesFirstYear: 0,
          notes: 'Tdap recommended during every pregnancy, ideally 27-32 weeks. Policy varies slightly by province.'
        }
      ]
    }
  },
  {
    id: 'proc-flu-maternal',
    name: 'Influenza Vaccine During Pregnancy (Maternal)',
    shortName: 'Maternal Flu Vaccine',
    category: 'vaccination',
    stage: 'prenatal',
    urgencyLevel: 'routine',
    summary: 'Annual influenza vaccine recommended for pregnant individuals during any trimester. Protects mother and provides passive immunity to newborn for first months of life.',
    indication: 'Pregnant individuals are at higher risk for severe influenza complications including pneumonia, hospitalization, and death due to immune system and physiological changes. Influenza during pregnancy increases risk of preterm birth and low birth weight. Newborns cannot be vaccinated until 6 months old.',
    benefits: [
      {
        id: 'flu-mat-ben-1',
        description: 'Reduces flu illness risk in pregnant individuals by 40-60%',
        citations: ['cit-flu-maternal-1']
      },
      {
        id: 'flu-mat-ben-2',
        description: 'Reduces risk of flu-associated acute respiratory infection in infants under 6 months by 53%',
        citations: ['cit-flu-maternal-2']
      },
      {
        id: 'flu-mat-ben-3',
        description: 'Reduces risk of preterm birth and low birth weight',
        citations: ['cit-flu-maternal-1']
      },
      {
        id: 'flu-mat-ben-4',
        description: 'Reduces flu-related hospitalizations in infants by 72%',
        citations: ['cit-flu-maternal-2']
      }
    ],
    risks: [
      {
        id: 'flu-mat-risk-1',
        description: 'Soreness at injection site',
        frequency: 'Common (30-50 in 100)',
        severity: 'mild',
        citations: ['cit-flu-maternal-1']
      },
      {
        id: 'flu-mat-risk-2',
        description: 'Body aches, mild fever',
        frequency: 'Uncommon (10-15 in 100)',
        severity: 'mild',
        citations: ['cit-flu-maternal-1']
      },
      {
        id: 'flu-mat-risk-3',
        description: 'Headache, fatigue',
        frequency: 'Uncommon (10-20 in 100)',
        severity: 'mild',
        citations: ['cit-flu-maternal-1']
      },
      {
        id: 'flu-mat-risk-4',
        description: 'Severe allergic reaction',
        frequency: 'Extremely rare (less than 1 in 1,000,000)',
        severity: 'severe',
        citations: ['cit-flu-maternal-1']
      }
    ],
    alternatives: [],
    whatIfWeWait: 'Flu season typically October-May. Vaccine takes 2 weeks for protection. Pregnant individuals face higher risk of flu complications. Newborns cannot be vaccinated until 6 months and rely on maternal antibodies. Delaying increases risk of maternal illness and infant exposure without protection.',
    contraindications: [
      {
        id: 'flu-mat-contra-1',
        condition: 'Severe allergic reaction to previous flu vaccine',
        severity: 'absolute',
        explanation: 'Risk of anaphylaxis',
        citations: ['cit-flu-maternal-1']
      },
      {
        id: 'flu-mat-contra-2',
        condition: 'Egg allergy (for egg-based vaccines)',
        severity: 'relative',
        explanation: 'Most people with egg allergy can receive flu vaccine; discuss with provider. Egg-free options available.',
        citations: ['cit-flu-maternal-1']
      }
    ],
    questionsToAsk: [
      'Can I get the flu vaccine in any trimester?',
      'Which flu vaccine formulation is used (egg-based, cell-based, recombinant)?',
      'Should I get the nasal spray or injection?',
      'What are all the ingredients?',
      'Can I get flu vaccine at the same visit as Tdap?'
    ],
    citations: [citations['cit-flu-maternal-1'], citations['cit-flu-maternal-2']],
    lastReviewed: '2024-02-22',
    nextReviewDue: '2025-02-22',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer',
    vaccineInfo: {
      fdaPackageInsertUrl: 'https://www.fda.gov/vaccines-blood-biologics/vaccines/influenza-vaccines',
      ingredients: [
        {
          id: 'flu-mat-ing-1',
          name: 'Inactivated Influenza Virus Antigens (3 or 4 strains)',
          purpose: 'Active ingredients - stimulate immunity to flu viruses',
          amount: '15 mcg hemagglutinin per strain per dose',
          safetyProfile: 'Inactivated (killed) virus. Cannot cause flu. Strains updated annually. Safely used in pregnancy for decades. Only inactivated flu vaccine recommended in pregnancy (NOT nasal spray).'
        },
        {
          id: 'flu-mat-ing-2',
          name: 'Egg Protein (ovalbumin) - in egg-based vaccines',
          purpose: 'Residual from growing virus in eggs',
          amount: 'Less than 1 mcg per dose',
          safetyProfile: 'Most flu vaccines grown in eggs. Even people with egg allergy can usually receive vaccine. Egg-free options (cell-based, recombinant) available.'
        },
        {
          id: 'flu-mat-ing-3',
          name: 'Formaldehyde (residual)',
          purpose: 'Used to inactivate virus',
          amount: 'Less than 100 mcg per dose (trace)',
          safetyProfile: 'Used to kill virus. Residual amounts far less than formaldehyde naturally in body. No pregnancy safety concerns.'
        },
        {
          id: 'flu-mat-ing-4',
          name: 'Thimerosal (multi-dose vials only)',
          purpose: 'Preservative',
          amount: '25 mcg mercury per dose (multi-dose vials only)',
          safetyProfile: 'Mercury-containing preservative. Multiple studies show no adverse pregnancy outcomes. However, thimerosal-free single-dose vials/syringes available if preferred.'
        },
        {
          id: 'flu-mat-ing-5',
          name: 'Polysorbate 80, Sodium Phosphate, Sodium Chloride',
          purpose: 'Stabilizers and buffers',
          amount: 'Standard amounts',
          safetyProfile: 'Common pharmaceutical ingredients. No pregnancy concerns.'
        }
      ],
      vaersData: vaersRealData['flu'],
      vicpInfo: {
        vaccineName: 'Influenza Vaccine',
        totalCasesCompensated: 2341,
        totalAmountAwarded: '$578 million',
        timeframe: '1988-2023',
        mostCommonInjuries: [
          'Guillain-Barré Syndrome (GBS)',
          'Shoulder injury related to vaccine administration (SIRVA)',
          'Brachial neuritis',
          'Anaphylaxis',
          'Vasovagal syncope with secondary injury'
        ],
        sourceUrl: 'https://www.hrsa.gov/vaccine-compensation/data/index.html'
      },
      internationalComparison: [
        {
          country: 'United States',
          vaccinesAtBirth: [],
          vaccinesFirstYear: [],
          totalDosesFirstYear: 0,
          notes: 'Flu vaccine recommended during any trimester of pregnancy. Policy for decades. Strong evidence of safety and benefit.'
        },
        {
          country: 'United Kingdom',
          vaccinesAtBirth: [],
          vaccinesFirstYear: [],
          totalDosesFirstYear: 0,
          notes: 'Flu vaccine recommended at any stage of pregnancy. Free under NHS.'
        },
        {
          country: 'Canada',
          vaccinesAtBirth: [],
          vaccinesFirstYear: [],
          totalDosesFirstYear: 0,
          notes: 'Flu vaccine recommended during pregnancy regardless of trimester.'
        },
        {
          country: 'Australia',
          vaccinesAtBirth: [],
          vaccinesFirstYear: [],
          totalDosesFirstYear: 0,
          notes: 'Flu vaccine recommended and funded for all pregnant individuals at any stage of pregnancy.'
        }
      ]
    }
  }
]
