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
    <section id="donation" className="py-20 bg-[#faf8f5] text-[#111827] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-[#d97706] font-bold text-xs uppercase tracking-widest font-inter">
            {t.nav.donation}
          </span>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-[#004d2c]">
            {t.donation.title}
          </h2>
          <p className="text-sm text-[#111827]/70 font-inter">
            {t.donation.subtitle}
          </p>
        </div>

        {/* Compact Clean Initiatives Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
                className="bg-white rounded-2xl border border-[#004d2c]/15 p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-xs hover:shadow-md transition-all"
              >
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#d97706]">
                      Program Infaq Aktif
                    </span>
                    <h3 className="font-montserrat font-bold text-xl text-[#111827] leading-snug">
                      {title}
                    </h3>
                    <p className="text-xs text-[#111827]/70 leading-relaxed font-inter line-clamp-2">
                      {description}
                    </p>
                  </div>

                  {/* Clean Balanced Progress Bar */}
                  <div className="space-y-2 pt-2 border-t border-[#004d2c]/10">
                    <div className="flex justify-between items-center text-xs font-semibold font-inter">
                      <span className="text-[#004d2c] font-bold">
                        {t.donation.collected}: {percentage}%
                      </span>
                      <span className="text-[#111827]/60">
                        Target: ¥{program.target_amount_jpy.toLocaleString('ja-JP')}
                      </span>
                    </div>

                    <div className="h-2.5 w-full bg-[#faf8f5] rounded-full overflow-hidden border border-[#004d2c]/10">
                      <div
                        className="h-full bg-[#004d2c] rounded-full transition-all duration-1000"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>

                    <div className="flex justify-between items-center text-xs text-[#111827]/70 font-mono pt-0.5">
                      <span>Terkumpul: ¥{program.current_amount_jpy.toLocaleString('ja-JP')}</span>
                      <span>Rp {program.current_amount_idr.toLocaleString('id-ID')}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenDonateModal(program)}
                  className="w-full py-3 bg-[#004d2c] hover:bg-[#003820] text-white rounded-xl font-montserrat text-xs font-bold uppercase tracking-wider transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 text-[#d97706]" />
                  <span>{t.nav.donateNow}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Minimal Payment Method Badges */}
        <div className="bg-white rounded-2xl p-6 border border-[#004d2c]/15 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#004d2c]/10 text-[#004d2c] flex items-center justify-center shrink-0">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-[#111827] font-montserrat">
                {t.donation.transferJP}
              </h4>
              <p className="text-[11px] text-[#111827]/60">Yucho Bank & MUFG Bank Japan</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#d97706]/10 text-[#d97706] flex items-center justify-center shrink-0">
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-[#111827] font-montserrat">
                {t.donation.transferID}
              </h4>
              <p className="text-[11px] text-[#111827]/60">Gopay, OVO, ShopeePay & VA</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#004d2c]/10 text-[#004d2c] flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-[#111827] font-montserrat">
                Stripe International
              </h4>
              <p className="text-[11px] text-[#111827]/60">Visa, Mastercard & Int. Card</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
