import { EvidenceCitation } from './types'

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
    authors: 'WHO Guidelines',
    source: 'WHO',
    date: '2018-01',
    evidenceLevel: 'expert-consensus'
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
  },
  'cit-induction-1': {
    id: 'cit-induction-1',
    title: 'Labor Induction: ACOG Practice Bulletin',
    authors: 'ACOG Committee',
    source: 'Obstetrics & Gynecology',
    date: '2023-08',
    url: 'https://acog.org',
    evidenceLevel: 'expert-consensus'
  },
  'cit-induction-2': {
    id: 'cit-induction-2',
    title: 'Induction of Labour at 39 Weeks in Nulliparous Women: ARRIVE Trial',
    authors: 'Grobman et al.',
    source: 'New England Journal of Medicine',
    date: '2018-08',
    url: 'https://nejm.org',
    evidenceLevel: 'rct'
  },
  'cit-induction-3': {
    id: 'cit-induction-3',
    title: 'Methods of Induction of Labour: A Systematic Review',
    authors: 'Alfirevic et al.',
    source: 'Cochrane Database of Systematic Reviews',
    date: '2022-07',
    evidenceLevel: 'systematic-review'
  },
  'cit-induction-4': {
    id: 'cit-induction-4',
    title: 'Risks and Benefits of Labor Induction',
    authors: 'Mishanina et al.',
    source: 'BMJ',
    date: '2014-08',
    url: 'https://bmj.com',
    evidenceLevel: 'systematic-review'
  },
  'cit-cesarean-vbac-1': {
    id: 'cit-cesarean-vbac-1',
    title: 'Comparison of Maternal and Neonatal Outcomes: Cesarean vs Vaginal Delivery',
    authors: 'Liu et al.',
    source: 'CMAJ',
    date: '2007-10',
    evidenceLevel: 'cohort-study'
  },
  'cit-cesarean-vbac-2': {
    id: 'cit-cesarean-vbac-2',
    title: 'Mode of Delivery and Maternal and Neonatal Outcomes',
    authors: 'Villar et al.',
    source: 'The Lancet',
    date: '2007-06',
    evidenceLevel: 'cohort-study'
  },
  'cit-cesarean-vbac-3': {
    id: 'cit-cesarean-vbac-3',
    title: 'Delivery Outcomes in Women with Previous Cesarean: Planned VBAC vs Elective Repeat Cesarean',
    authors: 'Knight et al.',
    source: 'British Journal of Obstetrics and Gynaecology',
    date: '2008-05',
    evidenceLevel: 'cohort-study'
  },
  'cit-epidural-1': {
    id: 'cit-epidural-1',
    title: 'Epidural Analgesia for Labor: Evidence-Based Review',
    authors: 'Anim-Somuah et al.',
    source: 'Cochrane Database of Systematic Reviews',
    date: '2018-05',
    evidenceLevel: 'systematic-review'
  },
  'cit-epidural-2': {
    id: 'cit-epidural-2',
    title: 'Neuraxial Analgesia for Labor: Safety and Effectiveness',
    authors: 'ACOG Committee Opinion',
    source: 'Obstetrics & Gynecology',
    date: '2019-04',
    url: 'https://acog.org',
    evidenceLevel: 'expert-consensus'
  },
  'cit-spinal-1': {
    id: 'cit-spinal-1',
    title: 'Spinal Anesthesia for Cesarean Delivery: A Review',
    authors: 'Kinsella & Carvalho',
    source: 'Anesthesia & Analgesia',
    date: '2020-01',
    evidenceLevel: 'systematic-review'
  },
  'cit-spinal-2': {
    id: 'cit-spinal-2',
    title: 'Comparison of Regional Anesthetic Techniques for Cesarean Delivery',
    authors: 'Ng et al.',
    source: 'Cochrane Database of Systematic Reviews',
    date: '2004-07',
    evidenceLevel: 'systematic-review'
  },
  'cit-combined-spinal-epidural-1': {
    id: 'cit-combined-spinal-epidural-1',
    title: 'Combined Spinal-Epidural Versus Epidural Analgesia in Labour',
    authors: 'Simmons et al.',
    source: 'Cochrane Database of Systematic Reviews',
    date: '2012-10',
    evidenceLevel: 'systematic-review'
  },
  'cit-bonding-1': {
    id: 'cit-bonding-1',
    title: 'Early Skin-to-Skin Contact for Mothers and Their Healthy Newborn Infants',
    authors: 'Moore et al.',
    source: 'Cochrane Database of Systematic Reviews',
    date: '2016-11',
    url: 'https://cochrane.org',
    evidenceLevel: 'systematic-review'
  },
  'cit-bonding-2': {
    id: 'cit-bonding-2',
    title: 'Mother-Infant Bonding and Brain Development',
    authors: 'Feldman R.',
    source: 'Biological Psychiatry',
    date: '2017-01',
    evidenceLevel: 'systematic-review'
  },
  'cit-bonding-3': {
    id: 'cit-bonding-3',
    title: 'Maternal Touch and Infant Development',
    authors: 'Ferber et al.',
    source: 'Developmental Psychobiology',
    date: '2008-11',
    evidenceLevel: 'cohort-study'
  },
  'cit-neural-1': {
    id: 'cit-neural-1',
    title: 'Responsive Parenting and Infant Brain Development',
    authors: 'Bernier et al.',
    source: 'Child Development',
    date: '2016-03',
    evidenceLevel: 'cohort-study'
  },
  'cit-neural-2': {
    id: 'cit-neural-2',
    title: 'The Impact of Early Experience on Infant Brain Development',
    authors: 'Fox et al.',
    source: 'Pediatrics',
    date: '2010-11',
    url: 'https://publications.aap.org',
    evidenceLevel: 'systematic-review'
  },
  'cit-attachment-1': {
    id: 'cit-attachment-1',
    title: 'Attachment and Brain Development in Infancy',
    authors: 'Schore AN.',
    source: 'Attachment & Human Development',
    date: '2001-01',
    evidenceLevel: 'expert-consensus'
  },
  'cit-oxytocin-1': {
    id: 'cit-oxytocin-1',
    title: 'Oxytocin and Mother-Infant Bonding',
    authors: 'Feldman et al.',
    source: 'Biological Psychiatry',
    date: '2007-12',
    evidenceLevel: 'cohort-study'
  }
}