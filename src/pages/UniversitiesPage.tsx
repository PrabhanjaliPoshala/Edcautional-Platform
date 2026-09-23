import React, { useState } from 'react';
import { initialUniversities } from '../data/universitiesData';
import { UniversityCard } from '../components/cards/UniversityCard';
import { Search, Building2, Award, ShieldCheck } from 'lucide-react';

interface UniversitiesPageProps {
  onSelectUniversity: (slug: string) => void;
  onOpenCounsellingModal: () => void;
}

export const UniversitiesPage: React.FC<UniversitiesPageProps> = ({
  onSelectUniversity,
  onOpenCounsellingModal
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUniversities = initialUniversities.filter((univ) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      univ.name.toLowerCase().includes(q) ||
      univ.location.toLowerCase().includes(q) ||
      univ.about.toLowerCase().includes(q) ||
      univ.accreditation.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-12 pb-20">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#0B2A52] to-[#123E73] text-white py-14 sm:py-18 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#E5C66B] uppercase font-mono">
            Verified Partner Directory
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white">
            University & College Directory
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto">
            Explore UGC-recognized institutions, autonomous technological institutes, medical colleges, and accredited online universities represented across India.
          </p>
        </div>
      </section>

      {/* Search Input Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200/90 p-5 sm:p-7 max-w-3xl mx-auto">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search universities by name, location (e.g. Bangalore, Delhi, Pune), or accreditation..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:border-[#0B2A52] focus:ring-1 focus:ring-[#0B2A52] outline-hidden transition-colors"
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
            <span>Showing {filteredUniversities.length} institutions</span>
            <span className="flex items-center gap-1 text-slate-600">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C99A2E]" />
              Verified Affiliations & NAAC/UGC Accreditations
            </span>
          </div>
        </div>
      </section>

      {/* Directory Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map((univ) => (
            <UniversityCard
              key={univ.id}
              university={univ}
              onSelectUniversity={onSelectUniversity}
              onOpenCounsellingModal={onOpenCounsellingModal}
            />
          ))}
        </div>
      </section>

    </div>
  );
};
