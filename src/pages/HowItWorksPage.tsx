import React, { useState } from 'react';
import { 
  Compass, 
  Target, 
  Search, 
  UserCheck, 
  GraduationCap, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react';

interface HowItWorksPageProps {
  onOpenGuidanceModal: () => void;
  onOpenCounsellingModal: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({
  onOpenGuidanceModal,
  onOpenCounsellingModal
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      step: '01',
      title: 'Discover & Intake Profile',
      tagline: 'Tell us about your background, scores and goals',
      desc: 'Submit our simple enquiry or counselling request without needing an account. Share your current grade or degree, subjects, academic performance, geographic preferences, and career aspirations.',
      icon: <Search className="w-6 h-6 text-[#C99A2E]" />
    },
    {
      step: '02',
      title: 'Understand & Scientific Assessment',
      tagline: 'Explore matching career domains and possibilities',
      desc: 'Our counsellors evaluate your profile using psychometric diagnostics, aptitude indicators, and market growth forecasts. We identify career pathways where your inherent strengths translate into competitive advantages.',
      icon: <Compass className="w-6 h-6 text-[#C99A2E]" />
    },
    {
      step: '03',
      title: 'Shortlist & Benchmarking',
      tagline: 'Objective comparison of programs and institutions',
      desc: 'Receive transparent comparisons of UGC-approved universities, autonomous colleges, and executive programs. We assess genuine accreditation, NIRF rank history, campus infrastructure, faculty quality, and verifiable campus placements.',
      icon: <Target className="w-6 h-6 text-[#C99A2E]" />
    },
    {
      step: '04',
      title: 'Decide With Counsellor Alignment',
      tagline: '1-on-1 personalized counselling session',
      desc: 'Participate in structured counselling with certified academic counsellors. We bring parents and students into clear consensus, addressing competitive exam backup plans, subject combinations, and future market viability.',
      icon: <UserCheck className="w-6 h-6 text-[#C99A2E]" />
    },
    {
      step: '05',
      title: 'Apply & Admission Handholding',
      tagline: 'Full support through the enrolment milestone',
      desc: 'We assist with application documentation, eligibility verification, scholarship queries, and institutional registration deadlines, ensuring zero administrative confusion right up to your first day of class.',
      icon: <GraduationCap className="w-6 h-6 text-[#C99A2E]" />
    }
  ];

  const faqs = [
    {
      q: 'Do students or parents need to create an account or password to use CareerVerse?',
      a: 'No. CareerVerse India operates on an open lead-generation and advisory framework. You do not need to register an account, remember passwords, or navigate complicated student portals. Simply fill a short request form, and our internal counselling desk contacts you directly.'
    },
    {
      q: 'How does CareerVerse India maintain objectivity in recommending universities?',
      a: 'We evaluate institutions based on verifiable statutory metrics: UGC recognition, NAAC grading, NIRF participation, infrastructure quality, and actual placement records. Our counsellors are trained to recommend what fits the student’s career aspirations and potential rather than commercial quotas.'
    },
    {
      q: 'Can working professionals get guidance on Online Degrees and Executive MBAs?',
      a: 'Yes. We guide working professionals and career changers through UGC-DEB accredited online degrees, executive MBAs, and advanced certifications that accommodate working schedules while providing legitimate degree recognition.'
    },
    {
      q: 'What modes of career counselling are available?',
      a: 'We offer structured online video sessions, phone consultations, and in-person sessions at our regional coordination desks in Delhi NCR and Bengaluru.'
    },
    {
      q: 'How quickly does the CareerVerse counselling desk respond after form submission?',
      a: 'Our admissions desk reviews incoming requests in real-time. A counsellor typically connects within 24 business hours to discuss your query and schedule an in-depth conversation.'
    }
  ];

  return (
    <div className="space-y-16 pb-20 text-left">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#0B2A52] to-[#123E73] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#E5C66B] uppercase font-mono">
            Process & Architecture
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white">
            How CareerVerse Works
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
            A structured, 5-step journey that replaces admission stress and career confusion with scientific clarity and reliable guidance.
          </p>
        </div>
      </section>

      {/* 5 Steps Detailed Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {steps.map((st, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-start gap-6 hover:border-[#0B2A52]/40 transition-colors"
            >
              <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:gap-2 shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                  {st.icon}
                </div>
                <span className="text-xs font-black text-[#C99A2E] font-mono tracking-wider">
                  STEP {st.step}
                </span>
              </div>

              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-bold text-[#0B2A52] font-display">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#0B2A52]">
                  {st.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={onOpenGuidanceModal}
            className="py-3.5 px-8 bg-[#C99A2E] hover:bg-[#B88922] text-[#0B2A52] font-bold text-sm rounded-lg shadow-sm transition-all cursor-pointer"
          >
            Start Your Discovery With CareerVerse
          </button>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold tracking-widest text-[#C99A2E] uppercase font-mono">
            Clear Answers
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#0B2A52] font-display">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#0B2A52] hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#C99A2E] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
