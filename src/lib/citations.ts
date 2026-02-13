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
    title: 'Preventio
    source: 'WHO',
    source: 'Obstetrics & Gyne
    source: 'WHO',
    date: '2018-01',
  },
  'c
  'cit-varicella-1': {h-2',
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