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
    <section id="donation" className="py-20 bg-[#faf8f5] text-[#111827] relative overflow-hidden">
      {/* Subtle Japanese Background Accent */}
      <div className="absolute inset-0 japanese-subtle-bg pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
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

        {/* Dynamic Initiatives Grid with Featured Photo Banners & Graceful Fallbacks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
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
                className="bg-white rounded-t-3xl rounded-b-2xl border border-[#004d2c]/15 shadow-sm overflow-hidden flex flex-col justify-between group hover:border-[#004d2c] hover:shadow-md transition-all"
              >
                {/* Photo Banner Header with Graceful Image Fallback */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-[#003820]">
                  <img
                    src={program.banner_url}
                    alt={title}
                    onError={(e) => {
                      // Fallback to local hero image if network blocks external URL
                      (e.target as HTMLImageElement).src = '/masjid-istiqlal-osaka-hero-new.png';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#004d2c] text-white text-[10px] font-bold px-3 py-1 rounded-t-xl rounded-b-sm uppercase tracking-wider shadow-md font-inter">
                      Program Infaq Aktif
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-montserrat font-bold text-base sm:text-lg leading-snug line-clamp-1">
                      {title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6 space-y-4 flex-grow">
                  <p className="text-xs text-[#111827]/80 leading-relaxed font-inter line-clamp-2">
                    {description}
                  </p>

                  {/* Progress Line */}
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

                {/* Card Action */}
                <div className="p-5 sm:p-6 pt-0">
                  <button
                    onClick={() => onOpenDonateModal(program)}
                    className="w-full py-3 bg-[#004d2c] hover:bg-[#003820] text-white rounded-t-xl rounded-b-sm font-montserrat text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <Heart className="w-3.5 h-3.5 text-[#d97706]" />
                    <span>{t.nav.donateNow}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Payment Options Strip */}
        <div className="bg-white rounded-2xl p-5 border border-[#004d2c]/15 grid grid-cols-1 md:grid-cols-3 gap-5 text-left shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-t-xl rounded-b-sm bg-[#004d2c]/10 text-[#004d2c] flex items-center justify-center shrink-0">
              <Landmark className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-[#111827] font-montserrat">
                {t.donation.transferJP}
              </h4>
              <p className="text-[10px] text-[#111827]/60">Yucho Bank & MUFG Bank Japan</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-t-xl rounded-b-sm bg-[#d97706]/10 text-[#d97706] flex items-center justify-center shrink-0">
              <QrCode className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-[#111827] font-montserrat">
                {t.donation.transferID}
              </h4>
              <p className="text-[10px] text-[#111827]/60">Gopay, OVO, ShopeePay & VA</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-t-xl rounded-b-sm bg-[#004d2c]/10 text-[#004d2c] flex items-center justify-center shrink-0">
              <CreditCard className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-[#111827] font-montserrat">
                Stripe International
              </h4>
              <p className="text-[10px] text-[#111827]/60">Visa, Mastercard & Int. Card</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
