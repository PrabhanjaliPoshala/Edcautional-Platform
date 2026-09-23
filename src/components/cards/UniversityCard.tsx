import React from 'react';
import { University } from '../../types';
import { MapPin, Award, ArrowRight, PhoneCall } from 'lucide-react';

interface UniversityCardProps {
  university: University;
  onSelectUniversity: (slug: string) => void;
  onOpenCounsellingModal: () => void;
}

export const UniversityCard: React.FC<UniversityCardProps> = ({
  university,
  onSelectUniversity,
  onOpenCounsellingModal
}) => {
  return (
    <div className="flex flex-col justify-between bg-white rounded-xl border border-slate-200/90 hover:border-[#0B2A52]/40 shadow-xs hover:shadow-md transition-all duration-200 p-6 text-left group">
      <div>
        {/* Location & Accreditation Zero-Pill */}
        <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
          <MapPin className="w-3.5 h-3.5 text-[#C99A2E]" />
          <span>{university.location}</span>
        </div>

        {/* Title */}
        <h3 
          onClick={() => onSelectUniversity(university.slug)}
          className="text-lg font-bold text-[#0B2A52] font-display hover:text-[#C99A2E] cursor-pointer transition-colors leading-snug"
        >
          {university.name}
        </h3>

        {/* Accreditation */}
        <div className="mt-2 flex items-start gap-1.5 text-xs text-slate-600 bg-slate-50 p-2 rounded-lg">
          <Award className="w-4 h-4 text-[#C99A2E] shrink-0 mt-0.5" />
          <span className="leading-tight">{university.accreditation}</span>
        </div>

        {/* Excerpt */}
        <p className="mt-3 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
          {university.about}
        </p>

        {/* Available Programs count */}
        <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
          <span className="font-semibold text-slate-700">{university.programs_available.length} Programs</span> available through CareerVerse India guidance
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onSelectUniversity(university.slug)}
          className="flex-1 py-2 px-3 text-xs font-semibold text-[#0B2A52] bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
        >
          <span>View Institution</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={onOpenCounsellingModal}
          className="flex-1 py-2 px-3 text-xs font-bold text-[#0B2A52] bg-[#C99A2E] hover:bg-[#B88922] rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
        >
          <PhoneCall className="w-3.5 h-3.5 shrink-0" />
          <span>Speak to Counsellor</span>
        </button>
      </div>
    </div>
  );
};
