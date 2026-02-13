import { Procedure, EvidenceCitation } from './types'

export const citations: Record<string, EvidenceCitation> = {
  'cit-vitk-1': {
    id: 'cit-vitk-1',
    title: 'Vitamin K Prophylaxis for Prevention of Hemorrhagic Disease of the Newborn',
    authors: 'American Academy of Pediatrics',
    source: 'Pediatrics',
    date: '2022-03',
    url: 'https://publications.aap.org',
    evidenceLevel: 'expert-consensus'
  },
  'cit-vitk-2': {
    id: 'cit-vitk-2',
    title: 'Vitamin K and the Newborn: A Systematic Review',
    authors: 'Mihatsch et al.',
    source: 'Thrombosis Research',
    date: '2016-11',
    evidenceLevel: 'systematic-review'
  },
  'cit-hepb-1': {
    id: 'cit-hepb-1',
    title: 'Hepatitis B Vaccination: Birth Dose Effectiveness',
    authors: 'CDC Advisory Committee on Immunization Practices',
    source: 'MMWR',
    date: '2021-08',
    url: 'https://cdc.gov',
    evidenceLevel: 'expert-consensus'
  },
  'cit-hepb-2': {
    id: 'cit-hepb-2',
    title: 'Prevention of Hepatitis B Virus Transmission',
    authors: 'Schillie et al.',
    source: 'MMWR Recommendations and Reports',
    date: '2018-01',
    evidenceLevel: 'systematic-review'
  },
  'cit-hearing-1': {
    id: 'cit-hearing-1',
    title: 'Universal Newborn Hearing Screening: Evidence and Guidelines',
    authors: 'US Preventive Services Task Force',
    source: 'JAMA',
    date: '2022-01',
    evidenceLevel: 'systematic-review'
  },
  'cit-eyeproph-1': {
    id: 'cit-eyeproph-1',
    title: 'Ophthalmia Neonatorum Prophylaxis',
    authors: 'Canadian Paediatric Society',
    source: 'Paediatrics & Child Health',
    date: '2020-05',
    evidenceLevel: 'expert-consensus'
  },
  'cit-csection-1': {
    id: 'cit-csection-1',
    title: 'Cesarean Delivery: Indications and Outcomes',
    authors: 'ACOG Practice Bulletin',
    source: 'Obstetrics & Gynecology',
    date: '2023-02',
    evidenceLevel: 'expert-consensus'
  },
  'cit-csection-2': {
    id: 'cit-csection-2',
    title: 'Maternal and Neonatal Outcomes Following Cesarean Section',
    authors: 'Sandall et al.',
    source: 'Cochrane Database of Systematic Reviews',
    date: '2018-08',
    evidenceLevel: 'systematic-review'
  },
  'cit-skintosk-1': {
    id: 'cit-skintosk-1',
    title: 'Immediate vs Delayed Skin-to-Skin Contact',
    authors: 'Moore et al.',
    source: 'Cochrane Database of Systematic Reviews',
    date: '2016-11',
    evidenceLevel: 'systematic-review'
  },
  'cit-cordclamp-1': {
    id: 'cit-cordclamp-1',
    title: 'Delayed Umbilical Cord Clamping: Evidence and Practice',
    authors: 'WHO Guidelines',
    source: 'World Health Organization',
    date: '2020-06',
    evidenceLevel: 'systematic-review'
  },
  'cit-glucose-1': {
    id: 'cit-glucose-1',
    title: 'Neonatal Hypoglycemia Screening and Management',
    authors: 'AAP Clinical Report',
    source: 'Pediatrics',
    date: '2021-07',
    evidenceLevel: 'expert-consensus'
  },
  'cit-antibiotic-1': {
    id: 'cit-antibiotic-1',
    title: 'Intrapartum Antibiotic Prophylaxis for GBS',
    authors: 'ACOG Committee Opinion',
    source: 'Obstetrics & Gynecology',
    date: '2020-02',
    evidenceLevel: 'expert-consensus'
  },
  'cit-circum-1': {
    id: 'cit-circum-1',
    title: 'Male Circumcision: Policy Statement',
    authors: 'American Academy of Pediatrics',
    source: 'Pediatrics',
    date: '2012-09',
    evidenceLevel: 'expert-consensus'
  },
  'cit-circum-2': {
    id: 'cit-circum-2',
    title: 'Circumcision: Risks and Benefits',
    authors: 'Morris et al.',
    source: 'Mayo Clinic Proceedings',
    date: '2014-01',
    evidenceLevel: 'systematic-review'
  },
  'cit-jaundice-1': {
    id: 'cit-jaundice-1',
    title: 'Management of Hyperbilirubinemia in the Newborn',
    authors: 'AAP Clinical Practice Guideline',
    source: 'Pediatrics',
    date: '2022-08',
    evidenceLevel: 'expert-consensus'
  }
}

export const procedures: Procedure[] = [
  {
    id: 'proc-vitamin-k',
    name: 'Vitamin K Injection',
    shortName: 'Vitamin K',
    category: 'medication',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'A single injection of vitamin K given to newborns shortly after birth to prevent vitamin K deficiency bleeding (VKDB), a rare but potentially serious bleeding disorder.',
    indication: 'All newborns are born with low levels of vitamin K, which is essential for blood clotting. Without prophylaxis, approximately 1 in 10,000 babies develop VKDB.',
    benefits: [
      {
        id: 'vitk-ben-1',
        description: 'Prevents vitamin K deficiency bleeding in approximately 99.8% of cases',
        citations: ['cit-vitk-1', 'cit-vitk-2']
      },
      {
        id: 'vitk-ben-2',
        description: 'Protects against late-onset bleeding (weeks 2-12), which is most dangerous and can cause brain hemorrhage',
        citations: ['cit-vitk-2']
      }
    ],
    risks: [
      {
        id: 'vitk-risk-1',
        description: 'Temporary pain and swelling at injection site',
        frequency: 'Common (up to 30 in 100)',
        severity: 'mild',
        citations: ['cit-vitk-1']
      },
      {
        id: 'vitk-risk-2',
        description: 'Minor bruising at injection site',
        frequency: 'Occasional (5-10 in 100)',
        severity: 'mild',
        citations: ['cit-vitk-1']
      }
    ],
    alternatives: [
      {
        id: 'vitk-alt-1',
        name: 'Oral Vitamin K',
        description: 'Multiple oral doses given over several weeks. Requires strict adherence to schedule.',
        isEquivalent: false,
        benefits: [
          {
            id: 'vitk-alt-ben-1',
            description: 'Avoids injection pain',
            citations: ['cit-vitk-2']
          }
        ],
        risks: [
          {
            id: 'vitk-alt-risk-1',
            description: 'Less effective than injection; late VKDB occurs in approximately 1.4-6.4 per 100,000 infants receiving oral prophylaxis vs 0.01 per 100,000 with injection',
            frequency: '1-6 in 100,000',
            severity: 'severe',
            citations: ['cit-vitk-2']
          },
          {
            id: 'vitk-alt-risk-2',
            description: 'Requires multiple doses and may be missed or vomited',
            severity: 'moderate',
            citations: ['cit-vitk-2']
          }
        ],
        evidenceLevel: 'systematic-review',
        citations: ['cit-vitk-2']
      }
    ],
    whatIfWeWait: 'Delaying or declining vitamin K significantly increases risk of VKDB, particularly late-onset VKDB (weeks 2-12), which carries a 20-50% risk of permanent brain damage or death. Bleeding can occur suddenly without warning. Time-sensitive: ideally given within 6 hours of birth.',
    contraindications: [],
    questionsToAsk: [
      'What are the ingredients in the vitamin K injection?',
      'When exactly will it be given?',
      'Can I hold my baby during the injection?',
      'What should I watch for after the injection?'
    ],
    citations: [citations['cit-vitk-1'], citations['cit-vitk-2']],
    lastReviewed: '2024-01-15',
    nextReviewDue: '2025-01-15',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer'
  },
  {
    id: 'proc-hepatitis-b',
    name: 'Hepatitis B Vaccine (Birth Dose)',
    shortName: 'Hep B Vaccine',
    category: 'vaccination',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'The first dose of hepatitis B vaccine, typically given within 24 hours of birth, to protect against hepatitis B virus infection.',
    indication: 'Hepatitis B is a serious liver infection. Babies infected at birth have a 90% chance of developing chronic infection, which can lead to liver disease and cancer.',
    benefits: [
      {
        id: 'hepb-ben-1',
        description: 'Prevents mother-to-child transmission in over 95% of cases when given with immunoglobulin (if mother is HBV-positive)',
        citations: ['cit-hepb-1', 'cit-hepb-2']
      },
      {
        id: 'hepb-ben-2',
        description: 'Provides early protection against unknown exposure in hospital and community',
        citations: ['cit-hepb-1']
      }
    ],
    risks: [
      {
        id: 'hepb-risk-1',
        description: 'Mild soreness or redness at injection site',
        frequency: 'Common (10-20 in 100)',
        severity: 'mild',
        citations: ['cit-hepb-1']
      },
      {
        id: 'hepb-risk-2',
        description: 'Low-grade fever',
        frequency: 'Uncommon (1-5 in 100)',
        severity: 'mild',
        citations: ['cit-hepb-1']
      },
      {
        id: 'hepb-risk-3',
        description: 'Severe allergic reaction',
        frequency: 'Very rare (less than 1 in 1,000,000)',
        severity: 'severe',
        citations: ['cit-hepb-2']
      }
    ],
    alternatives: [
      {
        id: 'hepb-alt-1',
        name: 'Delayed Vaccination',
        description: 'Starting vaccine series at 1-2 months of age instead of at birth',
        isEquivalent: false,
        benefits: [
          {
            id: 'hepb-alt-ben-1',
            description: 'May be acceptable if mother is confirmed HBV-negative',
            citations: ['cit-hepb-1']
          }
        ],
        risks: [
          {
            id: 'hepb-alt-risk-1',
            description: 'Window of vulnerability to unknown HBV exposure',
            severity: 'moderate',
            citations: ['cit-hepb-1']
          },
          {
            id: 'hepb-alt-risk-2',
            description: 'Critical if mother is HBV-positive or status unknown; delay significantly increases transmission risk',
            severity: 'severe',
            citations: ['cit-hepb-2']
          }
        ],
        evidenceLevel: 'expert-consensus',
        citations: ['cit-hepb-1']
      }
    ],
    whatIfWeWait: 'If mother is HBV-positive or status is unknown, delaying the birth dose significantly increases the risk of chronic infection. For mothers confirmed HBV-negative, delayed vaccination (by 1-2 months) may be discussed but leaves a window of vulnerability. Time-sensitive: most effective within 12-24 hours of birth for at-risk infants.',
    contraindications: [
      {
        id: 'hepb-contra-1',
        condition: 'Severe allergic reaction to previous dose or vaccine component',
        severity: 'absolute',
        explanation: 'History of anaphylaxis to yeast or other vaccine component',
        citations: ['cit-hepb-1']
      }
    ],
    questionsToAsk: [
      'What is my hepatitis B status?',
      'What are the vaccine ingredients?',
      'Will my baby need additional doses?',
      'Can it be given at the same time as other procedures?'
    ],
    citations: [citations['cit-hepb-1'], citations['cit-hepb-2']],
    lastReviewed: '2024-01-10',
    nextReviewDue: '2025-01-10',
    reviewedBy: 'Dr. Michael Torres, Clinical Reviewer'
  },
  {
    id: 'proc-hearing-screen',
    name: 'Newborn Hearing Screening',
    shortName: 'Hearing Screen',
    category: 'screening',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'A painless, non-invasive test performed before hospital discharge to detect hearing loss in newborns.',
    indication: 'Approximately 1-3 in 1,000 babies are born with detectable hearing loss. Early detection allows for intervention that significantly improves language and developmental outcomes.',
    benefits: [
      {
        id: 'hearing-ben-1',
        description: 'Identifies hearing loss early, when intervention is most effective for speech and language development',
        citations: ['cit-hearing-1']
      },
      {
        id: 'hearing-ben-2',
        description: 'Non-invasive, painless, and typically completed in 5-10 minutes while baby sleeps',
        citations: ['cit-hearing-1']
      }
    ],
    risks: [
      {
        id: 'hearing-risk-1',
        description: 'False positive results requiring repeat testing (5-10% of initial screens)',
        frequency: '5-10 in 100',
        severity: 'mild',
        citations: ['cit-hearing-1']
      },
      {
        id: 'hearing-risk-2',
        description: 'Parental anxiety from false positive results',
        severity: 'mild',
        citations: ['cit-hearing-1']
      }
    ],
    alternatives: [
      {
        id: 'hearing-alt-1',
        name: 'Delayed Screening',
        description: 'Scheduling hearing test at a later well-child visit',
        isEquivalent: false,
        benefits: [
          {
            id: 'hearing-alt-ben-1',
            description: 'May reduce false positives (ear canals clearer)',
            citations: ['cit-hearing-1']
          }
        ],
        risks: [
          {
            id: 'hearing-alt-risk-1',
            description: 'Delays early intervention if hearing loss is present; critical window for language development is 0-6 months',
            severity: 'moderate',
            citations: ['cit-hearing-1']
          },
          {
            id: 'hearing-alt-risk-2',
            description: 'May be missed if family does not return for appointment',
            severity: 'moderate',
            citations: ['cit-hearing-1']
          }
        ],
        evidenceLevel: 'systematic-review',
        citations: ['cit-hearing-1']
      }
    ],
    whatIfWeWait: 'Delaying screening postpones detection of hearing loss, which is most effectively treated when identified before 3-6 months of age. Hearing loss affects language acquisition during a critical developmental window. Screening can be done at a later visit if preferred, but follow-up is essential. Not time-critical if follow-up is scheduled within 1 month.',
    contraindications: [],
    questionsToAsk: [
      'What type of screening method will be used?',
      'What happens if my baby does not pass the screening?',
      'When will I receive the results?',
      'Can I be present during the screening?'
    ],
    citations: [citations['cit-hearing-1']],
    lastReviewed: '2024-01-12',
    nextReviewDue: '2025-01-12',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer'
  },
  {
    id: 'proc-eye-prophylaxis',
    name: 'Newborn Eye Prophylaxis (Erythromycin Ointment)',
    shortName: 'Eye Ointment',
    category: 'medication',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'Antibiotic ointment applied to newborn eyes within hours of birth to prevent eye infections from bacteria encountered during delivery.',
    indication: 'Prevents ophthalmia neonatorum (eye infection) caused by gonorrhea or chlamydia, which can lead to blindness if untreated.',
    benefits: [
      {
        id: 'eye-ben-1',
        description: 'Prevents gonococcal eye infection, which historically caused blindness in thousands of infants annually',
        citations: ['cit-eyeproph-1']
      },
      {
        id: 'eye-ben-2',
        description: 'Provides protection even if maternal infection is unknown or untreated',
        citations: ['cit-eyeproph-1']
      }
    ],
    risks: [
      {
        id: 'eye-risk-1',
        description: 'Temporary blurred vision or eye irritation for 1-2 hours',
        frequency: 'Common (20-40 in 100)',
        severity: 'mild',
        citations: ['cit-eyeproph-1']
      },
      {
        id: 'eye-risk-2',
        description: 'May temporarily interfere with early eye contact and bonding',
        severity: 'mild',
        citations: ['cit-eyeproph-1']
      }
    ],
    alternatives: [
      {
        id: 'eye-alt-1',
        name: 'Decline Prophylaxis',
        description: 'Opt out if mother has documented negative STI screening and low-risk sexual history',
        isEquivalent: false,
        benefits: [
          {
            id: 'eye-alt-ben-1',
            description: 'Avoids temporary eye irritation and promotes immediate clear vision for bonding',
            citations: ['cit-eyeproph-1']
          }
        ],
        risks: [
          {
            id: 'eye-alt-risk-1',
            description: 'Risk of gonococcal conjunctivitis if maternal infection is undetected (risk depends on maternal screening)',
            severity: 'severe',
            citations: ['cit-eyeproph-1']
          }
        ],
        evidenceLevel: 'expert-consensus',
        citations: ['cit-eyeproph-1']
      }
    ],
    whatIfWeWait: 'Gonococcal eye infections develop rapidly (within 24-48 hours) and can cause permanent vision damage. Risk is extremely low if mother has documented negative STI screening. Some jurisdictions allow opt-out with informed consent and confirmed negative maternal testing. Timing matters: most effective within first few hours after birth.',
    contraindications: [
      {
        id: 'eye-contra-1',
        condition: 'Known allergy to erythromycin',
        severity: 'absolute',
        explanation: 'Severe allergic reaction to macrolide antibiotics',
        citations: ['cit-eyeproph-1']
      }
    ],
    questionsToAsk: [
      'What were my STI screening results during pregnancy?',
      'Can the ointment be delayed to allow initial skin-to-skin time?',
      'What are signs of eye infection to watch for?',
      'Is this legally required in our jurisdiction?'
    ],
    citations: [citations['cit-eyeproph-1']],
    lastReviewed: '2024-01-08',
    nextReviewDue: '2025-01-08',
    reviewedBy: 'Dr. Michael Torres, Clinical Reviewer'
  },
  {
    id: 'proc-cesarean-section',
    name: 'Cesarean Section (C-Section)',
    shortName: 'C-Section',
    category: 'surgical',
    stage: 'labor',
    urgencyLevel: 'urgent',
    summary: 'Surgical delivery of a baby through incisions in the abdomen and uterus. May be planned or performed urgently depending on medical circumstances.',
    indication: 'Performed when vaginal delivery poses risks to mother or baby, including labor complications, fetal distress, breech presentation, placental issues, or maternal health conditions.',
    benefits: [
      {
        id: 'csec-ben-1',
        description: 'Life-saving for mother and/or baby in emergency situations (fetal distress, hemorrhage, cord prolapse)',
        citations: ['cit-csection-1', 'cit-csection-2']
      },
      {
        id: 'csec-ben-2',
        description: 'May reduce risks associated with difficult vaginal delivery (e.g., breech, macrosomia, certain maternal conditions)',
        citations: ['cit-csection-1']
      },
      {
        id: 'csec-ben-3',
        description: 'Planned timing provides predictability for some medical and logistical factors',
        citations: ['cit-csection-1']
      }
    ],
    risks: [
      {
        id: 'csec-risk-1',
        description: 'Infection at incision site or in uterus',
        frequency: '5-10 in 100',
        severity: 'moderate',
        citations: ['cit-csection-2']
      },
      {
        id: 'csec-risk-2',
        description: 'Increased bleeding compared to vaginal delivery',
        frequency: '2-3 in 100',
        severity: 'moderate',
        citations: ['cit-csection-2']
      },
      {
        id: 'csec-risk-3',
        description: 'Blood clots in legs or lungs',
        frequency: '1-2 in 100',
        severity: 'severe',
        citations: ['cit-csection-2']
      },
      {
        id: 'csec-risk-4',
        description: 'Longer recovery time (4-6 weeks) compared to vaginal delivery',
        frequency: 'Universal',
        severity: 'moderate',
        citations: ['cit-csection-1']
      },
      {
        id: 'csec-risk-5',
        description: 'Complications in future pregnancies (placenta previa, accreta, uterine rupture)',
        frequency: '1-2 in 100 in subsequent pregnancies',
        severity: 'severe',
        citations: ['cit-csection-2']
      },
      {
        id: 'csec-risk-6',
        description: 'Respiratory issues for baby (transient tachypnea)',
        frequency: '5-7 in 100 for planned C-section',
        severity: 'mild',
        citations: ['cit-csection-2']
      }
    ],
    alternatives: [
      {
        id: 'csec-alt-1',
        name: 'Vaginal Delivery',
        description: 'Labor and vaginal birth (when medically appropriate)',
        isEquivalent: false,
        benefits: [
          {
            id: 'csec-alt-ben-1',
            description: 'Shorter recovery time (1-2 weeks typical)',
            citations: ['cit-csection-1']
          },
          {
            id: 'csec-alt-ben-2',
            description: 'Lower risk of infection and blood clots',
            citations: ['cit-csection-2']
          },
          {
            id: 'csec-alt-ben-3',
            description: 'No impact on future pregnancy options',
            citations: ['cit-csection-1']
          }
        ],
        risks: [
          {
            id: 'csec-alt-risk-1',
            description: 'Perineal tearing (varies by degree; 3rd/4th degree tears occur in 2-5 in 100)',
            frequency: '2-5 in 100 for severe tears',
            severity: 'moderate',
            citations: ['cit-csection-2']
          },
          {
            id: 'csec-alt-risk-2',
            description: 'Not appropriate if medical indications for C-section exist',
            severity: 'severe',
            citations: ['cit-csection-1']
          }
        ],
        evidenceLevel: 'systematic-review',
        citations: ['cit-csection-1', 'cit-csection-2']
      }
    ],
    whatIfWeWait: 'In emergency situations, delaying C-section can result in harm to mother or baby. For planned C-sections without urgent indications, discussing timing and attempting vaginal delivery may be options depending on specific circumstances. This is highly individualized—urgency depends on the reason C-section is recommended. Always discuss with your healthcare team.',
    contraindications: [
      {
        id: 'csec-contra-1',
        condition: 'None absolute for emergency C-section',
        severity: 'relative',
        explanation: 'When medically necessary, benefits outweigh risks. For elective C-section, relative contraindications include desire for large family (increases future pregnancy risks) or prior classical uterine incision.',
        citations: ['cit-csection-1']
      }
    ],
    questionsToAsk: [
      'What is the specific medical reason for recommending C-section?',
      'Is this an emergency or scheduled procedure?',
      'What are the risks for future pregnancies?',
      'What will my recovery look like?',
      'Can my partner be present during the surgery?',
      'What type of anesthesia will be used?'
    ],
    citations: [citations['cit-csection-1'], citations['cit-csection-2']],
    lastReviewed: '2024-01-20',
    nextReviewDue: '2025-01-20',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer'
  },
  {
    id: 'proc-delayed-cord-clamping',
    name: 'Delayed Cord Clamping',
    shortName: 'Delayed Clamping',
    category: 'monitoring',
    stage: 'labor',
    urgencyLevel: 'routine',
    summary: 'Waiting 30-180 seconds after birth before clamping and cutting the umbilical cord, allowing additional blood to transfer from placenta to baby.',
    indication: 'Increases infant iron stores and blood volume, particularly beneficial for preterm infants.',
    benefits: [
      {
        id: 'cord-ben-1',
        description: 'Increases iron stores and reduces risk of anemia in first year of life',
        citations: ['cit-cordclamp-1']
      },
      {
        id: 'cord-ben-2',
        description: 'Improves blood volume and blood pressure stability in newborn',
        citations: ['cit-cordclamp-1']
      },
      {
        id: 'cord-ben-3',
        description: 'Particularly beneficial for preterm infants (reduces need for blood transfusions, lowers risk of brain hemorrhage)',
        citations: ['cit-cordclamp-1']
      }
    ],
    risks: [
      {
        id: 'cord-risk-1',
        description: 'Slightly increased jaundice risk requiring phototherapy',
        frequency: '2-3 in 100 additional cases',
        severity: 'mild',
        citations: ['cit-cordclamp-1']
      },
      {
        id: 'cord-risk-2',
        description: 'May delay immediate medical interventions if baby requires resuscitation',
        severity: 'moderate',
        citations: ['cit-cordclamp-1']
      }
    ],
    alternatives: [
      {
        id: 'cord-alt-1',
        name: 'Immediate Cord Clamping',
        description: 'Clamping cord within 10-15 seconds of birth',
        isEquivalent: false,
        benefits: [
          {
            id: 'cord-alt-ben-1',
            description: 'Allows for immediate newborn assessment and intervention if needed',
            citations: ['cit-cordclamp-1']
          },
          {
            id: 'cord-alt-ben-2',
            description: 'May slightly reduce jaundice risk',
            citations: ['cit-cordclamp-1']
          }
        ],
        risks: [
          {
            id: 'cord-alt-risk-1',
            description: 'Reduces blood volume transfer; higher risk of iron deficiency in first year',
            severity: 'mild',
            citations: ['cit-cordclamp-1']
          }
        ],
        evidenceLevel: 'systematic-review',
        citations: ['cit-cordclamp-1']
      }
    ],
    whatIfWeWait: 'This IS the "waiting" option. Standard practice now favors delayed clamping for 30-180 seconds in healthy newborns. Immediate clamping may be necessary if baby requires urgent resuscitation. Not urgent; can be decided during labor or included in birth plan.',
    contraindications: [
      {
        id: 'cord-contra-1',
        condition: 'Newborn requiring immediate resuscitation',
        severity: 'relative',
        explanation: 'If baby needs urgent medical intervention, immediate clamping allows faster access to care',
        citations: ['cit-cordclamp-1']
      }
    ],
    questionsToAsk: [
      'What is your standard practice for cord clamping timing?',
      'Can I still do delayed clamping if I plan to bank cord blood?',
      'What happens if my baby needs immediate medical attention?'
    ],
    citations: [citations['cit-cordclamp-1']],
    lastReviewed: '2024-01-18',
    nextReviewDue: '2025-01-18',
    reviewedBy: 'Dr. Michael Torres, Clinical Reviewer'
  },
  {
    id: 'proc-glucose-screening',
    name: 'Newborn Glucose Screening',
    shortName: 'Glucose Check',
    category: 'screening',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'Blood glucose testing for at-risk newborns to detect hypoglycemia (low blood sugar), which can cause seizures or brain damage if severe and untreated.',
    indication: 'Recommended for babies at higher risk: infants of diabetic mothers, large or small for gestational age, preterm, or showing symptoms of low blood sugar.',
    benefits: [
      {
        id: 'glucose-ben-1',
        description: 'Detects hypoglycemia before symptoms become severe',
        citations: ['cit-glucose-1']
      },
      {
        id: 'glucose-ben-2',
        description: 'Allows early intervention with feeding or IV glucose',
        citations: ['cit-glucose-1']
      }
    ],
    risks: [
      {
        id: 'glucose-risk-1',
        description: 'Heel prick causes brief pain',
        frequency: 'Universal',
        severity: 'mild',
        citations: ['cit-glucose-1']
      },
      {
        id: 'glucose-risk-2',
        description: 'May lead to unnecessary formula supplementation or mother-baby separation if interpreted too cautiously',
        frequency: '5-10 in 100',
        severity: 'mild',
        citations: ['cit-glucose-1']
      }
    ],
    alternatives: [
      {
        id: 'glucose-alt-1',
        name: 'Clinical Monitoring Only',
        description: 'Watch for symptoms (jitteriness, poor feeding, lethargy) without routine screening',
        isEquivalent: false,
        benefits: [
          {
            id: 'glucose-alt-ben-1',
            description: 'Avoids heel pricks and potential overtreatment',
            citations: ['cit-glucose-1']
          }
        ],
        risks: [
          {
            id: 'glucose-alt-risk-1',
            description: 'May miss asymptomatic hypoglycemia in at-risk infants',
            severity: 'moderate',
            citations: ['cit-glucose-1']
          }
        ],
        evidenceLevel: 'expert-consensus',
        citations: ['cit-glucose-1']
      }
    ],
    whatIfWeWait: 'For at-risk infants, delaying screening increases the chance that severe hypoglycemia will go undetected. Symptoms can develop quickly. For low-risk, healthy term infants, routine screening is not typically recommended. Timing depends on risk factors; typically done within first 2-4 hours after birth for at-risk babies.',
    contraindications: [],
    questionsToAsk: [
      'Is my baby considered at-risk for low blood sugar?',
      'What blood sugar level is considered too low?',
      'What happens if the screening shows low glucose?',
      'Can I breastfeed immediately to help stabilize blood sugar?'
    ],
    citations: [citations['cit-glucose-1']],
    lastReviewed: '2024-01-14',
    nextReviewDue: '2025-01-14',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer'
  },
  {
    id: 'proc-gbs-antibiotics',
    name: 'Intrapartum Antibiotic Prophylaxis for GBS',
    shortName: 'GBS Antibiotics',
    category: 'medication',
    stage: 'labor',
    urgencyLevel: 'urgent',
    summary: 'Antibiotics given to the mother during labor if she tests positive for Group B Streptococcus (GBS) bacteria, to reduce risk of early-onset GBS infection in the newborn.',
    indication: 'GBS is commonly found in vagina and rectum (15-25% of pregnant women). Rarely, it can cause serious infection in newborns, including sepsis, pneumonia, and meningitis.',
    benefits: [
      {
        id: 'gbs-ben-1',
        description: 'Reduces risk of early-onset GBS disease in newborns by approximately 80%',
        citations: ['cit-antibiotic-1']
      },
      {
        id: 'gbs-ben-2',
        description: 'Lowers newborn mortality and serious complications from GBS infection',
        citations: ['cit-antibiotic-1']
      }
    ],
    risks: [
      {
        id: 'gbs-risk-1',
        description: 'Maternal allergic reaction to penicillin (mild rash to severe anaphylaxis)',
        frequency: '1-10 in 1,000 for mild reactions; less than 1 in 10,000 for severe',
        severity: 'moderate',
        citations: ['cit-antibiotic-1']
      },
      {
        id: 'gbs-risk-2',
        description: 'Possible impact on newborn gut microbiome',
        severity: 'mild',
        citations: ['cit-antibiotic-1']
      },
      {
        id: 'gbs-risk-3',
        description: 'Rare increased risk of other bacterial infections resistant to antibiotics',
        frequency: 'Less than 1 in 1,000',
        severity: 'moderate',
        citations: ['cit-antibiotic-1']
      }
    ],
    alternatives: [
      {
        id: 'gbs-alt-1',
        name: 'Decline Prophylaxis',
        description: 'Opt out of antibiotics despite positive GBS status',
        isEquivalent: false,
        benefits: [
          {
            id: 'gbs-alt-ben-1',
            description: 'Avoids antibiotic exposure and potential allergic reaction',
            citations: ['cit-antibiotic-1']
          }
        ],
        risks: [
          {
            id: 'gbs-alt-risk-1',
            description: 'Significantly higher risk of early-onset GBS disease; without prophylaxis, 1-2 in 100 babies of GBS-positive mothers develop infection vs 0.2-0.4 in 100 with prophylaxis',
            frequency: '1-2 in 100',
            severity: 'severe',
            citations: ['cit-antibiotic-1']
          }
        ],
        evidenceLevel: 'expert-consensus',
        citations: ['cit-antibiotic-1']
      }
    ],
    whatIfWeWait: 'GBS disease develops rapidly in the first 24-48 hours of life. Antibiotics must be given during labor (ideally at least 4 hours before delivery) to be effective. Waiting until after birth is too late for prevention. Time-sensitive: must be administered during active labor.',
    contraindications: [
      {
        id: 'gbs-contra-1',
        condition: 'Severe penicillin allergy with history of anaphylaxis',
        severity: 'relative',
        explanation: 'Alternative antibiotics (e.g., clindamycin, vancomycin) used if penicillin allergy documented',
        citations: ['cit-antibiotic-1']
      }
    ],
    questionsToAsk: [
      'What were my GBS test results?',
      'Am I allergic to penicillin or other antibiotics?',
      'How will the antibiotics be given during labor?',
      'What signs of infection should we watch for in my baby?'
    ],
    citations: [citations['cit-antibiotic-1']],
    lastReviewed: '2024-01-16',
    nextReviewDue: '2025-01-16',
    reviewedBy: 'Dr. Michael Torres, Clinical Reviewer'
  },
  {
    id: 'proc-circumcision',
    name: 'Male Circumcision',
    shortName: 'Circumcision',
    category: 'surgical',
    stage: 'postpartum',
    urgencyLevel: 'elective',
    summary: 'Surgical removal of the foreskin covering the tip of the penis. This is an elective procedure, not medically necessary in most cases.',
    indication: 'Elective procedure; some families choose circumcision for religious, cultural, or personal reasons. Medical indications are rare (e.g., recurrent severe infections, phimosis).',
    benefits: [
      {
        id: 'circ-ben-1',
        description: 'Reduced risk of urinary tract infections in first year (from ~1% to ~0.1%)',
        citations: ['cit-circum-1', 'cit-circum-2']
      },
      {
        id: 'circ-ben-2',
        description: 'Reduced lifetime risk of penile cancer (already very rare: 1 in 100,000 men)',
        citations: ['cit-circum-2']
      },
      {
        id: 'circ-ben-3',
        description: 'Reduced risk of some sexually transmitted infections in adulthood',
        citations: ['cit-circum-1']
      }
    ],
    risks: [
      {
        id: 'circ-risk-1',
        description: 'Pain during and after procedure (local anesthesia used)',
        frequency: 'Universal',
        severity: 'mild',
        citations: ['cit-circum-1']
      },
      {
        id: 'circ-risk-2',
        description: 'Minor bleeding or infection',
        frequency: '2-3 in 100',
        severity: 'mild',
        citations: ['cit-circum-2']
      },
      {
        id: 'circ-risk-3',
        description: 'Rare serious complications (excessive bleeding, damage to penis, need for surgical revision)',
        frequency: '1-2 in 1,000',
        severity: 'severe',
        citations: ['cit-circum-2']
      }
    ],
    alternatives: [
      {
        id: 'circ-alt-1',
        name: 'Leave Intact',
        description: 'Do not perform circumcision',
        isEquivalent: true,
        benefits: [
          {
            id: 'circ-alt-ben-1',
            description: 'No surgical risks or pain',
            citations: ['cit-circum-1']
          },
          {
            id: 'circ-alt-ben-2',
            description: 'Preserves natural anatomy and function',
            citations: ['cit-circum-1']
          }
        ],
        risks: [
          {
            id: 'circ-alt-risk-1',
            description: 'Slightly higher risk of UTIs in first year (still rare: ~1%)',
            frequency: '~1 in 100',
            severity: 'mild',
            citations: ['cit-circum-2']
          }
        ],
        evidenceLevel: 'systematic-review',
        citations: ['cit-circum-1', 'cit-circum-2']
      }
    ],
    whatIfWeWait: 'Circumcision can be performed later, though it becomes more complex and requires general anesthesia after infancy. There is no medical urgency to this decision. The AAP states that benefits are not great enough to recommend routine circumcision, but are sufficient to justify access for families who choose it. This is a personal decision.',
    contraindications: [
      {
        id: 'circ-contra-1',
        condition: 'Prematurity, illness, bleeding disorder, or abnormal penile anatomy (hypospadias, epispadias)',
        severity: 'absolute',
        explanation: 'Medical contraindications require delay or alternative approach',
        citations: ['cit-circum-1']
      }
    ],
    questionsToAsk: [
      'What type of anesthesia will be used?',
      'What are the care instructions after the procedure?',
      'What should I watch for as signs of complications?',
      'If we choose not to circumcise, what care is needed for an intact penis?'
    ],
    citations: [citations['cit-circum-1'], citations['cit-circum-2']],
    lastReviewed: '2024-01-11',
    nextReviewDue: '2025-01-11',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer'
  },
  {
    id: 'proc-jaundice-phototherapy',
    name: 'Phototherapy for Newborn Jaundice',
    shortName: 'Phototherapy',
    category: 'monitoring',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'Treatment using special blue lights to reduce bilirubin levels in babies with jaundice. Bilirubin is a yellow pigment from normal red blood cell breakdown; high levels can be harmful.',
    indication: 'Jaundice is common in newborns (50-60%). Phototherapy is used when bilirubin levels rise above safe thresholds to prevent kernicterus (rare but serious brain damage).',
    benefits: [
      {
        id: 'jaund-ben-1',
        description: 'Safely lowers bilirubin levels and prevents kernicterus',
        citations: ['cit-jaundice-1']
      },
      {
        id: 'jaund-ben-2',
        description: 'Non-invasive and highly effective; avoids need for exchange transfusion in most cases',
        citations: ['cit-jaundice-1']
      }
    ],
    risks: [
      {
        id: 'jaund-risk-1',
        description: 'Temporary separation from parents (baby must be under lights)',
        frequency: 'Universal during treatment',
        severity: 'mild',
        citations: ['cit-jaundice-1']
      },
      {
        id: 'jaund-risk-2',
        description: 'Loose stools and mild dehydration',
        frequency: 'Common (20-30 in 100)',
        severity: 'mild',
        citations: ['cit-jaundice-1']
      },
      {
        id: 'jaund-risk-3',
        description: 'Temporary bronze discoloration of skin (if liver issues present)',
        frequency: 'Rare',
        severity: 'mild',
        citations: ['cit-jaundice-1']
      }
    ],
    alternatives: [
      {
        id: 'jaund-alt-1',
        name: 'Watchful Waiting',
        description: 'Monitor bilirubin levels closely without immediate treatment for borderline elevations',
        isEquivalent: false,
        benefits: [
          {
            id: 'jaund-alt-ben-1',
            description: 'Avoids phototherapy if levels naturally decline with feeding and time',
            citations: ['cit-jaundice-1']
          }
        ],
        risks: [
          {
            id: 'jaund-alt-risk-1',
            description: 'Risk of bilirubin rising to dangerous levels; kernicterus is rare but devastating',
            severity: 'severe',
            citations: ['cit-jaundice-1']
          }
        ],
        evidenceLevel: 'expert-consensus',
        citations: ['cit-jaundice-1']
      }
    ],
    whatIfWeWait: 'If bilirubin levels are significantly elevated, delaying phototherapy increases risk of kernicterus. For borderline levels, close monitoring (recheck in 12-24 hours) may be appropriate. Decision depends on specific bilirubin level, baby age, and risk factors. Your pediatrician will use standardized charts to determine urgency. Not all jaundice requires treatment, but when indicated, timing matters.',
    contraindications: [
      {
        id: 'jaund-contra-1',
        condition: 'Congenital porphyria (extremely rare metabolic condition)',
        severity: 'absolute',
        explanation: 'Phototherapy contraindicated due to blistering and photosensitivity',
        citations: ['cit-jaundice-1']
      }
    ],
    questionsToAsk: [
      'What is my baby\'s current bilirubin level?',
      'What is the threshold for needing treatment?',
      'Can I hold and feed my baby during phototherapy?',
      'How long will treatment last?',
      'Can we use a home phototherapy blanket instead?'
    ],
    citations: [citations['cit-jaundice-1']],
    lastReviewed: '2024-01-13',
    nextReviewDue: '2025-01-13',
    reviewedBy: 'Dr. Michael Torres, Clinical Reviewer'
  },
  {
    id: 'proc-skin-to-skin',
    name: 'Immediate Skin-to-Skin Contact',
    shortName: 'Skin-to-Skin',
    category: 'monitoring',
    stage: 'labor',
    urgencyLevel: 'routine',
    summary: 'Placing baby directly on parent\'s bare chest immediately after birth for at least one hour. This practice supports bonding, breastfeeding, and newborn temperature regulation.',
    indication: 'Recommended for all healthy newborns to promote physiological stability, bonding, and breastfeeding initiation.',
    benefits: [
      {
        id: 'skin-ben-1',
        description: 'Stabilizes newborn temperature, heart rate, breathing, and blood sugar',
        citations: ['cit-skintosk-1']
      },
      {
        id: 'skin-ben-2',
        description: 'Increases likelihood of successful breastfeeding',
        citations: ['cit-skintosk-1']
      },
      {
        id: 'skin-ben-3',
        description: 'Promotes bonding and reduces infant crying',
        citations: ['cit-skintosk-1']
      },
      {
        id: 'skin-ben-4',
        description: 'May reduce postpartum depression and anxiety',
        citations: ['cit-skintosk-1']
      }
    ],
    risks: [
      {
        id: 'skin-risk-1',
        description: 'Rare risk of sudden infant collapse if baby not monitored appropriately (extremely rare: <3 in 100,000)',
        frequency: 'Less than 3 in 100,000',
        severity: 'severe',
        citations: ['cit-skintosk-1']
      },
      {
        id: 'skin-risk-2',
        description: 'Delays certain newborn procedures (weighing, measuring, eye ointment)',
        severity: 'mild',
        citations: ['cit-skintosk-1']
      }
    ],
    alternatives: [
      {
        id: 'skin-alt-1',
        name: 'Delayed Skin-to-Skin',
        description: 'Complete initial procedures first, then skin-to-skin',
        isEquivalent: false,
        benefits: [
          {
            id: 'skin-alt-ben-1',
            description: 'Allows immediate newborn assessment and procedures',
            citations: ['cit-skintosk-1']
          }
        ],
        risks: [
          {
            id: 'skin-alt-risk-1',
            description: 'Loses benefits of immediate contact (bonding, temperature regulation, breastfeeding initiation)',
            severity: 'mild',
            citations: ['cit-skintosk-1']
          }
        ],
        evidenceLevel: 'systematic-review',
        citations: ['cit-skintosk-1']
      }
    ],
    whatIfWeWait: 'Delaying skin-to-skin reduces immediate bonding and breastfeeding success slightly, but skin-to-skin can be initiated at any time and still provides benefits. Most routine newborn procedures can be delayed or performed while baby is on parent. Not urgent, but immediate contact is ideal for healthy newborns.',
    contraindications: [
      {
        id: 'skin-contra-1',
        condition: 'Newborn requiring immediate resuscitation or medical intervention',
        severity: 'absolute',
        explanation: 'Medical needs take priority; skin-to-skin initiated once baby is stable',
        citations: ['cit-skintosk-1']
      }
    ],
    questionsToAsk: [
      'Can we do skin-to-skin immediately after birth?',
      'How long can we delay routine procedures?',
      'What monitoring will be in place during skin-to-skin?',
      'Can my partner do skin-to-skin if I have a C-section or am not able?'
    ],
    citations: [citations['cit-skintosk-1']],
    lastReviewed: '2024-01-17',
    nextReviewDue: '2025-01-17',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer'
  }
]
