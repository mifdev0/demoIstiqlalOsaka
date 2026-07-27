'use client';

import React from 'react';
import { Download, ShieldCheck, FileCheck, ArrowUpRight } from 'lucide-react';
import { Language, translations } from '@/lib/i18n';

interface TransparencySectionProps {
  lang: Language;
}

export const TransparencySection: React.FC<TransparencySectionProps> = ({ lang }) => {
  const t = translations[lang];

  const financialData = [
    {
      period: 'Juli 2026',
      income_jpy: 4200000,
      expense_jpy: 1850000,
      income_idr: 462000000,
      expense_idr: 203500000,
      net_jpy: 2350000,
      status: 'Terverifikasi Audit',
    },
    {
      period: 'Juni 2026',
      income_jpy: 3950000,
      expense_jpy: 1600000,
      income_idr: 434500000,
      expense_idr: 176000000,
      net_jpy: 2350000,
      status: 'Terverifikasi Audit',
    },
    {
      period: 'Mei 2026',
      income_jpy: 5100000,
      expense_jpy: 2200000,
      income_idr: 561000000,
      expense_idr: 242000000,
      net_jpy: 2900000,
      status: 'Terverifikasi Audit',
    },
  ];

  return (
    <section id="transparency" className="py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#004d2c]/15 pb-6">
          <div className="space-y-2">
            <span className="text-[#d97706] font-bold text-xs uppercase tracking-[0.3em] font-inter flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#004d2c]" /> {t.transparency.verified}
            </span>
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-[#004d2c]">
              {t.transparency.title}
            </h2>
            <p className="text-sm text-[#111827]/70 font-inter max-w-xl">
              {t.transparency.subtitle}
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="text-xs font-mono bg-[#004d2c]/10 text-[#004d2c] px-3.5 py-1.5 rounded-full font-semibold border border-[#004d2c]/20">
              AUDIT STATEMENT • FINANCIAL DISCLOSURE
            </span>
          </div>
        </div>

        {/* Official Bank Statement / Audit Financial Table */}
        <div className="bg-white rounded-2xl border border-[#004d2c]/20 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#004d2c] text-white font-montserrat text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-bold">Periode Laporan</th>
                  <th className="py-4 px-6 font-bold">{t.transparency.income} (JPY / IDR)</th>
                  <th className="py-4 px-6 font-bold">{t.transparency.expense} (JPY / IDR)</th>
                  <th className="py-4 px-6 font-bold">Surplus Bersih (JPY)</th>
                  <th className="py-4 px-6 font-bold">Status Audit</th>
                  <th className="py-4 px-6 font-bold text-right">Laporan PDF</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#004d2c]/10 font-inter text-xs">
                {financialData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#faf8f5] transition-colors">
                    <td className="py-5 px-6 font-bold text-[#111827] font-montserrat">
                      <div className="flex items-center gap-2">
                        <FileCheck className="w-4 h-4 text-[#004d2c]" />
                        <span>{row.period}</span>
                      </div>
                    </td>

                    <td className="py-5 px-6 font-mono font-semibold text-[#004d2c]">
                      <div>¥{row.income_jpy.toLocaleString('ja-JP')}</div>
                      <div className="text-[10px] text-[#111827]/50">Rp {row.income_idr.toLocaleString('id-ID')}</div>
                    </td>

                    <td className="py-5 px-6 font-mono font-semibold text-[#c2410c]">
                      <div>¥{row.expense_jpy.toLocaleString('ja-JP')}</div>
                      <div className="text-[10px] text-[#111827]/50">Rp {row.expense_idr.toLocaleString('id-ID')}</div>
                    </td>

                    <td className="py-5 px-6 font-mono font-bold text-[#d97706]">
                      +¥{row.net_jpy.toLocaleString('ja-JP')}
                    </td>

                    <td className="py-5 px-6">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#004d2c] bg-[#004d2c]/10 px-2.5 py-1 rounded-full border border-[#004d2c]/20">
                        <ShieldCheck className="w-3.5 h-3.5" /> {t.transparency.verified}
                      </span>
                    </td>

                    <td className="py-5 px-6 text-right">
                      <button
                        onClick={() => alert(`${t.transparency.downloadReport} (${row.period})...`)}
                        className="inline-flex items-center gap-1.5 bg-[#004d2c] hover:bg-[#003820] text-white font-bold text-[11px] px-3.5 py-2 rounded-t-xl rounded-b-sm transition-all shadow-xs"
                      >
                        <Download className="w-3.5 h-3.5 text-[#d97706]" />
                        <span>PDF</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#faf8f5] px-6 py-4 border-t border-[#004d2c]/10 flex flex-col sm:flex-row justify-between items-center text-xs text-[#111827]/60 font-inter gap-2">
            <span>Seluruh transaksi keuangan diaudit secara independen oleh Tim Pengawas Syariah & Keuangan MIO.</span>
            <span className="font-mono font-bold text-[#004d2c]">OFFICIAL AUDIT REPORT 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};
