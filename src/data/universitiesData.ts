import { University } from '../types';

export const initialUniversities: University[] = [
  {
    id: 'univ-1',
    slug: 'apex-institute-of-technology',
    name: 'Apex Institute of Technology & Sciences',
    location: 'Bangalore, Karnataka',
    about: 'Apex Institute of Technology & Sciences is a recognized multidisciplinary research and engineering institution in Bengaluru. Known for its strong industry-partnered technical curriculum, cutting-edge computing laboratories, and high campus recruitment records across major global tech leaders.',
    programs_available: [
      'B.Tech in Computer Science & Engineering',
      'B.Tech in AI & Data Science',
      'Bachelor of Computer Applications (BCA)',
      'Post Graduate Diploma in Data Science & AI',
      'M.Tech in Cloud Computing'
    ],
    accreditation: 'UGC Recognized · AICTE Approved · NAAC A+ Grade Accredited',
    campus_highlights: [
      '40-Acre Wi-Fi Enabled Tech Campus',
      'Advanced High-Performance AI & Cloud Computing Labs',
      'Dedicated Innovation Incubator & Entrepreneurship Cell',
      'Over 200+ Corporate Recruiters visiting annually'
    ],
    admission_process: 'Merit screening through academic scores (10+2 / Graduation) or state entrance percentiles, followed by direct admission assistance and seat confirmation via CareerVerse.',
    fees_range: '₹85,000 to ₹2,50,000 per academic year (scholarship opportunities available)',
    important_dates: 'Academic Year 2026-27 Registrations Open. Early verification rounds underway.'
  },
  {
    id: 'univ-2',
    slug: 'national-school-of-business',
    name: 'National School of Business & Commerce',
    location: 'Delhi NCR',
    about: 'National School of Business & Commerce is an institution dedicated to shaping future corporate executives, marketing leaders, and financial strategists. Featuring faculty with rich industry backgrounds and corporate partnerships across multinational firms in Gurgaon and Noida.',
    programs_available: [
      'Bachelor of Business Administration (BBA - Honours)',
      'B.Com (Honours) in Banking & Finance',
      'MBA in Corporate Strategy & Marketing',
      'PGDM in Financial Analytics'
    ],
    accreditation: 'UGC Recognized · AIU Equivalence · AICTE Approved',
    campus_highlights: [
      'Modern Corporate Campus in Delhi NCR Hub',
      'Bloomberg Terminal & Financial Trading Simulator',
      'Active Mentorship from Fortune 500 Business Leaders',
      'Dual Specialization & Paid Summer Internship Programs'
    ],
    admission_process: 'Aptitude assessment evaluation and personal interaction facilitated by CareerVerse admission advisors.',
    fees_range: '₹1,20,000 to ₹2,80,000 per annum with easy EMI options',
    important_dates: 'Applications being accepted for upcoming semester.'
  },
  {
    id: 'univ-3',
    slug: 'metro-college-of-health-sciences',
    name: 'Metro College of Allied Health Sciences',
    location: 'Pune, Maharashtra',
    about: 'Metro College of Allied Health Sciences is a healthcare and paramedical education centre affiliated with leading multi-speciality teaching hospitals. Focused on hands-on clinical training, medical rehabilitation, and hospital administration skills.',
    programs_available: [
      'Bachelor of Physiotherapy (BPT)',
      'B.Sc in Medical Laboratory Technology',
      'B.Sc in Radiology & Imaging',
      'Professional Diploma in Hospital Administration'
    ],
    accreditation: 'State Paramedical Council Approved · UGC Recognized Teaching Affiliate',
    campus_highlights: [
      'Attached 750-Bed Multi-Speciality Teaching Hospital',
      'Anatomy & Physiology Simulation Labs',
      'Clinical Rotations from Year 2 onwards',
      '100% Internship Placement Guarantee'
    ],
    admission_process: 'Class 12 PCB merit ranking and CareerVerse medical guidance session.',
    fees_range: '₹60,000 to ₹1,40,000 per year',
    important_dates: 'Direct guidance available for upcoming intake.'
  },
  {
    id: 'univ-4',
    slug: 'global-university-online',
    name: 'Global University Online & Continuing Education',
    location: 'Online / Pan-India',
    about: 'Global University Online delivers UGC-DEB recognized degree programs engineered specifically for working adults, distance learners, and remote students. Offering an interactive Learning Management System (LMS) with live interactive weekend masterclasses.',
    programs_available: [
      'Online Master of Business Administration (Online MBA)',
      'Online Bachelor of Business Administration (BBA)',
      'Online Master of Computer Applications (MCA)',
      'Online M.Com in International Finance'
    ],
    accreditation: 'UGC-DEB Approved · NAAC A++ Rated · NIRF Top 50 Ranked University',
    campus_highlights: [
      'Fully Digital Learning Experience via Mobile & Web App',
      'Live Masterclasses & 24/7 On-Demand Recorded Lectures',
      'Dedicated Student Success Mentor for every student',
      'Digital Career Placement Portal with 500+ Partner Companies'
    ],
    admission_process: 'Fast-track online document verification and eligibility check handled end-to-end by CareerVerse.',
    fees_range: '₹30,000 to ₹45,000 per semester with no-cost EMI options',
    important_dates: 'Multiple batch intakes per calendar year. Current admissions open.'
  },
  {
    id: 'univ-5',
    slug: 'alliance-school-of-law',
    name: 'Alliance School of Law & Jurisprudence',
    location: 'Hyderabad, Telangana',
    about: 'Alliance School of Law is a dedicated legal training institution imparting contemporary legal education. Emphasizing moot court advocacy, corporate compliance, intellectual property law, and international arbitration.',
    programs_available: [
      'Integrated BA LLB (Honours) - 5 Years',
      'Integrated BBA LLB (Honours) - 5 Years',
      'LLM in Corporate & Commercial Law',
      'PG Diploma in Cyber Law & Data Privacy'
    ],
    accreditation: 'Bar Council of India (BCI) Approved · UGC Recognized',
    campus_highlights: [
      'State-of-the-Art High Court Simulated Moot Court Hall',
      'Extensive Law Library with LexisNexis, Manupatra & SCC Online',
      'Legal Aid Clinic serving local communities',
      'Internship placements with Tier-1 Law Firms and Senior Advocates'
    ],
    admission_process: 'Merit in 10+2 / Law entrance test scores followed by CareerVerse admission counselling.',
    fees_range: '₹1,40,000 to ₹2,10,000 per academic year',
    important_dates: 'Counselling and document submission open.'
  },
  {
    id: 'univ-6',
    slug: 'premier-school-of-executive-studies',
    name: 'Premier School of Executive Studies',
    location: 'Delhi NCR / Hybrid',
    about: 'An exclusive executive learning academy offering specialized postgraduate diplomas and executive MBAs for mid-career and senior professionals. Crafted to bridge technical knowledge with executive decision-making, digital strategy, and boardroom presence.',
    programs_available: [
      'Executive MBA in Strategic Leadership',
      'Executive PG Program in Artificial Intelligence & Leadership',
      'Senior Management Program in Digital Transformation'
    ],
    accreditation: 'Internationally Accredited Curriculum · Industry Recognized Credential',
    campus_highlights: [
      'Executive Weekend Campus in Central Business District',
      'High-Calibre Peer Cohorts (Average 6+ Years Experience)',
      'Leadership Simulation Modules and Case Pedagogy',
      'Exclusive Executive Alumni Network across Top Corporates'
    ],
    admission_process: 'Executive CV review, statement of purpose, and CareerVerse profile interview.',
    fees_range: '₹3,50,000 to ₹5,00,000 all-inclusive program fee',
    important_dates: 'Cohort admissions close once seats are filled.'
  }
];
