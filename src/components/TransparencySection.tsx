'use client';

import React, { useState } from 'react';
import { Download, ChevronDown, TrendingUp, ShieldCheck, ArrowUpRight, ArrowDownRight, ExternalLink } from 'lucide-react';
import { Language, translations } from '@/lib/i18n';

interface TransparencySectionProps {
  lang: Language;
}

export const TransparencySection: React.FC<TransparencySectionProps> = ({ lang }) => {
  const t = translations[lang];

  // 6 Months Historical Financial Data Ledger
  const monthlyData: Record<
    string,
    {
      period: string;
      income_jpy: number;
      expense_jpy: number;
      income_idr: number;
      expense_idr: number;
      net_jpy: number;
      balance_jpy: number;
      verified_by: string;
      verified_date: string;
    }
  > = {
    juli_2026: {
      period: 'Juli 2026',
      income_jpy: 4200000,
      expense_jpy: 1850000,
      income_idr: 462000000,
      expense_idr: 203500000,
      net_jpy: 2350000,
      balance_jpy: 28450000,
      verified_by: 'Tim Pengawas Syariah MIO',
      verified_date: '25 Juli 2026',
    },
    juni_2026: {
      period: 'Juni 2026',
      income_jpy: 3950000,
      expense_jpy: 1600000,
      income_idr: 434500000,
      expense_idr: 176000000,
      net_jpy: 2350000,
      balance_jpy: 26100000,
      verified_by: 'Tim Pengawas Syariah MIO',
      verified_date: '28 Juni 2026',
    },
    mei_2026: {
      period: 'Mei 2026',
      income_jpy: 5100000,
      expense_jpy: 2200000,
      income_idr: 561000000,
      expense_idr: 242000000,
      net_jpy: 2900000,
      balance_jpy: 23750000,
      verified_by: 'Tim Pengawas Syariah MIO',
      verified_date: '27 Mei 2026',
    },
    april_2026: {
      period: 'April 2026',
      income_jpy: 4800000,
      expense_jpy: 1950000,
      income_idr: 528000000,
      expense_idr: 214500000,
      net_jpy: 2850000,
      balance_jpy: 20850000,
      verified_by: 'Tim Pengawas Syariah MIO',
      verified_date: '26 April 2026',
    },
    maret_2026: {
      period: 'Maret 2026 (Ramadan)',
      income_jpy: 6500000,
      expense_jpy: 2800000,
      income_idr: 715000000,
      expense_idr: 308000000,
      net_jpy: 3700000,
      balance_jpy: 18000000,
      verified_by: 'Tim Pengawas Syariah MIO',
      verified_date: '29 Maret 2026',
    },
    februari_2026: {
      period: 'Februari 2026',
      income_jpy: 3400000,
      expense_jpy: 1450000,
      income_idr: 374000000,
      expense_idr: 159500000,
      net_jpy: 1950000,
      balance_jpy: 14300000,
      verified_by: 'Tim Pengawas Syariah MIO',
      verified_date: '25 Februari 2026',
    },
  };

  const [selectedMonthKey, setSelectedMonthKey] = useState<string>('juli_2026');
  const selectedData = monthlyData[selectedMonthKey];

  // Height proportional Trading Chart Data (Feb - Jul)
  const tradingPoints = [
    { month: 'Feb', value: 3.4, net: '+¥1.9M', x: 30, y: 150 },
    { month: 'Mar', value: 6.5, net: '+¥3.7M', x: 130, y: 30 },
    { month: 'Apr', value: 4.8, net: '+¥2.8M', x: 230, y: 95 },
    { month: 'Mei', value: 5.1, net: '+¥2.9M', x: 330, y: 83 },
    { month: 'Jun', value: 3.95, net: '+¥2.3M', x: 430, y: 128 },
    { month: 'Jul', value: 4.2, net: '+¥2.3M', x: 530, y: 118 },
  ];

  return (
    <section id="transparency" className="py-16 bg-[#faf8f5] relative overflow-hidden">
      {/* Subtle Japanese Crest Watermark Overlay */}
      <div className="absolute inset-0 japanese-emerald-crest pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title & Compact Selector Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 border-b border-[#004d2c]/15 pb-4 gap-4">
          <div className="space-y-1">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-[#004d2c]">
              {t.transparency.title}
            </h2>
            <p className="text-xs text-[#111827]/70 font-inter max-w-md">
              {t.transparency.subtitle}
            </p>
          </div>

          {/* Compact Month Selector Dropdown */}
          <div className="relative shrink-0">
            <select
              value={selectedMonthKey}
              onChange={(e) => setSelectedMonthKey(e.target.value)}
              className="appearance-none bg-white border border-[#004d2c]/30 rounded-xl px-3.5 py-2 pr-9 text-xs font-bold text-[#004d2c] font-montserrat cursor-pointer shadow-xs focus:outline-none focus:ring-2 focus:ring-[#004d2c]"
            >
              {Object.entries(monthlyData).map(([key, item]) => (
                <option key={key} value={key}>
                  {item.period}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-[#004d2c] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* HERO: Saldo Kas Terakumulasi */}
        <div className="bg-[#003820] text-white rounded-t-3xl rounded-b-xl p-6 sm:p-8 mb-8 shadow-xl border-b-4 border-[#d97706] relative overflow-hidden">
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold text-[#d97706] uppercase tracking-wider font-inter block">
                {t.transparency.accumulatedBalance}
              </span>
              <div className="font-mono font-bold text-3xl sm:text-4xl text-[#faf8f5] tracking-tight">
                ¥{selectedData.balance_jpy.toLocaleString('ja-JP')}
              </div>
              <p className="text-xs text-white/70 font-inter">
                {t.transparency.balanceDesc} <strong>{selectedData.period}</strong>.
              </p>
            </div>

            {/* Official PDF Download Button */}
            <button
              onClick={() => alert(`PDF Report (${selectedData.period})...`)}
              className="inline-flex items-center justify-center gap-2 bg-[#d97706] hover:bg-[#c2410c] text-white px-5 py-3 rounded-xl font-montserrat font-bold text-xs uppercase tracking-wider shadow-md transition-all shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.transparency.downloadPdf}</span>
            </button>
          </div>
        </div>

        {/* Ledger Line Items & Static Pure SVG Financial Trading Chart */}
        <div className="bg-white rounded-2xl border border-[#004d2c]/15 shadow-xs p-5 sm:p-7 space-y-8">
          <div>
            <h3 className="font-montserrat font-bold text-base text-[#004d2c] mb-4">
              {t.transparency.monthlyDetails} • {selectedData.period}
            </h3>

            {/* Hairline Divider Ledger List */}
            <div className="divide-y divide-[#004d2c]/15 border-y border-[#004d2c]/15 text-xs font-inter">
              <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-[#004d2c]/10 text-[#004d2c] flex items-center justify-center shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-[#111827] block">
                      {t.transparency.totalIncomeDesc}
                    </span>
                  </div>
                </div>
                <div className="text-left sm:text-right font-mono">
                  <span className="font-bold text-[#004d2c] text-base block">
                    +¥{selectedData.income_jpy.toLocaleString('ja-JP')}
                  </span>
                  <span className="text-[10px] text-[#111827]/50">
                    (Rp {selectedData.income_idr.toLocaleString('id-ID')})
                  </span>
                </div>
              </div>

              <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-[#c2410c]/10 text-[#c2410c] flex items-center justify-center shrink-0">
                    <ArrowDownRight className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-[#111827] block">
                      {t.transparency.totalExpenseDesc}
                    </span>
                  </div>
                </div>
                <div className="text-left sm:text-right font-mono">
                  <span className="font-bold text-[#c2410c] text-base block">
                    -¥{selectedData.expense_jpy.toLocaleString('ja-JP')}
                  </span>
                  <span className="text-[10px] text-[#111827]/50">
                    (Rp {selectedData.expense_idr.toLocaleString('id-ID')})
                  </span>
                </div>
              </div>

              <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 bg-[#faf8f5]/80 px-3 -mx-3 rounded-lg">
                <div>
                  <span className="font-bold text-[#004d2c] text-sm block font-montserrat">
                    {t.transparency.netSurplus}
                  </span>
                </div>
                <div className="text-left sm:text-right font-mono">
                  <span className="font-bold text-[#004d2c] text-base block">
                    +¥{selectedData.net_jpy.toLocaleString('ja-JP')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* STATIC NON-INTERACTIVE TRADING FINANCIAL LINE CHART */}
          <div className="pt-4 border-t border-[#004d2c]/15">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-montserrat font-bold text-xs text-[#111827] uppercase tracking-wider flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#004d2c]" />
                <span>{t.transparency.trendTitle}</span>
              </h4>
              <span className="text-[10px] font-semibold text-[#004d2c] bg-[#004d2c]/10 px-2 py-0.5 rounded-md font-mono">
                {t.transparency.unitYen}
              </span>
            </div>

            {/* Static Non-Interactive Trading Chart */}
            <div className="bg-[#faf8f5] rounded-xl p-5 border border-[#004d2c]/15 relative overflow-hidden">
              {/* Background Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-15 pointer-events-none">
                <div className="w-full border-b border-dashed border-[#004d2c]" />
                <div className="w-full border-b border-dashed border-[#004d2c]" />
                <div className="w-full border-b border-dashed border-[#004d2c]" />
                <div className="w-full border-b border-dashed border-[#004d2c]" />
              </div>

              {/* Static SVG Curve Line Chart */}
              <div className="relative h-56 w-full pointer-events-none">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 560 200">
                  <defs>
                    <linearGradient id="emeraldGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#004d2c" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#004d2c" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Shaded Area Under Curve */}
                  <path
                    d="M 30 150 L 130 30 L 230 95 L 330 83 L 430 128 L 530 118 L 530 190 L 30 190 Z"
                    fill="url(#emeraldGrad)"
                  />

                  {/* Thick Green Trading Line */}
                  <path
                    d="M 30 150 L 130 30 L 230 95 L 330 83 L 430 128 L 530 118"
                    fill="none"
                    stroke="#004d2c"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Static Fixed Nodes & Permanent Labels */}
                  {tradingPoints.map((pt, idx) => (
                    <g key={idx}>
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r="5"
                        className="fill-[#faf8f5] stroke-[#004d2c] stroke-[3]"
                      />
                      <text
                        x={pt.x}
                        y={pt.y - 12}
                        textAnchor="middle"
                        className="text-[11px] font-mono font-extrabold fill-[#004d2c]"
                      >
                        ¥{pt.value}M
                      </text>
                    </g>
                  ))}
                </svg>
              </div>

              {/* Month Labels & Net Badges */}
              <div className="flex justify-between items-center pt-4 px-3 border-t border-[#004d2c]/10 text-center font-inter">
                {tradingPoints.map((pt, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <span className="text-xs font-bold text-[#111827]">{pt.month}</span>
                    <span className="text-[10px] font-mono text-[#d97706] font-semibold">{pt.net}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Elements */}
          <div className="pt-4 border-t border-[#004d2c]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-inter text-[#111827]/70 bg-[#004d2c]/5 p-3.5 rounded-xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#004d2c] shrink-0" />
              <span>{t.transparency.verifiedBy} <strong>{selectedData.verified_by}</strong> ({selectedData.verified_date})</span>
            </div>

            <a
              href="https://maps.google.com/?q=Masjid+Istiqlal+Osaka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-[#004d2c] hover:text-[#d97706] transition-colors underline shrink-0 text-xs"
            >
              <span>{t.transparency.bankProofCopy}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
