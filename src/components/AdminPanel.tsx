'use client';

import React, { useState } from 'react';
import { Plus, Newspaper, Heart, Upload, CheckCircle, ShieldCheck } from 'lucide-react';
import { Language, translations } from '@/lib/i18n';

interface AdminPanelProps {
  lang: Language;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ lang }) => {
  const t = translations[lang];
  const [activeTab, setActiveTab] = useState<'news' | 'donation'>('news');
  const [newsSuccess, setNewsSuccess] = useState(false);
  const [donationSuccess, setDonationSuccess] = useState(false);

  // Form states
  const [newsTitle, setNewsTitle] = useState('');
  const [newsCategory, setNewsCategory] = useState('ibadah');
  const [newsContent, setNewsContent] = useState('');

  const [progTitle, setProgTitle] = useState('');
  const [targetJPY, setTargetJPY] = useState('');
  const [targetIDR, setTargetIDR] = useState('');

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsSuccess(true);
    setTimeout(() => {
      setNewsSuccess(false);
      setNewsTitle('');
      setNewsContent('');
    }, 3000);
  };

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDonationSuccess(true);
    setTimeout(() => {
      setDonationSuccess(false);
      setProgTitle('');
      setTargetJPY('');
      setTargetIDR('');
    }, 3000);
  };

  return (
    <section id="admin" className="py-20 bg-white/80 border-t border-[#008751]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#008751]/10 text-[#008751] font-semibold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>{t.admin.badge}</span>
          </div>
          <h2 className="text-3xl font-bold text-[#1c1c13] font-montserrat">
            {t.admin.title}
          </h2>
          <p className="text-sm text-[#3e4a41]">
            {t.admin.subtitle}
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex bg-[#f8f4e4] p-1.5 rounded-2xl border border-[#008751]/15 mb-8 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('news')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'news'
                ? 'bg-[#008751] text-white shadow-md'
                : 'text-[#1c1c13] hover:text-[#008751]'
            }`}
          >
            <Newspaper className="w-4 h-4" />
            <span>{t.admin.tabNews}</span>
          </button>
          <button
            onClick={() => setActiveTab('donation')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'donation'
                ? 'bg-[#008751] text-white shadow-md'
                : 'text-[#1c1c13] hover:text-[#008751]'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>{t.admin.tabDonation}</span>
          </button>
        </div>

        {/* Tab 1: Form Tambah Berita */}
        {activeTab === 'news' && (
          <form
            onSubmit={handleNewsSubmit}
            className="bg-[#fdf9e9] rounded-3xl p-6 sm:p-8 border border-[#008751]/20 shadow-xl space-y-5"
          >
            {newsSuccess && (
              <div className="p-4 bg-[#008751]/10 text-[#008751] rounded-2xl flex items-center gap-2 text-sm font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>Berita berhasil dipublikasikan!</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-[#3e4a41] uppercase tracking-wider mb-2">
                Judul Berita
              </label>
              <input
                type="text"
                required
                placeholder="Title / Judul / タイトル / العنوان..."
                value={newsTitle}
                onChange={(e) => setNewsTitle(e.target.value)}
                className="w-full px-4 py-3 bg-white rounded-xl border border-[#008751]/20 focus:outline-none focus:ring-2 focus:ring-[#008751] text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#3e4a41] uppercase tracking-wider mb-2">
                  Kategori
                </label>
                <select
                  value={newsCategory}
                  onChange={(e) => setNewsCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-[#008751]/20 focus:outline-none focus:ring-2 focus:ring-[#008751] text-sm font-semibold"
                >
                  <option value="ibadah">{t.news.categories.ibadah}</option>
                  <option value="sosial">{t.news.categories.sosial}</option>
                  <option value="pendidikan">{t.news.categories.pendidikan}</option>
                  <option value="budaya">{t.news.categories.budaya}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3e4a41] uppercase tracking-wider mb-2">
                  Upload Foto Header
                </label>
                <div className="border border-dashed border-[#008751]/30 rounded-xl bg-white px-4 py-2.5 flex items-center justify-between text-xs text-[#3e4a41] cursor-pointer hover:border-[#008751]">
                  <span className="flex items-center gap-1.5">
                    <Upload className="w-4 h-4 text-[#008751]" /> Select Image / Pilih gambar
                  </span>
                  <span className="text-[10px] text-[#3e4a41]/60">JPG/PNG</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#3e4a41] uppercase tracking-wider mb-2">
                Isi Berita
              </label>
              <textarea
                rows={4}
                required
                placeholder="Write news content..."
                value={newsContent}
                onChange={(e) => setNewsContent(e.target.value)}
                className="w-full px-4 py-3 bg-white rounded-xl border border-[#008751]/20 focus:outline-none focus:ring-2 focus:ring-[#008751] text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#008751] hover:bg-[#006b3f] text-white font-bold py-3.5 px-6 rounded-2xl shadow-md transition-all"
            >
              <Plus className="w-5 h-5" />
              <span>{t.admin.pubNews}</span>
            </button>
          </form>
        )}

        {/* Tab 2: Form Buat Program Donasi */}
        {activeTab === 'donation' && (
          <form
            onSubmit={handleDonationSubmit}
            className="bg-[#fdf9e9] rounded-3xl p-6 sm:p-8 border border-[#008751]/20 shadow-xl space-y-5"
          >
            {donationSuccess && (
              <div className="p-4 bg-[#008751]/10 text-[#008751] rounded-2xl flex items-center gap-2 text-sm font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>Program donasi baru berhasil disimpan!</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-[#3e4a41] uppercase tracking-wider mb-2">
                Nama / Judul Program Donasi
              </label>
              <input
                type="text"
                required
                placeholder="Campaign title..."
                value={progTitle}
                onChange={(e) => setProgTitle(e.target.value)}
                className="w-full px-4 py-3 bg-white rounded-xl border border-[#008751]/20 focus:outline-none focus:ring-2 focus:ring-[#008751] text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#3e4a41] uppercase tracking-wider mb-2">
                  Target Dana JPY (¥)
                </label>
                <input
                  type="number"
                  required
                  placeholder="e.g. 1000000"
                  value={targetJPY}
                  onChange={(e) => setTargetJPY(e.target.value)}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-[#008751]/20 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3e4a41] uppercase tracking-wider mb-2">
                  Target Dana IDR (Rp)
                </label>
                <input
                  type="number"
                  required
                  placeholder="e.g. 110000000"
                  value={targetIDR}
                  onChange={(e) => setTargetIDR(e.target.value)}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-[#008751]/20 text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#f59e0b] hover:bg-[#ff7043] text-white font-bold py-3.5 px-6 rounded-2xl shadow-md transition-all"
            >
              <Plus className="w-5 h-5" />
              <span>{t.admin.pubDonation}</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
