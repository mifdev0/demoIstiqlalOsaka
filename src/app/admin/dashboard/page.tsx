'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Newspaper, Heart, Upload, CheckCircle, ShieldCheck, LogOut, LayoutDashboard, FileText } from 'lucide-react';

export default function AdminDashboardPage() {
  const router = useRouter();
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

  const handleLogout = async () => {
    await fetch('/api/admin/login', { method: 'DELETE' });
    router.push('/admin/login');
  };

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
    <div className="min-h-screen bg-[#fdf9e9] text-[#1c1c13]">
      {/* Top Admin Navbar */}
      <header className="bg-[#1c1c13] text-white py-4 px-6 border-b border-[#008751]/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#006b3f] flex items-center justify-center font-bold text-white">
              MIO
            </div>
            <div>
              <h1 className="font-montserrat font-bold text-lg leading-tight">
                Dashboard Pengurus MIO
              </h1>
              <span className="text-xs text-[#70db9d] flex items-center gap-1 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" /> Terotentikasi sebagai Admin
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/"
              target="_blank"
              className="text-xs text-white/80 hover:text-white underline font-semibold"
            >
              Lihat Website Live ↗
            </a>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-600/80 hover:bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Keluar (Logout)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-3xl font-bold text-[#1c1c13] font-montserrat">
            Panel Kelola Konten & Donasi Masjid
          </h2>
          <p className="text-sm text-[#3e4a41]">
            Silakan pilih menu di bawah ini untuk menerbitkan berita kegiatan atau memperbarui program donasi.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex bg-[#f8f4e4] p-1.5 rounded-2xl border border-[#008751]/15 mb-8 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('news')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'news'
                ? 'bg-[#006b3f] text-white shadow-md'
                : 'text-[#1c1c13] hover:text-[#006b3f]'
            }`}
          >
            <Newspaper className="w-4 h-4" />
            <span>Tambah Berita Baru</span>
          </button>
          <button
            onClick={() => setActiveTab('donation')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'donation'
                ? 'bg-[#006b3f] text-white shadow-md'
                : 'text-[#1c1c13] hover:text-[#006b3f]'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>Buat Program Donasi</span>
          </button>
        </div>

        {/* Tab 1: Form Berita */}
        {activeTab === 'news' && (
          <form
            onSubmit={handleNewsSubmit}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-[#008751]/20 shadow-xl space-y-5"
          >
            {newsSuccess && (
              <div className="p-4 bg-[#008751]/10 text-[#008751] rounded-2xl flex items-center gap-2 text-sm font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>Berita berhasil dipublikasikan ke portal utama MIO!</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-[#3e4a41] uppercase tracking-wider mb-2">
                Judul Berita (Bahasa Indonesia / English / JP / AR)
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Buka Puasa Bersama & Kajian Rutin..."
                value={newsTitle}
                onChange={(e) => setNewsTitle(e.target.value)}
                className="w-full px-4 py-3 bg-[#f8f4e4]/60 rounded-xl border border-[#008751]/20 focus:outline-none focus:ring-2 focus:ring-[#006b3f] text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#3e4a41] uppercase tracking-wider mb-2">
                  Kategori 4 Pilar MIO
                </label>
                <select
                  value={newsCategory}
                  onChange={(e) => setNewsCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-[#f8f4e4]/60 rounded-xl border border-[#008751]/20 focus:outline-none focus:ring-2 focus:ring-[#006b3f] text-sm font-semibold"
                >
                  <option value="ibadah">Ibadah & Ramadan</option>
                  <option value="sosial">Kegiatan Sosial</option>
                  <option value="pendidikan">Kajian & Pendidikan</option>
                  <option value="budaya">Kebudayaan & Diaspora</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3e4a41] uppercase tracking-wider mb-2">
                  Upload Foto Header
                </label>
                <div className="border border-dashed border-[#008751]/30 rounded-xl bg-[#f8f4e4]/60 px-4 py-2.5 flex items-center justify-between text-xs text-[#3e4a41] cursor-pointer hover:border-[#006b3f]">
                  <span className="flex items-center gap-1.5">
                    <Upload className="w-4 h-4 text-[#006b3f]" /> Pilih berkas foto...
                  </span>
                  <span className="text-[10px] text-[#3e4a41]/60">JPG/PNG</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#3e4a41] uppercase tracking-wider mb-2">
                Isi Berita Lengkap
              </label>
              <textarea
                rows={5}
                required
                placeholder="Tuliskan isi pengumuman kegiatan atau berita..."
                value={newsContent}
                onChange={(e) => setNewsContent(e.target.value)}
                className="w-full px-4 py-3 bg-[#f8f4e4]/60 rounded-xl border border-[#008751]/20 focus:outline-none focus:ring-2 focus:ring-[#006b3f] text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#006b3f] hover:bg-[#008751] text-white font-bold py-3.5 px-6 rounded-2xl shadow-md transition-all"
            >
              <Plus className="w-5 h-5" />
              <span>Publikasikan Berita Utama</span>
            </button>
          </form>
        )}

        {/* Tab 2: Form Donasi */}
        {activeTab === 'donation' && (
          <form
            onSubmit={handleDonationSubmit}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-[#008751]/20 shadow-xl space-y-5"
          >
            {donationSuccess && (
              <div className="p-4 bg-[#008751]/10 text-[#008751] rounded-2xl flex items-center gap-2 text-sm font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>Program donasi baru berhasil ditayangkan!</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-[#3e4a41] uppercase tracking-wider mb-2">
                Nama Program Donasi / Inisiatif
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Renovasi Karpet & Sound System Utama..."
                value={progTitle}
                onChange={(e) => setProgTitle(e.target.value)}
                className="w-full px-4 py-3 bg-[#f8f4e4]/60 rounded-xl border border-[#008751]/20 focus:outline-none focus:ring-2 focus:ring-[#006b3f] text-sm"
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
                  className="w-full px-4 py-3 bg-[#f8f4e4]/60 rounded-xl border border-[#008751]/20 text-sm"
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
                  className="w-full px-4 py-3 bg-[#f8f4e4]/60 rounded-xl border border-[#008751]/20 text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#855300] hover:bg-[#684000] text-white font-bold py-3.5 px-6 rounded-2xl shadow-md transition-all"
            >
              <Plus className="w-5 h-5" />
              <span>Tayangkan Program Donasi</span>
            </button>
          </form>
        )}
      </main>
    </div>
  );
}
