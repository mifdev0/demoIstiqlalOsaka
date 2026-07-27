'use client';

import React from 'react';
import { Landmark, QrCode, CreditCard, Heart } from 'lucide-react';
import { Language, translations } from '@/lib/i18n';
import { mockPrograms, DonationProgram } from '@/lib/supabase';

interface DonationSectionProps {
  lang: Language;
  onOpenDonateModal: (program?: DonationProgram) => void;
}

export const DonationSection: React.FC<DonationSectionProps> = ({ lang, onOpenDonateModal }) => {
  const t = translations[lang];

  return (
    <section id="donation" className="py-24 bg-[#003820] text-white relative overflow-hidden">
      {/* Background Architectural Motif */}
      <div className="absolute inset-0 islamic-geo-bg pointer-events-none opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#d97706] font-bold text-xs uppercase tracking-[0.3em] font-inter">
            {t.nav.donation}
          </span>
          <h2 className="font-montserrat font-bold text-4xl sm:text-5xl text-[#faf8f5]">
            {t.donation.title}
          </h2>
          <p className="text-base text-[#faf8f5]/80 font-inter">
            {t.donation.subtitle}
          </p>
        </div>

        {/* Highlighted Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {mockPrograms.map((program) => {
            const title =
              lang === 'ja'
                ? program.title_ja
                : lang === 'en'
                ? program.title_en
                : lang === 'ar'
                ? program.title_ar
                : program.title_id;

            const description =
              lang === 'ja'
                ? program.description_ja
                : lang === 'en'
                ? program.description_en
                : lang === 'ar'
                ? program.description_ar
                : program.description_id;

            const percentage = Math.min(
              100,
              Math.round((program.current_amount_jpy / program.target_amount_jpy) * 100)
            );

            return (
              <div
                key={program.id}
                className="bg-white/5 backdrop-blur-md rounded-t-[40px] rounded-b-2xl border-2 border-[#d97706]/30 p-8 lg:p-10 flex flex-col justify-between space-y-8 hover:border-[#d97706] transition-all shadow-2xl"
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#d97706]">
                      Program Infaq Aktif
                    </span>
                    <h3 className="font-montserrat font-bold text-2xl sm:text-3xl text-white">
                      {title}
                    </h3>
                    <p className="text-sm text-[#faf8f5]/80 leading-relaxed font-inter">
                      {description}
                    </p>
                  </div>

                  {/* PROMINENT BOLD PROGRESS DISPLAY */}
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="font-montserrat font-bold text-4xl sm:text-5xl text-[#d97706]">
                          {percentage}%
                        </span>
                        <span className="text-xs uppercase font-bold text-white/70">
                          {t.donation.collected}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs uppercase font-bold text-white/60 block">Target</span>
                        <span className="font-montserrat font-bold text-lg text-white">
                          ¥{program.target_amount_jpy.toLocaleString('ja-JP')}
                        </span>
                      </div>
                    </div>

                    {/* Thick Bold Progress Bar */}
                    <div className="h-5 w-full bg-white/10 rounded-full overflow-hidden p-1 border border-white/10">
                      <div
                        className="h-full bg-gradient-to-r from-[#d97706] to-[#c2410c] rounded-full transition-all duration-1000 shadow-[0_0_20px_rgba(217,119,6,0.6)]"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>

                    <div className="flex justify-between items-center text-xs text-white/70 font-mono pt-1">
                      <span>Terkumpul: ¥{program.current_amount_jpy.toLocaleString('ja-JP')}</span>
                      <span>Rp {program.current_amount_idr.toLocaleString('id-ID')}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenDonateModal(program)}
                  className="w-full py-4 bg-[#d97706] hover:bg-[#c2410c] text-white rounded-t-2xl rounded-b-lg font-montserrat text-xs font-bold uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-white/20" />
                  <span>{t.nav.donateNow}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Hybrid Payment Strip */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-t-2xl rounded-b-sm bg-[#d97706]/20 text-[#d97706] flex items-center justify-center shrink-0">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white font-montserrat">
                {t.donation.transferJP}
              </h4>
              <p className="text-xs text-white/70">Yucho Bank & MUFG Bank Japan</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-t-2xl rounded-b-sm bg-[#d97706]/20 text-[#d97706] flex items-center justify-center shrink-0">
              <QrCode className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white font-montserrat">
                {t.donation.transferID}
              </h4>
              <p className="text-xs text-white/70">Gopay, OVO, ShopeePay & VA</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-t-2xl rounded-b-sm bg-[#d97706]/20 text-[#d97706] flex items-center justify-center shrink-0">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white font-montserrat">
                Stripe International
              </h4>
              <p className="text-xs text-white/70">Visa, Mastercard & Int. Card</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
