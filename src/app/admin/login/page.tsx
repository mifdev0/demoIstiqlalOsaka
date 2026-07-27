'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, User, ShieldCheck, ArrowLeft, AlertCircle } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push('/admin/dashboard');
      } else {
        setErrorMsg(data.message || 'Username atau password salah');
      }
    } catch (err) {
      setErrorMsg('Gagal terhubung ke server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fdf9e9] flex flex-col justify-center items-center px-4 py-12">
      {/* Back to main site link */}
      <a
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-xs font-bold text-[#006b3f] hover:text-[#008751] bg-white px-4 py-2 rounded-full border border-[#008751]/15 shadow-xs transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Kembali ke Beranda MIO</span>
      </a>

      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-[#008751]/15 shadow-2xl space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-[#006b3f] text-white flex items-center justify-center font-bold text-xl mx-auto shadow-md shadow-[#006b3f]/20">
            MIO
          </div>
          <h1 className="font-montserrat font-bold text-2xl text-[#1c1c13]">
            Masjid Istiqlal Osaka
          </h1>
          <p className="text-xs text-[#3e4a41] flex items-center justify-center gap-1">
            <ShieldCheck className="w-4 h-4 text-[#006b3f]" />
            <span>Portal Otentikasi Admin Pengurus</span>
          </p>
        </div>

        {errorMsg && (
          <div className="p-4 bg-red-50 text-red-700 rounded-2xl border border-red-200 flex items-center gap-2 text-xs font-semibold">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#3e4a41] uppercase tracking-wider mb-1.5">
              Username Admin
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-[#3e4a41] absolute left-3.5 top-3.5" />
              <input
                type="text"
                required
                placeholder="Masukkan username admin..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#f8f4e4]/60 rounded-xl border border-[#008751]/20 focus:outline-none focus:ring-2 focus:ring-[#006b3f] text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#3e4a41] uppercase tracking-wider mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#3e4a41] absolute left-3.5 top-3.5" />
              <input
                type="password"
                required
                placeholder="Masukkan password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#f8f4e4]/60 rounded-xl border border-[#008751]/20 focus:outline-none focus:ring-2 focus:ring-[#006b3f] text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-[#006b3f] hover:bg-[#008751] text-white font-montserrat font-bold text-xs uppercase tracking-wider rounded-2xl shadow-md transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
          >
            {loading ? 'Memproses...' : 'Masuk ke Dashboard Admin'}
          </button>
        </form>

        <div className="text-center pt-2 text-[11px] text-[#3e4a41]/60">
          Kredensial disimpan secara aman di <code>.env.local</code>
        </div>
      </div>
    </div>
  );
}
