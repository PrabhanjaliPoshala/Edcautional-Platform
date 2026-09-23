import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, CalendarCheck, GraduationCap, Shield } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenCounsellingModal: () => void;
  onOpenAdmissionModal: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenCounsellingModal,
  onOpenAdmissionModal,
  onOpenAdmin
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Career Pathways', path: '/career-counselling' },
    { label: 'Admissions', path: '/admissions' },
    { label: 'Programs & Universities', path: '/programs' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'About CareerVerse', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleLinkClick('/')}
            className="cursor-pointer py-1"
          >
            <BrandLogo size="md" variant="dark" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path || (link.path === '/programs' && (currentPath.startsWith('/programs') || currentPath.startsWith('/universities')));
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-xs font-semibold tracking-wide transition-colors relative py-1 cursor-pointer ${
                    isActive 
                      ? 'text-[#0B2A52] font-bold' 
                      : 'text-slate-600 hover:text-[#0B2A52]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C99A2E] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenAdmissionModal}
              className="py-2.5 px-4 text-xs font-bold text-[#0B2A52] bg-slate-100 hover:bg-slate-200/80 border border-slate-300 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-[#0B2A52]" />
              <span>Get Admission Guidance</span>
            </button>

            <button
              type="button"
              onClick={onOpenCounsellingModal}
              className="py-2.5 px-4 text-xs font-bold text-[#0B2A52] bg-[#C99A2E] hover:bg-[#B88922] rounded-lg shadow-xs hover:shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4 text-[#0B2A52]" />
              <span>Book Counselling</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              type="button"
              onClick={onOpenCounsellingModal}
              className="py-1.5 px-3 text-xs font-bold text-[#0B2A52] bg-[#C99A2E] rounded-lg shadow-xs cursor-pointer"
            >
              Book
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0B2A52] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path || (link.path === '/programs' && (currentPath.startsWith('/programs') || currentPath.startsWith('/universities')));
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-left px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                    isActive 
                      ? 'bg-slate-100 text-[#0B2A52] font-bold border-l-4 border-[#C99A2E]' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmissionModal();
              }}
              className="w-full py-3 px-4 text-sm font-bold text-[#0B2A52] bg-slate-100 border border-slate-300 rounded-lg flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Get Admission Guidance</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCounsellingModal();
              }}
              className="w-full py-3 px-4 text-sm font-bold text-[#0B2A52] bg-[#C99A2E] hover:bg-[#B88922] rounded-lg shadow-sm flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Career Counselling</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full py-2 px-3 text-xs text-slate-500 hover:text-slate-800 flex items-center justify-center gap-1.5"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>CareerVerse Staff Portal</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
