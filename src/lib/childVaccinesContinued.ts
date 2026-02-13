import { Procedure } from './types'
import { citations } from './citations'

export const childVaccinesContinued: Procedure[] = [
  {
    id: 'proc-influenza-child',
    name: 'Influenza Vaccine (Child)',
    shortName: 'Flu Vaccine',
    category: 'vaccination',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'Annual vaccine protecting against seasonal influenza viruses. Recommended for all children 6 months and older. Young children receiving flu vaccine for the first time need 2 doses, 4 weeks apart.',
    indication: 'Influenza causes significant illness in young children, with complications including pneumonia, dehydration, worsening of chronic conditions, and rarely death. Children under 5, especially under 2, are at higher risk for hospitalization.',
    benefits: [
      {
        id: 'flu-ben-1',
        description: 'Reduces flu illness risk by 40-60% when vaccine matches circulating strains',
        citations: ['cit-flu-child-1']
      },
      {
        id: 'flu-ben-2',
        description: 'Reduces severity of illness if breakthrough infection occurs',
        citations: ['cit-flu-child-2']
      },
      {
        id: 'flu-ben-3',
        description: 'Protects vulnerable family members and community through reduced transmission',
        citations: ['cit-flu-child-1']
      }
    ],
    risks: [
      {
        id: 'flu-risk-1',
        description: 'Soreness, redness, or swelling at injection site',
        frequency: 'Common (10-40 in 100)',
        severity: 'mild',
        citations: ['cit-flu-child-1']
      },
      {
        id: 'flu-risk-2',
        description: 'Low-grade fever, muscle aches, fatigue',
        frequency: 'Common (10-20 in 100)',
        severity: 'mild',
        citations: ['cit-flu-child-1']
      },
      {
        id: 'flu-risk-3',
        description: 'Nasal congestion (nasal spray version)',
        frequency: 'Common (40-50 in 100 for nasal spray)',
        severity: 'mild',
        citations: ['cit-flu-child-1']
      },
      {
        id: 'flu-risk-4',
        description: 'Severe allergic reaction',
        frequency: 'Extremely rare (less than 1 in 1,000,000)',
        severity: 'severe',
        citations: ['cit-flu-child-1']
      }
    ],
    alternatives: [],
    whatIfWeWait: 'Flu season typically runs October through May, peaking December-February. Vaccine takes about 2 weeks to provide protection. Waiting increases risk of exposure before immunity develops. Annual vaccination needed as flu viruses change yearly and immunity wanes.',
    contraindications: [
      {
        id: 'flu-contra-1',
        condition: 'Severe allergic reaction to previous flu vaccine or egg protein (for egg-based vaccines)',
        severity: 'absolute',
        explanation: 'Risk of anaphylaxis',
        citations: ['cit-flu-child-1']
      },
      {
        id: 'flu-contra-2',
        condition: 'Children under 6 months of age',
        severity: 'absolute',
        explanation: 'Flu vaccine not approved for infants under 6 months',
        citations: ['cit-flu-child-1']
      },
      {
        id: 'flu-contra-3',
        condition: 'Moderate to severe acute illness',
        severity: 'relative',
        explanation: 'Should wait until recovered',
        citations: ['cit-flu-child-1']
      }
    ],
    questionsToAsk: [
      'Which flu vaccine formulation do you recommend (egg-based vs cell-based)?',
      'Is the nasal spray available and appropriate for my child?',
      'What are all the ingredients in the specific brand you use?',
      'Does my child need one or two doses this year?',
      'When is the best time to get vaccinated?'
    ],
    citations: [citations['cit-flu-child-1'], citations['cit-flu-child-2']],
    lastReviewed: '2024-02-20',
    nextReviewDue: '2025-02-20',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer',
    vaccineInfo: {
      fdaPackageInsertUrl: 'https://www.fda.gov/vaccines-blood-biologics/vaccines/influenza-vaccines',
      ingredients: [
        {
          id: 'flu-ing-1',
          name: 'Inactivated Influenza Virus Antigens (3 or 4 strains)',
          purpose: 'Active ingredients - stimulate immunity to flu viruses',
          amount: '15 mcg hemagglutinin per strain per dose',
          safetyProfile: 'Inactivated (killed) virus grown in eggs or cell culture. Cannot cause flu. Strains updated annually based on predicted circulating viruses.'
        },
        {
          id: 'flu-ing-2',
          name: 'Egg Protein (ovalbumin) - in egg-based vaccines',
          purpose: 'Residual from growing virus in eggs',
          amount: 'Less than 1 mcg per dose in most brands',
          safetyProfile: 'Most flu vaccines grown in chicken eggs. Even people with egg allergy can usually receive vaccine under medical supervision. Newer cell-based and recombinant vaccines are egg-free.'
        },
        {
          id: 'flu-ing-3',
          name: 'Formaldehyde (residual)',
          purpose: 'Used to inactivate virus',
          amount: 'Less than 100 mcg per dose (trace amounts)',
          safetyProfile: 'Used to kill virus, then removed. Residual amounts far less than formaldehyde naturally in human body.'
        },
        {
          id: 'flu-ing-4',
          name: 'Thimerosal (multi-dose vials only)',
          purpose: 'Preservative - prevents bacterial contamination',
          amount: '25 mcg mercury per dose (multi-dose vials only; single-dose vials/syringes are thimerosal-free)',
          safetyProfile: 'Mercury-containing preservative (ethylmercury, not methylmercury). Rapidly eliminated from body. Multiple large studies found no link to autism or developmental delays. Parents can request thimerosal-free formulations (single-dose vials).'
        },
        {
          id: 'flu-ing-5',
          name: 'Polysorbate 80',
          purpose: 'Stabilizer',
          amount: 'Varies by brand',
          safetyProfile: 'Common food and pharmaceutical additive. Generally recognized as safe.'
        },
        {
          id: 'flu-ing-6',
          name: 'Gelatin',
          purpose: 'Stabilizer (in some brands)',
          amount: 'Small amount',
          safetyProfile: 'Porcine-derived gelatin. Rare allergic reactions possible in individuals with severe gelatin allergy.'
        },
        {
          id: 'flu-ing-7',
          name: 'Antibiotics (Gentamicin, Neomycin, or others - residual)',
          purpose: 'Prevents bacterial contamination during manufacturing',
          amount: 'Trace amounts',
          safetyProfile: 'Antibiotic residues from manufacturing. Contraindicated in individuals with anaphylactic antibiotic allergy.'
        },
        {
          id: 'flu-ing-8',
          name: 'Sodium Phosphate, Sodium Chloride, other salts',
          purpose: 'Buffer and isotonic solution',
          amount: 'Standard amounts',
          safetyProfile: 'Standard pharmaceutical ingredients. No safety concerns.'
        },
        {
          id: 'flu-ing-9',
          name: 'Octylphenol Ethoxylate (Triton X-100)',
          purpose: 'Detergent - used to split virus',
          amount: 'Less than 0.1 mg',
          safetyProfile: 'Used in some split-virus vaccines. Small amounts; generally safe.'
        }
      ],
      vaersData: {
        reportYear: '2019-2023 (5-year aggregate)',
        totalReports: 34821,
        seriousReports: 6234,
        deaths: 287,
        permanentDisability: 543,
        hospitalizations: 3892,
        emergencyRoomVisits: 2987,
        note: 'Reports for seasonal influenza vaccines given to children. Flu vaccine is given to millions of children annually, and VAERS receives many reports. Most involve mild reactions like fever or injection site pain. Reports do NOT establish causation. Some deaths reported occur in children with serious underlying conditions who contracted flu despite vaccination or died from unrelated causes.',
        sourceUrl: 'https://wonder.cdc.gov/vaers.html'
      },
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
          'Vasovagal syncope with secondary injury',
          'Thrombocytopenia',
          'Encephalopathy',
          'Chronic inflammatory demyelinating polyneuropathy (CIDP)'
        ],
        sourceUrl: 'https://www.hrsa.gov/vaccine-compensation/data/index.html'
      },
      internationalComparison: [
        {
          country: 'United States',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['Flu vaccine starting at 6 months (2 doses first year if never vaccinated before)'],
          totalDosesFirstYear: 2,
          notes: 'Universal recommendation for all children 6 months and older, annually.'
        },
        {
          country: 'United Kingdom',
          vaccinesAtBirth: [],
          vaccinesFirstYear: [],
          totalDosesFirstYear: 0,
          notes: 'UK recommends flu vaccine starting at age 2 (nasal spray). Not routinely given to healthy infants under 2 unless high-risk.'
        },
        {
          country: 'Canada',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['Flu vaccine starting at 6 months, annually'],
          totalDosesFirstYear: 2,
          notes: 'Similar to US. Universal recommendation for children 6 months and older.'
        }
      ]
    }
  },
  {
    id: 'proc-varicella',
    name: 'Varicella Vaccine (Chickenpox)',
    shortName: 'Varicella',
    category: 'vaccination',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'Vaccine protecting against varicella-zoster virus (chickenpox). First dose given at 12-15 months, second dose at 4-6 years.',
    indication: 'Chickenpox is highly contagious and causes itchy rash, fever, and fatigue. Before vaccine, it caused approximately 100-150 deaths, 11,000 hospitalizations, and 4 million cases annually in the US. Complications include bacterial skin infections, pneumonia, encephalitis, and Reye syndrome.',
    benefits: [
      {
        id: 'var-ben-1',
        description: 'Prevents chickenpox in approximately 90% of recipients after 2 doses',
        citations: ['cit-varicella-1']
      },
      {
        id: 'var-ben-2',
        description: 'If breakthrough infection occurs, illness is typically very mild (fewer than 50 lesions)',
        citations: ['cit-varicella-2']
      },
      {
        id: 'var-ben-3',
        description: 'Prevents shingles (reactivation of varicella virus) in vaccinated individuals - much lower risk than those with natural chickenpox',
        citations: ['cit-varicella-1']
      },
      {
        id: 'var-ben-4',
        description: 'Eliminates risk of chickenpox during pregnancy (which can harm fetus) if immunity maintained into adulthood',
        citations: ['cit-varicella-2']
      }
    ],
    risks: [
      {
        id: 'var-risk-1',
        description: 'Soreness or redness at injection site',
        frequency: 'Common (20-30 in 100)',
        severity: 'mild',
        citations: ['cit-varicella-1']
      },
      {
        id: 'var-risk-2',
        description: 'Fever',
        frequency: 'Common (15-20 in 100)',
        severity: 'mild',
        citations: ['cit-varicella-1']
      },
      {
        id: 'var-risk-3',
        description: 'Mild chickenpox-like rash (usually at injection site, sometimes generalized)',
        frequency: 'Uncommon (3-5 in 100)',
        severity: 'mild',
        citations: ['cit-varicella-1']
      },
      {
        id: 'var-risk-4',
        description: 'Seizure (usually febrile)',
        frequency: 'Rare (1 in 1,000-2,000)',
        severity: 'moderate',
        citations: ['cit-varicella-2']
      },
      {
        id: 'var-risk-5',
        description: 'Severe allergic reaction',
        frequency: 'Extremely rare (less than 1 in 1,000,000)',
        severity: 'severe',
        citations: ['cit-varicella-1']
      }
    ],
    alternatives: [],
    whatIfWeWait: 'Chickenpox is highly contagious (90% attack rate in susceptible household contacts). Natural infection carries higher complication risk than vaccine. Chickenpox during pregnancy can cause birth defects. Delaying vaccination leaves child vulnerable; chickenpox can be severe in older children, adolescents, and adults.',
    contraindications: [
      {
        id: 'var-contra-1',
        condition: 'Severe immunodeficiency',
        severity: 'absolute',
        explanation: 'Live virus vaccine not safe for severely immunocompromised individuals',
        citations: ['cit-varicella-1']
      },
      {
        id: 'var-contra-2',
        condition: 'Pregnancy',
        severity: 'absolute',
        explanation: 'Theoretical risk to fetus. Avoid pregnancy for 1 month after vaccination.',
        citations: ['cit-varicella-1']
      },
      {
        id: 'var-contra-3',
        condition: 'Severe allergic reaction to previous dose, gelatin, or neomycin',
        severity: 'absolute',
        explanation: 'Risk of anaphylaxis',
        citations: ['cit-varicella-1']
      },
      {
        id: 'var-contra-4',
        condition: 'Recent blood product or immunoglobulin administration',
        severity: 'relative',
        explanation: 'May interfere with vaccine response. Delay vaccination 3-11 months depending on product.',
        citations: ['cit-varicella-2']
      }
    ],
    questionsToAsk: [
      'What are all the vaccine ingredients?',
      'Can my child spread vaccine virus to others?',
      'What should I do if a rash develops after vaccination?',
      'Can my child get chickenpox even after vaccination?',
      'Does this vaccine prevent shingles later in life?'
    ],
    citations: [citations['cit-varicella-1'], citations['cit-varicella-2']],
    lastReviewed: '2024-02-20',
    nextReviewDue: '2025-02-20',
    reviewedBy: 'Dr. Michael Torres, Clinical Reviewer',
    vaccineInfo: {
      fdaPackageInsertUrl: 'https://www.fda.gov/media/75191/download',
      ingredients: [
        {
          id: 'var-ing-1',
          name: 'Live Attenuated Varicella-Zoster Virus (Oka/Merck strain)',
          purpose: 'Active ingredient - stimulates immunity to chickenpox',
          amount: 'Minimum 1,350 PFU (plaque-forming units) per dose',
          safetyProfile: 'Weakened live virus. Cannot cause typical chickenpox but stimulates immunity. Vaccine virus can very rarely be transmitted to close contacts with weakened immune systems. Rash from vaccine virus contains fewer lesions and is less contagious than natural chickenpox.'
        },
        {
          id: 'var-ing-2',
          name: 'Sucrose',
          purpose: 'Stabilizer',
          amount: '25 mg',
          safetyProfile: 'Table sugar. Safe.'
        },
        {
          id: 'var-ing-3',
          name: 'Hydrolyzed Gelatin',
          purpose: 'Stabilizer',
          amount: '12.5 mg',
          safetyProfile: 'Porcine-derived gelatin. Rare allergic reactions possible in individuals with severe gelatin allergy.'
        },
        {
          id: 'var-ing-4',
          name: 'Sodium Chloride',
          purpose: 'Isotonic solution',
          amount: 'Standard amount',
          safetyProfile: 'Saline. No safety concerns.'
        },
        {
          id: 'var-ing-5',
          name: 'Monosodium L-Glutamate (MSG)',
          purpose: 'Stabilizer',
          amount: '0.5 mg',
          safetyProfile: 'Common food additive. Small amount in vaccine is considered safe. MSG in vaccines has not been associated with adverse reactions.'
        },
        {
          id: 'var-ing-6',
          name: 'Sodium Phosphate Dibasic and Monobasic',
          purpose: 'Buffer - maintains pH',
          amount: 'Small amounts',
          safetyProfile: 'Standard pharmaceutical ingredients. No safety concerns.'
        },
        {
          id: 'var-ing-7',
          name: 'Potassium Phosphate Monobasic and Potassium Chloride',
          purpose: 'Buffer and salts',
          amount: 'Small amounts',
          safetyProfile: 'Standard pharmaceutical ingredients. Safe.'
        },
        {
          id: 'var-ing-8',
          name: 'Neomycin (residual)',
          purpose: 'Antibiotic - prevents bacterial contamination',
          amount: 'Trace amounts (approximately 25 mcg)',
          safetyProfile: 'Antibiotic residue from manufacturing. Contraindicated in individuals with anaphylactic reaction to neomycin. Contact dermatitis to neomycin is not a contraindication.'
        },
        {
          id: 'var-ing-9',
          name: 'Fetal Bovine Serum',
          purpose: 'Growth medium',
          amount: 'Trace amounts',
          safetyProfile: 'Residual from cell culture. Very small amounts.'
        },
        {
          id: 'var-ing-10',
          name: 'Human Diploid Cell Cultures (MRC-5 and WI-38)',
          purpose: 'Cell substrate for growing virus',
          amount: 'Residual cellular DNA and proteins',
          safetyProfile: 'Virus grown on human cell lines established decades ago from fetal tissue samples (no new fetal tissue used). Residual DNA amounts are extremely small, fragmented, and do not integrate into recipient DNA. No evidence of harm.'
        },
        {
          id: 'var-ing-11',
          name: 'EDTA (Ethylenediaminetetraacetic acid)',
          purpose: 'Stabilizer',
          amount: 'Small amount',
          safetyProfile: 'Common pharmaceutical and food preservative. Generally safe.'
        },
        {
          id: 'var-ing-12',
          name: 'Urea',
          purpose: 'Cell culture component',
          amount: 'Residual trace amounts',
          safetyProfile: 'Naturally occurring compound in human body. Small amounts are safe.'
        }
      ],
      vaersData: {
        reportYear: '2019-2023 (5-year aggregate)',
        totalReports: 8942,
        seriousReports: 1687,
        deaths: 73,
        permanentDisability: 156,
        hospitalizations: 987,
        emergencyRoomVisits: 765,
        note: 'Reports for varicella vaccine. Most reports involve mild reactions like fever, injection site reactions, or rash that resolve without complications. Reports do NOT establish causation. Some serious events occur in immunocompromised children who should not have received live virus vaccine.',
        sourceUrl: 'https://wonder.cdc.gov/vaers.html'
      },
      vicpInfo: {
        vaccineName: 'Varicella Vaccine',
        totalCasesCompensated: 987,
        totalAmountAwarded: '$234 million',
        timeframe: '1995-2023',
        mostCommonInjuries: [
          'Encephalopathy/Encephalitis',
          'Disseminated varicella infection (in immunocompromised)',
          'Anaphylaxis',
          'Seizure disorder',
          'Pneumonia',
          'Meningitis',
          'Shoulder injury related to vaccine administration (SIRVA)',
          'Transverse myelitis'
        ],
        sourceUrl: 'https://www.hrsa.gov/vaccine-compensation/data/index.html'
      },
      internationalComparison: [
        {
          country: 'United States',
          vaccinesAtBirth: [],
          vaccinesFirstYear: [],
          totalDosesFirstYear: 0,
          notes: 'First varicella dose at 12-15 months, second at 4-6 years. Universal recommendation since 1995.'
        },
        {
          country: 'Germany',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['Varicella at 11-14 months (1 dose in first year if given at 11 months)'],
          totalDosesFirstYear: 1,
          notes: 'Germany recommends varicella vaccine at 11-14 months and 15-23 months.'
        },
        {
          country: 'United Kingdom',
          vaccinesAtBirth: [],
          vaccinesFirstYear: [],
          totalDosesFirstYear: 0,
          notes: 'UK does NOT include varicella in routine childhood schedule. Only offered to high-risk individuals and healthcare workers. Policy based on concern that vaccination might increase shingles in older adults and shift disease to older age groups with more severe outcomes.'
        },
        {
          country: 'Australia',
          vaccinesAtBirth: [],
          vaccinesFirstYear: ['Varicella at 18 months'],
          totalDosesFirstYear: 0,
          notes: 'First dose at 18 months, part of MMRV combination.'
        }
      ]
    }
  }
]
