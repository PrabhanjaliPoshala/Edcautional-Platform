import React, { useState, useEffect } from 'react';
import { 
  fetchUnifiedLeads, 
  updateLeadStatus, 
  deleteLead 
} from '../../services/leadService';
import { UnifiedLead, LeadStatus } from '../../types';
import { isSupabaseConfigured } from '../../lib/supabase';
import { 
  ShieldCheck, 
  Search, 
  Trash2, 
  Check, 
  FileSpreadsheet, 
  RefreshCw, 
  Clock, 
  AlertTriangle, 
  Phone, 
  Mail, 
  Lock,
  Eye,
  Building,
  Database
} from 'lucide-react';

interface AdminDashboardProps {
  onClose: () => void;
}

const ADMIN_PASSCODE = 'careerverse2026';

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('careerverse_admin_auth') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');

  const [leads, setLeads] = useState<UnifiedLead[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'career_guidance' | 'admission_enquiry' | 'counselling_request'>('all');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Detail Modal & Action States
  const [selectedLead, setSelectedLead] = useState<UnifiedLead | null>(null);
  const [editNotes, setEditNotes] = useState('');
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [actionMessage, setActionMessage] = useState<string | null>(null);

  const loadLeads = async () => {
    setLoading(true);
    const data = await fetchUnifiedLeads();
    setLeads(data);
    setLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadLeads();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.toLowerCase() === ADMIN_PASSCODE) {
      setIsAuthenticated(true);
      localStorage.setItem('careerverse_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Invalid admin security key. Use: careerverse2026');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('careerverse_admin_auth');
  };

  const handleStatusChange = async (lead: UnifiedLead, newStatus: LeadStatus) => {
    const success = await updateLeadStatus(lead.lead_type, lead.id, newStatus);
    if (success) {
      setLeads(prev => prev.map(item => item.id === lead.id ? { ...item, status: newStatus } : item));
      if (selectedLead && selectedLead.id === lead.id) {
        setSelectedLead({ ...selectedLead, status: newStatus });
      }
      showFlash('Status updated successfully');
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedLead) return;
    const success = await updateLeadStatus(selectedLead.lead_type, selectedLead.id, selectedLead.status, editNotes);
    if (success) {
      setLeads(prev => prev.map(item => item.id === selectedLead.id ? { ...item, internal_notes: editNotes } : item));
      setSelectedLead({ ...selectedLead, internal_notes: editNotes });
      showFlash('Internal notes saved');
    }
  };

  const handleDelete = async (lead: UnifiedLead) => {
    const success = await deleteLead(lead.lead_type, lead.id);
    if (success) {
      setLeads(prev => prev.filter(item => item.id !== lead.id));
      if (selectedLead && selectedLead.id === lead.id) {
        setSelectedLead(null);
      }
      setDeleteConfirmId(null);
      showFlash('Record removed');
    }
  };

  const showFlash = (msg: string) => {
    setActionMessage(msg);
    setTimeout(() => setActionMessage(null), 3000);
  };

  // Metrics
  const totalCount = leads.length;
  const careerGuidanceCount = leads.filter(l => l.lead_type === 'career_guidance').length;
  const admissionCount = leads.filter(l => l.lead_type === 'admission_enquiry').length;
  const counsellingCount = leads.filter(l => l.lead_type === 'counselling_request').length;
  const newLeadsCount = leads.filter(l => l.status === 'New').length;
  const followUpCount = leads.filter(l => l.status === 'Follow-up' || l.status === 'Contacted').length;
  const completedCount = leads.filter(l => l.status === 'Converted' || l.status === 'Closed' || l.status === 'Counselling Scheduled').length;

  // Filtered Leads
  const filteredLeads = leads.filter(lead => {
    if (activeTab !== 'all' && lead.lead_type !== activeTab) return false;
    if (statusFilter !== 'All' && lead.status !== statusFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = lead.full_name.toLowerCase().includes(q);
      const matchPhone = lead.mobile_number.toLowerCase().includes(q);
      const matchEmail = (lead.email || '').toLowerCase().includes(q);
      return matchName || matchPhone || matchEmail;
    }
    return true;
  });

  // Export to CSV
  const handleExportCSV = () => {
    if (leads.length === 0) return;
    const headers = ['ID', 'Date', 'Type', 'Full Name', 'Mobile', 'Email', 'Status', 'Qualification/Category', 'Notes'];
    const rows = leads.map(l => {
      const qual = 'current_qualification' in l 
        ? l.current_qualification 
        : 'counselling_category' in l 
          ? l.counselling_category 
          : '';
      return [
        l.id,
        new Date(l.created_at).toLocaleString(),
        l.lead_type,
        `"${l.full_name}"`,
        `"${l.mobile_number}"`,
        `"${l.email || ''}"`,
        l.status,
        `"${qual}"`,
        `"${(l.internal_notes || '').replace(/"/g, '""')}"`
      ];
    });

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `careerverse_leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // If not authenticated, show passcode screen
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <div className="w-full max-w-md bg-white rounded-xl shadow-2xl border border-slate-200 p-8 text-center">
          <div className="w-14 h-14 bg-[#0B2A52] rounded-xl flex items-center justify-center mx-auto mb-4 text-[#C99A2E] shadow-sm">
            <Lock className="w-7 h-7" />
          </div>
          <h2 className="text-xl font-bold text-[#0B2A52] font-display">
            CareerVerse India Staff Portal
          </h2>
          <p className="mt-1.5 text-xs text-slate-500">
            Internal admissions and lead management. Restricted to authorized staff.
          </p>

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <div>
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter Staff Access Key"
                className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#0B2A52] outline-hidden text-center tracking-widest font-mono"
              />
            </div>

            {authError && (
              <p className="text-xs text-rose-600 font-medium">{authError}</p>
            )}

            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-[#0B2A52] hover:bg-[#123E73] text-white text-sm font-bold rounded-lg transition-colors cursor-pointer"
            >
              Authenticate & Access Leads
            </button>

            <div className="pt-2">
              <span className="text-[11px] text-slate-600">
                Default team key: <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded font-mono font-bold">careerverse2026</code>
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-2 text-xs text-slate-500 hover:text-slate-800 transition-colors"
            >
              Return to Website
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-[#F7F9FC] flex flex-col overflow-hidden">
      {/* Top Navbar */}
      <div className="bg-[#0B2A52] text-white px-4 sm:px-6 py-3.5 flex items-center justify-between border-b border-slate-700 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#C99A2E] text-[#0B2A52] flex items-center justify-center font-black text-sm">
            CV
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-bold font-display text-white">CareerVerse Lead Operations</h1>
              <span className="text-[10px] bg-white/10 text-emerald-300 px-2 py-0.5 rounded-full flex items-center gap-1 font-mono">
                <ShieldCheck className="w-3 h-3" /> Secure Admin
              </span>
            </div>
            <p className="text-[11px] text-slate-300">
              {isSupabaseConfigured() ? 'Connected to live Supabase cloud database' : 'Operating in secure local persistence mode'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {actionMessage && (
            <span className="hidden sm:inline-block text-xs bg-emerald-500 text-white px-2.5 py-1 rounded-md animate-fade-in">
              {actionMessage}
            </span>
          )}
          <button
            type="button"
            onClick={loadLeads}
            disabled={loading}
            className="p-2 text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            title="Refresh Leads"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <button
            type="button"
            onClick={handleExportCSV}
            className="hidden sm:flex items-center gap-1.5 py-1.5 px-3 bg-[#C99A2E] hover:bg-[#B88922] text-[#0B2A52] text-xs font-bold rounded-lg transition-colors cursor-pointer"
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="py-1.5 px-3 text-xs text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            Lock
          </button>
          <button
            type="button"
            onClick={onClose}
            className="py-1.5 px-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Back to Site
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-6">
        
        {/* Supabase Status Pill */}
        {!isSupabaseConfigured() && (
          <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-between text-xs text-amber-800">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                <strong>Supabase Database Schema Ready:</strong> Lead form captures are running with instant browser storage. To synchronize with your Supabase cloud project, copy <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">/supabase/schema.sql</code> to your SQL editor and set keys in <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">.env</code>.
              </span>
            </div>
          </div>
        )}

        {/* 7 Key Overview Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Total Leads</span>
            <div className="mt-1 text-2xl font-black text-[#0B2A52] font-display">{totalCount}</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Career Guidance</span>
            <div className="mt-1 text-2xl font-black text-[#0B2A52] font-display">{careerGuidanceCount}</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Admissions</span>
            <div className="mt-1 text-2xl font-black text-[#0B2A52] font-display">{admissionCount}</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Counselling</span>
            <div className="mt-1 text-2xl font-black text-[#0B2A52] font-display">{counsellingCount}</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs border-l-4 border-l-amber-500">
            <span className="text-[11px] font-semibold text-amber-700 uppercase tracking-wider">New Leads</span>
            <div className="mt-1 text-2xl font-black text-amber-600 font-display">{newLeadsCount}</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs border-l-4 border-l-blue-500">
            <span className="text-[11px] font-semibold text-blue-700 uppercase tracking-wider">Pending Follow</span>
            <div className="mt-1 text-2xl font-black text-blue-600 font-display">{followUpCount}</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs border-l-4 border-l-emerald-500 col-span-2 sm:col-span-1">
            <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">Completed</span>
            <div className="mt-1 text-2xl font-black text-emerald-600 font-display">{completedCount}</div>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg w-full md:w-auto overflow-x-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'all' ? 'bg-white text-[#0B2A52] shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Leads ({leads.length})
            </button>
            <button
              onClick={() => setActiveTab('career_guidance')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'career_guidance' ? 'bg-white text-[#0B2A52] shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Career Guidance ({careerGuidanceCount})
            </button>
            <button
              onClick={() => setActiveTab('admission_enquiry')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'admission_enquiry' ? 'bg-white text-[#0B2A52] shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Admissions ({admissionCount})
            </button>
            <button
              onClick={() => setActiveTab('counselling_request')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'counselling_request' ? 'bg-white text-[#0B2A52] shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Counselling ({counsellingCount})
            </button>
          </div>

          {/* Search & Status Filter */}
          <div className="flex items-center gap-2.5 w-full md:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search name, phone, email..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#0B2A52] outline-hidden"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="py-1.5 px-3 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#0B2A52] outline-hidden shrink-0"
            >
              <option value="All">All Statuses</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Follow-up">Follow-up</option>
              <option value="Counselling Scheduled">Counselling Scheduled</option>
              <option value="Converted">Converted</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-semibold uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Lead Source</th>
                  <th className="py-3 px-4">Candidate Details</th>
                  <th className="py-3 px-4">Qualification / Target</th>
                  <th className="py-3 px-4">Date Received</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-500">
                      No leads match the selected criteria.
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => {
                    const isNew = lead.status === 'New';
                    const qualOrTarget = 'current_qualification' in lead 
                      ? lead.current_qualification 
                      : 'counselling_category' in lead 
                        ? lead.counselling_category 
                        : '';

                    const leadLabel = lead.lead_type === 'career_guidance' 
                      ? 'Career Guidance' 
                      : lead.lead_type === 'admission_enquiry'
                        ? 'Admission'
                        : 'Counselling Slot';

                    return (
                      <tr 
                        key={lead.id} 
                        className={`hover:bg-slate-50/80 transition-colors ${isNew ? 'bg-amber-50/20' : ''}`}
                      >
                        {/* Source */}
                        <td className="py-3.5 px-4">
                          <span className={`font-semibold ${
                            lead.lead_type === 'career_guidance'
                              ? 'text-blue-700'
                              : lead.lead_type === 'admission_enquiry'
                                ? 'text-indigo-700'
                                : 'text-emerald-700'
                          }`}>
                            {leadLabel}
                          </span>
                          <div className="text-[10px] text-slate-400 font-mono">
                            {lead.id.substring(0, 12)}...
                          </div>
                        </td>

                        {/* Candidate */}
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-slate-900 text-sm">{lead.full_name}</div>
                          <div className="flex items-center gap-3 text-slate-500 mt-0.5">
                            <span className="flex items-center gap-1 font-mono">
                              <Phone className="w-3 h-3 text-[#C99A2E]" />
                              {lead.mobile_number}
                            </span>
                            {lead.email && (
                              <span className="flex items-center gap-1">
                                <Mail className="w-3 h-3 text-slate-400" />
                                <span className="truncate max-w-[120px]">{lead.email}</span>
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Target */}
                        <td className="py-3.5 px-4 text-slate-700">
                          <div className="font-medium line-clamp-1">{qualOrTarget}</div>
                          {'preferred_program' in lead && (
                            <div className="text-[11px] text-slate-500">Program: {lead.preferred_program}</div>
                          )}
                          {'preferred_course' in lead && lead.preferred_course && (
                            <div className="text-[11px] text-slate-500">Course: {lead.preferred_course}</div>
                          )}
                        </td>

                        {/* Date */}
                        <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-400" />
                            <span>{new Date(lead.created_at).toLocaleDateString()}</span>
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {new Date(lead.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </td>

                        {/* Status Select */}
                        <td className="py-3.5 px-4">
                          <select
                            value={lead.status}
                            onChange={(e) => handleStatusChange(lead, e.target.value as LeadStatus)}
                            className={`py-1 px-2.5 text-xs font-semibold rounded-md border outline-hidden transition-colors cursor-pointer ${
                              lead.status === 'New' 
                                ? 'bg-amber-100 text-amber-900 border-amber-300'
                                : lead.status === 'Contacted'
                                  ? 'bg-blue-100 text-blue-900 border-blue-300'
                                  : lead.status === 'Follow-up'
                                    ? 'bg-purple-100 text-purple-900 border-purple-300'
                                    : lead.status === 'Counselling Scheduled'
                                      ? 'bg-cyan-100 text-cyan-900 border-cyan-300'
                                      : lead.status === 'Converted'
                                        ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                                        : 'bg-slate-100 text-slate-700 border-slate-300'
                            }`}
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Follow-up">Follow-up</option>
                            <option value="Counselling Scheduled">Counselling Scheduled</option>
                            <option value="Converted">Converted</option>
                            <option value="Closed">Closed</option>
                          </select>
                        </td>

                        {/* Actions */}
                        <td className="py-3.5 px-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedLead(lead);
                                setEditNotes(lead.internal_notes || '');
                              }}
                              className="p-1.5 text-slate-600 hover:text-[#0B2A52] hover:bg-slate-100 rounded-md transition-colors"
                              title="View full record & notes"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => setDeleteConfirmId(lead.id)}
                              className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors"
                              title="Delete record"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Lead Details Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
            <div className="bg-[#0B2A52] text-white p-6 flex items-start justify-between">
              <div>
                <div className="text-xs text-[#E5C66B] font-mono uppercase tracking-wider">
                  {selectedLead.lead_type.replace('_', ' ').toUpperCase()} LEAD
                </div>
                <h2 className="text-xl font-bold font-display text-white mt-1">
                  {selectedLead.full_name}
                </h2>
                <div className="flex items-center gap-4 text-xs text-slate-300 mt-2">
                  <span className="flex items-center gap-1 font-mono">
                    <Phone className="w-3.5 h-3.5 text-[#C99A2E]" />
                    {selectedLead.mobile_number}
                  </span>
                  {selectedLead.email && (
                    <span className="flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      {selectedLead.email}
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="text-slate-300 hover:text-white p-1 rounded-md"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-xs text-slate-700">
              <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-lg">
                <div>
                  <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px]">Received</span>
                  <div className="font-medium text-slate-900 mt-0.5">{new Date(selectedLead.created_at).toLocaleString()}</div>
                </div>
                <div>
                  <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px]">Current Status</span>
                  <div className="font-bold text-[#0B2A52] mt-0.5">{selectedLead.status}</div>
                </div>
              </div>

              {/* Specific Fields */}
              <div className="space-y-2">
                {'current_qualification' in selectedLead && (
                  <div>
                    <span className="font-bold text-slate-900">Current Qualification: </span>
                    <span>{selectedLead.current_qualification}</span>
                  </div>
                )}
                {'school_college' in selectedLead && selectedLead.school_college && (
                  <div>
                    <span className="font-bold text-slate-900">School/College: </span>
                    <span>{selectedLead.school_college}</span>
                  </div>
                )}
                {'city' in selectedLead && selectedLead.city && (
                  <div>
                    <span className="font-bold text-slate-900">Location: </span>
                    <span>{selectedLead.city}, {selectedLead.state || ''}</span>
                  </div>
                )}
                {'preferred_program' in selectedLead && (
                  <div>
                    <span className="font-bold text-slate-900">Preferred Program: </span>
                    <span>{selectedLead.preferred_program}</span>
                  </div>
                )}
                {'preferred_specialization' in selectedLead && selectedLead.preferred_specialization && (
                  <div>
                    <span className="font-bold text-slate-900">Specialization: </span>
                    <span>{selectedLead.preferred_specialization}</span>
                  </div>
                )}
                {'counselling_category' in selectedLead && (
                  <div>
                    <span className="font-bold text-slate-900">Counselling Category: </span>
                    <span>{selectedLead.counselling_category}</span>
                  </div>
                )}
                {'preferred_counselling_mode' in selectedLead && (
                  <div>
                    <span className="font-bold text-slate-900">Mode: </span>
                    <span>{selectedLead.preferred_counselling_mode}</span>
                  </div>
                )}
                {'preferred_mode' in selectedLead && (
                  <div>
                    <span className="font-bold text-slate-900">Mode: </span>
                    <span>{selectedLead.preferred_mode}</span>
                  </div>
                )}
                {'preferred_date' in selectedLead && selectedLead.preferred_date && (
                  <div>
                    <span className="font-bold text-slate-900">Preferred Date & Time: </span>
                    <span>{selectedLead.preferred_date} ({selectedLead.preferred_time || 'Any'})</span>
                  </div>
                )}
                {'message' in selectedLead && selectedLead.message && (
                  <div className="bg-slate-50 p-3 rounded-md border border-slate-200 mt-2">
                    <span className="font-bold text-slate-900 block mb-1">Student / Candidate Note:</span>
                    <p className="whitespace-pre-line text-slate-600">{selectedLead.message}</p>
                  </div>
                )}
              </div>

              {/* Internal Staff Notes */}
              <div className="pt-4 border-t border-slate-200">
                <label className="block font-bold text-slate-900 mb-1.5">
                  Internal Counsellor Notes (Follow-up log, student interest, call outcome)
                </label>
                <textarea
                  rows={3}
                  value={editNotes}
                  onChange={(e) => setEditNotes(e.target.value)}
                  placeholder="Record counsellor interaction, next follow-up date, or institutional recommendation..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:bg-white focus:border-[#0B2A52] outline-hidden"
                />
                <button
                  type="button"
                  onClick={handleSaveNotes}
                  className="mt-2 py-1.5 px-4 bg-[#0B2A52] hover:bg-[#123E73] text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
                >
                  Save Internal Notes
                </button>
              </div>
            </div>

            <div className="bg-slate-100 p-4 border-t border-slate-200 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <label className="text-xs font-medium text-slate-600">Update Status:</label>
                <select
                  value={selectedLead.status}
                  onChange={(e) => handleStatusChange(selectedLead, e.target.value as LeadStatus)}
                  className="text-xs py-1 px-2.5 bg-white border border-slate-300 rounded-md font-medium"
                >
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Follow-up">Follow-up</option>
                  <option value="Counselling Scheduled">Counselling Scheduled</option>
                  <option value="Converted">Converted</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
              <button
                type="button"
                onClick={() => setSelectedLead(null)}
                className="py-1.5 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold rounded-md transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-70 flex items-center justify-center p-4 bg-slate-950/80">
          <div className="w-full max-w-sm bg-white rounded-xl shadow-2xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-3">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Confirm Deletion</h3>
            <p className="mt-1.5 text-xs text-slate-600">
              Are you sure you want to remove this lead record? This action cannot be undone.
            </p>
            <div className="mt-5 flex gap-2">
              <button
                type="button"
                onClick={() => setDeleteConfirmId(null)}
                className="flex-1 py-2 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  const leadToDelete = leads.find(l => l.id === deleteConfirmId);
                  if (leadToDelete) handleDelete(leadToDelete);
                }}
                className="flex-1 py-2 text-xs font-semibold bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition-colors cursor-pointer"
              >
                Delete Record
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
