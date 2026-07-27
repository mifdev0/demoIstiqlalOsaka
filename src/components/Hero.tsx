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
    <section id="home" className="relative w-full min-h-[92vh] flex flex-col justify-center pt-20 overflow-hidden bg-[#003820]">
      {/* Full-bleed Real Photo Background of Masjid Istiqlal Osaka */}
      <div className="absolute inset-0 z-0">
        <div
          className="bg-cover bg-center w-full h-full transform scale-105 transition-transform duration-1000 opacity-40"
          style={{
            backgroundImage: `url('/masjid-istiqlal-osaka-hero-new.png')`,
          }}
        />
        {/* Rich Emerald Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003820] via-[#003820]/80 to-transparent" />
        <div className="absolute inset-0 islamic-geo-bg" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-20">
        {/* Left Editorial Content */}
        <div className="lg:col-span-8 flex flex-col items-start gap-6 text-left">
          <span className="text-[#d97706] font-semibold text-xs tracking-[0.3em] uppercase block font-inter">
            Assalamu&apos;alaikum • 大阪イスラミックセンター
          </span>

          <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-7xl font-bold text-[#faf8f5] leading-[1.1] tracking-tight">
            Masjid Istiqlal <span className="text-[#d97706]">Osaka</span>
          </h1>

          <p className="font-inter text-lg sm:text-xl text-[#faf8f5]/80 max-w-2xl leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="pt-4 flex flex-wrap gap-4 items-center">
            {/* Signature Arch Shaped Primary CTA */}
            <button
              onClick={onOpenDonateModal}
              className="bg-[#d97706] hover:bg-[#c2410c] text-white px-9 py-4 rounded-t-3xl rounded-b-xl font-montserrat text-xs font-bold uppercase tracking-widest transition-all shadow-2xl hover:-translate-y-1"
            >
              {t.nav.donateNow}
            </button>

            <a
              href="#news"
              className="bg-white/10 backdrop-blur-md text-[#faf8f5] border border-white/20 px-8 py-4 rounded-t-3xl rounded-b-xl font-montserrat text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#004d2c] transition-all"
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
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 pointer-events-none">
        <span className="text-white text-[10px] font-bold uppercase tracking-widest font-inter">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#d97706] to-transparent" />
      </div>
    </section>
  );
};
