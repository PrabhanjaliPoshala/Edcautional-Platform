import React, { useState } from 'react';
import { University } from '../../types';
import { MapPin, Award, ArrowRight, Calendar, Trophy, FileText } from 'lucide-react';

interface UniversityCardProps {
  university: University;
  onSelectUniversity: (slug: string) => void;
  onOpenAdmissionModal?: (universityName?: string) => void;
}

export const UniversityCard: React.FC<UniversityCardProps> = ({
  university,
  onSelectUniversity,
  onOpenAdmissionModal
}) => {
  const [logoError, setLogoError] = useState(false);

  // Deriving initials for logo fallback
  const initials = university.name
    .split(' ')
    .filter(word => !['of', '&', 'and', 'the', 'in'].includes(word.toLowerCase()))
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase() || 'CV';

  const city = university.city || university.location.split(',')[0]?.trim();
  const state = university.state || university.location.split(',')[1]?.trim() || '';
  const locationDisplay = city && state ? `${city}, ${state}` : university.location;
  const shortOverview = university.short_description || university.about;

  return (
    <div className="flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 hover:border-[#0B2A52]/40 shadow-xs hover:shadow-lg transition-all duration-300 p-6 text-left group">
      <div>
        {/* Top Header: Logo + Meta (Location & Year) + University Name */}
        <div className="flex items-start gap-4 mb-4">
          {university.logo_url && !logoError ? (
            <img
              src={university.logo_url}
              alt={`${university.name} Logo`}
              onError={() => setLogoError(true)}
              className="w-14 h-14 rounded-xl object-cover border border-slate-200 shrink-0 bg-slate-50 shadow-2xs group-hover:scale-105 transition-transform"
            />
          ) : (
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0B2A52] to-[#123E73] text-[#E5C66B] flex items-center justify-center font-bold font-mono text-base shrink-0 border border-slate-200 shadow-2xs">
              {initials}
            </div>
          )}

          <div className="flex-1 min-w-0">
            {/* City, State & Established Year */}
            <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-xs text-slate-500 mb-1">
              <span className="flex items-center gap-1 font-medium text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-[#C99A2E] shrink-0" />
                <span className="truncate">{locationDisplay}</span>
              </span>
              {university.established_year && (
                <>
                  <span className="text-slate-300">·</span>
                  <span className="flex items-center gap-1 text-[11px] text-slate-500 font-mono">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    Est. {university.established_year}
                  </span>
                </>
              )}
            </div>

            {/* University Name */}
            <h3 
              onClick={() => onSelectUniversity(university.slug)}
              className="text-base sm:text-lg font-bold text-[#0B2A52] font-display hover:text-[#C99A2E] cursor-pointer transition-colors leading-snug line-clamp-2"
              title={university.name}
            >
              {university.name}
            </h3>
          </div>
        </div>

        {/* NAAC Grade & Ranking Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3.5">
          {university.naac_grade && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-50 text-[#0B2A52] border border-amber-200/90 shadow-2xs">
              <Award className="w-3.5 h-3.5 text-[#C99A2E]" />
              {university.naac_grade}
            </span>
          )}

          {university.ranking && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-blue-50 text-blue-900 border border-blue-100 shadow-2xs">
              <Trophy className="w-3.5 h-3.5 text-blue-600" />
              <span className="truncate max-w-[200px]">{university.ranking}</span>
            </span>
          )}
        </div>

        {/* Short Overview */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
          {shortOverview}
        </p>
      </div>

      {/* Action Buttons: [View Details] & [Admission Guidance Form] */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
        <button
          type="button"
          onClick={() => onSelectUniversity(university.slug)}
          className="flex-1 py-2.5 px-3.5 text-xs font-semibold text-[#0B2A52] bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
        </button>

        <button
          type="button"
          onClick={() => {
            if (onOpenAdmissionModal) {
              onOpenAdmissionModal(university.name);
            }
          }}
          className="flex-1 py-2.5 px-3.5 text-xs font-extrabold text-[#0B2A52] bg-[#C99A2E] hover:bg-[#B88922] rounded-lg transition-all shadow-xs hover:shadow-sm flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
        >
          <FileText className="w-3.5 h-3.5 shrink-0" />
          <span>Admission Guidance Form</span>
        </button>
      </div>
    </div>
  );
};
