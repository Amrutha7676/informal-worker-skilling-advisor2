export const SKILLING_ROADMAPS = {
  delivery_rider: [
    {
      id: 'ev_technician',
      targetRole: 'Certified EV Two-Wheeler / Auto Technician (ಎಲೆಕ್ಟ್ರಿಕ್ ವಾಹನ ತಂತ್ರಜ್ಞ)',
      nsqfLevel: 'Level 4 (National Skills Qualifications Framework)',
      sector: 'Automotive & Green Energy',
      effort: 'Moderate (6 Weeks / Weekend Batches Available)',
      durationWeeks: 6,
      batchType: 'Evening (6 PM - 8 PM) & Sunday Full Day',
      prerequisites: '10th Class Pass + Basic mechanical awareness',
      currentAvgIncome: 18500,
      targetAvgIncome: 34000,
      salaryMultiplier: '1.84x Income Increase',
      jobDemandContext: 'Karnataka EV Policy targets 100% gig vehicle electrification by 2030. Over 14,000 EV service technician jobs open in Bengaluru, Hosur & Mysuru.',
      skillsLearned: [
        'Lithium-ion Battery Management Systems (BMS)',
        'BLDC Motor Diagnostics & Controller Repair',
        'High-Voltage Electrical Safety Protocols',
        'CAN-Bus Diagnostics using OBD II Scanners'
      ],
      officialSchemeCode: 'PMKVY-4.0-AUTO-EV-04',
      groundedSourceId: 'src_sidh_ev_01'
    },
    {
      id: 'industrial_electrician',
      targetRole: 'Certified Industrial & Residential Electrician (ಕೈಗಾರಿಕಾ ಎಲೆಕ್ಟ್ರಿಷಿಯನ್)',
      nsqfLevel: 'Level 4 (NSDC / NCVT Certified)',
      sector: 'Power & Construction',
      effort: 'Moderate (8 Weeks / Flexi Time)',
      durationWeeks: 8,
      batchType: 'Saturday & Sunday Intensive',
      prerequisites: '10th Class Pass',
      currentAvgIncome: 18500,
      targetAvgIncome: 31000,
      salaryMultiplier: '1.67x Income Increase',
      jobDemandContext: 'Bengaluru Metro Line expansion & real estate boom created 22,000+ demand for licensed wiremen and electricians in Karnataka.',
      skillsLearned: [
        'Single & 3-Phase Wiring & Circuit Breakers',
        'Earthing & Transformer Safety',
        'Solar Inverter Installation & Metering',
        'Fault Location & Multimeter Diagnostics'
      ],
      officialSchemeCode: 'NCVT-WIREMAN-CTSS-02',
      groundedSourceId: 'src_iti_peenya_01'
    }
  ],

  factory_helper: [
    {
      id: 'cnc_operator',
      targetRole: 'CNC Turning & Milling Machine Operator (CNC ಮೆಷಿನ್ ಆಪರೇಟರ್)',
      nsqfLevel: 'Level 4 (GTTC / NCVT Aligned)',
      sector: 'Capital Goods & Precision Manufacturing',
      effort: 'Moderate (8 Weeks / Shift Friendly)',
      durationWeeks: 8,
      batchType: 'Morning & Evening Flexi Shifts',
      prerequisites: '10th / 12th Pass',
      currentAvgIncome: 16000,
      targetAvgIncome: 36000,
      salaryMultiplier: '2.25x Income Increase',
      jobDemandContext: 'Peenya Industrial Area & Devanahalli Aerospace Park have 8,500+ unfilled CNC operator roles with structured ESIC & PF benefits.',
      skillsLearned: [
        'G-Code & M-Code Programming Fundamentals',
        'Digital Vernier Caliper & Micrometer Inspection',
        'Tool Offset & Workpiece Setup',
        'Fanuc & Siemens Controller Operation'
      ],
      officialSchemeCode: 'GTTC-CNC-TC-2024',
      groundedSourceId: 'src_gttc_rajajinagar'
    }
  ],

  domestic_helper: [
    {
      id: 'gda_healthcare_aide',
      targetRole: 'Certified General Duty Assistant / Healthcare Aide (ಆಸ್ಪತ್ರೆ ಸಹಾಯಕರು)',
      nsqfLevel: 'Level 4 (Healthcare Sector Skill Council)',
      sector: 'Healthcare & Hospital Services',
      effort: 'Easy to Moderate (6 Weeks)',
      durationWeeks: 6,
      batchType: 'Daily 3 Hours (10 AM - 1 PM)',
      prerequisites: '8th / 10th Class Pass',
      currentAvgIncome: 11000,
      targetAvgIncome: 24000,
      salaryMultiplier: '2.18x Income Increase',
      jobDemandContext: 'High demand in private hospitals, home healthcare agencies, and elderly care centers across Bengaluru & Mysuru.',
      skillsLearned: [
        'Patient Vital Signs Monitoring (BP, Pulse, SpO2)',
        'First Aid & Emergency Resuscitation (CPR)',
        'Infection Control & Sterilization',
        'Patient Hygiene & Medication Tracking'
      ],
      officialSchemeCode: 'KMKY-HEALTH-GDA-01',
      groundedSourceId: 'src_kmky_ksdc_01'
    }
  ],

  cab_driver: [
    {
      id: 'solar_pv_installer',
      targetRole: 'Solar PV Systems Installer & Maintenance Supervisor (ಸೌರಶಕ್ತಿ ಸಿಸ್ಟಮ್ಸ್ ತಂತ್ರಜ್ಞ)',
      nsqfLevel: 'Level 4 (Skill Council for Green Jobs)',
      sector: 'Renewable Energy & Solar',
      effort: 'Moderate (6 Weeks / Weekend)',
      durationWeeks: 6,
      batchType: 'Weekend Only (Sat-Sun)',
      prerequisites: '10th Class Pass',
      currentAvgIncome: 21000,
      targetAvgIncome: 38000,
      salaryMultiplier: '1.80x Income Increase',
      jobDemandContext: 'PM Surya Ghar Muft Bijli Yojana rooftop solar surge requires 50,000+ certified solar technicians across South India.',
      skillsLearned: [
        'Rooftop Solar Panel Structure Mounting',
        'DC-AC Inverter Wiring & Grid Coupling',
        'Net Metering & Solar Battery Bank Maintenance',
        'Safety & Harness Guidelines for Heights'
      ],
      officialSchemeCode: 'PM-SURYA-GREEN-PV-01',
      groundedSourceId: 'src_nsti_vidyanagar'
    }
  ],

  construction_worker: [
    {
      id: 'plumbing_sanitary_tech',
      targetRole: 'Certified Master Plumber & Hydro-Pneumatic Technician',
      nsqfLevel: 'Level 4 (Construction SSC)',
      sector: 'Construction & Plumbing',
      effort: 'Easy (4 Weeks / Hands-on)',
      durationWeeks: 4,
      batchType: 'Weekend Batches',
      prerequisites: '8th / 10th Pass',
      currentAvgIncome: 15000,
      targetAvgIncome: 28000,
      salaryMultiplier: '1.86x Income Increase',
      jobDemandContext: 'High commercial & residential plumbing contractor demand in Karnataka urban clusters.',
      skillsLearned: ['CPVC / PPR Pipe Jointing', 'Pressure Testing & Leak Detection', 'RO & Solar Water Heater Plumbing'],
      officialSchemeCode: 'BOCW-SKILL-PLUMB-01',
      groundedSourceId: 'src_iti_hosur'
    }
  ],

  security_guard: [
    {
      id: 'cctv_security_systems_tech',
      targetRole: 'CCTV & Electronic Security Systems Installer',
      nsqfLevel: 'Level 4 (Electronics SSC)',
      sector: 'Electronics & Physical Security',
      effort: 'Easy (4 Weeks)',
      durationWeeks: 4,
      batchType: 'Evening Batches (5 PM - 8 PM)',
      prerequisites: '10th Pass',
      currentAvgIncome: 16500,
      targetAvgIncome: 29000,
      salaryMultiplier: '1.75x Income Increase',
      jobDemandContext: 'High demand in IT Parks, gated communities & shopping malls for camera installation & IP networking tech.',
      skillsLearned: ['IP Camera Networking & NVR Setup', 'Biometric Access Control Wiring', 'Troubleshooting Signal Loss'],
      officialSchemeCode: 'PMKVY-ELE-CCTV-01',
      groundedSourceId: 'src_nsti_yeshwanthpur'
    }
  ],

  retail_sales: [
    {
      id: 'digital_billing_tally_operator',
      targetRole: 'Digital Billing & Tally Prime Executive',
      nsqfLevel: 'Level 4 (IT-ITeS SSC)',
      sector: 'Retail & Commerce',
      effort: 'Easy (4 Weeks)',
      durationWeeks: 4,
      batchType: 'Morning Batches',
      prerequisites: '10th / 12th Pass',
      currentAvgIncome: 14000,
      targetAvgIncome: 26000,
      salaryMultiplier: '1.85x Income Increase',
      jobDemandContext: 'Modern supermarket chains & retail stores require digital inventory & GST billing operators.',
      skillsLearned: ['Tally Prime GST Entry', 'POS Barcode Scanner Software', 'Daily Cash Reconciliation'],
      officialSchemeCode: 'KMKY-RETAIL-TALLY-01',
      groundedSourceId: 'src_ksdc_digital'
    }
  ]
};
