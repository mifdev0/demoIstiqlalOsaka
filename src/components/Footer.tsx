'use client';

import React from 'react';
import { Heart, MapPin, PhoneCall } from 'lucide-react';
import { Language, translations } from '@/lib/i18n';

interface FooterProps {
  lang: Language;
  onOpenDonateModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenDonateModal }) => {
  const t = translations[lang];

  return (
    <footer className="bg-[#003820] text-[#faf8f5] pt-16 pb-12 border-t-4 border-[#d97706] relative overflow-hidden">
      {/* Background Architectural Overlay */}
      <div className="absolute inset-0 islamic-geo-bg opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Mosque Info & Official Logo Image */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/MIO - PUTIH.png"
                alt="Masjid Istiqlal Osaka Official Logo"
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="font-bold text-xl font-montserrat leading-none text-white">
                  Masjid Istiqlal Osaka
                </h3>
                <span className="text-xs text-[#d97706] font-semibold tracking-wider block mt-1">
                  大阪イスラミックセンター
                </span>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-md font-inter">
              {t.footer.description}
            </p>

            <div className="pt-2 space-y-2 text-xs text-white/70 font-inter">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
                <span>{t.footer.address}</span>
              </div>
              
              {/* Clickable Direct WhatsApp Link for Ust Herizal */}
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#d97706] shrink-0" />
                <span>
                  Kontak:{' '}
                  <a
                    href="https://wa.me/818048447883"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-semibold text-white underline hover:text-[#d97706] transition-colors"
                  >
                    Ust. Herizal Adhardhi (+81 80 4844 7883)
                  </a>
                </span>
              </div>
            </div>

            {/* Official Social Media Links Bar with Pure SVG Brand Logos */}
            <div className="pt-3 flex items-center gap-3">
              {/* Instagram Official Logo */}
              <a
                href="https://www.instagram.com/masjidistiqlalosaka_official/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Official Masjid Istiqlal Osaka"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#d97706] text-white text-xs font-semibold font-inter transition-all shadow-sm border border-white/15 group"
              >
                <svg className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </a>

              {/* Facebook Official Logo */}
              <a
                href="https://web.facebook.com/MasjidIstiqlalOsaka/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Official Masjid Istiqlal Osaka"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#d97706] text-white text-xs font-semibold font-inter transition-all shadow-sm border border-white/15 group"
              >
                <svg className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook</span>
              </a>

              {/* YouTube Official Logo */}
              <a
                href="https://www.youtube.com/@mioofficialmasjidistiqlalo8159"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel Official Masjid Istiqlal Osaka"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#d97706] text-white text-xs font-semibold font-inter transition-all shadow-sm border border-white/15 group"
              >
                <svg className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span>YouTube</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 text-xs font-inter">
            <h4 className="font-bold text-sm text-[#d97706] font-montserrat uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#home" className="hover:text-[#d97706]">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-[#d97706]">
                  {t.nav.schedule}
                </a>
              </li>
              <li>
                <a href="#donation" className="hover:text-[#d97706]">
                  {t.nav.donation}
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-[#d97706]">
                  {t.nav.news}
                </a>
              </li>
              <li>
                <a href="#transparency" className="hover:text-[#d97706]">
                  {t.nav.transparency}
                </a>
              </li>
            </ul>
          </div>

          {/* Call to Donate Arch Box */}
          <div className="md:col-span-4 space-y-4 bg-white/5 p-6 rounded-t-3xl rounded-b-xl border border-white/10">
            <h4 className="font-bold text-sm text-[#d97706] font-montserrat uppercase tracking-wider">
              Infaq &amp; Wakaf Berkelanjutan
            </h4>
            <p className="text-xs text-white/70 font-inter">
              Dukung sarana prasarana dan dakwah ramah lingkungan MIO di Kansai, Jepang.
            </p>
            <button
              onClick={onOpenDonateModal}
              className="w-full flex items-center justify-center gap-2 bg-[#d97706] hover:bg-[#c2410c] text-white font-bold text-xs py-3.5 rounded-t-2xl rounded-b-lg font-montserrat uppercase tracking-wider transition-all shadow-md"
            >
              <Heart className="w-4 h-4 fill-white/20" />
              <span>{t.nav.donateNow}</span>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-inter gap-4">
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};
