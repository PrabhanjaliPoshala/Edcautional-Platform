import React, { useState } from 'react';
import { submitCareerGuidance } from '../../services/leadService';
import { CounsellingMode } from '../../types';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface CareerGuidanceFormProps {
  initialQualification?: string;
  initialStage?: string;
  initialField?: string;
  onSuccessClose?: () => void;
}

export const CareerGuidanceForm: React.FC<CareerGuidanceFormProps> = ({
  initialQualification = '',
  initialStage = '',
  initialField = '',
  onSuccessClose
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    currentQualification: initialStage || initialQualification,
    schoolCollege: '',
    city: '',
    state: '',
    interestedField: initialField,
    preferredCourse: '',
    careerGoal: '',
    preferredCounsellingMode: 'Online' as CounsellingMode,
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

    // Validation
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.mobileNumber.trim() || formData.mobileNumber.trim().length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!formData.currentQualification.trim()) {
      setErrorMsg('Please specify your current class or qualification.');
      return;
    }

    setLoading(true);
    const res = await submitCareerGuidance({
      full_name: formData.fullName.trim(),
      mobile_number: formData.mobileNumber.trim(),
      email: formData.email.trim() || undefined,
      current_qualification: formData.currentQualification.trim(),
      school_college: formData.schoolCollege.trim() || undefined,
      city: formData.city.trim() || undefined,
      state: formData.state.trim() || undefined,
      interested_field: formData.interestedField || undefined,
      preferred_course: formData.preferredCourse.trim() || undefined,
      career_goal: formData.careerGoal.trim() || undefined,
      preferred_counselling_mode: formData.preferredCounsellingMode,
      message: formData.message.trim() || undefined,
    });
    setLoading(false);

    if (res.success) {
      setIsSuccess(true);
      setFormData({
        fullName: '',
        mobileNumber: '',
        email: '',
        currentQualification: '',
        schoolCollege: '',
        city: '',
        state: '',
        interestedField: '',
        preferredCourse: '',
        careerGoal: '',
        preferredCounsellingMode: 'Online',
        message: ''
      });
    } else {
      setErrorMsg(res.error || 'Failed to submit request. Please try again.');
    }
  };

  if (isSuccess) {
    return (
      <div className="py-8 px-4 text-center">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
          <CheckCircle2 className="w-9 h-9 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-[#0B2A52] font-display">
          Career Guidance Request Received!
        </h3>
        <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to CareerVerse India. Our certified career counselling team has received your details and will contact you via phone or WhatsApp shortly to schedule your personalized session.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              if (onSuccessClose) onSuccessClose();
            }}
            className="px-6 py-2.5 bg-[#0B2A52] hover:bg-[#123E73] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Close
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

      {/* Row 1: Name and Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Aarav Sharma"
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#0B2A52] focus:ring-1 focus:ring-[#0B2A52] outline-hidden transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Mobile Number <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            name="mobileNumber"
            required
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="+91 63034 64800"
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#0B2A52] focus:ring-1 focus:ring-[#0B2A52] outline-hidden transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Email and Qualification */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="aarav@example.com"
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#0B2A52] focus:ring-1 focus:ring-[#0B2A52] outline-hidden transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Current Class / Qualification <span className="text-rose-500">*</span>
          </label>
          <select
            name="currentQualification"
            required
            value={formData.currentQualification}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#0B2A52] focus:ring-1 focus:ring-[#0B2A52] outline-hidden transition-colors"
          >
            <option value="">Select qualification</option>
            <option value="Class 5–7 (Middle School)">Class 5–7 (Middle School)</option>
            <option value="Class 8–10 (Secondary School)">Class 8–10 (Secondary School)</option>
            <option value="Class 11 (Science / Commerce / Arts)">Class 11 (Science / Commerce / Arts)</option>
            <option value="Class 12 (Board / Entrance Aspirant)">Class 12 (Board / Entrance Aspirant)</option>
            <option value="Undergraduate Student">Undergraduate Student</option>
            <option value="Graduate / Recent Graduate">Graduate / Recent Graduate</option>
            <option value="Working Professional">Working Professional</option>
          </select>
        </div>
      </div>

      {/* Row 3: School/College and City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            School / College / Organization
          </label>
          <input
            type="text"
            name="schoolCollege"
            value={formData.schoolCollege}
            onChange={handleChange}
            placeholder="e.g. DPS R.K. Puram"
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#0B2A52] focus:ring-1 focus:ring-[#0B2A52] outline-hidden transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            City & State
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#0B2A52] focus:ring-1 focus:ring-[#0B2A52] outline-hidden transition-colors"
            />
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#0B2A52] focus:ring-1 focus:ring-[#0B2A52] outline-hidden transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Row 4: Interested Field and Preferred Course */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Interested Field
          </label>
          <select
            name="interestedField"
            value={formData.interestedField}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#0B2A52] focus:ring-1 focus:ring-[#0B2A52] outline-hidden transition-colors"
          >
            <option value="">Select Field (Optional)</option>
            <option value="Medical & Allied Sciences">Medical & Allied Sciences</option>
            <option value="Engineering & Technology">Engineering & Technology</option>
            <option value="Science & IT">Science & IT</option>
            <option value="Commerce & Management">Commerce & Management</option>
            <option value="Arts & Humanities">Arts & Humanities</option>
            <option value="Law">Law & Legal Studies</option>
            <option value="Not Sure / Need Assessment">Not Sure / Need Assessment</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Preferred Course or Degree
          </label>
          <input
            type="text"
            name="preferredCourse"
            value={formData.preferredCourse}
            onChange={handleChange}
            placeholder="e.g. B.Tech, BBA, BPT, etc."
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#0B2A52] focus:ring-1 focus:ring-[#0B2A52] outline-hidden transition-colors"
          />
        </div>
      </div>

      {/* Row 5: Career Goal and Preferred Mode */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Career Goal / Target
          </label>
          <input
            type="text"
            name="careerGoal"
            value={formData.careerGoal}
            onChange={handleChange}
            placeholder="e.g. Software Architect, Doctor, Corporate Lawyer"
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#0B2A52] focus:ring-1 focus:ring-[#0B2A52] outline-hidden transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Preferred Counselling Mode
          </label>
          <div className="flex gap-2">
            {(['Online', 'Phone', 'In-person'] as CounsellingMode[]).map((mode) => (
              <button
                type="button"
                key={mode}
                onClick={() => setFormData(prev => ({ ...prev, preferredCounsellingMode: mode }))}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                  formData.preferredCounsellingMode === mode
                    ? 'bg-[#0B2A52] text-white border-[#0B2A52]'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          Your Specific Query or Doubts
        </label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us what guidance you need (stream selection, college shortlisting, exams, etc.)..."
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
          <span>Submit Request</span>
        )}
      </button>

      <p className="text-[11px] text-center text-slate-500">
        Your information is securely handled by the CareerVerse India counselling division. No student account required.
      </p>
    </form>
  );
};
