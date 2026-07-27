'use client';

import React from 'react';
import { Language, translations } from '@/lib/i18n';

interface HeroProps {
  lang: Language;
  onOpenDonateModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenDonateModal }) => {
  const t = translations[lang];

  return (
    <section id="home" className="relative w-full min-h-[85vh] flex flex-col justify-center pt-24 pb-12 lg:py-16 overflow-hidden bg-[#003820]">
      {/* Full-bleed Real Photo Background (Ultra-optimized WebP format) */}
      <div className="absolute inset-0 z-0">
        <div
          className="bg-cover bg-center w-full h-full opacity-85 sm:opacity-65"
          style={{
            backgroundImage: `url('/masjid-istiqlal-osaka-hero-new.webp')`,
          }}
        />
        {/* Soft Emerald Gradient Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#003820]/85 via-[#003820]/65 to-[#003820]/40" />
        <div className="absolute inset-0 japanese-emerald-crest pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Content */}
        <div className="lg:col-span-8 flex flex-col items-start gap-4 text-left">
          <h1 className="font-montserrat text-2xl sm:text-4xl lg:text-5xl font-bold text-[#faf8f5] leading-[1.2] tracking-tight drop-shadow-lg">
            Masjid Istiqlal <span className="text-[#d97706]">Osaka</span>
          </h1>

          <p className="font-inter text-sm sm:text-base text-[#faf8f5]/95 max-w-xl leading-relaxed drop-shadow-md">
            {t.hero.subtitle}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            {/* Primary CTA */}
            <button
              onClick={onOpenDonateModal}
              className="w-full sm:w-auto justify-center bg-[#d97706] hover:bg-[#c2410c] text-white px-6 py-3 rounded-t-2xl rounded-b-md font-montserrat text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl flex items-center hover:-translate-y-0.5 active:translate-y-0"
            >
              {t.nav.donateNow}
            </button>

            <a
              href="#news"
              className="w-full sm:w-auto justify-center bg-white/20 backdrop-blur-md text-[#faf8f5] border border-white/40 px-6 py-3 rounded-t-2xl rounded-b-md font-montserrat text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#004d2c] transition-all duration-300 flex items-center hover:-translate-y-0.5 active:translate-y-0 shadow-md"
            >
              {t.hero.ctaNews}
            </a>
          </div>
        </div>

        {/* Right Architectural Arch Frame Feature (WebP Optimized) */}
        <div className="hidden lg:flex lg:col-span-4 justify-end items-center">
          <div className="relative w-64 h-80 rounded-t-[120px] rounded-b-2xl border-2 border-[#d97706]/40 overflow-hidden shadow-xl">
            <img
              src="/masjid-istiqlal-osaka-hero-new.webp"
              alt="Masjid Istiqlal Osaka Mihrab"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003820] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
              <span className="font-montserrat font-bold text-xs">
                Masjid Istiqlal Osaka
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
