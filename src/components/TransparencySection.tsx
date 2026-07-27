'use client';

import React, { useState } from 'react';
import { Download, ChevronDown, TrendingUp, Wallet, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Language, translations } from '@/lib/i18n';

interface TransparencySectionProps {
  lang: Language;
}

export const TransparencySection: React.FC<TransparencySectionProps> = ({ lang }) => {
  const t = translations[lang];

  // 6 Months Historical Financial Data
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
    },
    juni_2026: {
      period: 'Juni 2026',
      income_jpy: 3950000,
      expense_jpy: 1600000,
      income_idr: 434500000,
      expense_idr: 176000000,
      net_jpy: 2350000,
      balance_jpy: 26100000,
    },
    mei_2026: {
      period: 'Mei 2026',
      income_jpy: 5100000,
      expense_jpy: 2200000,
      income_idr: 561000000,
      expense_idr: 242000000,
      net_jpy: 2900000,
      balance_jpy: 23750000,
    },
    april_2026: {
      period: 'April 2026',
      income_jpy: 4800000,
      expense_jpy: 1950000,
      income_idr: 528000000,
      expense_idr: 214500000,
      net_jpy: 2850000,
      balance_jpy: 20850000,
    },
    maret_2026: {
      period: 'Maret 2026 (Ramadan)',
      income_jpy: 6500000,
      expense_jpy: 2800000,
      income_idr: 715000000,
      expense_idr: 308000000,
      net_jpy: 3700000,
      balance_jpy: 18000000,
    },
    februari_2026: {
      period: 'Februari 2026',
      income_jpy: 3400000,
      expense_jpy: 1450000,
      income_idr: 374000000,
      expense_idr: 159500000,
      net_jpy: 1950000,
      balance_jpy: 14300000,
    },
  };

  const [selectedMonthKey, setSelectedMonthKey] = useState<string>('juli_2026');
  const selectedData = monthlyData[selectedMonthKey];

  // Last 6 Months Chart Dataset
  const chartHistory = [
    { month: 'Feb', income: 3.4, expense: 1.45 },
    { month: 'Mar', income: 6.5, expense: 2.8 },
    { month: 'Apr', income: 4.8, expense: 1.95 },
    { month: 'Mei', income: 5.1, expense: 2.2 },
    { month: 'Jun', income: 3.95, expense: 1.6 },
    { month: 'Jul', income: 4.2, expense: 1.85 },
  ];

  const maxVal = 7.0; // Max Y-axis for chart percentage bar calculation

  return (
    <section id="transparency" className="py-20 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Month Selector Dropdown */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 border-b border-[#004d2c]/15 pb-6 gap-4">
          <div className="space-y-1">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-[#004d2c]">
              {t.transparency.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#111827]/70 font-inter">
              Ringkasan laporan keuangan &amp; analisis grafik pergerakan kas MIO.
            </p>
          </div>

          {/* Month Dropdown Selector */}
          <div className="relative">
            <select
              value={selectedMonthKey}
              onChange={(e) => setSelectedMonthKey(e.target.value)}
              className="appearance-none bg-white border-2 border-[#004d2c]/20 rounded-xl px-4 py-2.5 pr-10 text-xs font-bold text-[#004d2c] font-montserrat cursor-pointer shadow-xs focus:outline-none focus:ring-2 focus:ring-[#004d2c]"
            >
              {Object.entries(monthlyData).map(([key, item]) => (
                <option key={key} value={key}>
                  📅 {item.period}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-[#004d2c] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Financial Summary Cards + 6 Months Bar Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Left Summary Financial Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Current Total Kas / Balance */}
            <div className="bg-[#004d2c] text-white rounded-2xl p-6 shadow-md border border-[#004d2c] space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-[#d97706] uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <Wallet className="w-4 h-4" /> Saldo Kas Terakumulasi
                </span>
                <span>JST</span>
              </div>
              <div className="font-mono font-bold text-3xl text-white">
                ¥{selectedData.balance_jpy.toLocaleString('ja-JP')}
              </div>
              <p className="text-[11px] text-white/70 font-inter">
                Total saldo bersih kas operasional &amp; wakaf Masjid Istiqlal Osaka.
              </p>
            </div>

            {/* Income vs Expense Split Card */}
            <div className="grid grid-cols-2 gap-4">
              {/* Income */}
              <div className="bg-white rounded-2xl p-5 border border-[#004d2c]/15 shadow-xs space-y-1">
                <span className="text-[11px] font-bold text-[#004d2c] uppercase flex items-center gap-1 font-inter">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#004d2c]" /> {t.transparency.income}
                </span>
                <div className="font-mono font-bold text-lg text-[#004d2c]">
                  ¥{selectedData.income_jpy.toLocaleString('ja-JP')}
                </div>
                <div className="text-[10px] text-[#111827]/50 font-mono">
                  Rp {selectedData.income_idr.toLocaleString('id-ID')}
                </div>
              </div>

              {/* Expense */}
              <div className="bg-white rounded-2xl p-5 border border-[#004d2c]/15 shadow-xs space-y-1">
                <span className="text-[11px] font-bold text-[#c2410c] uppercase flex items-center gap-1 font-inter">
                  <ArrowDownRight className="w-3.5 h-3.5 text-[#c2410c]" /> {t.transparency.expense}
                </span>
                <div className="font-mono font-bold text-lg text-[#c2410c]">
                  ¥{selectedData.expense_jpy.toLocaleString('ja-JP')}
                </div>
                <div className="text-[10px] text-[#111827]/50 font-mono">
                  Rp {selectedData.expense_idr.toLocaleString('id-ID')}
                </div>
              </div>
            </div>

            {/* PDF Download Bar for Selected Month */}
            <button
              onClick={() => alert(`Mengunduh ${t.transparency.downloadReport} (${selectedData.period})...`)}
              className="w-full flex items-center justify-center gap-2 bg-white hover:bg-[#004d2c] text-[#004d2c] hover:text-white border border-[#004d2c]/20 font-bold text-xs py-3 rounded-xl transition-all shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Unduh Laporan PDF ({selectedData.period})</span>
            </button>
          </div>

          {/* Right 6 Months Analytical Bar Chart */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-[#004d2c]/15 shadow-xs flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-montserrat font-bold text-base text-[#111827] flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#d97706]" />
                  <span>Grafik Keuangan 6 Bulan Terakhir</span>
                </h3>
                <span className="text-xs text-[#111827]/60 font-inter">
                  Perbandingan Pemasukan (Hijau) vs Pengeluaran (Oranye) dalam JPY (Juta Yen)
                </span>
              </div>
            </div>

            {/* Visual Bar Chart Comparison */}
            <div className="h-48 flex items-end justify-between gap-3 pt-6 pb-2 px-2 border-b border-[#004d2c]/10">
              {chartHistory.map((item, idx) => {
                const incHeight = (item.income / maxVal) * 100;
                const expHeight = (item.expense / maxVal) * 100;
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                    <div className="flex items-end gap-1.5 h-full w-full justify-center">
                      {/* Income Bar */}
                      <div
                        className="w-3.5 sm:w-5 bg-[#004d2c] rounded-t-md transition-all duration-700 group-hover:bg-[#003820] relative"
                        style={{ height: `${incHeight}%` }}
                      >
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold bg-[#004d2c] text-white px-1 rounded">
                          ¥{item.income}M
                        </span>
                      </div>
                      {/* Expense Bar */}
                      <div
                        className="w-3.5 sm:w-5 bg-[#d97706] rounded-t-md transition-all duration-700 group-hover:bg-[#c2410c] relative"
                        style={{ height: `${expHeight}%` }}
                      >
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold bg-[#d97706] text-white px-1 rounded">
                          ¥{item.expense}M
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-[#111827]/70 font-inter">
                      {item.month}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Chart Legend */}
            <div className="flex items-center justify-center gap-6 text-xs font-semibold font-inter text-[#111827]/70">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-xs bg-[#004d2c]" />
                <span>Pemasukan</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-xs bg-[#d97706]" />
                <span>Pengeluaran</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
