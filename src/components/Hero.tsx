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
    <section id="home" className="relative w-full min-h-[92vh] flex flex-col justify-center pt-28 pb-16 lg:py-24 overflow-hidden bg-[#003820]">
      {/* Full-bleed Real Photo Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="bg-cover bg-center w-full h-full transform scale-105 transition-transform duration-1000 opacity-40"
          style={{
            backgroundImage: `url('/masjid-istiqlal-osaka-hero-new.png')`,
          }}
        />
        {/* Mobile Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#003820] via-[#003820]/90 to-[#003820]/60" />
        <div className="absolute inset-0 islamic-geo-bg" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Content */}
        <div className="lg:col-span-8 flex flex-col items-start gap-5 sm:gap-6 text-left">
          <span className="text-[#d97706] font-semibold text-[11px] sm:text-xs tracking-[0.25em] uppercase block font-inter">
            Assalamu&apos;alaikum • 大阪イスラミックセンター
          </span>

          <h1 className="font-montserrat text-3xl sm:text-5xl lg:text-7xl font-bold text-[#faf8f5] leading-[1.15] tracking-tight">
            Masjid Istiqlal <span className="text-[#d97706]">Osaka</span>
          </h1>

          <p className="font-inter text-base sm:text-xl text-[#faf8f5]/85 max-w-2xl leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            {/* Signature Arch Shaped Primary CTA */}
            <button
              onClick={onOpenDonateModal}
              className="w-full sm:w-auto justify-center bg-[#d97706] hover:bg-[#c2410c] text-white px-8 py-3.5 sm:py-4 rounded-t-3xl rounded-b-xl font-montserrat text-xs font-bold uppercase tracking-widest transition-all shadow-2xl flex items-center"
            >
              {t.nav.donateNow}
            </button>

            <a
              href="#news"
              className="w-full sm:w-auto justify-center bg-white/10 backdrop-blur-md text-[#faf8f5] border border-white/20 px-8 py-3.5 sm:py-4 rounded-t-3xl rounded-b-xl font-montserrat text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#004d2c] transition-all flex items-center"
            >
              {t.hero.ctaNews}
            </a>
          </div>
        </div>

        {/* Right Architectural Arch Frame Feature */}
        <div className="hidden lg:flex lg:col-span-4 justify-end items-center">
          <div className="relative w-80 h-96 rounded-t-[160px] rounded-b-3xl border-4 border-[#d97706]/40 overflow-hidden shadow-2xl">
            <img
              src="/masjid-istiqlal-osaka-hero-new.png"
              alt="Masjid Istiqlal Osaka Mihrab"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003820] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-center">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#d97706] block">
                Kansai, Japan
              </span>
              <span className="font-montserrat font-bold text-sm">
                大阪イスティクラルモスク
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-60 pointer-events-none">
        <span className="text-white text-[10px] font-bold uppercase tracking-widest font-inter">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#d97706] to-transparent" />
      </div>
    </section>
  );
};
