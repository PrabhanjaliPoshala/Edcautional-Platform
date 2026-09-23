import React from 'react';
import { CareerGuidanceForm } from '../components/forms/CareerGuidanceForm';
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-20 text-left">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#0B2A52] to-[#123E73] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#E5C66B] uppercase font-mono">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white">
            Connect With CareerVerse India
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
            Have questions regarding stream choice, UG admissions, or university eligibility? Our educational advisors are ready to assist you.
          </p>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office Contacts */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
              <h2 className="text-xl font-bold text-[#0B2A52] font-display">
                National Coordination Desks
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C99A2E] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900">Corporate Admissions Hub (Delhi NCR)</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      CareerVerse India, Corporate Education Towers, Barakhamba Road, Connaught Place, New Delhi 110001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C99A2E] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900">Southern Regional Desk (Bengaluru)</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      CareerVerse Centre, 4th Block, Koramangala, Bengaluru, Karnataka 560034
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                  <Phone className="w-5 h-5 text-[#C99A2E] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900">Direct Telephone & WhatsApp</h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Admissions Desk & WhatsApp: <a href="tel:+916303464800" className="hover:text-[#0B2A52] font-semibold text-slate-800 transition-colors">+91 63034 64800</a><br />
                      Helpline: <a href="tel:+916303464800" className="hover:text-[#0B2A52] font-semibold text-slate-800 transition-colors">6303464800</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                  <Mail className="w-5 h-5 text-[#C99A2E]" />
                  <div>
                    <h3 className="font-bold text-slate-900">Email Correspondence</h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      General: info@careerverseindia.org<br />
                      Admissions: admissions@careerverseindia.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                  <Clock className="w-5 h-5 text-[#C99A2E]" />
                  <div>
                    <h3 className="font-bold text-slate-900">Operational Hours</h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Monday to Saturday: 9:30 AM – 6:30 PM IST<br />
                      Sunday: Pre-booked online sessions only
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C99A2E] shrink-0" />
                <span>Zero registration charges for initial diagnostic enquiry.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C99A2E] font-mono">
                SEND AN ENQUIRY
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B2A52] font-display mt-1">
                Consult With Our Academic Counsellors
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill the details below. Our team stores this enquiry in Supabase and contacts you directly.
              </p>
            </div>

            <CareerGuidanceForm />
          </div>

        </div>
      </section>

    </div>
  );
};
