import React from 'react';
import { University } from '../types';
import { initialPrograms } from '../data/programsData';
import { 
  ArrowLeft, 
  MapPin, 
  Award, 
  Building2, 
  CheckCircle2, 
  PhoneCall, 
  BookOpen
} from 'lucide-react';

interface UniversityDetailPageProps {
  university: University;
  onBack: () => void;
  onOpenCounsellingModal: () => void;
  onSelectProgram: (slug: string) => void;
}

export const UniversityDetailPage: React.FC<UniversityDetailPageProps> = ({
  university,
  onBack,
  onOpenCounsellingModal,
  onSelectProgram
}) => {
  // Find linked programs in initialPrograms that belong to this university
  const matchingPrograms = initialPrograms.filter(
    p => p.university_slug === university.slug
  );

  return (
    <div className="space-y-10 pb-20 text-left">
      
      {/* Header Banner */}
      <section className="bg-[#0B2A52] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-4">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to University Directory</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#E5C66B] font-mono">
            <MapPin className="w-4 h-4 text-[#C99A2E]" />
            <span>{university.location}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
            {university.name}
          </h1>

          <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm text-slate-200">
            <Award className="w-4 h-4 text-[#C99A2E] shrink-0" />
            <span>{university.accreditation}</span>
          </div>
        </div>
      </section>

      {/* Main Details Body */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* About the Institution */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-3">
              <h2 className="text-xl font-bold text-[#0B2A52] font-display flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#C99A2E]" />
                <span>About the Institution</span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {university.about}
              </p>
            </div>

            {/* Campus & Infrastructure Highlights */}
            {university.campus_highlights.length > 0 && (
              <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4">
                <h2 className="text-xl font-bold text-[#0B2A52] font-display">
                  Campus Facilities & Academic Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {university.campus_highlights.map((high, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#C99A2E] shrink-0 mt-0.5" />
                      <span>{high}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Programs Available Through CareerVerse */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-bold text-[#0B2A52] font-display flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#C99A2E]" />
                <span>Programs Available Through CareerVerse</span>
              </h2>
              <div className="space-y-3">
                {university.programs_available.map((progName, i) => {
                  // Check if full program detail is present
                  const matched = initialPrograms.find(p => p.name === progName);
                  return (
                    <div 
                      key={i} 
                      className="p-4 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-between transition-colors"
                    >
                      <div>
                        <h3 className="text-sm font-bold text-[#0B2A52]">{progName}</h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Direct admission guidance & verification available.
                        </p>
                      </div>
                      {matched && (
                        <button
                          type="button"
                          onClick={() => onSelectProgram(matched.slug)}
                          className="py-1.5 px-3 bg-[#0B2A52] hover:bg-[#123E73] text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
                        >
                          View Curriculum
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Admission Process */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-3">
              <h2 className="text-xl font-bold text-[#0B2A52] font-display">
                Admission & Selection Process
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {university.admission_process}
              </p>
            </div>

          </div>

          {/* Sticky Side Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 space-y-5">
              
              <div className="space-y-3 text-xs text-slate-700">
                <div>
                  <span className="font-semibold text-slate-500 block">Accreditation:</span>
                  <span className="text-slate-800 font-medium">{university.accreditation}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-500 block">Campus Location:</span>
                  <span className="text-slate-800 font-medium">{university.location}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-500 block">Important Dates / Intake:</span>
                  <span className="text-slate-800 font-medium">{university.important_dates}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2">
                <button
                  type="button"
                  onClick={onOpenCounsellingModal}
                  className="w-full py-3.5 px-4 bg-[#C99A2E] hover:bg-[#B88922] text-[#0B2A52] font-extrabold text-sm rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>Speak to an Admission Counsellor</span>
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  CareerVerse counsellors provide unbiased guidance on institutional admission & eligibility.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
