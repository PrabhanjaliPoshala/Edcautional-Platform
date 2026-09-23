import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { counsellingPathways, CounsellingPathway } from '../data/counsellingData';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  Users, 
  GraduationCap, 
  Sparkles,
  HelpCircle,
  PhoneCall
} from 'lucide-react';

interface CareerCounsellingPageProps {
  onOpenGuidanceModal: (stageBadge?: string) => void;
  onOpenCounsellingModal: () => void;
}

export const CareerCounsellingPage: React.FC<CareerCounsellingPageProps> = ({
  onOpenGuidanceModal,
  onOpenCounsellingModal
}) => {
  const [activePathwayId, setActivePathwayId] = useState<string>('stage-11-12');

  const selectedPathway = counsellingPathways.find(p => p.id === activePathwayId) || counsellingPathways[2];

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#0B2A52] to-[#123E73] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#E5C66B] uppercase font-mono">
            <span>CareerVerse India</span>
            <span aria-hidden="true">·</span>
            <span>Comprehensive Guidance</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white">
            Find the Right Direction for Your Future
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl mx-auto">
            Personalized career guidance based on your interests, strengths, academic background, aspirations and future opportunities.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => onOpenGuidanceModal()}
              className="py-3 px-6 bg-[#C99A2E] hover:bg-[#B88922] text-[#0B2A52] font-bold text-sm rounded-lg shadow-sm transition-all cursor-pointer"
            >
              Get Career Guidance
            </button>
            <button
              type="button"
              onClick={onOpenCounsellingModal}
              className="py-3 px-6 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-lg border border-white/20 transition-colors cursor-pointer"
            >
              Book 1-on-1 Counselling Slot
            </button>
          </div>
        </div>
      </section>

      {/* Pathways Interactive Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pathway Stage Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 justify-start lg:justify-center border-b border-slate-200">
          {counsellingPathways.map((pathway) => {
            const isSelected = pathway.id === activePathwayId;
            return (
              <button
                key={pathway.id}
                onClick={() => setActivePathwayId(pathway.id)}
                className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0B2A52] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isSelected ? 'bg-[#C99A2E] text-[#0B2A52]' : 'bg-slate-100 text-slate-500'}`}>
                  {pathway.stageNumber}
                </span>
                <span>{pathway.stageBadge}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Pathway Deep-Dive Card */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activePathwayId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 text-left"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold text-[#C99A2E] font-mono tracking-wider uppercase">
                  PATHWAY {selectedPathway.stageNumber} · {selectedPathway.targetGroup}
                </span>
                <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#0B2A52] font-display">
                  {selectedPathway.title}
                </h2>
                <p className="mt-2 text-sm sm:text-base font-semibold text-slate-700">
                  {selectedPathway.tagline}
                </p>
              </div>

              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>{selectedPathway.description}</p>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs">
                  <strong className="text-slate-800">Ideal for: </strong> {selectedPathway.recommendedFor}
                </div>
              </div>

              {/* Core Services List */}
              <div className="pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono mb-3">
                  Services Included In This Pathway
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedPathway.coreServices.map((service, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-[#C99A2E] shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Outcomes */}
              <div className="pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono mb-3">
                  Measurable Student & Parent Outcomes
                </h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  {selectedPathway.keyOutcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#0B2A52] font-bold">✓</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpenGuidanceModal(selectedPathway.stageBadge)}
                  className="w-full sm:w-auto py-3 px-6 bg-[#C99A2E] hover:bg-[#B88922] text-[#0B2A52] font-bold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Compass className="w-4 h-4" />
                  <span>{selectedPathway.ctaText}</span>
                </button>
                <button
                  type="button"
                  onClick={onOpenCounsellingModal}
                  className="w-full sm:w-auto py-3 px-6 bg-[#0B2A52] hover:bg-[#123E73] text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#C99A2E]" />
                  <span>Schedule Consultation</span>
                </button>
              </div>

            </div>

            {/* Side Highlights & Process Panel */}
            <div className="lg:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-200/80 space-y-6">
              <h3 className="text-base font-bold text-[#0B2A52] font-display flex items-center gap-2">
                <Target className="w-4 h-4 text-[#C99A2E]" />
                <span>The CareerVerse Methodology</span>
              </h3>

              <div className="space-y-4 text-xs text-slate-600">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0B2A52] text-white flex items-center justify-center shrink-0 font-bold font-mono text-[10px]">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Psychometric Diagnostic</h4>
                    <p className="mt-0.5">Assessing aptitude, numerical, verbal, spatial abilities and personality traits.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0B2A52] text-white flex items-center justify-center shrink-0 font-bold font-mono text-[10px]">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">1-on-1 Certified Counsellor Session</h4>
                    <p className="mt-0.5">Deep conversation to address parental expectations, individual passions, and practical realities.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0B2A52] text-white flex items-center justify-center shrink-0 font-bold font-mono text-[10px]">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Comprehensive Career Report</h4>
                    <p className="mt-0.5">30+ page custom career dossier with prioritized streams, recommended colleges, and backup plans.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0B2A52] text-white flex items-center justify-center shrink-0 font-bold font-mono text-[10px]">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Admission Navigation Support</h4>
                    <p className="mt-0.5">Continuous handholding till the student confirms admission in their selected institution.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200/80 text-xs text-amber-900">
                  <div className="font-bold flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#C99A2E]" />
                    <span>Parent & Student Guarantee</span>
                  </div>
                  <span>We do not impose fixed career paths. Our role is to illuminate possibilities so the student and family choose with clarity.</span>
                </div>
              </div>

            </div>

          </div>
          </motion.div>
        </AnimatePresence>

      </section>

      {/* All Five Pathways Overview Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-widest text-[#C99A2E] uppercase font-mono">
            Lifecycle Matrix
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0B2A52] font-display">
            Full Guidance Portfolio
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Compare services and focus areas across all 5 career checkpoints.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {counsellingPathways.map((pathway) => (
            <div 
              key={pathway.id}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between text-left shadow-2xs hover:border-[#0B2A52]/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-[#C99A2E] mb-2 font-mono">
                  <span>STAGE {pathway.stageNumber}</span>
                  <span className="text-slate-400">{pathway.stageBadge}</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B2A52] font-display">
                  {pathway.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 line-clamp-3">
                  {pathway.description}
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                  {pathway.coreServices.slice(0, 3).map((s, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                      <span className="text-[#C99A2E] font-bold">›</span>
                      <span className="line-clamp-1">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setActivePathwayId(pathway.id);
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className="flex-1 py-2 text-xs font-semibold text-[#0B2A52] bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors text-center cursor-pointer"
                >
                  View Details
                </button>
                <button
                  type="button"
                  onClick={() => onOpenGuidanceModal(pathway.stageBadge)}
                  className="flex-1 py-2 text-xs font-bold text-[#0B2A52] bg-[#C99A2E] hover:bg-[#B88922] rounded-lg transition-colors text-center cursor-pointer"
                >
                  Get Guidance
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
