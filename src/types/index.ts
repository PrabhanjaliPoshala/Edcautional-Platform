export type LeadStatus = 'New' | 'Contacted' | 'Follow-up' | 'Counselling Scheduled' | 'Converted' | 'Closed';

export type CounsellingStage = 
  | 'Classes 5–7'
  | 'Classes 8–10'
  | 'Classes 11–12'
  | 'Graduate / Recent Graduate'
  | 'Working Professional';

export type CounsellingMode = 'Online' | 'Phone' | 'In-person';

export type EducationLevel = 
  | 'Undergraduate'
  | 'Diploma'
  | 'Certification'
  | 'PG Diploma'
  | 'Postgraduate'
  | 'Online Degree'
  | 'Executive MBA'
  | 'Executive PG Program';

export type StudyField = 
  | 'Medical & Allied Sciences'
  | 'Engineering & Technology'
  | 'Science & IT'
  | 'Commerce & Management'
  | 'Arts & Humanities'
  | 'Social Sciences'
  | 'Law';

export type LocationType = 'India' | 'Online' | 'International';

// Lead 1: Career Guidance Lead
export interface CareerGuidanceLead {
  id: string;
  created_at: string;
  status: LeadStatus;
  full_name: string;
  mobile_number: string;
  email?: string;
  current_qualification: string;
  school_college?: string;
  city?: string;
  state?: string;
  interested_field?: string;
  preferred_course?: string;
  career_goal?: string;
  preferred_counselling_mode: CounsellingMode;
  message?: string;
  internal_notes?: string;
}

// Lead 2: Admission Enquiry
export interface AdmissionEnquiry {
  id: string;
  created_at: string;
  status: LeadStatus;
  full_name: string;
  mobile_number: string;
  email: string;
  current_qualification: string;
  preferred_program: string;
  preferred_specialization?: string;
  preferred_location?: string;
  budget_range?: string;
  preferred_intake_year?: string;
  message?: string;
  internal_notes?: string;
}

// Lead 3: Counselling Request ("Book Career Counselling")
export interface CounsellingRequest {
  id: string;
  created_at: string;
  status: LeadStatus;
  full_name: string;
  mobile_number: string;
  email?: string;
  counselling_category: CounsellingStage;
  preferred_mode: CounsellingMode;
  preferred_date?: string;
  preferred_time?: string;
  message?: string;
  internal_notes?: string;
}

// Unified Lead type for Admin Dashboard
export type UnifiedLead = 
  | ({ lead_type: 'career_guidance' } & CareerGuidanceLead)
  | ({ lead_type: 'admission_enquiry' } & AdmissionEnquiry)
  | ({ lead_type: 'counselling_request' } & CounsellingRequest);

// Program definition
export interface Program {
  id: string;
  slug: string;
  name: string;
  level: EducationLevel;
  field: StudyField;
  overview: string;
  who_is_it_for: string;
  eligibility: string;
  duration: string;
  mode: 'Full-Time Campus' | 'Online / Distance' | 'Hybrid / Executive';
  specializations: string[];
  curriculum_highlights: string[];
  career_opportunities: string[];
  university_name: string;
  university_slug: string;
  location: string;
  fees?: string;
  admission_process: string;
  important_dates: string;
  featured?: boolean;
}

// University definition
export interface University {
  id: string;
  slug: string;
  name: string;
  location: string;
  about: string;
  programs_available: string[];
  accreditation: string;
  campus_highlights: string[];
  admission_process: string;
  fees_range?: string;
  important_dates: string;
  website_url?: string;
}

// Filter State for Program Finder
export interface ProgramFilterState {
  searchQuery: string;
  level: string;
  field: string;
  location: string;
}
