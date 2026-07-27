'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Menu, X } from 'lucide-react';
import { Language, translations } from '@/lib/i18n';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenDonateModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onLanguageChange, onOpenDonateModal }) => {
  const t = translations[lang];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'id', label: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ja', label: '日本語 (Japanese)', flag: '🇯🇵' },
    { code: 'ar', label: 'العربية (Arabic)', flag: '🇸🇦' },
  ];

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Intersection Observer for Active Section Highlighter
  useEffect(() => {
    const sectionIds = ['home', 'schedule', 'news', 'donation', 'transparency'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'schedule', label: t.nav.schedule },
    { id: 'news', label: t.nav.news },
    { id: 'donation', label: t.nav.donation },
    { id: 'transparency', label: t.nav.transparency },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50">
      {/* Floating Curved Pill Container */}
      <div className="bg-[#faf8f5]/90 backdrop-blur-xl border border-[#004d2c]/20 shadow-xl rounded-full px-6 py-4 flex items-center justify-between transition-all">
        {/* Brand Logo & Name */}
        <a href="#home" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-t-full rounded-b-xs bg-[#004d2c] flex items-center justify-center text-[#faf8f5] font-bold text-sm tracking-tight shadow-md group-hover:bg-[#003820] transition-colors">
            MIO
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base text-[#004d2c] font-montserrat tracking-tight group-hover:text-[#d97706] transition-colors leading-none">
              Masjid Istiqlal
            </span>
            <span className="text-[10px] text-[#d97706] font-semibold tracking-widest uppercase mt-0.5">
              Osaka • 大阪
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-[#111827]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`py-2 transition-all duration-200 relative ${
                  isActive
                    ? 'text-[#004d2c] font-extrabold'
                    : 'text-[#111827]/70 hover:text-[#004d2c]'
                }`}
              >
                {item.label}
                {/* Active Section Underline Indicator */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#004d2c] rounded-full animate-in fade-in duration-200" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Floating Language Dropdown & Generous CTA Button */}
        <div className="hidden sm:flex items-center gap-3.5 shrink-0">
          {/* Language Selector Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-[#faf8f5] rounded-full border border-[#004d2c]/20 text-xs font-semibold text-[#111827] transition-all shadow-xs"
            >
              <Globe className="w-4 h-4 text-[#004d2c]" />
              <span className="flex items-center gap-1 font-mono">
                <span>{currentLang.flag}</span>
                <span>{currentLang.code.toUpperCase()}</span>
              </span>
              <ChevronDown className={`w-3 h-3 text-[#111827]/70 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl border border-[#004d2c]/20 shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="px-3 py-1 text-[10px] font-bold text-[#111827]/50 uppercase tracking-wider">
                  Select Language / Pilih Bahasa
                </div>
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      onLanguageChange(l.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-left transition-colors hover:bg-[#faf8f5] ${
                      lang === l.code ? 'text-[#004d2c] bg-[#004d2c]/5 font-bold' : 'text-[#111827]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </span>
                    {lang === l.code && <span className="w-1.5 h-1.5 rounded-full bg-[#004d2c]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Signature Arch CTA Button */}
          <button
            onClick={onOpenDonateModal}
            className="bg-[#d97706] hover:bg-[#c2410c] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            {t.nav.donateNow}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#111827]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Floating Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 border-2 border-[#004d2c]/20 bg-[#faf8f5] rounded-3xl p-5 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-2 font-semibold text-xs uppercase tracking-wider text-[#111827]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2.5 rounded-xl transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-[#004d2c] text-white font-bold'
                      : 'hover:bg-[#004d2c]/10 text-[#111827]'
                  }`}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-[#004d2c]/15 flex flex-col gap-3">
            <div className="bg-white p-2.5 rounded-2xl border border-[#004d2c]/20 space-y-2">
              <span className="text-[11px] font-semibold text-[#111827]/70 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#004d2c]" /> Select Language
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      onLanguageChange(l.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-1.5 p-1.5 rounded-xl text-xs font-bold transition-all ${
                      lang === l.code ? 'bg-[#004d2c] text-white shadow-xs' : 'bg-[#faf8f5] text-[#111827]'
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.code.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonateModal();
              }}
              className="w-full bg-[#d97706] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md"
            >
              {t.nav.donateNow}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
