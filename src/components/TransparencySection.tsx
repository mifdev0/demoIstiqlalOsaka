'use client';

import React, { useState } from 'react';
import { Download, ChevronDown, CheckCircle2, ShieldCheck, FileSpreadsheet, ArrowUpRight, ArrowDownRight, ExternalLink } from 'lucide-react';
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
      verified_by: 'Tim Pengawas Syariah & Keuangan MIO',
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
      verified_by: 'Tim Pengawas Syariah & Keuangan MIO',
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
      verified_by: 'Tim Pengawas Syariah & Keuangan MIO',
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
      verified_by: 'Tim Pengawas Syariah & Keuangan MIO',
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
      verified_by: 'Tim Pengawas Syariah & Keuangan MIO',
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
      verified_by: 'Tim Pengawas Syariah & Keuangan MIO',
      verified_date: '25 Februari 2026',
    },
  };

  const [selectedMonthKey, setSelectedMonthKey] = useState<string>('juli_2026');
  const selectedData = monthlyData[selectedMonthKey];

  // 6 Months Sparkline Trends Data
  const trendHistory = [
    { month: 'Feb', income: 3.4, net: '+¥1.9M' },
    { month: 'Mar', income: 6.5, net: '+¥3.7M' },
    { month: 'Apr', income: 4.8, net: '+¥2.8M' },
    { month: 'Mei', income: 5.1, net: '+¥2.9M' },
    { month: 'Jun', income: 3.95, net: '+¥2.3M' },
    { month: 'Jul', income: 4.2, net: '+¥2.3M' },
  ];

  return (
    <section id="transparency" className="py-24 bg-[#faf8f5] relative overflow-hidden">
      {/* Subtle Japanese Asanoha Watermark Overlay */}
      <div className="absolute inset-0 japanese-emerald-crest pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title & Official Selector Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#004d2c]/20 pb-6 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004d2c]/10 text-[#004d2c] text-xs font-bold font-inter tracking-wider">
              <span>大阪イスティクラルモスク • Financial Ledger</span>
            </div>
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-[#004d2c]">
              {t.transparency.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#111827]/75 font-inter max-w-xl">
              Laporan pertanggungjawaban infaq, wakaf, dan biaya operasional Masjid Istiqlal Osaka yang dapat diakses publik.
            </p>
          </div>

          {/* Mihrab Arch Shaped Month Selector Dropdown */}
          <div className="relative shrink-0">
            <label className="block text-[10px] font-bold text-[#111827]/50 uppercase tracking-widest mb-1">
              Pilih Periode Laporan
            </label>
            <div className="relative">
              <select
                value={selectedMonthKey}
                onChange={(e) => setSelectedMonthKey(e.target.value)}
                className="appearance-none bg-white border-2 border-[#004d2c] rounded-t-2xl rounded-b-md px-5 py-3 pr-10 text-xs font-bold text-[#004d2c] font-montserrat cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-[#004d2c]"
              >
                {Object.entries(monthlyData).map(([key, item]) => (
                  <option key={key} value={key}>
                    Laporan {item.period}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-[#004d2c] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* 4. HERO: Saldo Kas Terakumulasi (Dominant Top Hero Card with Mihrab Arch Cut) */}
        <div className="bg-[#003820] text-white rounded-t-[48px] rounded-b-2xl p-8 sm:p-12 mb-12 shadow-2xl border-b-4 border-[#d97706] relative overflow-hidden">
          {/* Subtle Background Pattern & Osaka Watermark */}
          <div className="absolute top-6 right-8 text-white/5 text-7xl font-bold font-montserrat tracking-widest pointer-events-none select-none">
            大阪 2026
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#d97706] uppercase tracking-widest font-inter">
                <FileSpreadsheet className="w-4 h-4" /> Saldo Kas Terakumulasi (MIO Bank Statement)
              </div>
              {/* Massive Giant Typography Headline for Total Balance */}
              <div className="font-mono font-bold text-4xl sm:text-6xl text-[#faf8f5] tracking-tight">
                ¥{selectedData.balance_jpy.toLocaleString('ja-JP')}
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-inter max-w-lg">
                Saldo bersih kas operasional, pemeliharaan gedung, dan dana amanah wakaf Masjid Istiqlal Osaka per <strong>{selectedData.period}</strong>.
              </p>
            </div>

            {/* Official Stamp PDF Download Button */}
            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => alert(`Mengunduh PDF Laporan Resmi ${selectedData.period}...`)}
                className="inline-flex items-center justify-center gap-3 bg-[#d97706] hover:bg-[#c2410c] text-white px-7 py-4 rounded-t-2xl rounded-b-md font-montserrat font-bold text-xs uppercase tracking-widest shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] border border-white/20"
              >
                <Download className="w-4 h-4" />
                <span>Unduh Dokumen PDF</span>
              </button>
            </div>
          </div>
        </div>

        {/* 1 & 2: Classic Financial Ledger Line Items & 6-Month Sparklines */}
        <div className="bg-white rounded-2xl border border-[#004d2c]/20 shadow-sm p-6 sm:p-8 space-y-10">
          <div>
            <h3 className="font-montserrat font-bold text-lg text-[#004d2c] mb-6 flex items-center gap-2">
              <span>Rincian Transaksi Kas • Periode {selectedData.period}</span>
            </h3>

            {/* Hairline Divider Ledger List */}
            <div className="divide-y divide-[#004d2c]/15 border-y border-[#004d2c]/15 text-sm font-inter">
              {/* Line Item 1: Total Pemasukan */}
              <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#004d2c]/10 text-[#004d2c] flex items-center justify-center shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#111827] block">
                      Total Pemasukan (Infaq, Sedekah &amp; Wakaf)
                    </span>
                    <span className="text-xs text-[#111827]/60">Donasi Jamaah Indonesia, Jepang &amp; Internasional</span>
                  </div>
                </div>
                <div className="text-left sm:text-right font-mono">
                  <span className="font-bold text-[#004d2c] text-lg block">
                    +¥{selectedData.income_jpy.toLocaleString('ja-JP')}
                  </span>
                  <span className="text-xs text-[#111827]/50">
                    (Rp {selectedData.income_idr.toLocaleString('id-ID')})
                  </span>
                </div>
              </div>

              {/* Line Item 2: Total Pengeluaran */}
              <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#c2410c]/10 text-[#c2410c] flex items-center justify-center shrink-0">
                    <ArrowDownRight className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#111827] block">
                      Total Pengeluaran (Operasional &amp; Program)
                    </span>
                    <span className="text-xs text-[#111827]/60">Listrik, Pemanas, Kebersihan &amp; Program Dakwah</span>
                  </div>
                </div>
                <div className="text-left sm:text-right font-mono">
                  <span className="font-bold text-[#c2410c] text-lg block">
                    -¥{selectedData.expense_jpy.toLocaleString('ja-JP')}
                  </span>
                  <span className="text-xs text-[#111827]/50">
                    (Rp {selectedData.expense_idr.toLocaleString('id-ID')})
                  </span>
                </div>
              </div>

              {/* Line Item 3: Surplus Bersih */}
              <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#faf8f5]/60 px-4 -mx-4 rounded-lg">
                <div>
                  <span className="font-extrabold text-[#004d2c] text-base block font-montserrat">
                    Surplus / Selisih Bersih Bulan Ini
                  </span>
                  <span className="text-xs text-[#111827]/60">Dialokasikan ke Tabungan Pemeliharaan Gedung MIO</span>
                </div>
                <div className="text-left sm:text-right font-mono">
                  <span className="font-bold text-[#004d2c] text-xl block">
                    +¥{selectedData.net_jpy.toLocaleString('ja-JP')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Sparklines & Angka Besar 6 Bulan Terakhir */}
          <div className="pt-6 border-t border-[#004d2c]/15">
            <h4 className="font-montserrat font-bold text-sm text-[#111827] uppercase tracking-wider mb-4">
              Ringkasan Tren Kas 6 Bulan Terakhir
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
              {trendHistory.map((t, idx) => (
                <div key={idx} className="bg-[#faf8f5] p-3.5 rounded-xl border border-[#004d2c]/10 text-center space-y-1">
                  <span className="text-xs font-bold text-[#111827]/60 block font-inter">{t.month}</span>
                  <span className="font-mono font-bold text-sm text-[#004d2c] block">¥{t.income}M</span>
                  <span className="text-[10px] font-mono text-[#d97706] block font-semibold">{t.net}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. TRUST ELEMENTS (Spesifik Konteks Masjid) */}
          <div className="pt-6 border-t border-[#004d2c]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-inter text-[#111827]/80 bg-[#004d2c]/5 p-4 rounded-xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#004d2c] shrink-0" />
              <div>
                <span className="font-bold text-[#004d2c] block">Verifikasi Internal Auditor:</span>
                <span>Diverifikasi oleh <strong>{selectedData.verified_by}</strong> pada {selectedData.verified_date}</span>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Masjid+Istiqlal+Osaka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-[#004d2c] hover:text-[#d97706] transition-colors underline shrink-0"
            >
              <span>Salinan Mutasi Bank Yucho/MUFG</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
