import { Program } from '../types';

export const initialPrograms: Program[] = [
  {
    id: 'prog-1',
    slug: 'btech-computer-science-engineering',
    name: 'B.Tech in Computer Science & Engineering',
    level: 'Undergraduate',
    field: 'Engineering & Technology',
    overview: 'A premier 4-year undergraduate engineering program focused on foundational computing, artificial intelligence, software architecture, and systems engineering.',
    who_is_it_for: 'Students who completed 10+2 with Physics, Mathematics, and Chemistry/Computer Science looking to build careers in software, tech leadership, or research.',
    eligibility: 'Minimum 60% aggregate in 10+2 (PCM) or equivalent recognized board examination.',
    duration: '4 Years (8 Semesters)',
    mode: 'Full-Time Campus',
    specializations: [
      'Artificial Intelligence & Machine Learning',
      'Cloud Computing & DevOps',
      'Cybersecurity & Forensics',
      'Data Engineering'
    ],
    curriculum_highlights: [
      'Data Structures & Algorithms',
      'Operating Systems & Distributed Computing',
      'Full-Stack Web & Mobile Architectures',
      'Capstone Industry Project & 6-Month Internship'
    ],
    career_opportunities: [
      'Software Development Engineer',
      'Cloud Systems Architect',
      'Machine Learning Engineer',
      'Product Engineer'
    ],
    university_name: 'Apex Institute of Technology & Sciences',
    university_slug: 'apex-institute-of-technology',
    location: 'Bangalore, Karnataka',
    fees: '₹1,80,000 - ₹2,50,000 per annum',
    admission_process: 'Entrance merit score / Direct Counselling based on 10+2 performance and CareerVerse assessment.',
    important_dates: 'Applications for Academic Session 2026-27 are currently open.',
    featured: true
  },
  {
    id: 'prog-2',
    slug: 'bba-finance-marketing',
    name: 'Bachelor of Business Administration (BBA - Honours)',
    level: 'Undergraduate',
    field: 'Commerce & Management',
    overview: 'A forward-looking undergraduate management degree providing deep grounding in business fundamentals, marketing analytics, financial strategy, and organizational leadership.',
    who_is_it_for: '10+2 graduates from any stream (Commerce, Science, or Humanities) aspiring to venture into corporate management, banking, consulting, or entrepreneurship.',
    eligibility: 'Minimum 50% in 10+2 from a recognized board.',
    duration: '3 to 4 Years (with Research option)',
    mode: 'Full-Time Campus',
    specializations: [
      'Marketing Management & Digital Growth',
      'Banking & Financial Services',
      'Business Analytics',
      'Entrepreneurship & Family Business'
    ],
    curriculum_highlights: [
      'Managerial Economics & Financial Accounting',
      'Marketing Strategies & Consumer Insights',
      'Business Intelligence & Excel Analytics',
      'Corporate Live Projects & Summer Internship'
    ],
    career_opportunities: [
      'Business Analyst',
      'Marketing Associate',
      'Financial Analyst',
      'Management Trainee'
    ],
    university_name: 'National School of Business & Commerce',
    university_slug: 'national-school-of-business',
    location: 'Delhi NCR',
    fees: '₹1,20,000 - ₹1,90,000 per annum',
    admission_process: 'Merit screening followed by CareerVerse personal counselling session.',
    important_dates: 'Rolling admissions for upcoming intake. Early round closing soon.',
    featured: true
  },
  {
    id: 'prog-3',
    slug: 'bachelor-of-physiotherapy-bpt',
    name: 'Bachelor of Physiotherapy (BPT)',
    level: 'Undergraduate',
    field: 'Medical & Allied Sciences',
    overview: 'A clinical allied healthcare program preparing skilled physical therapists equipped in musculoskeletal, neurological, cardiopulmonary, and sports rehabilitation.',
    who_is_it_for: 'Biology students seeking a respected clinical healthcare career with high demand in hospitals, sports councils, and independent clinics.',
    eligibility: '10+2 with Physics, Chemistry, and Biology (PCB) with minimum 50% marks.',
    duration: '4.5 Years (including 6-month compulsory rotational internship)',
    mode: 'Full-Time Campus',
    specializations: [
      'Orthopedic Rehabilitation',
      'Neurological Physiotherapy',
      'Sports Injury Management',
      'Pediatric Rehabilitation'
    ],
    curriculum_highlights: [
      'Human Anatomy, Physiology & Biomechanics',
      'Exercise Therapy & Electrotherapy',
      'Clinical Orthopedics & Neurology',
      'Hospital Clinical Postings & Rotational Internship'
    ],
    career_opportunities: [
      'Consultant Physiotherapist',
      'Sports Team Physio',
      'Rehabilitation Specialist',
      'Clinical Researcher'
    ],
    university_name: 'Metro College of Allied Health Sciences',
    university_slug: 'metro-college-of-health-sciences',
    location: 'Pune, Maharashtra',
    fees: '₹95,000 - ₹1,40,000 per annum',
    admission_process: 'PCB merit score evaluation and CareerVerse medical guidance round.',
    important_dates: 'Admissions Open for current academic year.',
    featured: true
  },
  {
    id: 'prog-4',
    slug: 'bca-artificial-intelligence',
    name: 'Bachelor of Computer Applications (BCA)',
    level: 'Undergraduate',
    field: 'Science & IT',
    overview: 'A specialized software development degree designed to turn passionate students into industry-ready programmers, application developers, and cloud specialists.',
    who_is_it_for: 'Students from any stream with an interest in computers, programming languages, and tech applications.',
    eligibility: 'Pass in 10+2 from any recognized board (Mathematics/CS preferred but not mandatory for all tracks).',
    duration: '3 Years (6 Semesters)',
    mode: 'Full-Time Campus',
    specializations: [
      'Cloud & Full-Stack Development',
      'Cybersecurity & Network Defense',
      'Data Analytics & Python'
    ],
    curriculum_highlights: [
      'Programming in Java, Python, C++',
      'Database Management Systems & SQL',
      'Web Development (React & Node.js)',
      'Industry Certification Track'
    ],
    career_opportunities: [
      'Junior Software Developer',
      'Web Developer',
      'Database Administrator',
      'IT Support & Systems Engineer'
    ],
    university_name: 'Apex Institute of Technology & Sciences',
    university_slug: 'apex-institute-of-technology',
    location: 'Bangalore, Karnataka',
    fees: '₹85,000 - ₹1,30,000 per annum',
    admission_process: 'Online application & personal admission guidance interview.',
    important_dates: 'Admissions open for next semester.',
    featured: false
  },
  {
    id: 'prog-5',
    slug: 'integrated-ba-llb-honours',
    name: 'Integrated BA LLB (Honours)',
    level: 'Undergraduate',
    field: 'Law',
    overview: 'A comprehensive 5-year integrated double degree program combining liberal arts with in-depth legal jurisprudence, constitutional law, corporate law, and advocacy.',
    who_is_it_for: '10+2 pass outs aspiring to become corporate legal counsels, litigators, judicial officers, or policy analysts.',
    eligibility: '10+2 in any stream with minimum 45% aggregate (40% for reserved categories).',
    duration: '5 Years (10 Semesters)',
    mode: 'Full-Time Campus',
    specializations: [
      'Corporate & Commercial Law',
      'Intellectual Property Rights (IPR)',
      'Constitutional & Criminal Law',
      'Cyber Law'
    ],
    curriculum_highlights: [
      'Constitutional Law, Law of Torts & Contracts',
      'Criminal Law, CPC & CrPC',
      'Moot Court Trainings & Legal Aid Clinics',
      'Judicial & Corporate Law Internships'
    ],
    career_opportunities: [
      'Corporate Legal Advisor',
      'Advocate / Litigator',
      'Legal Researcher',
      'Civil & Judicial Services'
    ],
    university_name: 'Alliance School of Law & Jurisprudence',
    university_slug: 'alliance-school-of-law',
    location: 'Hyderabad, Telangana',
    fees: '₹1,40,000 - ₹2,10,000 per annum',
    admission_process: 'Law entrance scores (CLAT/LSAT/University Test) or CareerVerse merit screening.',
    important_dates: 'Counselling rounds open now.',
    featured: false
  },
  {
    id: 'prog-6',
    slug: 'ba-psychology-journalism',
    name: 'BA in Psychology & Media Communication',
    level: 'Undergraduate',
    field: 'Arts & Humanities',
    overview: 'An interdisciplinary degree exploring human behavior, cognition, mental health, coupled with modern media production, digital journalism, and content strategy.',
    who_is_it_for: 'Creative, analytical students interested in understanding human psychology, behavioral insights, publishing, public relations, and mass media.',
    eligibility: '10+2 from a recognized board with minimum 50% aggregate.',
    duration: '3 Years (6 Semesters)',
    mode: 'Full-Time Campus',
    specializations: [
      'Clinical & Counseling Psychology',
      'Digital Journalism & Public Relations',
      'Organizational Behavior & HR'
    ],
    curriculum_highlights: [
      'General & Social Psychology',
      'Media Ethics & Broadcast Communication',
      'Psychological Assessment & Research Methods',
      'Media Lab Practicals & Internship'
    ],
    career_opportunities: [
      'Content Strategist',
      'Corporate Communications Specialist',
      'Assistant Counsellor / HR Associate',
      'Media Journalist'
    ],
    university_name: 'St. Xavier Global Institute of Arts',
    university_slug: 'st-xavier-global-institute',
    location: 'Mumbai, Maharashtra',
    fees: '₹75,000 - ₹1,20,000 per annum',
    admission_process: 'Merit-based admission with CareerVerse counsellor interview.',
    important_dates: 'Open for registration.',
    featured: false
  },
  {
    id: 'prog-7',
    slug: 'online-master-of-business-administration',
    name: 'Online Master of Business Administration (Online MBA)',
    level: 'Online Degree',
    field: 'Commerce & Management',
    overview: 'A UGC-DEB recognized fully online MBA offering working professionals the flexibility to earn an accredited master\'s degree while balancing careers.',
    who_is_it_for: 'Working professionals, managers, and graduates seeking career acceleration, salary growth, and leadership capabilities without quitting their jobs.',
    eligibility: 'Graduation in any discipline with minimum 50% aggregate from a recognized university.',
    duration: '2 Years (4 Semesters)',
    mode: 'Online / Distance',
    specializations: [
      'Finance & FinTech',
      'Marketing & Digital Strategy',
      'Human Resource Management',
      'Operations & Supply Chain Management',
      'Business Analytics'
    ],
    curriculum_highlights: [
      'Live Weekend Interactive Masterclasses with Industry Leaders',
      'Recorded On-Demand Lectures and Case Studies',
      'Real-world Capstone Simulations',
      'Placement Support & Virtual Career Fairs'
    ],
    career_opportunities: [
      'Senior Business Manager',
      'Product Marketing Manager',
      'Management Consultant',
      'Operations Lead'
    ],
    university_name: 'Global University Online & Continuing Education',
    university_slug: 'global-university-online',
    location: 'Online / All India',
    fees: '₹1,20,000 - ₹1,80,000 total course fee (EMI available)',
    admission_process: 'Direct online admission through CareerVerse verification with zero exam hassle.',
    important_dates: 'Admissions open for next batch with flexible start dates.',
    featured: true
  },
  {
    id: 'prog-8',
    slug: 'executive-mba-leadership',
    name: 'Executive MBA in Strategic Leadership',
    level: 'Executive MBA',
    field: 'Commerce & Management',
    overview: 'An intensive, high-impact executive program designed specifically for mid-to-senior professionals with 3+ years experience aiming for VP, Director, and C-Suite roles.',
    who_is_it_for: 'Experienced professionals with 3 to 10+ years of work experience aiming for senior leadership transitions.',
    eligibility: 'Bachelor\'s degree with min 50% and minimum 3 years of professional experience.',
    duration: '1 Year (12 Months)',
    mode: 'Hybrid / Executive',
    specializations: [
      'Strategic Corporate Transformation',
      'Digital Disruption & AI Strategy',
      'Global Mergers & Financial Leadership'
    ],
    curriculum_highlights: [
      'Executive Leadership & Negotiation',
      'Financial Decision Making & Valuation',
      'AI & Technology Transformation for CXOs',
      'International Immersion / Executive Networking'
    ],
    career_opportunities: [
      'Associate Vice President',
      'Director of Strategy',
      'Business Unit Head',
      'General Manager'
    ],
    university_name: 'Premier School of Executive Studies',
    university_slug: 'premier-school-of-executive-studies',
    location: 'Delhi NCR / Hybrid',
    fees: '₹3,50,000 - ₹5,00,000 total investment',
    admission_process: 'Profile evaluation, CV review, and CareerVerse Executive Director interview.',
    important_dates: 'Cohort intake starts quarterly. Limited seats per cohort.',
    featured: true
  },
  {
    id: 'prog-9',
    slug: 'pg-diploma-data-science-ai',
    name: 'Post Graduate Diploma in Data Science & AI',
    level: 'PG Diploma',
    field: 'Science & IT',
    overview: 'An industry-aligned professional PG diploma equipping learners with hands-on skills in Python, Deep Learning, Generative AI, and predictive analytics.',
    who_is_it_for: 'Graduates in Engineering, Mathematics, Statistics, or IT seeking high-paying data roles.',
    eligibility: 'Bachelor\'s degree in any quantitative or technical discipline with 50% marks.',
    duration: '11 Months',
    mode: 'Hybrid / Executive',
    specializations: [
      'Machine Learning & Predictive Models',
      'Natural Language Processing & LLMs',
      'Big Data Pipelines & Cloud'
    ],
    curriculum_highlights: [
      'Python for Data Science & Mathematics Foundations',
      'Supervised & Unsupervised Machine Learning',
      'Deep Learning with PyTorch & Computer Vision',
      '10+ Real-World Industry Projects'
    ],
    career_opportunities: [
      'Data Scientist',
      'Data Analyst',
      'BI Consultant',
      'Machine Learning Specialist'
    ],
    university_name: 'Apex Institute of Technology & Sciences',
    university_slug: 'apex-institute-of-technology',
    location: 'Bangalore, Karnataka / Online Option',
    fees: '₹1,10,000 - ₹1,60,000',
    admission_process: 'Online assessment followed by CareerVerse profile screening.',
    important_dates: 'Upcoming batch commencement announced regularly.',
    featured: false
  },
  {
    id: 'prog-10',
    slug: 'diploma-hospital-healthcare-management',
    name: 'Professional Diploma in Hospital Administration',
    level: 'Diploma',
    field: 'Medical & Allied Sciences',
    overview: 'A focused diploma designed to train administrative professionals for hospital operations, patient care coordination, quality accreditation, and healthcare logistics.',
    who_is_it_for: 'Graduates, nurses, or healthcare workers looking to transition into healthcare administration and hospital facility operations.',
    eligibility: '10+2 or Graduation in any field.',
    duration: '1 Year (2 Semesters)',
    mode: 'Hybrid / Executive',
    specializations: [
      'NABH Quality & Hospital Operations',
      'Health Insurance & Medical Billing',
      'Patient Experience Management'
    ],
    curriculum_highlights: [
      'Hospital Facility Management',
      'Health Information Systems & EHR',
      'Medical Ethics & Healthcare Laws',
      'Hospital Internship & Site Visits'
    ],
    career_opportunities: [
      'Hospital Operations Manager',
      'Patient Care Coordinator',
      'Healthcare Quality Executive',
      'Clinic Manager'
    ],
    university_name: 'Metro College of Allied Health Sciences',
    university_slug: 'metro-college-of-health-sciences',
    location: 'Pune, Maharashtra',
    fees: '₹60,000 - ₹90,000',
    admission_process: 'Direct counselling and document verification via CareerVerse.',
    important_dates: 'Batch admissions ongoing.',
    featured: false
  }
];
