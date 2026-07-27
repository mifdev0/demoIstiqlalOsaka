'use client';

import React from 'react';
import { Download, FileText } from 'lucide-react';
import { Language, translations } from '@/lib/i18n';

interface TransparencySectionProps {
  lang: Language;
}

export const TransparencySection: React.FC<TransparencySectionProps> = ({ lang }) => {
  const t = translations[lang];

  const financialSummary = [
    {
      period: 'Juli 2026',
      income_jpy: 4200000,
      expense_jpy: 1850000,
      income_idr: 462000000,
      expense_idr: 203500000,
      net_jpy: 2350000,
    },
    {
      period: 'Juni 2026',
      income_jpy: 3950000,
      expense_jpy: 1600000,
      income_idr: 434500000,
      expense_idr: 176000000,
      net_jpy: 2350000,
    },
    {
      period: 'Mei 2026',
      income_jpy: 5100000,
      expense_jpy: 2200000,
      income_idr: 561000000,
      expense_idr: 242000000,
      net_jpy: 2900000,
    },
  ];

  return (
    <section id="transparency" className="py-20 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple & Clean Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-[#004d2c]/15 pb-4 gap-4">
          <div className="space-y-1">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-[#004d2c]">
              {t.transparency.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#111827]/70 font-inter">
              {t.transparency.subtitle}
            </p>
          </div>
        </div>

        {/* Minimalist Summary Financial List (No AI Slop / Badges) */}
        <div className="bg-white rounded-2xl border border-[#004d2c]/15 shadow-sm divide-y divide-[#004d2c]/10">
          {financialSummary.map((row, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#faf8f5]/50 transition-colors"
            >
              {/* Period Title */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#004d2c]/10 text-[#004d2c] flex items-center justify-center shrink-0 font-bold text-sm">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-base text-[#111827]">
                    Laporan Periode {row.period}
                  </h3>
                  <span className="text-xs text-[#111827]/50 font-inter">
                    Surplus: <strong className="text-[#004d2c] font-mono">+¥{row.net_jpy.toLocaleString('ja-JP')}</strong>
                  </span>
                </div>
              </div>

              {/* Simple Income vs Expense Totals */}
              <div className="flex items-center gap-6 text-xs font-inter">
                <div>
                  <span className="text-[#111827]/50 block font-semibold">{t.transparency.income}</span>
                  <span className="font-mono font-bold text-[#004d2c] text-sm">
                    ¥{row.income_jpy.toLocaleString('ja-JP')}
                  </span>
                </div>

                <div>
                  <span className="text-[#111827]/50 block font-semibold">{t.transparency.expense}</span>
                  <span className="font-mono font-bold text-[#c2410c] text-sm">
                    ¥{row.expense_jpy.toLocaleString('ja-JP')}
                  </span>
                </div>
              </div>

              {/* PDF Download Button */}
              <button
                onClick={() => alert(`${t.transparency.downloadReport} (${row.period})...`)}
                className="inline-flex items-center justify-center gap-1.5 bg-[#faf8f5] hover:bg-[#004d2c] text-[#004d2c] hover:text-white border border-[#004d2c]/20 font-semibold text-xs px-4 py-2.5 rounded-xl transition-all font-inter w-full sm:w-auto"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh PDF</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
