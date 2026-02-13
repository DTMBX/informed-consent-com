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
  },
  'cit-rsv-1': {
    id: 'cit-rsv-1',
    title: 'Updated Guidance for Palivizumab Prophylaxis Among Infants and Young Children at Increased Risk of Hospitalization for Respiratory Syncytial Virus Infection',
    authors: 'American Academy of Pediatrics Committee on Infectious Diseases',
    source: 'Pediatrics',
    date: '2014-08',
    url: 'https://publications.aap.org',
    evidenceLevel: 'expert-consensus'
  },
  'cit-rsv-2': {
    id: 'cit-rsv-2',
    title: 'Respiratory Syncytial Virus Infection: Epidemiology, Clinical Features, and Diagnosis',
    authors: 'Hall et al.',
    source: 'Current Topics in Microbiology and Immunology',
    date: '2013',
    evidenceLevel: 'systematic-review'
  },
  'cit-rsv-3': {
    id: 'cit-rsv-3',
    title: 'Nirsevimab for Prevention of RSV in Healthy Late-Preterm and Term Infants',
    authors: 'Hammitt et al.',
    source: 'New England Journal of Medicine',
    date: '2022-09',
    url: 'https://nejm.org',
    evidenceLevel: 'rct'
  },
  'cit-rsv-4': {
    id: 'cit-rsv-4',
    title: 'RSV Disease Burden and Risk Factors for Severe Disease in Infants',
    authors: 'Shi et al.',
    source: 'The Lancet',
    date: '2017-02',
    evidenceLevel: 'systematic-review'
  },
  'cit-dtap-1': {
    id: 'cit-dtap-1',
    title: 'Diphtheria, Tetanus, and Pertussis: Recommendations for Vaccine Use',
    authors: 'CDC Advisory Committee on Immunization Practices',
    source: 'MMWR',
    date: '2023-05',
    url: 'https://cdc.gov',
    evidenceLevel: 'expert-consensus'
  },
  'cit-dtap-2': {
    id: 'cit-dtap-2',
    title: 'Safety of Acellular Pertussis Vaccine in Infants and Children',
    authors: 'Le Saux et al.',
    source: 'Paediatrics & Child Health',
    date: '2003',
    evidenceLevel: 'systematic-review'
  },
  'cit-mmr-1': {
    id: 'cit-mmr-1',
    title: 'Measles, Mumps, and Rubella (MMR) Vaccination: Safety and Effectiveness',
    authors: 'CDC',
    source: 'MMWR',
    date: '2022-11',
    url: 'https://cdc.gov',
    evidenceLevel: 'expert-consensus'
  },
  'cit-mmr-2': {
    id: 'cit-mmr-2',
    title: 'MMR Vaccine and Autism: An Update of the Scientific Evidence',
    authors: 'DeStefano et al.',
    source: 'Expert Review of Vaccines',
    date: '2019-03',
    evidenceLevel: 'systematic-review'
  },
  'cit-rotavirus-1': {
    id: 'cit-rotavirus-1',
    title: 'Prevention of Rotavirus Gastroenteritis Among Infants and Children',
    authors: 'CDC Advisory Committee on Immunization Practices',
    source: 'MMWR',
    date: '2021-12',
    evidenceLevel: 'expert-consensus'
  },
  'cit-rotavirus-2': {
    id: 'cit-rotavirus-2',
    title: 'Rotavirus Vaccine Safety and Effectiveness: A Systematic Review',
    authors: 'Burnett et al.',
    source: 'Human Vaccines & Immunotherapeutics',
    date: '2020-06',
    evidenceLevel: 'systematic-review'
  },
  'cit-pneumo-1': {
    id: 'cit-pneumo-1',
    title: 'Pneumococcal Conjugate Vaccine for Childhood Immunization',
    authors: 'CDC Advisory Committee on Immunization Practices',
    source: 'MMWR',
    date: '2023-01',
    url: 'https://cdc.gov',
    evidenceLevel: 'expert-consensus'
  },
  'cit-pneumo-2': {
    id: 'cit-pneumo-2',
    title: 'Effectiveness of Pneumococcal Conjugate Vaccines in Preventing Disease',
    authors: 'Hanquet et al.',
    source: 'Vaccine',
    date: '2019-06',
    evidenceLevel: 'systematic-review'
  },
  'cit-flu-child-1': {
    id: 'cit-flu-child-1',
    title: 'Influenza Vaccination in Children: Recommendations',
    authors: 'CDC Advisory Committee on Immunization Practices',
    source: 'MMWR',
    date: '2023-08',
    url: 'https://cdc.gov',
    evidenceLevel: 'expert-consensus'
  },
  'cit-flu-child-2': {
    id: 'cit-flu-child-2',
    title: 'Effectiveness of Influenza Vaccines in Children',
    authors: 'Osterholm et al.',
    source: 'The Lancet Infectious Diseases',
    date: '2012-01',
    evidenceLevel: 'systematic-review'
  },
  'cit-varicella-1': {
    id: 'cit-varicella-1',
    title: 'Varicella Vaccination: United States Recommendations',
    authors: 'CDC Advisory Committee on Immunization Practices',
    source: 'MMWR',
    date: '2022-07',
    url: 'https://cdc.gov',
    evidenceLevel: 'expert-consensus'
  },
  'cit-varicella-2': {
    id: 'cit-varicella-2',
    title: 'Prevention of Varicella: Recommendations for Use of Varicella Vaccines in Children',
    authors: 'Marin et al.',
    source: 'MMWR Recommendations and Reports',
    date: '2007-06',
    evidenceLevel: 'systematic-review'
  },
  'cit-tdap-preg-1': {
    id: 'cit-tdap-preg-1',
    title: 'Tdap Vaccination During Pregnancy: Prevention of Pertussis in Infants',
    authors: 'ACOG Committee Opinion',
    source: 'Obstetrics & Gynecology',
    date: '2023-04',
    url: 'https://acog.org',
    evidenceLevel: 'expert-consensus'
  },
  'cit-tdap-preg-2': {
    id: 'cit-tdap-preg-2',
    title: 'Effectiveness of Maternal Tdap Vaccination in Preventing Infant Pertussis',
    authors: 'Skoff et al.',
    source: 'Clinical Infectious Diseases',
    date: '2021-03',
    evidenceLevel: 'cohort-study'
  },
  'cit-flu-preg-1': {
    id: 'cit-flu-preg-1',
    title: 'Influenza Vaccination During Pregnancy: ACOG Recommendations',
    authors: 'ACOG Committee Opinion',
    source: 'Obstetrics & Gynecology',
    date: '2022-09',
    url: 'https://acog.org',
    evidenceLevel: 'expert-consensus'
  },
  'cit-flu-preg-2': {
    id: 'cit-flu-preg-2',
    title: 'Maternal Influenza Vaccination and Infant Outcomes',
    authors: 'Thompson et al.',
    source: 'JAMA',
    date: '2014-05',
    evidenceLevel: 'cohort-study'
  },
  'cit-waterbirth-1': {
    id: 'cit-waterbirth-1',
    title: 'Immersion in Water During Labor and Delivery',
    authors: 'ACOG Committee Opinion',
    source: 'Obstetrics & Gynecology',
    date: '2016-11',
    url: 'https://acog.org',
    evidenceLevel: 'expert-consensus'
  },
  'cit-waterbirth-2': {
    id: 'cit-waterbirth-2',
    title: 'Effect of Water Immersion During Labour on Maternal and Neonatal Outcomes',
    authors: 'Cluett et al.',
    source: 'Cochrane Database of Systematic Reviews',
    date: '2018-05',
    evidenceLevel: 'systematic-review'
  },
  'cit-delayedcord-1': {
    id: 'cit-delayedcord-1',
    title: 'Delayed Umbilical Cord Clamping After Birth',
    authors: 'ACOG Committee Opinion',
    source: 'Obstetrics & Gynecology',
    date: '2020-12',
    url: 'https://acog.org',
    evidenceLevel: 'expert-consensus'
  },
  'cit-delayedcord-2': {
    id: 'cit-delayedcord-2',
    title: 'Effect of Timing of Umbilical Cord Clamping on Iron Status and Neurodevelopment',
    authors: 'McDonald et al.',
    source: 'Cochrane Database of Systematic Reviews',
    date: '2013-07',
    evidenceLevel: 'systematic-review'
  },
  'cit-acupuncture-1': {
    id: 'cit-acupuncture-1',
    title: 'Acupuncture for Pain Management During Labour',
    authors: 'Smith et al.',
    source: 'Cochrane Database of Systematic Reviews',
    date: '2020-02',
    evidenceLevel: 'systematic-review'
  },
  'cit-hypnobirth-1': {
    id: 'cit-hypnobirth-1',
    title: 'Hypnosis for Pain Management During Labour and Childbirth',
    authors: 'Madden et al.',
    source: 'Cochrane Database of Systematic Reviews',
    date: '2016-05',
    evidenceLevel: 'systematic-review'
  },
  'cit-massage-1': {
    id: 'cit-massage-1',
    title: 'Massage, Reflexology and Other Manual Methods for Pain Management in Labour',
    authors: 'Smith et al.',
    source: 'Cochrane Database of Systematic Reviews',
    date: '2018-03',
    evidenceLevel: 'systematic-review'
  },
  'cit-aromatherapy-1': {
    id: 'cit-aromatherapy-1',
    title: 'Aromatherapy for Pain Management in Labour',
    authors: 'Smith et al.',
    source: 'Cochrane Database of Systematic Reviews',
    date: '2011-07',
    evidenceLevel: 'systematic-review'
  },
  'cit-breastfeed-1': {
    id: 'cit-breastfeed-1',
    title: 'Breastfeeding and Maternal and Infant Health Outcomes in Developed Countries',
    authors: 'Ip et al.',
    source: 'Evidence Report/Technology Assessment, AHRQ',
    date: '2007-04',
    url: 'https://ahrq.gov',
    evidenceLevel: 'systematic-review'
  },
  'cit-breastfeed-2': {
    id: 'cit-breastfeed-2',
    title: 'Optimal Duration of Exclusive Breastfeeding',
    authors: 'Kramer & Kakuma',
    source: 'Cochrane Database of Systematic Reviews',
    date: '2012-08',
    evidenceLevel: 'systematic-review'
  },
  'cit-breastfeed-3': {
    id: 'cit-breastfeed-3',
    title: 'Breastfeeding: A Guide for the Medical Profession',
    authors: 'Lawrence & Lawrence',
    source: 'Elsevier',
    date: '2021',
    evidenceLevel: 'expert-consensus'
  },
  'cit-rooming-in-1': {
    id: 'cit-rooming-in-1',
    title: 'Rooming-in for New Mother and Infant Versus Separate Care',
    authors: 'Jaafar et al.',
    source: 'Cochrane Database of Systematic Reviews',
    date: '2016-08',
    evidenceLevel: 'systematic-review'
  },
  'cit-birth-position-1': {
    id: 'cit-birth-position-1',
    title: 'Maternal Positions and Mobility During First Stage Labour',
    authors: 'Lawrence et al.',
    source: 'Cochrane Database of Systematic Reviews',
    date: '2013-10',
    evidenceLevel: 'systematic-review'
  },
  'cit-birth-position-2': {
    id: 'cit-birth-position-2',
    title: 'Position in the Second Stage of Labour for Women Without Epidural Anaesthesia',
    authors: 'Gupta et al.',
    source: 'Cochrane Database of Systematic Reviews',
    date: '2017-05',
    evidenceLevel: 'systematic-review'
  },
  'cit-doula-1': {
    id: 'cit-doula-1',
    title: 'Continuous Support for Women During Childbirth',
    authors: 'Bohren et al.',
    source: 'Cochrane Database of Systematic Reviews',
    date: '2017-07',
    evidenceLevel: 'systematic-review'
  },
  'cit-midwife-1': {
    id: 'cit-midwife-1',
    title: 'Midwife-led Continuity Models Versus Other Models of Care',
    authors: 'Sandall et al.',
    source: 'Cochrane Database of Systematic Reviews',
    date: '2016-04',
    evidenceLevel: 'systematic-review'
  },
  'cit-vbac-1': {
    id: 'cit-vbac-1',
    title: 'Vaginal Birth After Cesarean: New Insights',
    authors: 'ACOG Practice Bulletin',
    source: 'Obstetrics & Gynecology',
    date: '2021-02',
    url: 'https://acog.org',
    evidenceLevel: 'expert-consensus'
  },
  'cit-vbac-2': {
    id: 'cit-vbac-2',
    title: 'Success Rates and Outcomes of VBAC',
    authors: 'Guise et al.',
    source: 'Obstetrics & Gynecology',
    date: '2010-03',
    evidenceLevel: 'systematic-review'
  },
  'cit-vbac-3': {
    id: 'cit-vbac-3',
    title: 'Maternal and Perinatal Outcomes in Women Planning VBAC',
    authors: 'Fitzpatrick et al.',
    source: 'BMJ',
    date: '2012-10',
    url: 'https://bmj.com',
    evidenceLevel: 'cohort-study'
  },
  'cit-cesarean-recovery-1': {
    id: 'cit-cesarean-recovery-1',
    title: 'Cesarean Delivery: Recovery and Long-term Implications',
    authors: 'ACOG Patient Education',
    source: 'Obstetrics & Gynecology',
    date: '2023-06',
    url: 'https://acog.org',
    evidenceLevel: 'expert-consensus'
  },
  'cit-cesarean-risks-1': {
    id: 'cit-cesarean-risks-1',
    title: 'Maternal Morbidity Associated with Multiple Cesarean Deliveries',
    authors: 'Silver et al.',
    source: 'Obstetrics & Gynecology',
    date: '2006-06',
    evidenceLevel: 'cohort-study'
  },
  'cit-midwife-2': {
    id: 'cit-midwife-2',
    title: 'Midwifery Care and Maternal-Newborn Outcomes',
    authors: 'Johantgen et al.',
    source: 'Journal of Midwifery & Women\'s Health',
    date: '2012-07',
    evidenceLevel: 'systematic-review'
  },
  'cit-midwife-3': {
    id: 'cit-midwife-3',
    title: 'The Effect of Midwife-led Care on Labor Interventions',
    authors: 'Hatem et al.',
    source: 'Cochrane Database of Systematic Reviews',
    date: '2008-10',
    evidenceLevel: 'systematic-review'
  },
  'cit-birth-center-1': {
    id: 'cit-birth-center-1',
    title: 'Birth Center Outcomes in the United States',
    authors: 'Stapleton et al.',
    source: 'Journal of Midwifery & Women\'s Health',
    date: '2013-01',
    url: 'https://onlinelibrary.wiley.com',
    evidenceLevel: 'cohort-study'
  },
  'cit-home-birth-1': {
    id: 'cit-home-birth-1',
    title: 'Planned Home Birth with Certified Professional Midwife',
    authors: 'Cheyney et al.',
    source: 'Journal of Midwifery & Women\'s Health',
    date: '2014-01',
    evidenceLevel: 'cohort-study'
  },
  'cit-hepa-1': {
    id: 'cit-hepa-1',
    title: 'Hepatitis A Vaccination: ACIP Recommendations',
    authors: 'CDC Advisory Committee on Immunization Practices',
    source: 'MMWR',
    date: '2020-06',
    url: 'https://cdc.gov',
    evidenceLevel: 'expert-consensus'
  },
  'cit-hepa-2': {
    id: 'cit-hepa-2',
    title: 'Hepatitis A Vaccine Safety and Effectiveness',
    authors: 'Nelson et al.',
    source: 'Vaccine',
    date: '2019-03',
    evidenceLevel: 'systematic-review'
  },
  'cit-menacwy-1': {
    id: 'cit-menacwy-1',
    title: 'Meningococcal ACWY Vaccine Recommendations',
    authors: 'CDC Advisory Committee on Immunization Practices',
    source: 'MMWR',
    date: '2020-09',
    url: 'https://cdc.gov',
    evidenceLevel: 'expert-consensus'
  },
  'cit-menacwy-2': {
    id: 'cit-menacwy-2',
    title: 'Effectiveness of Meningococcal Conjugate Vaccines',
    authors: 'Mbaeyi et al.',
    source: 'Clinical Infectious Diseases',
    date: '2019-07',
    evidenceLevel: 'systematic-review'
  },
  'cit-menb-1': {
    id: 'cit-menb-1',
    title: 'Meningococcal B Vaccine Recommendations',
    authors: 'CDC Advisory Committee on Immunization Practices',
    source: 'MMWR',
    date: '2015-10',
    url: 'https://cdc.gov',
    evidenceLevel: 'expert-consensus'
  },
  'cit-menb-2': {
    id: 'cit-menb-2',
    title: 'Meningococcal B Vaccine Safety and Immunogenicity',
    authors: 'Parikh et al.',
    source: 'Vaccine',
    date: '2020-02',
    evidenceLevel: 'rct'
  },
  'cit-hpv-1': {
    id: 'cit-hpv-1',
    title: 'Human Papillomavirus Vaccination: ACIP Recommendations',
    authors: 'CDC Advisory Committee on Immunization Practices',
    source: 'MMWR',
    date: '2019-08',
    url: 'https://cdc.gov',
    evidenceLevel: 'expert-consensus'
  },
  'cit-hpv-2': {
    id: 'cit-hpv-2',
    title: 'HPV Vaccine Effectiveness and Impact',
    authors: 'Drolet et al.',
    source: 'The Lancet',
    date: '2019-06',
    evidenceLevel: 'systematic-review'
  },
  'cit-probiotics-1': {
    id: 'cit-probiotics-1',
    title: 'Probiotics for Prevention of Allergic Diseases',
    authors: 'Cuello-Garcia et al.',
    source: 'Cochrane Database of Systematic Reviews',
    date: '2015-04',
    evidenceLevel: 'systematic-review'
  },
  'cit-probiotics-2': {
    id: 'cit-probiotics-2',
    title: 'Maternal Probiotic Supplementation and Infant Gut Microbiota',
    authors: 'Dotterud et al.',
    source: 'Clinical & Experimental Allergy',
    date: '2015-09',
    evidenceLevel: 'rct'
  },
  'cit-vitd-1': {
    id: 'cit-vitd-1',
    title: 'Vitamin D Supplementation During Pregnancy',
    authors: 'ACOG Committee Opinion',
    source: 'Obstetrics & Gynecology',
    date: '2011-07',
    url: 'https://acog.org',
    evidenceLevel: 'expert-consensus'
  },
  'cit-vitd-2': {
    id: 'cit-vitd-2',
    title: 'Vitamin D Supplementation for Infants',
    authors: 'AAP Clinical Report',
    source: 'Pediatrics',
    date: '2020-12',
    url: 'https://publications.aap.org',
    evidenceLevel: 'expert-consensus'
  },
  'cit-herbal-1': {
    id: 'cit-herbal-1',
    title: 'Herbal Remedies in Pregnancy and Lactation',
    authors: 'Moussally et al.',
    source: 'Obstetrics & Gynecology Clinics of North America',
    date: '2015-03',
    evidenceLevel: 'expert-consensus'
  },
  'cit-herbal-2': {
    id: 'cit-herbal-2',
    title: 'Safety of Herbal Medicinal Products in Lactation',
    authors: 'Dugoua et al.',
    source: 'Canadian Journal of Clinical Pharmacology',
    date: '2006-03',
    evidenceLevel: 'systematic-review'
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
        description: 'Low-grade fever (less than 99.9°F)',
        frequency: 'Uncommon (1-6 in 100)',
        severity: 'mild',
        citations: ['cit-hepb-1']
      },
      {
        id: 'hepb-risk-3',
        description: 'Temporary fatigue or irritability',
        frequency: 'Occasional (1-5 in 100)',
        severity: 'mild',
        citations: ['cit-hepb-1']
      },
      {
        id: 'hepb-risk-4',
        description: 'Headache or dizziness (primarily in older children and adults)',
        frequency: 'Uncommon (less than 1 in 100 in infants)',
        severity: 'mild',
        citations: ['cit-hepb-1']
      },
      {
        id: 'hepb-risk-5',
        description: 'Moderate fever (100.4°F or higher)',
        frequency: 'Rare (less than 1 in 100)',
        severity: 'mild',
        citations: ['cit-hepb-2']
      },
      {
        id: 'hepb-risk-6',
        description: 'Severe allergic reaction (anaphylaxis)',
        frequency: 'Extremely rare (less than 1 in 1,000,000)',
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
  },
  {
    id: 'proc-rsv-immunization',
    name: 'RSV Immunization (Nirsevimab/Beyfortus)',
    shortName: 'RSV Prevention',
    category: 'vaccination',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'A single-dose monoclonal antibody injection given to infants to prevent severe respiratory syncytial virus (RSV) infection during their first RSV season. RSV is the leading cause of hospitalization in infants under 1 year.',
    indication: 'RSV causes significant illness in infants, with approximately 58,000-80,000 hospitalizations annually in children under 5 in the US. Infants under 6 months are at highest risk for severe disease, including bronchiolitis and pneumonia. RSV season typically runs October through March.',
    benefits: [
      {
        id: 'rsv-ben-1',
        description: 'Reduces RSV-related hospitalizations by approximately 80% in healthy term infants',
        citations: ['cit-rsv-3', 'cit-rsv-4']
      },
      {
        id: 'rsv-ben-2',
        description: 'Reduces medically attended RSV lower respiratory tract infections by 70-75%',
        citations: ['cit-rsv-3']
      },
      {
        id: 'rsv-ben-3',
        description: 'Single dose provides protection for entire RSV season (approximately 5 months)',
        citations: ['cit-rsv-3']
      },
      {
        id: 'rsv-ben-4',
        description: 'Particularly beneficial for infants born during or entering their first RSV season',
        citations: ['cit-rsv-1', 'cit-rsv-4']
      }
    ],
    risks: [
      {
        id: 'rsv-risk-1',
        description: 'Mild rash at injection site',
        frequency: 'Common (1-3 in 100)',
        severity: 'mild',
        citations: ['cit-rsv-3']
      },
      {
        id: 'rsv-risk-2',
        description: 'Low-grade fever (less than 100.4°F)',
        frequency: 'Uncommon (less than 1 in 100)',
        severity: 'mild',
        citations: ['cit-rsv-3']
      },
      {
        id: 'rsv-risk-3',
        description: 'Injection site pain or swelling',
        frequency: 'Occasional (1-2 in 100)',
        severity: 'mild',
        citations: ['cit-rsv-3']
      },
      {
        id: 'rsv-risk-4',
        description: 'Allergic reaction (very rare)',
        frequency: 'Very rare (less than 1 in 10,000)',
        severity: 'moderate',
        citations: ['cit-rsv-3']
      }
    ],
    alternatives: [
      {
        id: 'rsv-alt-1',
        name: 'Decline Immunization',
        description: 'Rely on supportive care if RSV infection occurs',
        isEquivalent: false,
        benefits: [
          {
            id: 'rsv-alt-ben-1',
            description: 'Avoids injection and any potential side effects',
            citations: ['cit-rsv-1']
          }
        ],
        risks: [
          {
            id: 'rsv-alt-risk-1',
            description: 'Significantly higher risk of severe RSV disease requiring hospitalization. RSV causes approximately 1-2 in 100 healthy term infants to be hospitalized, with higher rates in young infants (under 3 months)',
            frequency: '1-2 in 100 for hospitalization',
            severity: 'severe',
            citations: ['cit-rsv-2', 'cit-rsv-4']
          },
          {
            id: 'rsv-alt-risk-2',
            description: 'RSV bronchiolitis can cause severe breathing difficulty, oxygen requirement, feeding difficulties, and rarely death (20-500 deaths annually in children under 5 in US)',
            frequency: 'Variable based on age and risk factors',
            severity: 'severe',
            citations: ['cit-rsv-2', 'cit-rsv-4']
          },
          {
            id: 'rsv-alt-risk-3',
            description: 'RSV infection in infancy is associated with increased risk of childhood asthma and recurrent wheezing',
            frequency: '20-40 in 100 infants with severe RSV develop recurrent wheeze',
            severity: 'moderate',
            citations: ['cit-rsv-4']
          }
        ],
        evidenceLevel: 'systematic-review',
        citations: ['cit-rsv-2', 'cit-rsv-4']
      },
      {
        id: 'rsv-alt-2',
        name: 'Palivizumab (Synagis) - Monthly Injections',
        description: 'Older monoclonal antibody requiring monthly injections throughout RSV season. Now primarily reserved for highest-risk infants with specific medical conditions.',
        isEquivalent: false,
        benefits: [
          {
            id: 'rsv-alt-ben-2',
            description: 'Proven track record with 20+ years of use in high-risk infants',
            citations: ['cit-rsv-1']
          }
        ],
        risks: [
          {
            id: 'rsv-alt-risk-4',
            description: 'Requires 5 monthly injections vs single dose',
            severity: 'mild',
            citations: ['cit-rsv-1']
          },
          {
            id: 'rsv-alt-risk-5',
            description: 'Less effective than nirsevimab (approximately 50-55% reduction in hospitalizations vs 80%)',
            severity: 'moderate',
            citations: ['cit-rsv-1', 'cit-rsv-3']
          }
        ],
        evidenceLevel: 'expert-consensus',
        citations: ['cit-rsv-1']
      }
    ],
    whatIfWeWait: 'RSV disease is most severe in young infants. Waiting increases risk during peak RSV season (typically November-February). Infants born just before or during RSV season are at highest risk. For infants born in spring/summer, immunization timing should align with upcoming RSV season. Immunization is most effective when given before RSV exposure. Time-sensitive based on birth date and RSV season.',
    contraindications: [
      {
        id: 'rsv-contra-1',
        condition: 'History of severe allergic reaction to previous dose',
        severity: 'absolute',
        explanation: 'Anaphylaxis or severe hypersensitivity to nirsevimab',
        citations: ['cit-rsv-3']
      },
      {
        id: 'rsv-contra-2',
        condition: 'Moderate to severe acute illness',
        severity: 'relative',
        explanation: 'Defer until illness resolves',
        citations: ['cit-rsv-3']
      }
    ],
    questionsToAsk: [
      'When is RSV season in our area?',
      'What are the signs of severe RSV that would require medical attention?',
      'Does my insurance cover this immunization?',
      'Are there any additional preventive measures we should take (handwashing, limiting exposure)?',
      'What should I do if my baby develops RSV symptoms despite immunization?'
    ],
    citations: [citations['cit-rsv-1'], citations['cit-rsv-2'], citations['cit-rsv-3'], citations['cit-rsv-4']],
    lastReviewed: '2024-01-22',
    nextReviewDue: '2025-01-22',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer'
  },
  {
    id: 'proc-dtap-vaccine',
    name: 'DTaP Vaccine (Diphtheria, Tetanus, Pertussis)',
    shortName: 'DTaP Vaccine',
    category: 'vaccination',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'A combination vaccine that protects against three serious diseases: diphtheria (severe throat infection), tetanus (lockjaw), and pertussis (whooping cough). Given as a series starting at 2 months of age.',
    indication: 'Prevents three potentially fatal diseases. Pertussis (whooping cough) is particularly dangerous for infants, causing severe coughing fits, breathing difficulties, and hospitalization in approximately 50% of infected infants under 1 year. Diphtheria and tetanus are rare but life-threatening.',
    benefits: [
      {
        id: 'dtap-ben-1',
        description: 'Prevents pertussis in approximately 80-85% of cases after full series',
        citations: ['cit-dtap-1', 'cit-dtap-2']
      },
      {
        id: 'dtap-ben-2',
        description: 'Provides nearly 100% protection against diphtheria and tetanus after full series',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-ben-3',
        description: 'Significantly reduces severity of pertussis if infection occurs despite vaccination',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-ben-4',
        description: 'Prevents infant deaths from pertussis (approximately 1 in 100 infected infants under 2 months die)',
        citations: ['cit-dtap-1']
      }
    ],
    risks: [
      {
        id: 'dtap-risk-1',
        description: 'Redness, swelling, or pain at injection site',
        frequency: 'Very common (20-30 in 100)',
        severity: 'mild',
        citations: ['cit-dtap-1', 'cit-dtap-2']
      },
      {
        id: 'dtap-risk-2',
        description: 'Mild fever (under 101°F)',
        frequency: 'Common (10-15 in 100)',
        severity: 'mild',
        citations: ['cit-dtap-1', 'cit-dtap-2']
      },
      {
        id: 'dtap-risk-3',
        description: 'Fussiness, drowsiness, or decreased appetite',
        frequency: 'Common (10-20 in 100)',
        severity: 'mild',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-risk-4',
        description: 'Moderate fever (101-103°F)',
        frequency: 'Uncommon (1-3 in 100)',
        severity: 'mild',
        citations: ['cit-dtap-2']
      },
      {
        id: 'dtap-risk-5',
        description: 'Swelling of entire arm or leg where shot was given (typically after 4th or 5th dose)',
        frequency: 'Uncommon (1-2 in 100)',
        severity: 'mild',
        citations: ['cit-dtap-1', 'cit-dtap-2']
      },
      {
        id: 'dtap-risk-6',
        description: 'Continuous crying for 3+ hours (now rare with acellular vaccine)',
        frequency: 'Rare (less than 1 in 1,000)',
        severity: 'mild',
        citations: ['cit-dtap-2']
      },
      {
        id: 'dtap-risk-7',
        description: 'High fever over 105°F (now rare with acellular vaccine)',
        frequency: 'Very rare (less than 1 in 10,000)',
        severity: 'moderate',
        citations: ['cit-dtap-1', 'cit-dtap-2']
      },
      {
        id: 'dtap-risk-8',
        description: 'Seizure (usually related to fever, no long-term effects)',
        frequency: 'Very rare (1 in 14,000 doses)',
        severity: 'moderate',
        citations: ['cit-dtap-1', 'cit-dtap-2']
      },
      {
        id: 'dtap-risk-9',
        description: 'Severe allergic reaction (anaphylaxis)',
        frequency: 'Extremely rare (less than 1 in 1,000,000)',
        severity: 'severe',
        citations: ['cit-dtap-1']
      }
    ],
    alternatives: [
      {
        id: 'dtap-alt-1',
        name: 'Delay or Decline Vaccination',
        description: 'Postpone or opt out of DTaP vaccine series',
        isEquivalent: false,
        benefits: [
          {
            id: 'dtap-alt-ben-1',
            description: 'Avoids injection pain and potential vaccine side effects',
            citations: ['cit-dtap-1']
          }
        ],
        risks: [
          {
            id: 'dtap-alt-risk-1',
            description: 'Leaves infant vulnerable to pertussis, which hospitalizes 50% of infected infants under 1 year and causes death in approximately 1% of infected infants',
            frequency: '50 in 100 infants hospitalized; 1 in 100 die',
            severity: 'severe',
            citations: ['cit-dtap-1']
          },
          {
            id: 'dtap-alt-risk-2',
            description: 'Risk of tetanus from contaminated wounds (mortality rate 10-20% even with treatment)',
            severity: 'severe',
            citations: ['cit-dtap-1']
          },
          {
            id: 'dtap-alt-risk-3',
            description: 'Risk of diphtheria, which has a mortality rate of 5-10% despite treatment',
            severity: 'severe',
            citations: ['cit-dtap-1']
          }
        ],
        evidenceLevel: 'expert-consensus',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-alt-2',
        name: 'Alternative Schedule',
        description: 'Spread out vaccine doses on a delayed schedule',
        isEquivalent: false,
        benefits: [
          {
            id: 'dtap-alt-ben-2',
            description: 'May reduce anxiety about multiple vaccines at once',
            citations: ['cit-dtap-1']
          }
        ],
        risks: [
          {
            id: 'dtap-alt-risk-4',
            description: 'Leaves infant unprotected or under-protected for longer period during highest-risk age',
            severity: 'severe',
            citations: ['cit-dtap-1']
          },
          {
            id: 'dtap-alt-risk-5',
            description: 'No evidence of safety benefit; increases number of clinic visits and injections over time',
            severity: 'mild',
            citations: ['cit-dtap-1', 'cit-dtap-2']
          }
        ],
        evidenceLevel: 'expert-consensus',
        citations: ['cit-dtap-1']
      }
    ],
    whatIfWeWait: 'Delaying DTaP vaccination leaves infants vulnerable during the period of highest risk for severe pertussis complications. Infants under 6 months account for majority of pertussis deaths. The recommended schedule (2, 4, 6 months) is designed to provide protection as early as safely possible. Pertussis outbreaks continue to occur in communities with lower vaccination rates. Time-sensitive: protection is critical during vulnerable first months of life.',
    contraindications: [
      {
        id: 'dtap-contra-1',
        condition: 'Severe allergic reaction to previous dose',
        severity: 'absolute',
        explanation: 'History of anaphylaxis to vaccine or component',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-contra-2',
        condition: 'Encephalopathy within 7 days of previous dose (not due to another cause)',
        severity: 'absolute',
        explanation: 'Severe brain reaction to previous pertussis-containing vaccine',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-contra-3',
        condition: 'Progressive neurological disorder',
        severity: 'relative',
        explanation: 'Defer until condition stabilized',
        citations: ['cit-dtap-1']
      },
      {
        id: 'dtap-contra-4',
        condition: 'Moderate to severe acute illness',
        severity: 'relative',
        explanation: 'Defer until illness resolves',
        citations: ['cit-dtap-1']
      }
    ],
    questionsToAsk: [
      'What are the specific ingredients in the DTaP vaccine?',
      'Can it be given at the same time as other vaccines?',
      'What should I do if my baby develops a fever after vaccination?',
      'What symptoms would require me to call the doctor after vaccination?',
      'How can I help reduce pain from the injection?'
    ],
    citations: [citations['cit-dtap-1'], citations['cit-dtap-2']],
    lastReviewed: '2024-01-23',
    nextReviewDue: '2025-01-23',
    reviewedBy: 'Dr. Michael Torres, Clinical Reviewer'
  },
  {
    id: 'proc-mmr-vaccine',
    name: 'MMR Vaccine (Measles, Mumps, Rubella)',
    shortName: 'MMR Vaccine',
    category: 'vaccination',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'A combination vaccine protecting against measles, mumps, and rubella. First dose typically given at 12-15 months of age, with a second dose at 4-6 years.',
    indication: 'Prevents three viral diseases that can cause serious complications. Measles is highly contagious and can lead to pneumonia, brain damage, and death. Mumps can cause meningitis, deafness, and testicular inflammation. Rubella is particularly dangerous during pregnancy, causing severe birth defects.',
    benefits: [
      {
        id: 'mmr-ben-1',
        description: 'Provides approximately 97% protection against measles after two doses',
        citations: ['cit-mmr-1', 'cit-mmr-2']
      },
      {
        id: 'mmr-ben-2',
        description: 'Provides approximately 88% protection against mumps after two doses',
        citations: ['cit-mmr-1']
      },
      {
        id: 'mmr-ben-3',
        description: 'Provides approximately 97% protection against rubella after one dose',
        citations: ['cit-mmr-1']
      },
      {
        id: 'mmr-ben-4',
        description: 'Prevents serious complications: measles causes death in approximately 1-2 per 1,000 infected children in developed countries',
        citations: ['cit-mmr-1']
      },
      {
        id: 'mmr-ben-5',
        description: 'Protects against subacute sclerosing panencephalitis (SSPE), a rare but fatal brain disease caused by measles (occurs in 4-11 per 100,000 measles cases)',
        citations: ['cit-mmr-1']
      }
    ],
    risks: [
      {
        id: 'mmr-risk-1',
        description: 'Mild fever (less than 103°F)',
        frequency: 'Common (10-15 in 100)',
        severity: 'mild',
        citations: ['cit-mmr-1', 'cit-mmr-2']
      },
      {
        id: 'mmr-risk-2',
        description: 'Mild rash',
        frequency: 'Common (5-10 in 100)',
        severity: 'mild',
        citations: ['cit-mmr-1']
      },
      {
        id: 'mmr-risk-3',
        description: 'Swelling of glands in cheeks or neck',
        frequency: 'Uncommon (less than 1 in 100)',
        severity: 'mild',
        citations: ['cit-mmr-1']
      },
      {
        id: 'mmr-risk-4',
        description: 'Temporary joint pain or stiffness (mainly in adolescents and adults, particularly females)',
        frequency: 'Occasional in adults (up to 25 in 100 adult women)',
        severity: 'mild',
        citations: ['cit-mmr-1']
      },
      {
        id: 'mmr-risk-5',
        description: 'Temporary low platelet count (may cause unusual bruising or bleeding)',
        frequency: 'Rare (1 in 30,000 doses)',
        severity: 'moderate',
        citations: ['cit-mmr-1', 'cit-mmr-2']
      },
      {
        id: 'mmr-risk-6',
        description: 'Seizure related to fever (no long-term effects)',
        frequency: 'Rare (1 in 3,000 doses)',
        severity: 'moderate',
        citations: ['cit-mmr-1']
      },
      {
        id: 'mmr-risk-7',
        description: 'Severe allergic reaction (anaphylaxis)',
        frequency: 'Very rare (less than 1 in 1,000,000)',
        severity: 'severe',
        citations: ['cit-mmr-1']
      }
    ],
    alternatives: [
      {
        id: 'mmr-alt-1',
        name: 'Decline Vaccination',
        description: 'Opt out of MMR vaccine',
        isEquivalent: false,
        benefits: [
          {
            id: 'mmr-alt-ben-1',
            description: 'Avoids injection and potential vaccine side effects',
            citations: ['cit-mmr-1']
          }
        ],
        risks: [
          {
            id: 'mmr-alt-risk-1',
            description: 'Risk of measles, which is highly contagious (90% of unvaccinated people exposed will contract it). Measles causes hospitalization in 20-25% of cases, death in 1-2 per 1,000, and permanent brain damage in approximately 1 per 1,000 infected children',
            frequency: '20-25 in 100 hospitalized; 1-2 in 1,000 die',
            severity: 'severe',
            citations: ['cit-mmr-1']
          },
          {
            id: 'mmr-alt-risk-2',
            description: 'Risk of mumps complications including meningitis (15% of cases), permanent deafness (5 in 10,000 cases), and testicular inflammation in post-pubertal males',
            severity: 'moderate',
            citations: ['cit-mmr-1']
          },
          {
            id: 'mmr-alt-risk-3',
            description: 'Risk of rubella, which can cause severe birth defects if contracted during future pregnancy (up to 85% risk of congenital rubella syndrome if infected in first trimester)',
            severity: 'severe',
            citations: ['cit-mmr-1']
          }
        ],
        evidenceLevel: 'expert-consensus',
        citations: ['cit-mmr-1']
      },
      {
        id: 'mmr-alt-2',
        name: 'Separate Vaccines',
        description: 'Request individual measles, mumps, and rubella vaccines given separately',
        isEquivalent: false,
        benefits: [
          {
            id: 'mmr-alt-ben-2',
            description: 'None identified; separate vaccines no longer routinely available in US',
            citations: ['cit-mmr-1']
          }
        ],
        risks: [
          {
            id: 'mmr-alt-risk-4',
            description: 'Individual vaccines not readily available; no safety advantage demonstrated',
            severity: 'mild',
            citations: ['cit-mmr-1', 'cit-mmr-2']
          },
          {
            id: 'mmr-alt-risk-5',
            description: 'Delays complete protection; requires multiple visits and additional injections',
            severity: 'mild',
            citations: ['cit-mmr-1']
          }
        ],
        evidenceLevel: 'expert-consensus',
        citations: ['cit-mmr-1']
      }
    ],
    whatIfWeWait: 'Delaying MMR vaccine increases risk during measles outbreaks, which continue to occur in undervaccinated communities. Measles is extremely contagious and spreads through air. Infants are too young for vaccine until 12 months and rely on community immunity. The standard 12-15 month timing balances maternal antibody waning with immune system maturity. In outbreak situations, vaccine may be given as early as 6 months. Time-sensitive during outbreaks.',
    contraindications: [
      {
        id: 'mmr-contra-1',
        condition: 'Severe allergic reaction to previous dose or vaccine component (e.g., gelatin, neomycin)',
        severity: 'absolute',
        explanation: 'History of anaphylaxis to vaccine or component',
        citations: ['cit-mmr-1']
      },
      {
        id: 'mmr-contra-2',
        condition: 'Pregnancy',
        severity: 'absolute',
        explanation: 'Live virus vaccine; avoid pregnancy for 28 days after vaccination',
        citations: ['cit-mmr-1']
      },
      {
        id: 'mmr-contra-3',
        condition: 'Severe immunodeficiency',
        severity: 'absolute',
        explanation: 'Conditions such as severe combined immunodeficiency, leukemia, lymphoma, or immunosuppressive therapy',
        citations: ['cit-mmr-1']
      },
      {
        id: 'mmr-contra-4',
        condition: 'Recent receipt of blood products or immune globulin',
        severity: 'relative',
        explanation: 'Defer vaccine for 3-11 months depending on product (may interfere with vaccine effectiveness)',
        citations: ['cit-mmr-1']
      }
    ],
    questionsToAsk: [
      'Is there currently a measles outbreak in our community?',
      'What are the ingredients in the MMR vaccine?',
      'What should I watch for after vaccination?',
      'Is there any connection between MMR vaccine and autism? (Answer: No. This has been extensively studied and conclusively disproven in multiple large studies)',
      'Can my child get MMR if they have an egg allergy? (Answer: Yes, MMR is safe for children with egg allergy)'
    ],
    citations: [citations['cit-mmr-1'], citations['cit-mmr-2']],
    lastReviewed: '2024-01-24',
    nextReviewDue: '2025-01-24',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer'
  },
  {
    id: 'proc-rotavirus-vaccine',
    name: 'Rotavirus Vaccine (Oral)',
    shortName: 'Rotavirus Vaccine',
    category: 'vaccination',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'An oral (not injected) vaccine that protects against rotavirus, the most common cause of severe diarrhea in infants and young children. Given as 2 or 3 doses starting at 2 months, depending on the brand.',
    indication: 'Rotavirus causes severe, watery diarrhea and vomiting in infants and young children, leading to dehydration that requires hospitalization. Before the vaccine, rotavirus caused approximately 55,000-70,000 hospitalizations annually in the US.',
    benefits: [
      {
        id: 'rota-ben-1',
        description: 'Prevents approximately 85-98% of severe rotavirus disease',
        citations: ['cit-rotavirus-1', 'cit-rotavirus-2']
      },
      {
        id: 'rota-ben-2',
        description: 'Prevents approximately 74-87% of any rotavirus gastroenteritis',
        citations: ['cit-rotavirus-2']
      },
      {
        id: 'rota-ben-3',
        description: 'Significantly reduces rotavirus-related hospitalizations and emergency department visits',
        citations: ['cit-rotavirus-1']
      },
      {
        id: 'rota-ben-4',
        description: 'Oral administration (no injection)',
        citations: ['cit-rotavirus-1']
      },
      {
        id: 'rota-ben-5',
        description: 'Has dramatically reduced rotavirus disease burden since introduction in 2006',
        citations: ['cit-rotavirus-1', 'cit-rotavirus-2']
      }
    ],
    risks: [
      {
        id: 'rota-risk-1',
        description: 'Mild, temporary diarrhea or vomiting',
        frequency: 'Occasional (3-5 in 100)',
        severity: 'mild',
        citations: ['cit-rotavirus-1', 'cit-rotavirus-2']
      },
      {
        id: 'rota-risk-2',
        description: 'Irritability or fussiness',
        frequency: 'Occasional (3-7 in 100)',
        severity: 'mild',
        citations: ['cit-rotavirus-1']
      },
      {
        id: 'rota-risk-3',
        description: 'Intussusception (intestinal blockage requiring emergency treatment). Risk is very small and occurs mainly within first week after first dose',
        frequency: 'Very rare (approximately 1-5 in 100,000 vaccinated infants)',
        severity: 'severe',
        citations: ['cit-rotavirus-1', 'cit-rotavirus-2']
      },
      {
        id: 'rota-risk-4',
        description: 'Severe allergic reaction',
        frequency: 'Extremely rare (less than 1 in 1,000,000)',
        severity: 'severe',
        citations: ['cit-rotavirus-1']
      }
    ],
    alternatives: [
      {
        id: 'rota-alt-1',
        name: 'Decline Vaccination',
        description: 'Opt out of rotavirus vaccine',
        isEquivalent: false,
        benefits: [
          {
            id: 'rota-alt-ben-1',
            description: 'Avoids very small risk of intussusception associated with vaccine',
            citations: ['cit-rotavirus-1']
          }
        ],
        risks: [
          {
            id: 'rota-alt-risk-1',
            description: 'Significantly higher risk of severe rotavirus gastroenteritis requiring hospitalization. Without vaccine, approximately 1 in 70 children will be hospitalized for rotavirus before age 5',
            frequency: 'Approximately 1 in 70 hospitalized',
            severity: 'moderate',
            citations: ['cit-rotavirus-1', 'cit-rotavirus-2']
          },
          {
            id: 'rota-alt-risk-2',
            description: 'Risk of severe dehydration requiring IV fluids and hospitalization (20-60 per 1,000 unvaccinated children)',
            frequency: '20-60 in 1,000',
            severity: 'moderate',
            citations: ['cit-rotavirus-2']
          },
          {
            id: 'rota-alt-risk-3',
            description: 'Risk of death from rotavirus, though rare in developed countries (20-60 deaths annually in US before vaccine)',
            severity: 'severe',
            citations: ['cit-rotavirus-1']
          }
        ],
        evidenceLevel: 'systematic-review',
        citations: ['cit-rotavirus-1', 'cit-rotavirus-2']
      }
    ],
    whatIfWeWait: 'Rotavirus vaccine must be started by 14 weeks 6 days of age and completed by 8 months of age. These age restrictions exist because intussusception risk may be higher in older infants. Delaying increases the chance of missing the age window. Rotavirus disease is most severe in young infants, so early protection is important. Time-sensitive: must begin by 15 weeks of age.',
    contraindications: [
      {
        id: 'rota-contra-1',
        condition: 'Severe allergic reaction to previous dose',
        severity: 'absolute',
        explanation: 'History of anaphylaxis to vaccine or component',
        citations: ['cit-rotavirus-1']
      },
      {
        id: 'rota-contra-2',
        condition: 'History of intussusception',
        severity: 'absolute',
        explanation: 'Previous intussusception increases risk of recurrence',
        citations: ['cit-rotavirus-1']
      },
      {
        id: 'rota-contra-3',
        condition: 'Severe combined immunodeficiency (SCID)',
        severity: 'absolute',
        explanation: 'Live virus vaccine; risk of vaccine-strain infection in severely immunocompromised',
        citations: ['cit-rotavirus-1']
      },
      {
        id: 'rota-contra-4',
        condition: 'Moderate to severe acute gastroenteritis',
        severity: 'relative',
        explanation: 'Defer until illness resolves',
        citations: ['cit-rotavirus-1']
      }
    ],
    questionsToAsk: [
      'Which brand of rotavirus vaccine will be used (RotaTeq or Rotarix)?',
      'What are the signs of intussusception I should watch for in the week after vaccination (severe crying, vomiting, blood in stool, lethargy)?',
      'Can my baby be around immunocompromised people after receiving this live vaccine?',
      'What should I do if my baby spits up some of the vaccine dose?',
      'How long should I wait to breastfeed after the oral vaccine?'
    ],
    citations: [citations['cit-rotavirus-1'], citations['cit-rotavirus-2']],
    lastReviewed: '2024-01-25',
    nextReviewDue: '2025-01-25',
    reviewedBy: 'Dr. Michael Torres, Clinical Reviewer'
  },
  {
    id: 'proc-pneumococcal-vaccine',
    name: 'Pneumococcal Conjugate Vaccine (PCV)',
    shortName: 'Pneumococcal Vaccine',
    category: 'vaccination',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'A vaccine that protects against pneumococcal bacteria, which cause serious infections including meningitis, pneumonia, and bloodstream infections. Given as a series starting at 2 months of age.',
    indication: 'Pneumococcal disease is a leading cause of serious illness in young children, causing approximately 150 deaths annually in the US before widespread vaccination.',
    benefits: [
      {
        id: 'pneumo-ben-1',
        description: 'Prevents 75-80% of invasive pneumococcal disease in children under 5',
        citations: ['cit-pneumo-1', 'cit-pneumo-2']
      },
      {
        id: 'pneumo-ben-2',
        description: 'Reduces pneumonia hospitalizations by approximately 45%',
        citations: ['cit-pneumo-2']
      },
      {
        id: 'pneumo-ben-3',
        description: 'Reduces ear infections (otitis media) by approximately 6-7%',
        citations: ['cit-pneumo-2']
      }
    ],
    risks: [
      {
        id: 'pneumo-risk-1',
        description: 'Injection site soreness, redness, or swelling',
        frequency: 'Common (20-30 in 100)',
        severity: 'mild',
        citations: ['cit-pneumo-1']
      },
      {
        id: 'pneumo-risk-2',
        description: 'Mild fever under 101°F',
        frequency: 'Common (15-30 in 100)',
        severity: 'mild',
        citations: ['cit-pneumo-1']
      },
      {
        id: 'pneumo-risk-3',
        description: 'Irritability or decreased appetite',
        frequency: 'Common (10-20 in 100)',
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
    alternatives: [
      {
        id: 'pneumo-alt-1',
        name: 'Decline Vaccination',
        description: 'Opt out of pneumococcal vaccine',
        isEquivalent: false,
        benefits: [
          {
            id: 'pneumo-alt-ben-1',
            description: 'Avoids vaccine reactions',
            citations: ['cit-pneumo-1']
          }
        ],
        risks: [
          {
            id: 'pneumo-alt-risk-1',
            description: 'Significantly increased risk of pneumococcal meningitis, which has 8% mortality and 15-30% long-term complications',
            severity: 'severe',
            citations: ['cit-pneumo-1', 'cit-pneumo-2']
          }
        ],
        evidenceLevel: 'systematic-review',
        citations: ['cit-pneumo-1']
      }
    ],
    whatIfWeWait: 'Children under 2 are at highest risk for serious pneumococcal disease. Delaying increases vulnerability during peak risk period. Can catch up on schedule if delayed.',
    contraindications: [{
      id: 'pneumo-contra-1',
      condition: 'Severe allergic reaction to previous dose',
      severity: 'absolute',
      explanation: 'History of anaphylaxis',
      citations: ['cit-pneumo-1']
    }],
    questionsToAsk: [
      'Which PCV vaccine will be used (PCV13, PCV15, or PCV20)?',
      'What is the full schedule for this vaccine?',
      'Can it be given with other vaccines?'
    ],
    citations: [citations['cit-pneumo-1'], citations['cit-pneumo-2']],
    lastReviewed: '2024-01-26',
    nextReviewDue: '2025-01-26',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer'
  },
  {
    id: 'proc-influenza-vaccine-child',
    name: 'Influenza Vaccine (Children)',
    shortName: 'Flu Vaccine',
    category: 'vaccination',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'Annual vaccine protecting against seasonal influenza strains. Recommended for all children 6 months and older, given annually before flu season.',
    indication: 'Influenza causes 7,000-26,000 hospitalizations in children under 5 annually in the US. Young children are at higher risk for complications.',
    benefits: [
      {
        id: 'flu-child-ben-1',
        description: 'Reduces risk of flu illness by 40-60% when well-matched to circulating strains',
        citations: ['cit-flu-child-1', 'cit-flu-child-2']
      },
      {
        id: 'flu-child-ben-2',
        description: 'Reduces severity of illness if child still gets flu',
        citations: ['cit-flu-child-1']
      },
      {
        id: 'flu-child-ben-3',
        description: 'Reduces flu-related hospitalizations by approximately 74% in children',
        citations: ['cit-flu-child-2']
      }
    ],
    risks: [
      {
        id: 'flu-child-risk-1',
        description: 'Soreness at injection site',
        frequency: 'Common (20-30 in 100)',
        severity: 'mild',
        citations: ['cit-flu-child-1']
      },
      {
        id: 'flu-child-risk-2',
        description: 'Low-grade fever, mild aches',
        frequency: 'Occasional (5-10 in 100)',
        severity: 'mild',
        citations: ['cit-flu-child-1']
      },
      {
        id: 'flu-child-risk-3',
        description: 'Severe allergic reaction',
        frequency: 'Extremely rare (approximately 1 in 1,000,000)',
        severity: 'severe',
        citations: ['cit-flu-child-1']
      }
    ],
    alternatives: [
      {
        id: 'flu-child-alt-1',
        name: 'Nasal Spray Vaccine (FluMist)',
        description: 'Live attenuated vaccine given as nasal spray for ages 2-49',
        isEquivalent: true,
        benefits: [
          {
            id: 'flu-child-alt-ben-1',
            description: 'No injection required',
            citations: ['cit-flu-child-1']
          }
        ],
        risks: [
          {
            id: 'flu-child-alt-risk-1',
            description: 'Runny nose, congestion',
            frequency: 'Common (20-40 in 100)',
            severity: 'mild',
            citations: ['cit-flu-child-1']
          }
        ],
        evidenceLevel: 'expert-consensus',
        citations: ['cit-flu-child-1']
      }
    ],
    whatIfWeWait: 'Flu season typically peaks December-February. Vaccination 2+ weeks before exposure is ideal. Children under 2 are at higher risk for complications.',
    contraindications: [{
      id: 'flu-child-contra-1',
      condition: 'Severe egg allergy (for some formulations)',
      severity: 'relative',
      explanation: 'Egg-free formulations available',
      citations: ['cit-flu-child-1']
    }],
    questionsToAsk: [
      'Is this an egg-free formulation?',
      'Does my child need one or two doses this year?',
      'When is the best time to get vaccinated?'
    ],
    citations: [citations['cit-flu-child-1'], citations['cit-flu-child-2']],
    lastReviewed: '2024-01-26',
    nextReviewDue: '2025-01-26',
    reviewedBy: 'Dr. Michael Torres, Clinical Reviewer'
  },
  {
    id: 'proc-varicella-vaccine',
    name: 'Varicella (Chickenpox) Vaccine',
    shortName: 'Chickenpox Vaccine',
    category: 'vaccination',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'A vaccine protecting against varicella (chickenpox) virus. Given as 2 doses: first at 12-15 months, second at 4-6 years.',
    indication: 'Before vaccine, chickenpox caused 4 million cases, 10,500-13,000 hospitalizations, and 100-150 deaths annually in the US.',
    benefits: [
      {
        id: 'varicella-ben-1',
        description: 'Prevents chickenpox in approximately 90% of children; breakthrough cases are typically very mild',
        citations: ['cit-varicella-1', 'cit-varicella-2']
      },
      {
        id: 'varicella-ben-2',
        description: 'Prevents serious complications including bacterial skin infections, pneumonia, and encephalitis',
        citations: ['cit-varicella-1']
      },
      {
        id: 'varicella-ben-3',
        description: 'Prevents shingles later in life (caused by reactivation of chickenpox virus)',
        citations: ['cit-varicella-2']
      }
    ],
    risks: [
      {
        id: 'varicella-risk-1',
        description: 'Soreness or mild rash at injection site',
        frequency: 'Common (15-20 in 100)',
        severity: 'mild',
        citations: ['cit-varicella-1']
      },
      {
        id: 'varicella-risk-2',
        description: 'Mild fever',
        frequency: 'Occasional (10-15 in 100)',
        severity: 'mild',
        citations: ['cit-varicella-1']
      },
      {
        id: 'varicella-risk-3',
        description: 'Mild varicella-like rash (typically 2-5 lesions)',
        frequency: 'Occasional (3-5 in 100)',
        severity: 'mild',
        citations: ['cit-varicella-1']
      },
      {
        id: 'varicella-risk-4',
        description: 'Severe allergic reaction',
        frequency: 'Extremely rare (less than 1 in 1,000,000)',
        severity: 'severe',
        citations: ['cit-varicella-1']
      }
    ],
    alternatives: [{
      id: 'varicella-alt-1',
      name: 'Natural Immunity from Infection',
      description: 'Allow child to contract chickenpox naturally',
      isEquivalent: false,
      benefits: [{
        id: 'varicella-alt-ben-1',
        description: 'Provides lifelong immunity in most cases',
        citations: ['cit-varicella-2']
      }],
      risks: [{
        id: 'varicella-alt-risk-1',
        description: 'Risk of severe disease, hospitalization (2-3 per 1,000 cases), encephalitis, or death (1-2 per 100,000 cases)',
        frequency: '2-3 hospitalizations per 1,000',
        severity: 'severe',
        citations: ['cit-varicella-1', 'cit-varicella-2']
      }],
      evidenceLevel: 'systematic-review',
      citations: ['cit-varicella-1']
    }],
    whatIfWeWait: 'Chickenpox can be severe in young children and adults. Vaccine is most effective when given on schedule. Can catch up later if delayed.',
    contraindications: [{
      id: 'varicella-contra-1',
      condition: 'Severely weakened immune system',
      severity: 'absolute',
      explanation: 'Live virus vaccine',
      citations: ['cit-varicella-1']
    }],
    questionsToAsk: [
      'Has my child already had chickenpox?',
      'Can this be given with MMR vaccine?',
      'What should I watch for after vaccination?'
    ],
    citations: [citations['cit-varicella-1'], citations['cit-varicella-2']],
    lastReviewed: '2024-01-26',
    nextReviewDue: '2025-01-26',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer'
  },
  {
    id: 'proc-tdap-pregnancy',
    name: 'Tdap Vaccine During Pregnancy',
    shortName: 'Tdap (Pregnancy)',
    category: 'vaccination',
    stage: 'prenatal',
    urgencyLevel: 'routine',
    summary: 'Tetanus, diphtheria, and pertussis (whooping cough) vaccine recommended during each pregnancy, ideally at 27-36 weeks gestation, to protect newborn from pertussis.',
    indication: 'Pertussis is extremely dangerous in newborns, causing hospitalization in over 50% of infected infants under 2 months. Maternal antibodies protect baby until infant vaccination.',
    benefits: [
      {
        id: 'tdap-preg-ben-1',
        description: 'Reduces infant pertussis risk by 78-91% in first 2 months of life',
        citations: ['cit-tdap-preg-1', 'cit-tdap-preg-2']
      },
      {
        id: 'tdap-preg-ben-2',
        description: 'Protects infant during most vulnerable period before first vaccines',
        citations: ['cit-tdap-preg-1']
      },
      {
        id: 'tdap-preg-ben-3',
        description: 'Safe during pregnancy with no increased risk of adverse pregnancy outcomes',
        citations: ['cit-tdap-preg-2']
      }
    ],
    risks: [
      {
        id: 'tdap-preg-risk-1',
        description: 'Injection site soreness',
        frequency: 'Very common (50-70 in 100)',
        severity: 'mild',
        citations: ['cit-tdap-preg-1']
      },
      {
        id: 'tdap-preg-risk-2',
        description: 'Mild headache, fatigue',
        frequency: 'Common (20-30 in 100)',
        severity: 'mild',
        citations: ['cit-tdap-preg-1']
      },
      {
        id: 'tdap-preg-risk-3',
        description: 'Low-grade fever',
        frequency: 'Occasional (5-10 in 100)',
        severity: 'mild',
        citations: ['cit-tdap-preg-1']
      }
    ],
    alternatives: [{
      id: 'tdap-preg-alt-1',
      name: 'Postpartum Tdap Only',
      description: 'Mother receives Tdap after delivery instead',
      isEquivalent: false,
      benefits: [{
        id: 'tdap-preg-alt-ben-1',
        description: 'Mother protected',
        citations: ['cit-tdap-preg-1']
      }],
      risks: [{
        id: 'tdap-preg-alt-risk-1',
        description: 'Infant not protected by maternal antibodies; significantly less effective than prenatal vaccination',
        severity: 'severe',
        citations: ['cit-tdap-preg-1', 'cit-tdap-preg-2']
      }],
      evidenceLevel: 'expert-consensus',
      citations: ['cit-tdap-preg-1']
    }],
    whatIfWeWait: 'Optimal timing is 27-36 weeks gestation to maximize antibody transfer. Can be given earlier in pregnancy if pertussis outbreak. Not time-sensitive if already postpartum.',
    contraindications: [{
      id: 'tdap-preg-contra-1',
      condition: 'Severe allergic reaction to previous dose',
      severity: 'absolute',
      explanation: 'History of anaphylaxis',
      citations: ['cit-tdap-preg-1']
    }],
    questionsToAsk: [
      'When is the best time in my pregnancy to receive Tdap?',
      'Will anyone else caring for my baby need Tdap?',
      'Is pertussis common in our area right now?'
    ],
    citations: [citations['cit-tdap-preg-1'], citations['cit-tdap-preg-2']],
    lastReviewed: '2024-01-27',
    nextReviewDue: '2025-01-27',
    reviewedBy: 'Dr. Michael Torres, Clinical Reviewer'
  },
  {
    id: 'proc-flu-pregnancy',
    name: 'Influenza Vaccine During Pregnancy',
    shortName: 'Flu Shot (Pregnancy)',
    category: 'vaccination',
    stage: 'prenatal',
    urgencyLevel: 'routine',
    summary: 'Annual flu vaccine recommended during any trimester of pregnancy to protect mother and infant.',
    indication: 'Pregnant women are at higher risk for severe flu complications, hospitalization, and death. Flu during pregnancy also increases risk of preterm birth and low birth weight.',
    benefits: [
      {
        id: 'flu-preg-ben-1',
        description: 'Reduces maternal flu illness by 40-60%',
        citations: ['cit-flu-preg-1', 'cit-flu-preg-2']
      },
      {
        id: 'flu-preg-ben-2',
        description: 'Reduces infant flu risk by approximately 72% in first 6 months',
        citations: ['cit-flu-preg-2']
      },
      {
        id: 'flu-preg-ben-3',
        description: 'Reduces risk of flu-related hospitalization during pregnancy by approximately 40%',
        citations: ['cit-flu-preg-1']
      }
    ],
    risks: [
      {
        id: 'flu-preg-risk-1',
        description: 'Soreness at injection site',
        frequency: 'Common (20-40 in 100)',
        severity: 'mild',
        citations: ['cit-flu-preg-1']
      },
      {
        id: 'flu-preg-risk-2',
        description: 'Mild fever, body aches',
        frequency: 'Occasional (5-10 in 100)',
        severity: 'mild',
        citations: ['cit-flu-preg-1']
      }
    ],
    alternatives: [],
    whatIfWeWait: 'Pregnant women with flu are at increased risk for severe outcomes. Vaccination during pregnancy also protects infant. Can be given any trimester.',
    contraindications: [{
      id: 'flu-preg-contra-1',
      condition: 'Severe egg allergy (for some formulations)',
      severity: 'relative',
      explanation: 'Egg-free formulations available',
      citations: ['cit-flu-preg-1']
    }],
    questionsToAsk: [
      'Which flu vaccine formulation is recommended during pregnancy?',
      'Can I get this at the same time as Tdap?',
      'When should I get vaccinated if pregnant during flu season?'
    ],
    citations: [citations['cit-flu-preg-1'], citations['cit-flu-preg-2']],
    lastReviewed: '2024-01-27',
    nextReviewDue: '2025-01-27',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer'
  },
  {
    id: 'proc-water-birth',
    name: 'Water Birth (Water Immersion for Labor and Delivery)',
    shortName: 'Water Birth',
    category: 'other',
    stage: 'labor',
    urgencyLevel: 'elective',
    summary: 'Laboring and/or delivering in a tub of warm water. Water immersion during labor is considered evidence-based; underwater delivery is more controversial.',
    indication: 'Alternative approach to pain management and comfort during labor.',
    benefits: [
      {
        id: 'water-ben-1',
        description: 'Water immersion during first stage of labor reduces pain and use of epidural/spinal analgesia',
        citations: ['cit-waterbirth-2']
      },
      {
        id: 'water-ben-2',
        description: 'May shorten labor duration by approximately 30 minutes',
        citations: ['cit-waterbirth-2']
      },
      {
        id: 'water-ben-3',
        description: 'Increases maternal satisfaction and sense of control',
        citations: ['cit-waterbirth-2']
      }
    ],
    risks: [
      {
        id: 'water-risk-1',
        description: 'Rare reports of newborn respiratory complications with underwater delivery (data limited)',
        frequency: 'Rare (data insufficient for precise estimate)',
        severity: 'severe',
        citations: ['cit-waterbirth-1']
      },
      {
        id: 'water-risk-2',
        description: 'Difficulty monitoring fetal heart rate and maternal vital signs',
        severity: 'moderate',
        citations: ['cit-waterbirth-1']
      },
      {
        id: 'water-risk-3',
        description: 'Risk of infection if water not properly maintained',
        frequency: 'Rare with proper protocols',
        severity: 'moderate',
        citations: ['cit-waterbirth-1']
      }
    ],
    alternatives: [{
      id: 'water-alt-1',
      name: 'Water Immersion During Labor Only (Not Delivery)',
      description: 'Use water tub during labor but exit before delivery',
      isEquivalent: false,
      benefits: [{
        id: 'water-alt-ben-1',
        description: 'Provides pain relief benefits with lower risk profile',
        citations: ['cit-waterbirth-1', 'cit-waterbirth-2']
      }],
      risks: [{
        id: 'water-alt-risk-1',
        description: 'Must transition out of tub during pushing phase',
        severity: 'mild',
        citations: ['cit-waterbirth-1']
      }],
      evidenceLevel: 'systematic-review',
      citations: ['cit-waterbirth-2']
    }],
    whatIfWeWait: 'Water immersion can be started at any point during labor. ACOG recommends limiting underwater delivery due to insufficient safety data but supports water immersion during labor.',
    contraindications: [{
      id: 'water-contra-1',
      condition: 'High-risk pregnancy, fever, heavy bleeding, abnormal fetal heart rate',
      severity: 'absolute',
      explanation: 'Need for continuous monitoring and rapid intervention',
      citations: ['cit-waterbirth-1']
    }],
    questionsToAsk: [
      'Does this facility have experience with water birth?',
      'What are the protocols for water quality and temperature?',
      'Under what circumstances would I need to leave the tub?',
      'Can I labor in water but deliver out of water?'
    ],
    citations: [citations['cit-waterbirth-1'], citations['cit-waterbirth-2']],
    lastReviewed: '2024-01-27',
    nextReviewDue: '2025-01-27',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer'
  },
  {
    id: 'proc-delayed-cord-clamping',
    name: 'Delayed Umbilical Cord Clamping',
    shortName: 'Delayed Cord Clamping',
    category: 'other',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'Waiting at least 30-60 seconds (or until cord stops pulsating) before clamping and cutting the umbilical cord after birth. Now considered standard practice.',
    indication: 'Allows additional blood to transfer from placenta to newborn, improving iron stores and other outcomes.',
    benefits: [
      {
        id: 'delayed-cord-ben-1',
        description: 'Increases iron stores at 3-6 months by approximately 50%, reducing anemia risk',
        citations: ['cit-delayedcord-1', 'cit-delayedcord-2']
      },
      {
        id: 'delayed-cord-ben-2',
        description: 'Improves hemoglobin levels at birth',
        citations: ['cit-delayedcord-2']
      },
      {
        id: 'delayed-cord-ben-3',
        description: 'May improve neurodevelopmental outcomes, particularly in males',
        citations: ['cit-delayedcord-2']
      },
      {
        id: 'delayed-cord-ben-4',
        description: 'Reduces need for blood transfusion in preterm infants',
        citations: ['cit-delayedcord-1']
      }
    ],
    risks: [
      {
        id: 'delayed-cord-risk-1',
        description: 'Small increase in jaundice requiring phototherapy',
        frequency: 'Slight increase (approximately 2% absolute risk increase)',
        severity: 'mild',
        citations: ['cit-delayedcord-2']
      },
      {
        id: 'delayed-cord-risk-2',
        description: 'Brief delay in initial newborn care (typically 30-60 seconds)',
        severity: 'mild',
        citations: ['cit-delayedcord-1']
      }
    ],
    alternatives: [{
      id: 'delayed-cord-alt-1',
      name: 'Immediate Cord Clamping',
      description: 'Clamping cord within 10-15 seconds of birth',
      isEquivalent: false,
      benefits: [{
        id: 'delayed-cord-alt-ben-1',
        description: 'Slightly lower jaundice rates',
        citations: ['cit-delayedcord-2']
      }],
      risks: [{
        id: 'delayed-cord-alt-risk-1',
        description: 'Lower iron stores at 3-6 months, higher anemia risk',
        severity: 'moderate',
        citations: ['cit-delayedcord-2']
      }],
      evidenceLevel: 'systematic-review',
      citations: ['cit-delayedcord-2']
    }],
    whatIfWeWait: 'Delayed cord clamping IS the recommended standard. Immediate clamping is now considered the alternative approach. Should be performed immediately after birth (30-60 second delay).',
    contraindications: [{
      id: 'delayed-cord-contra-1',
      condition: 'Newborn requires immediate resuscitation',
      severity: 'absolute',
      explanation: 'Resuscitation takes priority',
      citations: ['cit-delayedcord-1']
    }],
    questionsToAsk: [
      'What is your standard protocol for cord clamping timing?',
      'Can I still have delayed cord clamping if I want cord blood banking?',
      'What if my baby needs immediate care?',
      'Who will cut the cord and when?'
    ],
    citations: [citations['cit-delayedcord-1'], citations['cit-delayedcord-2']],
    lastReviewed: '2024-01-27',
    nextReviewDue: '2025-01-27',
    reviewedBy: 'Dr. Michael Torres, Clinical Reviewer'
  },
  {
    id: 'proc-acupuncture-labor',
    name: 'Acupuncture for Labor Pain Management',
    shortName: 'Acupuncture',
    category: 'other',
    stage: 'labor',
    urgencyLevel: 'elective',
    summary: 'Use of acupuncture needles at specific points to help manage pain during labor. Requires trained practitioner.',
    indication: 'Complementary therapy for pain management during labor without pharmacological intervention.',
    benefits: [
      {
        id: 'acupuncture-ben-1',
        description: 'May reduce pain intensity during labor',
        citations: ['cit-acupuncture-1']
      },
      {
        id: 'acupuncture-ben-2',
        description: 'May reduce use of pharmacological pain relief',
        citations: ['cit-acupuncture-1']
      },
      {
        id: 'acupuncture-ben-3',
        description: 'No known harm to mother or baby when performed by trained practitioner',
        citations: ['cit-acupuncture-1']
      }
    ],
    risks: [
      {
        id: 'acupuncture-risk-1',
        description: 'Minor discomfort from needle insertion',
        frequency: 'Common',
        severity: 'mild',
        citations: ['cit-acupuncture-1']
      },
      {
        id: 'acupuncture-risk-2',
        description: 'Limited evidence; effectiveness varies between individuals',
        severity: 'mild',
        citations: ['cit-acupuncture-1']
      }
    ],
    alternatives: [],
    whatIfWeWait: 'Can be initiated at any point during labor if trained practitioner available. Effectiveness depends on individual response.',
    contraindications: [],
    questionsToAsk: [
      'Is there a trained acupuncturist available at this facility?',
      'What is the cost and is it covered by insurance?',
      'Can acupuncture be combined with other pain management methods?'
    ],
    citations: [citations['cit-acupuncture-1']],
    lastReviewed: '2024-01-27',
    nextReviewDue: '2025-01-27',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer'
  },
  {
    id: 'proc-hypnobirthing',
    name: 'Hypnosis/Hypnobirthing for Labor',
    shortName: 'Hypnobirthing',
    category: 'other',
    stage: 'labor',
    urgencyLevel: 'elective',
    summary: 'Self-hypnosis techniques including relaxation, visualization, and breathing exercises to manage labor pain. Requires prenatal training.',
    indication: 'Complementary approach to pain management emphasizing relaxation and mental preparation.',
    benefits: [
      {
        id: 'hypno-ben-1',
        description: 'May reduce pharmacological pain relief use',
        citations: ['cit-hypnobirth-1']
      },
      {
        id: 'hypno-ben-2',
        description: 'May increase satisfaction with pain management',
        citations: ['cit-hypnobirth-1']
      },
      {
        id: 'hypno-ben-3',
        description: 'No adverse effects when used alone or with other methods',
        citations: ['cit-hypnobirth-1']
      }
    ],
    risks: [
      {
        id: 'hypno-risk-1',
        description: 'Limited evidence of pain reduction; effectiveness varies greatly between individuals',
        severity: 'mild',
        citations: ['cit-hypnobirth-1']
      },
      {
        id: 'hypno-risk-2',
        description: 'Requires advance training and practice',
        severity: 'mild',
        citations: ['cit-hypnobirth-1']
      }
    ],
    alternatives: [],
    whatIfWeWait: 'Most effective when learned and practiced before labor. Can be combined with other pain management approaches.',
    contraindications: [],
    questionsToAsk: [
      'Are there hypnobirthing classes available in my area?',
      'How much practice time is typically needed?',
      'Can I use hypnobirthing techniques along with medical pain relief if needed?'
    ],
    citations: [citations['cit-hypnobirth-1']],
    lastReviewed: '2024-01-27',
    nextReviewDue: '2025-01-27',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer'
  },
  {
    id: 'proc-massage-labor',
    name: 'Massage and Touch for Labor Pain',
    shortName: 'Labor Massage',
    category: 'other',
    stage: 'labor',
    urgencyLevel: 'elective',
    summary: 'Use of massage, counterpressure, and touch techniques during labor to provide comfort and pain relief.',
    indication: 'Non-pharmacological comfort measure during labor.',
    benefits: [
      {
        id: 'massage-ben-1',
        description: 'May reduce pain and anxiety during labor',
        citations: ['cit-massage-1']
      },
      {
        id: 'massage-ben-2',
        description: 'May reduce need for pharmacological pain relief',
        citations: ['cit-massage-1']
      },
      {
        id: 'massage-ben-3',
        description: 'Provides supportive touch and partner involvement',
        citations: ['cit-massage-1']
      },
      {
        id: 'massage-ben-4',
        description: 'No known risks or adverse effects',
        citations: ['cit-massage-1']
      }
    ],
    risks: [],
    alternatives: [],
    whatIfWeWait: 'Can be used at any point during labor. Can be combined with any other pain management method.',
    contraindications: [],
    questionsToAsk: [
      'Are there specific massage techniques that are most helpful?',
      'Can my support person learn these techniques?',
      'Will staff help with positioning and counterpressure?'
    ],
    citations: [citations['cit-massage-1']],
    lastReviewed: '2024-01-27',
    nextReviewDue: '2025-01-27',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer'
  },
  {
    id: 'proc-aromatherapy-labor',
    name: 'Aromatherapy During Labor',
    shortName: 'Aromatherapy',
    category: 'other',
    stage: 'labor',
    urgencyLevel: 'elective',
    summary: 'Use of essential oils (typically lavender, chamomile, or peppermint) for relaxation and comfort during labor.',
    indication: 'Complementary comfort measure during labor.',
    benefits: [
      {
        id: 'aroma-ben-1',
        description: 'May reduce anxiety during labor',
        citations: ['cit-aromatherapy-1']
      },
      {
        id: 'aroma-ben-2',
        description: 'May improve relaxation and sense of well-being',
        citations: ['cit-aromatherapy-1']
      },
      {
        id: 'aroma-ben-3',
        description: 'No serious adverse effects reported when used appropriately',
        citations: ['cit-aromatherapy-1']
      }
    ],
    risks: [
      {
        id: 'aroma-risk-1',
        description: 'Limited evidence for pain reduction specifically',
        severity: 'mild',
        citations: ['cit-aromatherapy-1']
      },
      {
        id: 'aroma-risk-2',
        description: 'Possible allergic reaction or skin irritation',
        frequency: 'Rare',
        severity: 'mild',
        citations: ['cit-aromatherapy-1']
      },
      {
        id: 'aroma-risk-3',
        description: 'Strong scents may cause nausea in some women',
        frequency: 'Occasional',
        severity: 'mild',
        citations: ['cit-aromatherapy-1']
      }
    ],
    alternatives: [],
    whatIfWeWait: 'Can be used at any point during labor. Check facility policies on essential oil use.',
    contraindications: [],
    questionsToAsk: [
      'Does the facility allow essential oils during labor?',
      'Which essential oils are considered safe during labor?',
      'Should oils be diffused or applied topically (diluted)?'
    ],
    citations: [citations['cit-aromatherapy-1']],
    lastReviewed: '2024-01-27',
    nextReviewDue: '2025-01-27',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer'
  },
  {
    id: 'proc-breastfeeding',
    name: 'Breastfeeding (Maternal and Infant Outcomes)',
    shortName: 'Breastfeeding',
    category: 'birth-practice',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'Feeding infant directly from the breast, providing human milk with comprehensive nutritional and immunological benefits for both mother and infant. Exclusive breastfeeding recommended for first 6 months, continued with complementary foods through at least 12 months.',
    indication: 'Optimal nutrition for infants, providing protection against infections, allergies, and chronic diseases while supporting maternal health and bonding.',
    benefits: [
      {
        id: 'bf-ben-1',
        description: 'Reduces infant risk of otitis media (ear infections) by approximately 50%',
        citations: ['cit-breastfeed-1', 'cit-breastfeed-2']
      },
      {
        id: 'bf-ben-2',
        description: 'Reduces risk of respiratory infections and hospitalizations by 72% in first year',
        citations: ['cit-breastfeed-1']
      },
      {
        id: 'bf-ben-3',
        description: 'Reduces risk of gastrointestinal infections by 64%',
        citations: ['cit-breastfeed-2']
      },
      {
        id: 'bf-ben-4',
        description: 'Associated with 20-30% reduction in SIDS risk',
        citations: ['cit-breastfeed-1']
      },
      {
        id: 'bf-ben-5',
        description: 'May reduce risk of childhood obesity by 15-30% (dose-dependent)',
        citations: ['cit-breastfeed-1']
      },
      {
        id: 'bf-ben-6',
        description: 'Associated with modest improvements in cognitive development (3-5 IQ point average increase in meta-analyses)',
        citations: ['cit-breastfeed-2']
      },
      {
        id: 'bf-ben-7',
        description: 'Maternal benefits: Reduces postpartum bleeding, accelerates uterine involution, delays return of menses (natural child spacing)',
        citations: ['cit-breastfeed-3']
      },
      {
        id: 'bf-ben-8',
        description: 'Reduces maternal risk of breast cancer by 4% for every 12 months of breastfeeding',
        citations: ['cit-breastfeed-1']
      },
      {
        id: 'bf-ben-9',
        description: 'Reduces maternal risk of ovarian cancer by approximately 30%',
        citations: ['cit-breastfeed-1']
      },
      {
        id: 'bf-ben-10',
        description: 'May reduce maternal risk of type 2 diabetes and postpartum depression',
        citations: ['cit-breastfeed-3']
      },
      {
        id: 'bf-ben-11',
        description: 'Promotes mother-infant bonding through skin-to-skin contact and hormonal responses',
        citations: ['cit-breastfeed-3']
      }
    ],
    risks: [
      {
        id: 'bf-risk-1',
        description: 'Initial nipple soreness or discomfort (typically improves with proper latch support)',
        frequency: 'Common (30-80 in 100 initially)',
        severity: 'mild',
        citations: ['cit-breastfeed-3']
      },
      {
        id: 'bf-risk-2',
        description: 'Mastitis (breast infection) requiring antibiotics',
        frequency: 'Occasional (2-10 in 100)',
        severity: 'moderate',
        citations: ['cit-breastfeed-3']
      },
      {
        id: 'bf-risk-3',
        description: 'Insufficient milk supply concerns (often addressable with lactation support)',
        frequency: 'Common perception (30-40 in 100); true primary insufficiency is rare (1-5 in 100)',
        severity: 'mild',
        citations: ['cit-breastfeed-3']
      },
      {
        id: 'bf-risk-4',
        description: 'Maternal fatigue and time demands, particularly in early weeks',
        frequency: 'Common',
        severity: 'mild',
        citations: ['cit-breastfeed-3']
      },
      {
        id: 'bf-risk-5',
        description: 'Vitamin D deficiency in infant if mother not supplemented (requires vitamin D drops)',
        severity: 'mild',
        citations: ['cit-breastfeed-2']
      }
    ],
    alternatives: [
      {
        id: 'bf-alt-1',
        name: 'Formula Feeding',
        description: 'Commercial infant formula as sole nutrition source',
        isEquivalent: false,
        benefits: [
          {
            id: 'bf-alt-ben-1',
            description: 'Allows other caregivers to feed infant, sharing feeding responsibility',
            citations: ['cit-breastfeed-3']
          },
          {
            id: 'bf-alt-ben-2',
            description: 'Visible intake measurement for parents concerned about sufficiency',
            citations: ['cit-breastfeed-3']
          },
          {
            id: 'bf-alt-ben-3',
            description: 'May be necessary for specific medical conditions or medications incompatible with breastfeeding',
            citations: ['cit-breastfeed-3']
          }
        ],
        risks: [
          {
            id: 'bf-alt-risk-1',
            description: 'Lacks immunological components; higher rates of infections (ear, respiratory, GI)',
            severity: 'moderate',
            citations: ['cit-breastfeed-1', 'cit-breastfeed-2']
          },
          {
            id: 'bf-alt-risk-2',
            description: 'Associated with increased risk of childhood obesity, diabetes, and certain cancers (though absolute risks remain low)',
            severity: 'moderate',
            citations: ['cit-breastfeed-1']
          },
          {
            id: 'bf-alt-risk-3',
            description: 'Maternal misses hormonal benefits (uterine contraction, cancer risk reduction, return to pre-pregnancy weight)',
            severity: 'mild',
            citations: ['cit-breastfeed-1']
          },
          {
            id: 'bf-alt-risk-4',
            description: 'Financial cost (approximately $1,200-1,500 annually)',
            severity: 'mild',
            citations: ['cit-breastfeed-3']
          }
        ],
        evidenceLevel: 'systematic-review',
        citations: ['cit-breastfeed-1', 'cit-breastfeed-3']
      },
      {
        id: 'bf-alt-2',
        name: 'Combination Feeding',
        description: 'Mix of breastfeeding and formula supplementation',
        isEquivalent: false,
        benefits: [
          {
            id: 'bf-alt-ben-4',
            description: 'Provides some benefits of breastfeeding while allowing flexibility',
            citations: ['cit-breastfeed-2']
          },
          {
            id: 'bf-alt-ben-5',
            description: 'Can address concerns about milk supply while maintaining breastfeeding relationship',
            citations: ['cit-breastfeed-3']
          }
        ],
        risks: [
          {
            id: 'bf-alt-risk-5',
            description: 'Early introduction of formula may reduce milk supply (supply-demand relationship)',
            severity: 'moderate',
            citations: ['cit-breastfeed-3']
          },
          {
            id: 'bf-alt-risk-6',
            description: 'Benefits are dose-dependent; partial breastfeeding provides fewer benefits than exclusive',
            severity: 'mild',
            citations: ['cit-breastfeed-2']
          }
        ],
        evidenceLevel: 'systematic-review',
        citations: ['cit-breastfeed-2', 'cit-breastfeed-3']
      }
    ],
    whatIfWeWait: 'Breastfeeding initiation is most successful immediately after birth when infant reflexes are strongest and colostrum (first milk rich in antibodies) is available. Delaying first feeding beyond 1-2 hours may reduce likelihood of successful breastfeeding establishment. However, breastfeeding can be initiated at any point, and relactation is possible with support. Formula supplementation in first few days should be medically indicated to protect milk supply. Not urgent, but early initiation (within first hour) strongly recommended.',
    contraindications: [
      {
        id: 'bf-contra-1',
        condition: 'Maternal HIV infection in developed countries with access to safe formula',
        severity: 'absolute',
        explanation: 'Risk of HIV transmission through breastmilk outweighs benefits when safe alternatives available',
        citations: ['cit-breastfeed-3']
      },
      {
        id: 'bf-contra-2',
        condition: 'Infant with galactosemia (rare metabolic disorder)',
        severity: 'absolute',
        explanation: 'Cannot metabolize lactose in breastmilk',
        citations: ['cit-breastfeed-3']
      },
      {
        id: 'bf-contra-3',
        condition: 'Active, untreated tuberculosis in mother',
        severity: 'absolute',
        explanation: 'Can resume after treatment initiated',
        citations: ['cit-breastfeed-3']
      },
      {
        id: 'bf-contra-4',
        condition: 'Certain maternal medications (chemotherapy, radioactive agents, some psychiatric medications)',
        severity: 'absolute',
        explanation: 'Compatibility should be verified with healthcare provider and resources like LactMed',
        citations: ['cit-breastfeed-3']
      },
      {
        id: 'bf-contra-5',
        condition: 'Active herpes simplex lesions on breast',
        severity: 'relative',
        explanation: 'Can breastfeed from unaffected breast; resume both breasts after lesions heal',
        citations: ['cit-breastfeed-3']
      }
    ],
    questionsToAsk: [
      'What lactation support is available at this facility and after discharge?',
      'Will I have access to a lactation consultant?',
      'What if I have concerns about my milk supply?',
      'Can I breastfeed if I had breast surgery?',
      'Should I give my baby vitamin D supplements?',
      'How will I know if my baby is getting enough milk?',
      'What medications are safe while breastfeeding?'
    ],
    citations: [citations['cit-breastfeed-1'], citations['cit-breastfeed-2'], citations['cit-breastfeed-3']],
    lastReviewed: '2024-01-28',
    nextReviewDue: '2025-01-28',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer'
  },
  {
    id: 'proc-rooming-in',
    name: 'Rooming-In (Mother-Infant Together)',
    shortName: 'Rooming-In',
    category: 'birth-practice',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'Keeping mother and healthy newborn together in the same room 24 hours per day after birth, rather than separating infant to nursery. Now standard practice in most baby-friendly hospitals.',
    indication: 'Promotes bonding, breastfeeding success, and responsive caregiving while allowing parents to learn infant cues with professional support nearby.',
    benefits: [
      {
        id: 'room-ben-1',
        description: 'Increases breastfeeding duration and exclusivity',
        citations: ['cit-rooming-in-1']
      },
      {
        id: 'room-ben-2',
        description: 'Enhances mother-infant bonding and attachment',
        citations: ['cit-rooming-in-1']
      },
      {
        id: 'room-ben-3',
        description: 'Allows mother to learn infant hunger cues and feeding patterns with support',
        citations: ['cit-rooming-in-1']
      },
      {
        id: 'room-ben-4',
        description: 'Reduces infant crying and stress (measured by cortisol levels)',
        citations: ['cit-rooming-in-1']
      },
      {
        id: 'room-ben-5',
        description: 'May reduce risk of SIDS through closer monitoring and responsive feeding',
        citations: ['cit-rooming-in-1']
      }
    ],
    risks: [
      {
        id: 'room-risk-1',
        description: 'Maternal fatigue if unable to rest between feedings',
        frequency: 'Common',
        severity: 'mild',
        citations: ['cit-rooming-in-1']
      },
      {
        id: 'room-risk-2',
        description: 'Rare reports of falls or infant injury if mother falls asleep while holding baby in unsafe position',
        frequency: 'Very rare (proper education and bassinet use minimizes risk)',
        severity: 'severe',
        citations: ['cit-rooming-in-1']
      }
    ],
    alternatives: [
      {
        id: 'room-alt-1',
        name: 'Partial Nursery Care',
        description: 'Infant stays with mother during day but goes to nursery at night for some feedings',
        isEquivalent: false,
        benefits: [
          {
            id: 'room-alt-ben-1',
            description: 'Allows mother longer sleep intervals in first days',
            citations: ['cit-rooming-in-1']
          }
        ],
        risks: [
          {
            id: 'room-alt-risk-1',
            description: 'May reduce breastfeeding establishment if formula given in nursery',
            severity: 'moderate',
            citations: ['cit-rooming-in-1']
          },
          {
            id: 'room-alt-risk-2',
            description: 'Mother misses opportunities to learn infant cues and soothing techniques',
            severity: 'mild',
            citations: ['cit-rooming-in-1']
          }
        ],
        evidenceLevel: 'systematic-review',
        citations: ['cit-rooming-in-1']
      }
    ],
    whatIfWeWait: 'Rooming-in benefits begin immediately and are cumulative. Can be initiated at any point during hospital stay. Most facilities support flexible rooming-in where parents can request brief breaks or nursery care as needed. Not urgent, but early implementation supports breastfeeding.',
    contraindications: [
      {
        id: 'room-contra-1',
        condition: 'Infant requiring NICU or special care nursery for medical reasons',
        severity: 'absolute',
        explanation: 'Medical needs take priority',
        citations: ['cit-rooming-in-1']
      },
      {
        id: 'room-contra-2',
        condition: 'Maternal medical complications requiring intensive monitoring or rest',
        severity: 'relative',
        explanation: 'Can resume when mother medically stable',
        citations: ['cit-rooming-in-1']
      }
    ],
    questionsToAsk: [
      'What is your rooming-in policy?',
      'Can my partner/support person stay overnight?',
      'Can I request nursery care for specific periods if I need rest?',
      'Will staff teach me safe sleep practices before discharge?',
      'What if I need help with nighttime feedings?'
    ],
    citations: [citations['cit-rooming-in-1']],
    lastReviewed: '2024-01-28',
    nextReviewDue: '2025-01-28',
    reviewedBy: 'Dr. Michael Torres, Clinical Reviewer'
  },
  {
    id: 'proc-birth-positions',
    name: 'Upright and Alternative Birth Positions',
    shortName: 'Birth Positions',
    category: 'labor-support',
    stage: 'labor',
    urgencyLevel: 'routine',
    summary: 'Using upright, side-lying, hands-and-knees, squatting, or other non-supine positions during labor and delivery. Evidence supports freedom of movement and position choice.',
    indication: 'Alternative to traditional supine (lying on back) positioning; may improve comfort, labor progress, and outcomes.',
    benefits: [
      {
        id: 'pos-ben-1',
        description: 'Upright positions during first stage labor may shorten labor by approximately 1 hour',
        citations: ['cit-birth-position-1']
      },
      {
        id: 'pos-ben-2',
        description: 'Upright/lateral positions during second stage reduce episiotomy rates',
        citations: ['cit-birth-position-2']
      },
      {
        id: 'pos-ben-3',
        description: 'May reduce severe perineal trauma (though evidence mixed)',
        citations: ['cit-birth-position-2']
      },
      {
        id: 'pos-ben-4',
        description: 'Increased maternal satisfaction and sense of control',
        citations: ['cit-birth-position-1']
      },
      {
        id: 'pos-ben-5',
        description: 'Works with gravity and pelvic biomechanics',
        citations: ['cit-birth-position-1']
      }
    ],
    risks: [
      {
        id: 'pos-risk-1',
        description: 'Slightly increased blood loss with upright positions (average 100ml more, typically not clinically significant)',
        frequency: 'Common but usually not concerning',
        severity: 'mild',
        citations: ['cit-birth-position-2']
      },
      {
        id: 'pos-risk-2',
        description: 'May be challenging with epidural anesthesia (limited mobility)',
        severity: 'mild',
        citations: ['cit-birth-position-1']
      }
    ],
    alternatives: [
      {
        id: 'pos-alt-1',
        name: 'Supine (on back) Position',
        description: 'Traditional lithotomy or semi-reclined position',
        isEquivalent: false,
        benefits: [
          {
            id: 'pos-alt-ben-1',
            description: 'Familiar to many providers; easier for monitoring and interventions',
            citations: ['cit-birth-position-2']
          }
        ],
        risks: [
          {
            id: 'pos-alt-risk-1',
            description: 'May compress blood vessels reducing oxygen to baby',
            severity: 'moderate',
            citations: ['cit-birth-position-2']
          },
          {
            id: 'pos-alt-risk-2',
            description: 'Works against gravity; may prolong labor',
            severity: 'mild',
            citations: ['cit-birth-position-1']
          }
        ],
        evidenceLevel: 'systematic-review',
        citations: ['cit-birth-position-2']
      }
    ],
    whatIfWeWait: 'Position changes can be made at any time during labor. Many positions are compatible with monitoring. Can be discussed during labor based on progress and comfort.',
    contraindications: [],
    questionsToAsk: [
      'Do you support different positions during labor and delivery?',
      'Can I use a birthing ball, squat bar, or other support tools?',
      'If I have an epidural, what positions are possible?',
      'Will you help me try different positions?'
    ],
    citations: [citations['cit-birth-position-1'], citations['cit-birth-position-2']],
    lastReviewed: '2024-01-28',
    nextReviewDue: '2025-01-28',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer'
  },
  {
    id: 'proc-doula-support',
    name: 'Continuous Labor Support (Doula)',
    shortName: 'Doula Support',
    category: 'labor-support',
    stage: 'labor',
    urgencyLevel: 'elective',
    summary: 'Continuous emotional, physical, and informational support during labor from a trained birth companion (doula), in addition to medical staff and partner support.',
    indication: 'Evidence-based intervention to improve birth experience and outcomes through continuous presence and non-clinical support.',
    benefits: [
      {
        id: 'doula-ben-1',
        description: 'Reduces cesarean section rates by approximately 25%',
        citations: ['cit-doula-1']
      },
      {
        id: 'doula-ben-2',
        description: 'Reduces use of pain medication and epidural by approximately 10%',
        citations: ['cit-doula-1']
      },
      {
        id: 'doula-ben-3',
        description: 'Shortens labor by approximately 40 minutes on average',
        citations: ['cit-doula-1']
      },
      {
        id: 'doula-ben-4',
        description: 'Increases likelihood of positive birth experience and satisfaction',
        citations: ['cit-doula-1']
      },
      {
        id: 'doula-ben-5',
        description: 'Reduces risk of negative feelings about birth experience',
        citations: ['cit-doula-1']
      },
      {
        id: 'doula-ben-6',
        description: 'Improves Apgar scores at 5 minutes',
        citations: ['cit-doula-1']
      }
    ],
    risks: [
      {
        id: 'doula-risk-1',
        description: 'Financial cost if not covered by insurance (typically $500-2,500)',
        severity: 'mild',
        citations: ['cit-doula-1']
      },
      {
        id: 'doula-risk-2',
        description: 'Requires advance planning and relationship building',
        severity: 'mild',
        citations: ['cit-doula-1']
      }
    ],
    alternatives: [],
    whatIfWeWait: 'Most effective when relationship established before labor. Some hospitals have volunteer or staff doula programs. Can be arranged at any point during pregnancy.',
    contraindications: [],
    questionsToAsk: [
      'Does this facility allow doulas?',
      'Are there doula programs available in my area?',
      'Does my insurance cover doula services?',
      'How do I find a certified doula?',
      'Can my doula be present for cesarean delivery?'
    ],
    citations: [citations['cit-doula-1']],
    lastReviewed: '2024-01-28',
    nextReviewDue: '2025-01-28',
    reviewedBy: 'Dr. Michael Torres, Clinical Reviewer'
  },
  {
    id: 'proc-hepatitis-a',
    name: 'Hepatitis A Vaccine',
    shortName: 'Hep A Vaccine',
    category: 'vaccination',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'Two-dose vaccine series protecting against hepatitis A virus, typically given starting at age 12-23 months. Provides long-term protection against liver infection.',
    indication: 'Prevents hepatitis A, a contagious liver infection spread through contaminated food, water, or close contact. More common during travel to endemic areas.',
    benefits: [
      {
        id: 'hepa-ben-1',
        description: 'Provides 94-100% protection after two-dose series',
        citations: ['cit-hepa-1', 'cit-hepa-2']
      },
      {
        id: 'hepa-ben-2',
        description: 'Prevents outbreaks in childcare settings',
        citations: ['cit-hepa-1']
      },
      {
        id: 'hepa-ben-3',
        description: 'Provides long-lasting, possibly lifelong immunity',
        citations: ['cit-hepa-2']
      }
    ],
    risks: [
      {
        id: 'hepa-risk-1',
        description: 'Soreness or redness at injection site',
        frequency: 'Common (15-20 in 100)',
        severity: 'mild',
        citations: ['cit-hepa-1']
      },
      {
        id: 'hepa-risk-2',
        description: 'Low-grade fever',
        frequency: 'Occasional (5-10 in 100)',
        severity: 'mild',
        citations: ['cit-hepa-1']
      },
      {
        id: 'hepa-risk-3',
        description: 'Headache or fatigue',
        frequency: 'Uncommon (3-5 in 100)',
        severity: 'mild',
        citations: ['cit-hepa-1']
      },
      {
        id: 'hepa-risk-4',
        description: 'Severe allergic reaction',
        frequency: 'Extremely rare (less than 1 in 1,000,000)',
        severity: 'severe',
        citations: ['cit-hepa-1']
      }
    ],
    alternatives: [
      {
        id: 'hepa-alt-1',
        name: 'Decline Vaccination',
        description: 'Opt out of hepatitis A vaccine',
        isEquivalent: false,
        benefits: [
          {
            id: 'hepa-alt-ben-1',
            description: 'Avoids vaccine reactions',
            citations: ['cit-hepa-1']
          }
        ],
        risks: [
          {
            id: 'hepa-alt-risk-1',
            description: 'Risk of hepatitis A infection, which causes fever, fatigue, jaundice, and liver inflammation lasting weeks to months. Hospitalization required in approximately 15% of symptomatic cases.',
            frequency: '15 in 100 hospitalized',
            severity: 'moderate',
            citations: ['cit-hepa-1', 'cit-hepa-2']
          }
        ],
        evidenceLevel: 'expert-consensus',
        citations: ['cit-hepa-1']
      }
    ],
    whatIfWeWait: 'Hepatitis A is preventable; waiting increases risk during travel or outbreaks. Series can be started later if delayed. Second dose can be given 6-18 months after first.',
    contraindications: [
      {
        id: 'hepa-contra-1',
        condition: 'Severe allergic reaction to previous dose',
        severity: 'absolute',
        explanation: 'History of anaphylaxis',
        citations: ['cit-hepa-1']
      }
    ],
    questionsToAsk: [
      'Is hepatitis A common in areas we travel?',
      'What is the timing between doses?',
      'Can it be given with other vaccines?'
    ],
    citations: [citations['cit-hepa-1'], citations['cit-hepa-2']],
    lastReviewed: '2024-01-28',
    nextReviewDue: '2025-01-28',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer'
  },
  {
    id: 'proc-meningococcal-acwy',
    name: 'Meningococcal ACWY Vaccine',
    shortName: 'MenACWY Vaccine',
    category: 'vaccination',
    stage: 'postpartum',
    urgencyLevel: 'routine',
    summary: 'Vaccine protecting against four types (A, C, W, Y) of meningococcal bacteria that cause meningitis and bloodstream infections. First dose recommended at age 11-12 with booster at 16.',
    indication: 'Prevents invasive meningococcal disease, a rare but life-threatening bacterial infection causing meningitis and septicemia.',
    benefits: [
      {
        id: 'menacwy-ben-1',
        description: 'Provides 85-90% protection against serogroups A, C, W, and Y',
        citations: ['cit-menacwy-1', 'cit-menacwy-2']
      },
      {
        id: 'menacwy-ben-2',
        description: 'Prevents rapid, fulminant disease with 10-15% mortality rate',
        citations: ['cit-menacwy-1']
      },
      {
        id: 'menacwy-ben-3',
        description: 'Reduces disease transmission in close-contact settings (college dorms, military)',
        citations: ['cit-menacwy-2']
      }
    ],
    risks: [
      {
        id: 'menacwy-risk-1',
        description: 'Pain, redness, or swelling at injection site',
        frequency: 'Very common (40-60 in 100)',
        severity: 'mild',
        citations: ['cit-menacwy-1']
      },
      {
        id: 'menacwy-risk-2',
        description: 'Headache or fatigue',
        frequency: 'Common (20-40 in 100)',
        severity: 'mild',
        citations: ['cit-menacwy-1']
      },
      {
        id: 'menacwy-risk-3',
        description: 'Fever',
        frequency: 'Occasional (5-10 in 100)',
        severity: 'mild',
        citations: ['cit-menacwy-1']
      },
      {
        id: 'menacwy-risk-4',
        description: 'Severe allergic reaction',
        frequency: 'Very rare (less than 1 in 1,000,000)',
        severity: 'severe',
        citations: ['cit-menacwy-1']
      }
    ],
    alternatives: [
      {
        id: 'menacwy-alt-1',
        name: 'Decline Vaccination',
        description: 'Opt out of meningococcal ACWY vaccine',
        isEquivalent: false,
        benefits: [
          {
            id: 'menacwy-alt-ben-1',
            description: 'Avoids vaccine reactions',
            citations: ['cit-menacwy-1']
          }
        ],
        risks: [
          {
            id: 'menacwy-alt-risk-1',
            description: 'Risk of invasive meningococcal disease, which is rare (0.1-0.3 per 100,000) but has 10-15% mortality and 10-20% long-term disability rate (limb amputation, deafness, brain damage)',
            frequency: 'Rare but severe',
            severity: 'severe',
            citations: ['cit-menacwy-1', 'cit-menacwy-2']
          }
        ],
        evidenceLevel: 'expert-consensus',
        citations: ['cit-menacwy-1']
      }
    ],
    whatIfWeWait: 'Risk increases during adolescence and in close-contact living situations. Timing optimized for pre-adolescent immune response and college entry.',
    contraindications: [
      {
        id: 'menacwy-contra-1',
        condition: 'Severe allergic reaction to previous dose',
        severity: 'absolute',
        explanation: 'History of anaphylaxis',
        citations: ['cit-menacwy-1']
      }
    ],
    questionsToAsk: [
      'When will my child need the booster dose?',
      'Is meningococcal B vaccine also recommended?',
      'What symptoms should prompt immediate medical attention?'
    ],
    citations: [citations['cit-menacwy-1'], citations['cit-menacwy-2']],
    lastReviewed: '2024-01-28',
    nextReviewDue: '2025-01-28',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer'
  },
  {
    id: 'proc-cesarean-enhanced',
    name: 'Cesarean Section (C-Section)',
    shortName: 'Cesarean Delivery',
    category: 'surgical',
    stage: 'labor',
    urgencyLevel: 'emergency',
    summary: 'Surgical delivery of a baby through incisions in the abdomen and uterus. May be planned in advance (elective) or performed urgently during labor. One of the most common major surgeries performed worldwide.',
    indication: 'Cesarean delivery may be medically necessary when vaginal birth poses risks to mother or baby, or may be chosen electively. Common medical indications include previous cesarean with certain incision types, placenta previa, certain fetal positions (breech, transverse), multiple gestations, fetal distress, labor dystocia (failure to progress), cephalopelvic disproportion, active genital herpes, or maternal medical conditions.',
    benefits: [
      {
        id: 'cs-ben-1',
        description: 'Life-saving when medically indicated for maternal or fetal emergencies',
        citations: ['cit-csection-1', 'cit-csection-2']
      },
      {
        id: 'cs-ben-2',
        description: 'Planned timing can reduce uncertainty for scheduled cesareans',
        citations: ['cit-csection-1']
      },
      {
        id: 'cs-ben-3',
        description: 'Avoids risks of prolonged or obstructed labor when indicated',
        citations: ['cit-csection-2']
      },
      {
        id: 'cs-ben-4',
        description: 'Lower risk of pelvic floor disorders compared to difficult vaginal delivery',
        citations: ['cit-csection-2']
      }
    ],
    risks: [
      {
        id: 'cs-risk-1',
        description: 'Major surgery risks: infection (5-10%), hemorrhage requiring transfusion (1-6%), blood clots (0.1-1%)',
        frequency: 'Infection 5-10 in 100; Hemorrhage 1-6 in 100; Blood clots 1-10 in 1,000',
        severity: 'moderate',
        citations: ['cit-csection-1', 'cit-cesarean-recovery-1']
      },
      {
        id: 'cs-risk-2',
        description: 'Longer recovery time (6-8 weeks vs 2-4 weeks for vaginal birth); pain at incision site',
        frequency: 'Universal',
        severity: 'moderate',
        citations: ['cit-cesarean-recovery-1']
      },
      {
        id: 'cs-risk-3',
        description: 'Increased risk of respiratory problems in baby (especially if delivered before 39 weeks)',
        frequency: '3-4 in 100 vs 1-2 in 100 for vaginal birth',
        severity: 'moderate',
        citations: ['cit-csection-2']
      },
      {
        id: 'cs-risk-4',
        description: 'Future pregnancy complications: placenta previa (0.5-1%), placenta accreta (0.3-0.9% after one cesarean, increases with each subsequent cesarean)',
        frequency: 'Increases with multiple cesareans',
        severity: 'severe',
        citations: ['cit-cesarean-risks-1']
      },
      {
        id: 'cs-risk-5',
        description: 'Injury to bladder or bowel (rare)',
        frequency: '1-2 in 1,000',
        severity: 'severe',
        citations: ['cit-csection-1']
      },
      {
        id: 'cs-risk-6',
        description: 'Delayed breastfeeding initiation and skin-to-skin contact',
        frequency: 'Common',
        severity: 'mild',
        citations: ['cit-csection-2']
      },
      {
        id: 'cs-risk-7',
        description: 'Uterine rupture in future pregnancies (0.5-1% risk during VBAC attempt)',
        frequency: '5-10 in 1,000 during VBAC',
        severity: 'severe',
        citations: ['cit-vbac-1']
      }
    ],
    alternatives: [
      {
        id: 'cs-alt-1',
        name: 'Vaginal Birth After Cesarean (VBAC)',
        description: 'For women with one previous cesarean with low transverse incision, attempting vaginal birth in a subsequent pregnancy. Success rate is 60-80% depending on individual factors.',
        isEquivalent: false,
        benefits: [
          {
            id: 'vbac-ben-1',
            description: 'Successful VBAC avoids major surgery and associated risks',
            citations: ['cit-vbac-1', 'cit-vbac-2']
          },
          {
            id: 'vbac-ben-2',
            description: 'Shorter recovery time when successful (2-4 weeks)',
            citations: ['cit-vbac-2']
          },
          {
            id: 'vbac-ben-3',
            description: 'Lower risk of placental complications in future pregnancies',
            citations: ['cit-cesarean-risks-1']
          },
          {
            id: 'vbac-ben-4',
            description: '60-80% success rate for VBAC candidates; higher if previous vaginal birth',
            citations: ['cit-vbac-2', 'cit-vbac-3']
          },
          {
            id: 'vbac-ben-5',
            description: 'Lower maternal morbidity when successful compared to repeat cesarean',
            citations: ['cit-vbac-3']
          }
        ],
        risks: [
          {
            id: 'vbac-risk-1',
            description: 'Uterine rupture risk of 0.5-1% (5-10 per 1,000), which can be life-threatening',
            frequency: '5-10 in 1,000',
            severity: 'severe',
            citations: ['cit-vbac-1', 'cit-vbac-2']
          },
          {
            id: 'vbac-risk-2',
            description: 'If VBAC attempt fails, emergency cesarean carries higher risk than planned cesarean',
            frequency: '20-40 in 100 require cesarean',
            severity: 'moderate',
            citations: ['cit-vbac-2']
          },
          {
            id: 'vbac-risk-3',
            description: 'Requires continuous fetal monitoring and immediate surgical capability',
            severity: 'mild',
            citations: ['cit-vbac-1']
          },
          {
            id: 'vbac-risk-4',
            description: 'Not suitable for all facilities (requires surgical team immediately available)',
            severity: 'mild',
            citations: ['cit-vbac-1']
          }
        ],
        evidenceLevel: 'systematic-review',
        citations: ['cit-vbac-1', 'cit-vbac-2', 'cit-vbac-3']
      },
      {
        id: 'cs-alt-2',
        name: 'Trial of Labor (for first-time cesarean)',
        description: 'When cesarean is suggested for non-emergent reasons, discussing expectant management or labor support measures before proceeding to surgery.',
        isEquivalent: false,
        benefits: [
          {
            id: 'tol-ben-1',
            description: 'Avoids surgical risks if vaginal birth successful',
            citations: ['cit-csection-1']
          },
          {
            id: 'tol-ben-2',
            description: 'Continuous labor support (doula) reduces cesarean rate by 15-30%',
            citations: ['cit-doula-1']
          },
          {
            id: 'tol-ben-3',
            description: 'Position changes and mobility may help labor progress',
            citations: ['cit-birth-position-1']
          }
        ],
        risks: [
          {
            id: 'tol-risk-1',
            description: 'May prolong labor if ultimately cesarean is needed',
            severity: 'mild',
            citations: ['cit-csection-1']
          },
          {
            id: 'tol-risk-2',
            description: 'Not appropriate when cesarean is medically indicated',
            severity: 'moderate',
            citations: ['cit-csection-1']
          }
        ],
        evidenceLevel: 'expert-consensus',
        citations: ['cit-csection-1', 'cit-doula-1']
      }
    ],
    whatIfWeWait: 'Timing depends on indication. Emergency cesarean (fetal distress, cord prolapse, placental abruption) requires immediate action. Urgent cesarean (failure to progress, concerning fetal heart patterns) may allow brief discussion. Elective cesarean should ideally wait until 39 weeks to reduce respiratory issues in baby. If cesarean is suggested for non-urgent reasons, ask about timeline and whether labor support measures could be tried first. VBAC candidacy depends on multiple factors including previous incision type, facility capabilities, and individual risk factors - discuss with provider.',
    contraindications: [
      {
        id: 'vbac-contra-1',
        condition: 'Previous classical (vertical) uterine incision or T-shaped incision',
        severity: 'absolute',
        explanation: 'High risk of uterine rupture (4-9%); repeat cesarean strongly recommended',
        citations: ['cit-vbac-1']
      },
      {
        id: 'vbac-contra-2',
        condition: 'More than two previous cesarean deliveries',
        severity: 'relative',
        explanation: 'Increased uterine rupture risk; individualized assessment required',
        citations: ['cit-vbac-1']
      },
      {
        id: 'vbac-contra-3',
        condition: 'Previous uterine rupture',
        severity: 'absolute',
        explanation: 'Recurrence risk 6-32%; cesarean strongly recommended',
        citations: ['cit-vbac-1']
      },
      {
        id: 'vbac-contra-4',
        condition: 'Placenta previa, vasa previa, or placental abruption',
        severity: 'absolute',
        explanation: 'Emergency cesarean required to prevent maternal-fetal hemorrhage',
        citations: ['cit-csection-1']
      }
    ],
    questionsToAsk: [
      'What is the medical indication for cesarean in my case?',
      'Is this an emergency or is there time to discuss options?',
      'If I had a previous cesarean, what type of uterine incision did I have?',
      'Am I a candidate for VBAC? What are my specific risk factors?',
      'What is the VBAC success rate at this facility?',
      'Can I have immediate skin-to-skin contact in the operating room?',
      'What pain management options are available after surgery?',
      'When can I expect to breastfeed?',
      'What are signs of complications I should watch for?',
      'How will this cesarean affect future pregnancies?'
    ],
    citations: [
      citations['cit-csection-1'], 
      citations['cit-csection-2'],
      citations['cit-vbac-1'],
      citations['cit-vbac-2'],
      citations['cit-vbac-3'],
      citations['cit-cesarean-recovery-1'],
      citations['cit-cesarean-risks-1']
    ],
    lastReviewed: '2024-01-30',
    nextReviewDue: '2025-01-30',
    reviewedBy: 'Dr. Michael Torres, Clinical Reviewer'
  },
  {
    id: 'proc-midwife-care',
    name: 'Midwife-Led Continuity of Care Model',
    shortName: 'Midwife-Led Care',
    category: 'birth-practice',
    stage: 'prenatal',
    urgencyLevel: 'elective',
    summary: 'A model of maternity care where a known midwife or small group of midwives provides continuous care throughout pregnancy, birth, and postpartum. Emphasizes physiologic birth, informed choice, and relationship-based care.',
    indication: 'Appropriate for low-risk pregnancies. Midwives are trained healthcare professionals specializing in normal pregnancy and birth. Can practice in hospitals, birth centers, or homes. Collaborative relationships with physicians for complications.',
    benefits: [
      {
        id: 'mw-ben-1',
        description: 'Reduced cesarean rate (24% vs 32% in physician-led care for low-risk women)',
        citations: ['cit-midwife-1', 'cit-midwife-2']
      },
      {
        id: 'mw-ben-2',
        description: 'Lower rates of instrumental vaginal delivery (forceps/vacuum)',
        citations: ['cit-midwife-1']
      },
      {
        id: 'mw-ben-3',
        description: 'Reduced use of regional analgesia (epidural)',
        citations: ['cit-midwife-1', 'cit-midwife-3']
      },
      {
        id: 'mw-ben-4',
        description: 'Increased likelihood of spontaneous vaginal birth',
        citations: ['cit-midwife-1']
      },
      {
        id: 'mw-ben-5',
        description: 'Fewer episiotomies performed',
        citations: ['cit-midwife-1']
      },
      {
        id: 'mw-ben-6',
        description: 'Higher rates of breastfeeding initiation and duration',
        citations: ['cit-midwife-2']
      },
      {
        id: 'mw-ben-7',
        description: 'Greater maternal satisfaction with care and birth experience',
        citations: ['cit-midwife-1', 'cit-midwife-2']
      },
      {
        id: 'mw-ben-8',
        description: 'Continuity of caregiver relationship throughout pregnancy and birth',
        citations: ['cit-midwife-1']
      },
      {
        id: 'mw-ben-9',
        description: 'Similar or improved maternal and perinatal outcomes for low-risk women',
        citations: ['cit-midwife-1', 'cit-midwife-3']
      },
      {
        id: 'mw-ben-10',
        description: 'Reduced preterm birth rates (less than 37 weeks)',
        citations: ['cit-midwife-1']
      }
    ],
    risks: [
      {
        id: 'mw-risk-1',
        description: 'May require transfer to physician care if complications develop (10-40% of planned home births transfer to hospital)',
        frequency: 'Varies by setting and risk status',
        severity: 'mild',
        citations: ['cit-home-birth-1']
      },
      {
        id: 'mw-risk-2',
        description: 'Limited availability in some geographic areas',
        severity: 'mild',
        citations: ['cit-midwife-2']
      },
      {
        id: 'mw-risk-3',
        description: 'Insurance coverage varies by state and practice setting',
        severity: 'mild',
        citations: ['cit-midwife-2']
      },
      {
        id: 'mw-risk-4',
        description: 'Not appropriate for high-risk pregnancies requiring specialist care',
        severity: 'moderate',
        citations: ['cit-midwife-1']
      }
    ],
    alternatives: [
      {
        id: 'mw-alt-1',
        name: 'Physician-Led Care (OB/GYN)',
        description: 'Traditional obstetric care model with physician (obstetrician) as primary provider. May be necessary for high-risk pregnancies.',
        isEquivalent: true,
        benefits: [
          {
            id: 'obgyn-ben-1',
            description: 'Immediate surgical capability if complications arise',
            citations: ['cit-csection-1']
          },
          {
            id: 'obgyn-ben-2',
            description: 'Required for high-risk conditions (multiple gestations, preeclampsia, placenta previa, etc.)',
            citations: ['cit-csection-1']
          },
          {
            id: 'obgyn-ben-3',
            description: 'Widely available and covered by insurance',
            citations: ['cit-midwife-2']
          }
        ],
        risks: [
          {
            id: 'obgyn-risk-1',
            description: 'Higher rates of medical interventions for low-risk women (cesarean, induction, episiotomy)',
            frequency: 'See comparison above',
            severity: 'mild',
            citations: ['cit-midwife-1', 'cit-midwife-3']
          },
          {
            id: 'obgyn-risk-2',
            description: 'Less continuity of care; may meet delivering physician for first time in labor',
            severity: 'mild',
            citations: ['cit-midwife-2']
          }
        ],
        evidenceLevel: 'systematic-review',
        citations: ['cit-midwife-1', 'cit-csection-1']
      },
      {
        id: 'mw-alt-2',
        name: 'Collaborative Care Model',
        description: 'Midwife provides primary prenatal care with physician consultation available; physician takes over if complications develop.',
        isEquivalent: true,
        benefits: [
          {
            id: 'collab-ben-1',
            description: 'Combines midwife relationship with immediate physician backup',
            citations: ['cit-midwife-2']
          },
          {
            id: 'collab-ben-2',
            description: 'Seamless transition if risk status changes',
            citations: ['cit-midwife-2']
          }
        ],
        risks: [
          {
            id: 'collab-risk-1',
            description: 'Less widely available; requires integrated practice',
            severity: 'mild',
            citations: ['cit-midwife-2']
          }
        ],
        evidenceLevel: 'expert-consensus',
        citations: ['cit-midwife-2']
      },
      {
        id: 'mw-alt-3',
        name: 'Birth Center Care',
        description: 'Freestanding or hospital-adjacent facility staffed by midwives, designed for low-risk physiologic birth with home-like environment.',
        isEquivalent: true,
        benefits: [
          {
            id: 'bc-ben-1',
            description: 'Lower cesarean rates (6% vs 24-33% in hospital)',
            citations: ['cit-birth-center-1']
          },
          {
            id: 'bc-ben-2',
            description: 'Home-like environment with freedom of movement',
            citations: ['cit-birth-center-1']
          },
          {
            id: 'bc-ben-3',
            description: 'Shorter postpartum stay (6-12 hours typical)',
            citations: ['cit-birth-center-1']
          },
          {
            id: 'bc-ben-4',
            description: 'Lower cost than hospital birth',
            citations: ['cit-birth-center-1']
          },
          {
            id: 'bc-ben-5',
            description: 'Similar or improved perinatal outcomes for low-risk women',
            citations: ['cit-birth-center-1']
          }
        ],
        risks: [
          {
            id: 'bc-risk-1',
            description: 'Transfer to hospital if complications (12-16% of first-time mothers)',
            frequency: '12-16 in 100 for nulliparas',
            severity: 'mild',
            citations: ['cit-birth-center-1']
          },
          {
            id: 'bc-risk-2',
            description: 'Epidural not available; transfer needed if desired',
            severity: 'mild',
            citations: ['cit-birth-center-1']
          }
        ],
        evidenceLevel: 'cohort-study',
        citations: ['cit-birth-center-1']
      },
      {
        id: 'mw-alt-4',
        name: 'Planned Home Birth with Certified Midwife',
        description: 'Birth at home with certified professional midwife (CPM) or certified nurse-midwife (CNM). Only appropriate for low-risk pregnancies. Requires transfer plan to hospital.',
        isEquivalent: false,
        benefits: [
          {
            id: 'hb-ben-1',
            description: 'Lowest intervention rates: 5-7% cesarean (after transfer), minimal episiotomy',
            citations: ['cit-home-birth-1']
          },
          {
            id: 'hb-ben-2',
            description: 'Familiar environment, maximum autonomy and comfort',
            citations: ['cit-home-birth-1']
          },
          {
            id: 'hb-ben-3',
            description: 'One-on-one continuous midwife support',
            citations: ['cit-home-birth-1']
          },
          {
            id: 'hb-ben-4',
            description: 'For low-risk women with trained midwife, comparable maternal outcomes to hospital birth',
            citations: ['cit-home-birth-1']
          }
        ],
        risks: [
          {
            id: 'hb-risk-1',
            description: 'No immediate access to cesarean, blood transfusion, or NICU if emergency develops',
            severity: 'severe',
            citations: ['cit-home-birth-1']
          },
          {
            id: 'hb-risk-2',
            description: 'Transfer required in 10-40% of first-time mothers (lower for subsequent births)',
            frequency: '10-40 in 100 for nulliparas',
            severity: 'moderate',
            citations: ['cit-home-birth-1']
          },
          {
            id: 'hb-risk-3',
            description: 'Small increase in perinatal mortality (1-2 per 1,000 vs hospital); absolute risk remains low',
            frequency: '1-2 in 1,000',
            severity: 'severe',
            citations: ['cit-home-birth-1']
          },
          {
            id: 'hb-risk-4',
            description: 'Variable insurance coverage; often paid out-of-pocket',
            severity: 'mild',
            citations: ['cit-home-birth-1']
          },
          {
            id: 'hb-risk-5',
            description: 'Not appropriate for high-risk conditions or if previous cesarean',
            severity: 'moderate',
            citations: ['cit-home-birth-1']
          }
        ],
        evidenceLevel: 'cohort-study',
        citations: ['cit-home-birth-1']
      }
    ],
    whatIfWeWait: 'Midwifery care is most beneficial when started early in pregnancy to establish relationship and continuity. Can transfer to midwifery care at any point if low-risk status maintained. Some midwives accept clients in later pregnancy. If complications develop, transfer to physician care can occur seamlessly in collaborative models.',
    contraindications: [
      {
        id: 'mw-contra-1',
        condition: 'High-risk medical conditions (insulin-dependent diabetes, chronic hypertension, clotting disorders, heart disease)',
        severity: 'absolute',
        explanation: 'Requires physician or maternal-fetal medicine specialist',
        citations: ['cit-midwife-1']
      },
      {
        id: 'mw-contra-2',
        condition: 'Multiple gestations (twins, triplets)',
        severity: 'relative',
        explanation: 'Some midwives attend twin births in hospital setting with physician backup',
        citations: ['cit-midwife-1']
      },
      {
        id: 'mw-contra-3',
        condition: 'Placenta previa or known placental abnormalities',
        severity: 'absolute',
        explanation: 'Requires surgical capability and blood bank access',
        citations: ['cit-csection-1']
      },
      {
        id: 'mw-contra-4',
        condition: 'Previous cesarean (for home birth)',
        severity: 'absolute',
        explanation: 'VBAC at home carries unacceptable risk; hospital VBAC with midwife may be option',
        citations: ['cit-vbac-1']
      }
    ],
    questionsToAsk: [
      'What is your training and certification? (CNM vs CPM vs CM)',
      'How many births have you attended?',
      'What is your transfer rate to physician care or hospital?',
      'Do you have hospital privileges or collaborative physician relationships?',
      'What equipment do you bring for home/birth center births?',
      'What is your emergency transfer plan?',
      'Are you available 24/7 when I\'m near my due date?',
      'What is your cesarean rate for low-risk clients?',
      'Do you provide postpartum home visits?',
      'Does my insurance cover your services?',
      'What pain management options do you offer?',
      'Under what circumstances would you recommend transfer to physician care?'
    ],
    citations: [
      citations['cit-midwife-1'],
      citations['cit-midwife-2'],
      citations['cit-midwife-3'],
      citations['cit-birth-center-1'],
      citations['cit-home-birth-1']
    ],
    lastReviewed: '2024-01-30',
    nextReviewDue: '2025-01-30',
    reviewedBy: 'Dr. Sarah Chen, Clinical Reviewer'
  }
]
