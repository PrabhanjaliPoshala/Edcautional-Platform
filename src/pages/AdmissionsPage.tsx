import React, { useState } from 'react';
import { admissionCategories, AdmissionCategory } from '../data/admissionsData';
import { 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  BookOpen, 
  Briefcase, 
  Sparkles,
  PhoneCall
} from 'lucide-react';

interface AdmissionsPageProps {
  onOpenAdmissionModal: (initialProgramName?: string) => void;
  onNavigate: (path: string) => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({
  onOpenAdmissionModal,
  onNavigate
}) => {
  const [selectedGroup, setSelectedGroup] = useState<string>('All');

  const groups = ['All', 'UG Admissions', 'Diplomas & Professional Programs', 'Online & Executive Education'];

  const filteredCategories = selectedGroup === 'All'
    ? admissionCategories
    : admissionCategories.filter(cat => cat.group === selectedGroup);

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#0B2A52] to-[#123E73] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#E5C66B] uppercase font-mono">
            <span>CareerVerse India Admissions Desk</span>
            <span aria-hidden="true">·</span>
            <span>Academic Intake 2026-27</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white">
            Find the Right Program. Apply With Confidence.
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl mx-auto">
            Direct institutional guidance across undergraduate degrees, clinical allied health, professional diplomas, and UGC-accredited online & executive education.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => onOpenAdmissionModal()}
              className="py-3 px-6 bg-[#C99A2E] hover:bg-[#B88922] text-[#0B2A52] font-bold text-sm rounded-lg shadow-sm transition-all cursor-pointer"
            >
              Get Admission Guidance
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/programs')}
              className="py-3 px-6 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-lg border border-white/20 transition-colors cursor-pointer"
            >
              Search Program Directory
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 border-b border-slate-200">
          {groups.map((group) => (
            <button
              key={group}
              onClick={() => setSelectedGroup(group)}
              className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedGroup === group
                  ? 'bg-[#0B2A52] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {group}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-[#0B2A52]/40 shadow-2xs hover:shadow-md transition-all group"
            >
              <div>
                {/* Zero-Pill Group Indicator */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-mono">
                  <span className="text-[#C99A2E] font-bold uppercase">{cat.group}</span>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-[#0B2A52] font-display group-hover:text-[#123E73] transition-colors">
                  {cat.name}
                </h3>

                {/* Tagline */}
                <p className="mt-1 text-xs font-semibold text-slate-700">
                  {cat.tagline}
                </p>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {cat.description}
                </p>

                {/* Key Disciplines */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2 font-mono">
                    Popular Disciplines & Degrees
                  </span>
                  <div className="space-y-1.5">
                    {cat.keyDisciplines.map((disc, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C99A2E] shrink-0 mt-0.5" />
                        <span>{disc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Intake Timeline */}
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{cat.intakeTimeline}</span>
                </div>
              </div>

              {/* Category CTA */}
              <div className="mt-6 pt-3 border-t border-slate-100 flex gap-2">
                <button
                  type="button"
                  onClick={() => onOpenAdmissionModal(cat.name)}
                  className="w-full py-2.5 px-4 bg-[#C99A2E] hover:bg-[#B88922] text-[#0B2A52] font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4 shrink-0" />
                  <span>{cat.ctaText}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Admission Support Guarantee Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B2A52] text-white rounded-2xl p-8 sm:p-12 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-[#E5C66B] font-mono uppercase tracking-wider">
                TRANSPARENT ADMISSION FACILITATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                How CareerVerse Supports Your Admission
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                We work directly with admissions desks across India. From clarifying genuine scholarship eligibility to arranging campus visits and managing seat reservation deadlines, our team ensures zero misrepresentation.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-200">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C99A2E]" />
                  <span>Direct Admission Verification</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C99A2E]" />
                  <span>UGC & Council Verification</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C99A2E]" />
                  <span>Education Loan Assistance</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                type="button"
                onClick={() => onOpenAdmissionModal()}
                className="py-3.5 px-6 bg-[#C99A2E] hover:bg-[#B88922] text-[#0B2A52] font-extrabold text-sm rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap"
              >
                Request Admission Guidance
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
