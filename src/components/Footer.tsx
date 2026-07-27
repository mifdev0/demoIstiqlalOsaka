'use client';

import React from 'react';
import { Heart, MapPin, PhoneCall, Share2, Video, Globe } from 'lucide-react';
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
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#d97706] shrink-0" />
                <span className="font-mono">Kontak: Ust. Herizal Adhardhi (+81 80 4844 7883)</span>
              </div>
            </div>

            {/* Official Social Media Links Bar */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href="https://www.instagram.com/masjidistiqlalosaka_official/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Official Masjid Istiqlal Osaka"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#d97706] text-white text-xs font-semibold font-inter transition-all shadow-sm border border-white/10"
              >
                <Share2 className="w-3.5 h-3.5 text-[#d97706] group-hover:text-white" />
                <span>Instagram</span>
              </a>

              <a
                href="https://web.facebook.com/MasjidIstiqlalOsaka/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Official Masjid Istiqlal Osaka"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#d97706] text-white text-xs font-semibold font-inter transition-all shadow-sm border border-white/10"
              >
                <Globe className="w-3.5 h-3.5 text-[#d97706] group-hover:text-white" />
                <span>Facebook</span>
              </a>

              <a
                href="https://www.youtube.com/@mioofficialmasjidistiqlalo8159"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel Official Masjid Istiqlal Osaka"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#d97706] text-white text-xs font-semibold font-inter transition-all shadow-sm border border-white/10"
              >
                <Video className="w-3.5 h-3.5 text-[#d97706] group-hover:text-white" />
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
