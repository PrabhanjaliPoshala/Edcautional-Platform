import React, { useState } from 'react';
import { submitCounsellingRequest } from '../../services/leadService';
import { CounsellingStage, CounsellingMode } from '../../types';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface CounsellingBookingFormProps {
  initialCategory?: CounsellingStage;
  onSuccessClose?: () => void;
}

export const CounsellingBookingForm: React.FC<CounsellingBookingFormProps> = ({
  initialCategory = 'Classes 11–12',
  onSuccessClose
}) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    counsellingCategory: initialCategory as CounsellingStage,
    preferredMode: 'Online' as CounsellingMode,
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.mobile.trim() || formData.mobile.trim().length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!formData.counsellingCategory) {
      setErrorMsg('Please select a counselling category.');
      return;
    }

    setLoading(true);
    const res = await submitCounsellingRequest({
      full_name: formData.name.trim(),
      mobile_number: formData.mobile.trim(),
      email: formData.email.trim() || undefined,
      counselling_category: formData.counsellingCategory,
      preferred_mode: formData.preferredMode,
      preferred_date: formData.preferredDate || undefined,
      preferred_time: formData.preferredTime || undefined,
      message: formData.message.trim() || undefined
    });
    setLoading(false);

    if (res.success) {
      setIsSuccess(true);
      setFormData({
        name: '',
        mobile: '',
        email: '',
        counsellingCategory: initialCategory,
        preferredMode: 'Online',
        preferredDate: '',
        preferredTime: '',
        message: ''
      });
    } else {
      setErrorMsg(res.error || 'Failed to submit booking request. Please try again.');
    }
  };

  if (isSuccess) {
    return (
      <div className="py-8 px-4 text-center">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
          <CheckCircle2 className="w-9 h-9 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-[#0B2A52] font-display">
          Request Received
        </h3>
        <p className="mt-3 text-base text-slate-700 max-w-md mx-auto font-medium">
          Your counselling request has been received. Our CareerVerse team will contact you.
        </p>
        <p className="mt-2 text-xs text-slate-500 max-w-sm mx-auto">
          Our scheduling desk will review your slot preference and reach out to confirm the counsellor’s availability.
        </p>
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              if (onSuccessClose) onSuccessClose();
            }}
            className="px-6 py-2.5 bg-[#0B2A52] hover:bg-[#123E73] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      {errorMsg && (
        <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-lg flex items-center gap-2.5 text-xs sm:text-sm text-rose-700">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Row 1: Name and Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Meera Nambiar"
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#0B2A52] focus:ring-1 focus:ring-[#0B2A52] outline-hidden transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Mobile <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            name="mobile"
            required
            value={formData.mobile}
            onChange={handleChange}
            placeholder="+91 63034 64800"
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#0B2A52] focus:ring-1 focus:ring-[#0B2A52] outline-hidden transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Email and Counselling Category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="meera@example.com"
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#0B2A52] focus:ring-1 focus:ring-[#0B2A52] outline-hidden transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Counselling Category <span className="text-rose-500">*</span>
          </label>
          <select
            name="counsellingCategory"
            required
            value={formData.counsellingCategory}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#0B2A52] focus:ring-1 focus:ring-[#0B2A52] outline-hidden transition-colors"
          >
            <option value="Classes 5–7">Classes 5–7 (Explore Strengths)</option>
            <option value="Classes 8–10">Classes 8–10 (Stream Selection & Discovery)</option>
            <option value="Classes 11–12">Classes 11–12 (UG Course & Entrance Strategy)</option>
            <option value="Graduate / Recent Graduate">Graduate / Recent Graduate (PG & Career)</option>
            <option value="Working Professional">Working Professional (Executive & Growth)</option>
          </select>
        </div>
      </div>

      {/* Row 3: Preferred Mode */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          Preferred Mode
        </label>
        <div className="flex gap-2.5">
          {(['Online', 'Phone', 'In-person'] as CounsellingMode[]).map((mode) => (
            <button
              type="button"
              key={mode}
              onClick={() => setFormData(prev => ({ ...prev, preferredMode: mode }))}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                formData.preferredMode === mode
                  ? 'bg-[#0B2A52] text-white border-[#0B2A52]'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Row 4: Preferred Date and Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Preferred Date (Optional)
          </label>
          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#0B2A52] focus:ring-1 focus:ring-[#0B2A52] outline-hidden transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Preferred Time Slot (Optional)
          </label>
          <select
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#0B2A52] focus:ring-1 focus:ring-[#0B2A52] outline-hidden transition-colors"
          >
            <option value="">Any Convenient Time</option>
            <option value="10:00 AM - 1:00 PM (Morning)">10:00 AM - 1:00 PM (Morning)</option>
            <option value="2:00 PM - 5:00 PM (Afternoon)">2:00 PM - 5:00 PM (Afternoon)</option>
            <option value="5:00 PM - 8:00 PM (Evening)">5:00 PM - 8:00 PM (Evening)</option>
            <option value="Weekend Slot">Weekend Slot</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          Brief Message or Student Background
        </label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Provide any details about subjects, current board, challenges, or goals..."
          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#0B2A52] focus:ring-1 focus:ring-[#0B2A52] outline-hidden transition-colors"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-6 bg-[#C99A2E] hover:bg-[#B88922] text-[#0B2A52] font-bold text-sm sm:text-base rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting Request...</span>
          </>
        ) : (
          <span>Request Counselling</span>
        )}
      </button>

      <p className="text-[11px] text-center text-slate-500">
        All counselling requests are processed by certified educational counsellors. No student login required.
      </p>
    </form>
  );
};
