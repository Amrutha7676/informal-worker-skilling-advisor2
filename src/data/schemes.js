export const SCHEMES = [
  {
    id: 'esic_code_2020',
    name: 'ESIC Skilling & Convalescent Benefit (Code on Social Security 2020 § 45)',
    authority: 'Employees’ State Insurance Corporation (ESIC), Ministry of Labour & Employment',
    applicableIf: ['esic'],
    coveragePercent: 100,
    tuitionFeeWaiver: '₹0 Out-of-pocket (Fully paid by ESIC Social Security Fund)',
    stipendBenefit: '70% of Daily Wage Compensation paid during training days for income loss protection',
    toolKitAllowance: 'Free Safety Gear & Work Boots provided at NSTI/ITI center',
    eligibilityCriteria: [
      'Valid ESIC IP (Insured Person) Number registered with Gig Aggregator (Zomato/Swiggy/Uber/Ola)',
      'At least 78 days of ESIC contribution paid in preceding 12 months'
    ],
    officialGazetteRef: 'Gazette of India Extraordinary Part II § 45(2), Code on Social Security 2020',
    verificationPortal: 'https://www.esic.gov.in',
    citationId: 'cite_esic_2020'
  },
  {
    id: 'pmkvy_4_0',
    name: 'PMKVY 4.0 Short Term Skilling & DBT Stipend',
    authority: 'Ministry of Skill Development & Entrepreneurship (MSDE, Govt of India)',
    applicableIf: ['e_shram', 'any'],
    coveragePercent: 100,
    tuitionFeeWaiver: '₹0 Out-of-pocket (Centrally Sponsored Scheme)',
    stipendBenefit: '₹1,500 Direct Benefit Transfer (DBT) paid to Aadhaar-linked bank account',
    toolKitAllowance: 'Official NCVT Skill Certificate & Assessment Badge',
    eligibilityCriteria: [
      'Indian Citizen aged 18 to 45 years',
      'e-Shram UAN cardholder or Unorganized Worker',
      'Minimum 80% attendance in training center'
    ],
    officialGazetteRef: 'MSDE Guidelines PMKVY 4.0 (2023-2026) § 3.4',
    verificationPortal: 'https://www.skillindiadigital.gov.in',
    citationId: 'cite_pmkvy_4'
  },
  {
    id: 'kmky_karnataka',
    name: 'Karnataka Mukhyamantri Koushalya Yojana (KMKY) & Free Tool Kit',
    authority: 'Karnataka Skill Development Corporation (KSDC), Govt of Karnataka',
    applicableIf: ['karnataka_domicile', 'e_shram'],
    coveragePercent: 100,
    tuitionFeeWaiver: '₹0 Out-of-pocket (State Subsidized)',
    stipendBenefit: 'Free Bus Pass for commute to Govt ITI / GTTC center in Bengaluru & Mysuru',
    toolKitAllowance: '₹3,000 Worth Professional Tool Kit (e.g. Multimeter, Soldering Station, Insulated Pliers)',
    eligibilityCriteria: [
      'Karnataka Domicile Resident',
      'Unemployed or Underemployed Informal Worker aged 18-35',
      'Annual family income below ₹2,00,000'
    ],
    officialGazetteRef: 'Govt Order No. KSDC/KMKY/2023-24/109',
    verificationPortal: 'https://kaushalya.karnataka.gov.in',
    citationId: 'cite_kmky_ksdc'
  }
];
