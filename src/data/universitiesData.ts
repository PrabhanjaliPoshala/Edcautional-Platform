import { University } from '../types';

export const initialUniversities: University[] = [
  {
    id: 'univ-chandigarh',
    slug: 'chandigarh-university',
    name: 'Chandigarh University',
    location: 'Mohali, Punjab',
    city: 'Mohali',
    state: 'Punjab',
    established_year: 2012,
    naac_grade: 'NAAC A+ Grade',
    ranking: 'NIRF Top 30 Ranked University',
    logo_url: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=160&auto=format&fit=crop&q=80',
    banner_url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80'
    ],
    short_description: 'Fastest-growing autonomous multi-disciplinary university in North India, celebrated for advanced engineering, international exchange programs, and extensive corporate placement drives.',
    about: 'Chandigarh University (CU) is an autonomous leading higher education institution recognized by UGC with NAAC A+ accreditation. CU offers a modern curriculum mapped to industry requirements across computing, management, aviation, engineering, biotechnology, and media arts.',
    programs_available: [
      'B.Tech in Computer Science & Engineering',
      'B.Tech in AI & Machine Learning',
      'Bachelor of Business Administration (BBA)',
      'Master of Business Administration (MBA)',
      'Bachelor of Computer Applications (BCA)',
      'Master of Computer Applications (MCA)'
    ],
    accreditation: 'UGC Recognized · NAAC A+ Accredited · NIRF Top 30 · ABET Accredited Engineering Programs',
    campus_highlights: [
      'Sprawling Wi-Fi enabled smart tech campus with global standards',
      '900+ Corporate Recruiters visiting campus annually',
      'Dedicated Centre of Excellence in AI, Cloud Computing & Robotics',
      'Global academic tie-ups with 400+ international universities'
    ],
    admission_process: 'CUCET Entrance Examination merit score or direct Class 12th / Degree marks counselling managed via CareerVerse.',
    important_dates: 'Admissions Open for Academic Session 2026-27.'
  },
  {
    id: 'univ-amity',
    slug: 'amity-university',
    name: 'Amity University',
    location: 'Noida, Uttar Pradesh',
    city: 'Noida',
    state: 'Uttar Pradesh (Delhi NCR)',
    established_year: 2005,
    naac_grade: 'NAAC A+ Grade',
    ranking: 'NIRF Top 35 Multi-Disciplinary University',
    logo_url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=160&auto=format&fit=crop&q=80',
    banner_url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80'
    ],
    short_description: 'Global benchmark university campus in Delhi NCR boasting WASC (USA) and QAA (UK) international recognitions, high-tech research labs, and strong alumni network.',
    about: 'Amity University is a research and innovation powerhouse with campuses across India and abroad. Offering undergraduate, postgraduate, and doctoral degrees with world-class faculty, modern simulation facilities, and robust career incubation.',
    programs_available: [
      'B.Tech CSE with Cloud & Cyber Specializations',
      'Integrated BBA + MBA',
      'B.Com (Honours)',
      'BA Applied Psychology',
      'Master of Business Administration (MBA)',
      'Online Degree Programs (UGC-DEB)'
    ],
    accreditation: 'UGC Recognized · NAAC A+ Grade · WASC Senior College and University Commission (USA)',
    campus_highlights: [
      '60-Acre hi-tech campus featuring amphitheatre-style classrooms',
      'Amity Innovation Incubator with 100+ funded start-ups',
      'Over 1,500 research patents filed by university faculty & scholars',
      'Dual degree options and global study programs in London, Dubai & New York'
    ],
    admission_process: 'Profile screening, 10+2 / Graduation academic review, and CareerVerse personalized counselling.',
    important_dates: 'Applications active for upcoming semester.'
  },
  {
    id: 'univ-sharda',
    slug: 'sharda-university',
    name: 'Sharda University',
    location: 'Greater Noida, Uttar Pradesh',
    city: 'Greater Noida',
    state: 'Uttar Pradesh (Delhi NCR)',
    established_year: 2009,
    naac_grade: 'NAAC A+ Grade',
    ranking: 'QS Asia & World Ranked Global Campus',
    logo_url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=160&auto=format&fit=crop&q=80',
    banner_url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80'
    ],
    short_description: 'Vibrant international university hosting students from 95+ nations, with an attached 1,200-bed super-speciality hospital and extensive faculties in engineering and business.',
    about: 'Sharda University is a global higher learning destination in Delhi NCR. Offering comprehensive educational disciplines across Medicine, Dentistry, Engineering, Law, Business Administration, Pharmacy, and Allied Health Sciences.',
    programs_available: [
      'B.Tech in Artificial Intelligence',
      'Bachelor of Physiotherapy (BPT)',
      'B.Sc Nursing & Allied Medical Sciences',
      'BBA in International Business',
      'MBA in Healthcare & Hospital Management',
      'Integrated BA LLB / BBA LLB'
    ],
    accreditation: 'UGC Recognized · NAAC A+ Grade · Medical Council of India (NMC) · Bar Council of India',
    campus_highlights: [
      '63-Acre sprawling eco-friendly campus with modern amenities',
      'On-campus 1,200-Bed Sharda Hospital for hands-on medical training',
      'Multicultural environment with students from 95+ countries',
      'Strong placement records with global Fortune 500 corporations'
    ],
    admission_process: 'Sharda University Admission Test (SUAT) or merit counselling through CareerVerse.',
    important_dates: 'Current intake admissions open.'
  },
  {
    id: 'univ-manipal',
    slug: 'manipal-university',
    name: 'Manipal Academy of Higher Education (MAHE)',
    location: 'Manipal, Karnataka',
    city: 'Manipal',
    state: 'Karnataka',
    established_year: 1953,
    naac_grade: 'NAAC A++ Grade',
    ranking: 'NIRF Top 10 Ranked University · Institution of Eminence',
    logo_url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=160&auto=format&fit=crop&q=80',
    banner_url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&auto=format&fit=crop&q=80'
    ],
    short_description: 'Prestigious Institution of Eminence renowned worldwide for medical education, engineering excellence, architecture, and top-tier clinical healthcare facilities.',
    about: 'Manipal Academy of Higher Education (MAHE) is an internationally celebrated deemed university with unmatched heritage in higher learning. Home to Kasturba Medical College (KMC), Manipal Institute of Technology (MIT), and leading business faculties.',
    programs_available: [
      'B.Tech in Computer & Communication Engineering',
      'Bachelor of Physiotherapy (BPT) & Allied Health',
      'BBA & B.Com Professional',
      'Master of Business Administration (MBA)',
      'M.Tech & M.Sc Data Science',
      'Online Degrees via Online Manipal'
    ],
    accreditation: 'Institution of Eminence (IoE) · UGC Deemed University · NAAC A++ Grade · Category-I Status',
    campus_highlights: [
      'Iconic 600-acre university town campus overlooking the Arabian Sea',
      'World-class simulation centres, digital anatomy labs, and central libraries',
      'Over 350+ multinational hiring partners visiting year-round',
      'Robust global alumni network spanning 60+ countries'
    ],
    admission_process: 'MET (Manipal Entrance Test) or qualifying exam merit evaluation supported by CareerVerse.',
    important_dates: 'Academic session 2026-27 round registrations active.'
  },
  {
    id: 'univ-uttaranchal',
    slug: 'uttaranchal-university',
    name: 'Uttaranchal University',
    location: 'Dehradun, Uttarakhand',
    city: 'Dehradun',
    state: 'Uttarakhand',
    established_year: 2013,
    naac_grade: 'NAAC A+ Grade',
    ranking: 'NIRF Top Ranked Private University in Uttarakhand',
    logo_url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=160&auto=format&fit=crop&q=80',
    banner_url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=80'
    ],
    short_description: 'Picturesque Himalayan foothills university renowned for Law College Dehradun, engineering, management, and online degree programs.',
    about: 'Uttaranchal University is a leading higher education campus in the scenic valley of Dehradun. Distinguished by its Law College Dehradun (among India’s top private law faculties) and flourishing schools of computing, agriculture, and business management.',
    programs_available: [
      'BA LLB (Hons) & BBA LLB (Hons)',
      'B.Tech Computer Science & Cyber Security',
      'Online BBA & Online MBA',
      'Bachelor of Computer Applications (BCA)',
      'B.Sc Agriculture & Life Sciences',
      'Online MCA & Online M.Com'
    ],
    accreditation: 'UGC Recognized · NAAC A+ Grade · Bar Council of India · AICTE Approved',
    campus_highlights: [
      'Scenic 100-acre green campus nestled near the Shivalik ranges',
      'Renowned moot court halls, arbitration centres, and legal clinics',
      'Advanced robotics, cloud, and programming laboratories',
      'Active placement cell securing corporate opportunities across India'
    ],
    admission_process: 'Merit screening based on 10+2 / Graduation percentages with CareerVerse guidance.',
    important_dates: 'Admissions open for upcoming session.'
  },
  {
    id: 'univ-kurukshetra',
    slug: 'kurukshetra-university',
    name: 'Kurukshetra University',
    location: 'Kurukshetra, Haryana',
    city: 'Kurukshetra',
    state: 'Haryana',
    established_year: 1956,
    naac_grade: 'NAAC A++ Grade',
    ranking: 'Category-I State Public University · Top Ranked in North India',
    logo_url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=160&auto=format&fit=crop&q=80',
    banner_url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80'
    ],
    short_description: 'Historic Category-I state public university with top NAAC A++ accreditation, offering traditional campus faculties and nationwide accredited online degree courses.',
    about: 'Kurukshetra University is a premier multidisciplinary state university founded in 1956. Awarded Category-I status by UGC with an exceptional NAAC A++ score, providing undergraduate, postgraduate, and digital distance programs.',
    programs_available: [
      'Online B.Com & Online BA',
      'Online MBA (Master of Business Administration)',
      'Online MCA (Master of Computer Applications)',
      'Online MA (English, Mass Communication)',
      'B.Tech, B.Sc & Postgraduate Campus Degrees'
    ],
    accreditation: 'UGC Recognized · Category-I Autonomy · NAAC A++ Grade Accredited',
    campus_highlights: [
      'Sprawling historic 473-acre campus with premier academic departments',
      'Comprehensive digital learning portal for distance and online learners',
      'Rich academic legacy and over 400 affiliated colleges across Haryana',
      'State-of-the-art libraries, sports stadiums, and research laboratories'
    ],
    admission_process: 'Academic merit screening and document verification facilitated by CareerVerse.',
    important_dates: 'January & July session online enrolments underway.'
  },
  {
    id: 'univ-lpu',
    slug: 'lovely-professional-university',
    name: 'Lovely Professional University (LPU)',
    location: 'Jalandhar, Punjab',
    city: 'Jalandhar',
    state: 'Punjab',
    established_year: 2005,
    naac_grade: 'NAAC A++ Grade',
    ranking: 'NIRF Top 40 Overall University',
    logo_url: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=160&auto=format&fit=crop&q=80',
    banner_url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80'
    ],
    short_description: 'India’s largest single-campus private university featuring unmatched placement records, ultra-modern tech infrastructure, and top international student cohorts.',
    about: 'Lovely Professional University (LPU) is a globally connected university campus accredited with NAAC A++ (highest grade). With over 30,000 students on campus from across 50+ countries, LPU offers multidisciplinary education, engineering innovation, and corporate leadership.',
    programs_available: [
      'B.Tech CSE with Google / IBM Specializations',
      'Online MBA & Campus MBA',
      'Online BBA & BCA Degrees',
      'Online MCA & M.Com Programs',
      'B.Pharm & Medical Laboratory Technology',
      'Fashion, Journalism & Hotel Management'
    ],
    accreditation: 'UGC Recognized · NAAC A++ Grade (Highest Tier) · NIRF Top 40 · AICTE & PCI Approved',
    campus_highlights: [
      '600-Acre mega-campus with in-house shopping malls, sports complexes & hospital',
      'Over 1,000 national and international companies conduct campus hiring',
      'Industry-partnered laboratories with Microsoft, Google, Intel, and CISCO',
      'Flexible online education portal for remote learners across India'
    ],
    admission_process: 'LPUNEST examination score or direct merit counselling via CareerVerse.',
    important_dates: 'Current academic cycle applications open.'
  },
  {
    id: 'univ-upes',
    slug: 'upes-dehradun',
    name: 'University of Petroleum and Energy Studies (UPES)',
    location: 'Dehradun, Uttarakhand',
    city: 'Dehradun',
    state: 'Uttarakhand',
    established_year: 2003,
    naac_grade: 'NAAC A Grade',
    ranking: 'NIRF Top 50 Ranked University · QS 5 Stars for Employability',
    logo_url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=160&auto=format&fit=crop&q=80',
    banner_url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=80'
    ],
    short_description: 'Pioneering domain-specific university in energy, computer science, aerospace, and corporate law with world-class faculty and industry tie-ups.',
    about: 'UPES Dehradun is known for its purpose-built specialized education across School of Advanced Engineering, School of Computer Science, School of Business, School of Law, and School of Design. Offering tailored curricula aligned with tomorrow’s economic growth sectors.',
    programs_available: [
      'B.Tech in Artificial Intelligence & Machine Learning',
      'B.Tech Aerospace & Applied Petroleum Engineering',
      'BA LLB (Hons) / BBA LLB (Hons) in Energy Laws',
      'Online MBA via UPES Online',
      'Online BBA & BCA Programs',
      'MBA in Oil & Gas / Aviation / Logistics'
    ],
    accreditation: 'UGC Recognized · NAAC A Grade · NIRF Top 50 Ranked · Bar Council of India',
    campus_highlights: [
      'Breathtaking 44-acre campus in the scenic foothills of the Himalayas',
      'Specialized labs for oil & gas testing, aerospace wind tunnels, and AI clusters',
      'Over 94% consistent placement record across leading multinational firms',
      'UPES C-WEA (Continuing Education) for flexible online adult learning'
    ],
    admission_process: 'UPESMET / UPESEAT or qualifying exam merit screening guided by CareerVerse.',
    important_dates: 'Rolling admissions for upcoming academic year.'
  },
  {
    id: 'univ-dy-patil',
    slug: 'dy-patil-university',
    name: 'Dr. D.Y. Patil Vidyapeeth (DYPU)',
    location: 'Pune, Maharashtra',
    city: 'Pune',
    state: 'Maharashtra',
    established_year: 2003,
    naac_grade: 'NAAC A++ Grade',
    ranking: 'NIRF Top 50 University · Category-I Deemed University',
    logo_url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=160&auto=format&fit=crop&q=80',
    banner_url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&auto=format&fit=crop&q=80'
    ],
    short_description: 'Premier medical, healthcare, management, and online education conglomerate in Pune, distinguished by high clinical standards and NAAC A++ accreditation.',
    about: 'Dr. D.Y. Patil Vidyapeeth is a multidisciplinary deemed university with an attached 2,000-bed super-speciality teaching hospital in Pimpri, Pune. Known for premier medical colleges, allied health faculties, business administration, and UGC-DEB online courses.',
    programs_available: [
      'Bachelor of Physiotherapy (BPT)',
      'B.Sc in Clinical Care & Paramedical Technologies',
      'Online MBA (Master of Business Administration)',
      'Online BBA (Bachelor of Business Administration)',
      'Postgraduate Diplomas in Healthcare Management',
      'Hospital Administration Programs'
    ],
    accreditation: 'UGC Recognized · Category-I Deemed University · NAAC A++ Grade · ISO 9001:2015 Certified',
    campus_highlights: [
      '2,000-bed multi-speciality research hospital on campus',
      'State-of-the-art robotic surgery simulation centre and biomaterial research labs',
      'Centre for Online Learning (DPU-COL) with live interactive weekend masterclasses',
      'Direct internship and clinical posting opportunities with top healthcare giants'
    ],
    admission_process: 'Merit screening through academic scores and CareerVerse personalized assistance.',
    important_dates: 'Current cycle online & campus applications open.'
  },
  {
    id: 'univ-vgu',
    slug: 'vivekananda-global-university',
    name: 'Vivekananda Global University (VGU)',
    location: 'Jaipur, Rajasthan',
    city: 'Jaipur',
    state: 'Rajasthan',
    established_year: 2012,
    naac_grade: 'NAAC A+ Grade',
    ranking: 'Top Emerging Private University in Western India',
    logo_url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=160&auto=format&fit=crop&q=80',
    banner_url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80'
    ],
    short_description: 'Modern university in Rajasthan celebrated for hands-on design, agriculture, engineering, and recognized online undergraduate and master’s programs.',
    about: 'Vivekananda Global University (VGU) Jaipur provides interdisciplinary learning aligned with modern industry benchmarks. Accredited with NAAC A+, VGU focuses on entrepreneurship, skill-based education, and fully accessible online degree solutions.',
    programs_available: [
      'Online BBA & Online BCA',
      'Online MBA in Digital Marketing & Finance',
      'Online MCA & Online M.Com',
      'B.Tech Artificial Intelligence & Robotics',
      'B.Sc in Agriculture & Allied Sciences',
      'Design & Architecture Degree Programs'
    ],
    accreditation: 'UGC Recognized · NAAC A+ Grade · AICTE Approved · Bar Council of India',
    campus_highlights: [
      '50-Acre Wi-Fi enabled sustainable green campus in Jaipur',
      'VGU Technology Business Incubator supported by DST (Govt of India)',
      'Advanced digital platform (VGU Online) for distance and working learners',
      '500+ Corporate recruiters and active industry immersion programs'
    ],
    admission_process: 'DEEN DAYAL or direct merit counselling facilitated by CareerVerse.',
    important_dates: 'Open admissions for upcoming academic year.'
  },
  {
    id: 'univ-sikkim-manipal',
    slug: 'sikkim-manipal-university',
    name: 'Sikkim Manipal University (SMU)',
    location: 'Gangtok, Sikkim',
    city: 'Gangtok',
    state: 'Sikkim',
    established_year: 1995,
    naac_grade: 'NAAC A+ Grade',
    ranking: 'Pioneering Higher Education & Distance Learning University',
    logo_url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=160&auto=format&fit=crop&q=80',
    banner_url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80'
    ],
    short_description: 'Esteemed public-private partnership between the Government of Sikkim and the Manipal Group, known for medical, technical, and online business programs.',
    about: 'Sikkim Manipal University (SMU) was established in 1995 as the first public-private partnership higher learning university in India. Offering respected degrees in medicine, technology, management, and online master’s programs with nationwide credibility.',
    programs_available: [
      'Online MBA (UGC-DEB Accredited)',
      'Online MCA & Online BCA',
      'Online B.Com & Online M.Com',
      'B.Tech in Computer Science & IT',
      'Allied Health Sciences & Hospital Administration'
    ],
    accreditation: 'UGC Recognized · NAAC A+ Grade · AICTE Approved · MCI Approved',
    campus_highlights: [
      'Picturesque campus surrounded by the Himalayan ranges in Sikkim',
      'Over 2 decades of pioneer experience in digital and distance education',
      'Central Referral Hospital with modern healthcare departments',
      'Alumni base exceeding 500,000 successful professionals across the globe'
    ],
    admission_process: 'Academic eligibility evaluation and direct online enrolment support through CareerVerse.',
    important_dates: 'January & July batch admissions active.'
  },
  {
    id: 'univ-amrita',
    slug: 'amrita-vishwa-vidyapeetham',
    name: 'Amrita Vishwa Vidyapeetham',
    location: 'Coimbatore, Tamil Nadu',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    established_year: 2003,
    naac_grade: 'NAAC A++ Grade',
    ranking: 'NIRF Top 10 Ranked Overall University · Institution of Eminence',
    logo_url: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=160&auto=format&fit=crop&q=80',
    banner_url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80'
    ],
    short_description: 'Premier research-intensive Institution of Eminence with campuses in Coimbatore, Amritapuri, Kochi, and Bangalore, leading global university rankings.',
    about: 'Amrita Vishwa Vidyapeetham is an Institution of Eminence recognized globally for value-based education, top-tier scientific research, cybersecurity labs, and online degrees via Amrita AHEAD.',
    programs_available: [
      'B.Tech in Artificial Intelligence & Data Science',
      'Online MBA via Amrita AHEAD',
      'Online MCA in Artificial Intelligence',
      'Online BBA & BCA Programs',
      'Allied Health Sciences & Clinical Medicine',
      'Cybersecurity & Computational Engineering'
    ],
    accreditation: 'Institution of Eminence · NAAC A++ Grade (3.83/4 CGPA) · NIRF Top 10 · Category-I Status',
    campus_highlights: [
      '400-Acre world-class research campus situated at the foothills of the Western Ghats',
      'Amrita Centre for Cybersecurity Systems & Networks (TIFAC Core)',
      '1,300-Bed attached Amrita Institute of Medical Sciences (Kochi)',
      'Over 200+ global academic collaborations including Stanford, MIT & EPFL'
    ],
    admission_process: 'AEEE exam or academic merit screening with direct CareerVerse admission assistance.',
    important_dates: 'Current intake registrations underway.'
  },
  {
    id: 'univ-shoolini',
    slug: 'shoolini-university',
    name: 'Shoolini University of Biotechnology & Management Sciences',
    location: 'Solan, Himachal Pradesh',
    city: 'Solan',
    state: 'Himachal Pradesh',
    established_year: 2009,
    naac_grade: 'NAAC A+ Grade',
    ranking: 'QS World University Ranked #1 Private University in India for Research',
    logo_url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=160&auto=format&fit=crop&q=80',
    banner_url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=80'
    ],
    short_description: 'High-impact Himalayan research institution famous for biotechnology, patent filings, clean energy research, and flexible online bachelor’s & master’s degrees.',
    about: 'Shoolini University is a research-focused university in the pine-scented hills of Solan. Ranked #1 in India for research citations by Times Higher Education and QS World Rankings, offering cutting-edge degrees in AI, biotechnology, and management.',
    programs_available: [
      'Online MBA (Specialized in Data, Marketing, Finance)',
      'Online BBA & Online BCA',
      'B.Tech in Biotechnology & Genetic Engineering',
      'B.Tech Computer Science & AI',
      'Online MCA & Online MAJMC',
      'Pharmaceutical Sciences & Food Tech'
    ],
    accreditation: 'UGC Recognized · NAAC A+ Grade · QS World University Rankings · AICTE Approved',
    campus_highlights: [
      'Breathtaking Himalayan campus with clean mountain air and solar infrastructure',
      'Over 1,400+ patents filed by university research teams',
      'World-renowned Yogananda Central Library and advanced biotechnology centres',
      'Stanford and Oxford faculty mentorship network'
    ],
    admission_process: 'Academic merit evaluation and personalized counseling through CareerVerse.',
    important_dates: 'Open admissions for upcoming session.'
  },
  {
    id: 'univ-andhra',
    slug: 'andhra-university',
    name: 'Andhra University',
    location: 'Visakhapatnam, Andhra Pradesh',
    city: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    established_year: 1926,
    naac_grade: 'NAAC A++ Grade',
    ranking: 'NIRF Top 45 Ranked University · Iconic 100-Year Heritage',
    logo_url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=160&auto=format&fit=crop&q=80',
    banner_url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80'
    ],
    short_description: 'Celebrated century-old public state university with NAAC A++ accreditation, offering prestigious on-campus faculties and recognized online degree programs.',
    about: 'Established in 1926, Andhra University is one of India’s oldest and most prestigious state universities. Awarded NAAC A++ (CGPA 3.74/4.0), it offers comprehensive higher education, engineering, pharmaceutical sciences, and accredited digital programs.',
    programs_available: [
      'Online Master of Business Administration (MBA)',
      'Online Master of Computer Applications (MCA)',
      'Online B.Com & Online BA',
      'Online Master of Commerce (M.Com)',
      'B.Tech, M.Tech, and Pharmaceutical Sciences'
    ],
    accreditation: 'UGC Recognized · Category-I Autonomy · NAAC A++ Grade Accredited · AICTE & PCI Approved',
    campus_highlights: [
      'Historic 422-acre coastal campus overlooking the Bay of Bengal',
      'Distinguished alumni including former Presidents, Chief Justices, and scientists',
      'School of Distance Education & Digital Learning Centre (CDOE)',
      'Modern research incubation facilities in oceanography, IT, and biotechnology'
    ],
    admission_process: 'Merit screening through academic qualifications supported end-to-end by CareerVerse.',
    important_dates: 'Admissions active for current academic intake.'
  },
  {
    id: 'univ-nmims',
    slug: 'nmims-university',
    name: 'NMIMS (Narsee Monjee Institute of Management Studies)',
    location: 'Mumbai, Maharashtra',
    city: 'Mumbai',
    state: 'Maharashtra',
    established_year: 1981,
    naac_grade: 'NAAC A+ Grade',
    ranking: 'NIRF Top 20 Management · AACSB Accredited B-School',
    logo_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=160&auto=format&fit=crop&q=80',
    banner_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80'
    ],
    short_description: 'India’s premier corporate management and business university located in financial capital Mumbai, renowned for AACSB accredited business programs and executive online learning.',
    about: 'SVKM’s NMIMS is a deemed university powerhouse with campuses in Mumbai, Bengaluru, Hyderabad, and Shirpur. Known for its prestigious School of Business Management (SBM) and NMIMS Global Access School for Continuing Education (NGA-SCE).',
    programs_available: [
      'Online MBA (Master of Business Administration)',
      'Executive MBA in Corporate Leadership',
      'Online BBA & Online B.Com',
      'B.Tech + MBA Tech Integrated Engineering',
      'Post Graduate Diplomas in Banking, Marketing & Supply Chain'
    ],
    accreditation: 'UGC Deemed University · Category-I Autonomy · NAAC A+ Grade · AACSB Accredited',
    campus_highlights: [
      'Modern corporate campus in the heart of Mumbai’s commercial corridor',
      'Deep corporate relationships with India’s top BFSI, FMCG, and tech firms',
      'Award-winning digital learning mobile app with live lectures & case study library',
      'High placement packages and strong senior alumni corporate presence'
    ],
    admission_process: 'NMAT / NMIMS CET or academic background verification through CareerVerse.',
    important_dates: 'Current academic cycle applications open.'
  },
  {
    id: 'univ-parul',
    slug: 'parul-university',
    name: 'Parul University',
    location: 'Vadodara, Gujarat',
    city: 'Vadodara',
    state: 'Gujarat',
    established_year: 2009,
    naac_grade: 'NAAC A++ Grade',
    ranking: 'Youngest Private University in India with NAAC A++ in 1st Cycle',
    logo_url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=160&auto=format&fit=crop&q=80',
    banner_url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80'
    ],
    short_description: 'Dynamic multidisciplinary university with a 150-acre mega campus, multiple on-campus hospitals, and comprehensive online UG/PG degrees.',
    about: 'Parul University is a multidisciplinary institution in Vadodara, Gujarat, known for achieving NAAC A++ accreditation. Offering 250+ diploma, undergraduate, postgraduate, and online programs across Engineering, Medicine, Management, and Design.',
    programs_available: [
      'Online Master of Business Administration (MBA)',
      'Online Master of Computer Applications (MCA)',
      'Online BBA & Online BCA',
      'B.Tech CSE with Artificial Intelligence & Cloud',
      'Bachelor of Physiotherapy & Paramedical Sciences',
      'B.Pharm & Healthcare Management'
    ],
    accreditation: 'UGC Recognized · NAAC A++ Grade (Highest Tier) · AICTE, NMC, PCI, BCI Approved',
    campus_highlights: [
      '150-Acre vibrant campus with 1,200-bed multispeciality hospitals',
      'Parul Innovation & Entrepreneurship Research Centre (PIERC)',
      'Over 2,000+ national and multinational recruiters visiting for campus placements',
      'International students from 65+ countries creating global exposure'
    ],
    admission_process: 'Merit in 10+2 / Graduation screening facilitated by CareerVerse.',
    important_dates: 'Open admissions for upcoming academic year.'
  },
  {
    id: 'univ-galgotias',
    slug: 'galgotias-university',
    name: 'Galgotias University',
    location: 'Greater Noida, Uttar Pradesh',
    city: 'Greater Noida',
    state: 'Uttar Pradesh (Delhi NCR)',
    established_year: 2011,
    naac_grade: 'NAAC A+ Grade',
    ranking: 'NIRF Top Ranked Private University in Delhi NCR',
    logo_url: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=160&auto=format&fit=crop&q=80',
    banner_url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80'
    ],
    short_description: 'Delhi NCR technological powerhouse with QS 5 Stars for Academic Development, known for computer science placements and business education.',
    about: 'Galgotias University is a premier university in Greater Noida, accredited with NAAC A+. With 52-acre state-of-the-art facilities, it offers industry-designed curricula in computing, management, law, media, allied healthcare, and online programs.',
    programs_available: [
      'B.Tech in Computer Science & Engineering',
      'B.Tech in Artificial Intelligence & Data Science',
      'Bachelor of Business Administration (BBA)',
      'Master of Business Administration (MBA)',
      'Online Degrees via Galgotias Online',
      'Bachelor of Computer Applications (BCA)'
    ],
    accreditation: 'UGC Recognized · NAAC A+ Grade · NIRF Ranked · BCI & PCI Approved',
    campus_highlights: [
      '52-Acre green campus located along the Yamuna Expressway',
      'Over 850+ top recruiters offering tier-1 placement packages',
      'Apple, Microsoft, and IBM partnered innovation and computing centres',
      'Active student clubs, hackathons, and corporate mentorship'
    ],
    admission_process: 'Academic score merit screening and CareerVerse personal counselling session.',
    important_dates: 'Current academic cycle enrolments open.'
  },
  {
    id: 'univ-jindal',
    slug: 'op-jindal-global-university',
    name: 'O.P. Jindal Global University (JGU)',
    location: 'Sonipat, Haryana',
    city: 'Sonipat',
    state: 'Haryana (Delhi NCR)',
    established_year: 2009,
    naac_grade: 'NAAC A Grade',
    ranking: 'QS World University Ranked #1 Private University in India · Institution of Eminence',
    logo_url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=160&auto=format&fit=crop&q=80',
    banner_url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80'
    ],
    short_description: 'India’s premier non-profit global university and Institution of Eminence, featuring the globally ranked Jindal Global Law School (JGLS) and Jindal Global Business School.',
    about: 'O.P. Jindal Global University is an Institution of Eminence declared by the Government of India. With 12 multidisciplinary schools, JGU is ranked by QS as India’s #1 private university, offering global curricula, international faculty, and executive master’s degrees in AI and business.',
    programs_available: [
      'BA LLB (Hons) / BBA LLB (Hons) via JGLS',
      'Master’s Degree in Artificial Intelligence & Data Science (Online)',
      'MBA in Digital Business & Corporate Strategy',
      'BBA (Honours) in International Management',
      'BA (Hons) International Affairs & Public Policy',
      'LLM in Corporate & Financial Law'
    ],
    accreditation: 'Institution of Eminence · UGC Recognized · NAAC A Grade · Bar Council of India',
    campus_highlights: [
      '80-Acre global residential campus designed with Oxford-Cambridge aesthetic',
      'Over 50% international and Ivy-League educated full-time faculty',
      'Global academic collaborations with Harvard, Oxford, Yale, and Columbia',
      'Unmatched corporate and legal clerkship placements across multinational firms'
    ],
    admission_process: 'LSAT-India / JSAT / Academic screening and CareerVerse expert guidance.',
    important_dates: 'Admissions open for upcoming session.'
  },
  {
    id: 'univ-alliance',
    slug: 'alliance-university',
    name: 'Alliance University',
    location: 'Bangalore, Karnataka',
    city: 'Bangalore',
    state: 'Karnataka',
    established_year: 2010,
    naac_grade: 'NAAC A+ Grade',
    ranking: 'NIRF Top Business & Law University in South India',
    logo_url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=160&auto=format&fit=crop&q=80',
    banner_url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80'
    ],
    short_description: 'Renowned Bengaluru university featuring Alliance School of Business and Alliance School of Law, with modern campus amenities and top corporate links.',
    about: 'Alliance University is a premier university situated in India’s Silicon Valley, Bengaluru. Known for its rigorous academic curriculum, Bloomberg finance labs, moot courtrooms, and extensive placement network with leading multinational technology companies.',
    programs_available: [
      'Bachelor of Business Administration (BBA - Honours)',
      'Master of Business Administration (MBA)',
      'B.Tech in Computer Science & Engineering',
      'BA LLB (Hons) / BBA LLB (Hons)',
      'Executive PGDM & Continuing Online Education'
    ],
    accreditation: 'UGC Recognized · NAAC A+ Grade · AICTE Approved · Bar Council of India · IACBE Accredited',
    campus_highlights: [
      'Lush 60-acre green campus in Bengaluru with modern residential infrastructure',
      'Bloomberg Terminal financial laboratory for quantitative trading and research',
      'High-court simulated moot courtroom with regular national competitions',
      'Over 600+ corporate partners recruiting students from campus annually'
    ],
    admission_process: 'AUSAT / AMAT / Merit screening and direct CareerVerse admission assistance.',
    important_dates: 'Current academic cycle enrolments active.'
  },
  {
    id: 'univ-christ',
    slug: 'christ-university',
    name: 'Christ University',
    location: 'Bangalore, Karnataka',
    city: 'Bangalore',
    state: 'Karnataka',
    established_year: 1969,
    naac_grade: 'NAAC A+ Grade',
    ranking: 'NIRF Top Ranked Autonomous Deemed University',
    logo_url: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=160&auto=format&fit=crop&q=80',
    banner_url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80'
    ],
    short_description: 'Iconic Bengaluru deemed university famed for exceptional academic discipline, holistic student grooming, and top rankings in commerce, law, and business.',
    about: 'Christ (Deemed to be University) in Bengaluru is one of India’s most sought-after higher learning institutions. Renowned for its School of Business & Management, Department of Commerce, School of Law, and arts faculties.',
    programs_available: [
      'Bachelor of Business Administration (BBA - Honours)',
      'B.Com (Honours) in International Finance & Analytics',
      'Master of Business Administration (MBA)',
      'Integrated BA LLB / BBA LLB (Honours)',
      'BCA & M.Sc Data Science',
      'BA Psychology, Journalism & English'
    ],
    accreditation: 'UGC Deemed to be University · NAAC A+ Grade · AICTE Approved · Bar Council of India',
    campus_highlights: [
      'Award-winning lush urban campus in central Bengaluru with world-class facilities',
      'Strict academic culture and holistic personal development focus',
      'Top recruitment by Goldman Sachs, Deloitte, McKinsey, Amazon, and KPMG',
      'Dynamic performing arts centres, sports complexes, and global research centres'
    ],
    admission_process: 'CUET / Christ University Entrance Test & Skill Assessment with CareerVerse guidance.',
    important_dates: 'Session applications open for multiple rounds.'
  },
  {
    id: 'univ-bennett',
    slug: 'bennett-university',
    name: 'Bennett University (The Times Group)',
    location: 'Greater Noida, Uttar Pradesh',
    city: 'Greater Noida',
    state: 'Uttar Pradesh (Delhi NCR)',
    established_year: 2016,
    naac_grade: 'NAAC Accredited',
    ranking: 'Ivy League Pedagogy · Top Emerging Tech & Media University',
    logo_url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=160&auto=format&fit=crop&q=80',
    banner_url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=80'
    ],
    short_description: 'Founded by The Times Group in academic partnership with Georgia Tech and Cornell Law, delivering ivy-league pedagogy in computer engineering, media, and business.',
    about: 'Bennett University was founded by The Times Group (Bennett, Coleman & Co. Ltd.) to bring Ivy League academic standards to India. Located in Greater Noida, Bennett excels in computer science engineering, artificial intelligence, digital journalism, business, and law.',
    programs_available: [
      'B.Tech Computer Science & AI (in tie-up with NVIDIA)',
      'BA Journalism & Mass Communication',
      'Bachelor of Business Administration (BBA)',
      'Master of Business Administration (MBA)',
      'Integrated BA LLB / BBA LLB (Honours)',
      'BCA in Cloud & Cybersecurity'
    ],
    accreditation: 'UGC Recognized · Government of UP Approved · Academic Partnerships with Georgia Tech & Cornell Law',
    campus_highlights: [
      'State-of-the-art 68-acre campus designed with international architecture',
      'Supercomputing facility featuring NVIDIA DGX-1 AI Supercomputer',
      'In-house TV broadcasting studios and newsroom simulators backed by Times Group',
      'Bennett Hatchery with dedicated seed funding for student ventures'
    ],
    admission_process: 'JEE Main score or Class 12 board merit counselling through CareerVerse.',
    important_dates: 'Direct counselling active for upcoming intake.'
  },
  {
    id: 'univ-vit',
    slug: 'vellore-institute-of-technology',
    name: 'Vellore Institute of Technology (VIT)',
    location: 'Vellore, Tamil Nadu',
    city: 'Vellore',
    state: 'Tamil Nadu',
    established_year: 1984,
    naac_grade: 'NAAC A++ Grade',
    ranking: 'NIRF Top 10 Engineering Institute · Institution of Eminence',
    logo_url: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=160&auto=format&fit=crop&q=80',
    banner_url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1600&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80'
    ],
    short_description: 'Premier technological research Institution of Eminence in Vellore with world-class engineering faculties, international ABET accreditations, and record campus placements.',
    about: 'Vellore Institute of Technology (VIT) is an Institution of Eminence celebrated worldwide for engineering, computational sciences, and technology research. With campuses in Vellore, Chennai, Bhopal, and Amaravati, VIT has achieved NAAC A++ (CGPA 3.66/4.0) and ABET accreditation.',
    programs_available: [
      'B.Tech in Computer Science & Engineering',
      'B.Tech in Artificial Intelligence & Machine Learning',
      'B.Tech in Electronics & Communication Engineering',
      'Bachelor of Business Administration (BBA)',
      'Master of Computer Applications (MCA)',
      'MBA in Technology & Operations Management'
    ],
    accreditation: 'Institution of Eminence · NAAC A++ Grade · NIRF Top 10 Engineering · ABET Accredited (USA)',
    campus_highlights: [
      '372-Acre futuristic tech campus with modern residential towers and central auditoriums',
      'Limca Book of Records for highest number of campus recruitment offers in India',
      'Fully Flexible Credit System (FFCS) allowing students to design their own schedules',
      'Global student mobility partnerships with 300+ universities across the world'
    ],
    admission_process: 'VITEEE rank or direct institutional merit guidance through CareerVerse.',
    important_dates: 'Academic session 2026-27 counselling underway.'
  }
];
