'use client';

import React, { useState } from 'react';
import { X, Heart, QrCode, CheckCircle } from 'lucide-react';
import { Language, translations } from '@/lib/i18n';
import { DonationProgram } from '@/lib/supabase';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  selectedProgram?: DonationProgram | null;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  lang,
  selectedProgram,
}) => {
  const t = translations[lang];

  const [currency, setCurrency] = useState<'JPY' | 'IDR'>('JPY');
  const [amount, setAmount] = useState<number>(3000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentType, setPaymentType] = useState<'jp_bank' | 'id_qris' | 'stripe'>('jp_bank');
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [donorName, setDonorName] = useState<string>('');
  const [donorContact, setDonorContact] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const presetJPY = [1000, 3000, 5000, 10000, 30000];
  const presetIDR = [50000, 100000, 250000, 500000, 1000000];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#faf8f5] rounded-t-[40px] rounded-b-2xl max-w-xl w-full p-6 sm:p-8 border-2 border-[#004d2c]/20 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#111827] hover:bg-[#004d2c]/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6 pr-8">
              <span className="text-xs font-bold text-[#d97706] uppercase tracking-wider block mb-1">
                {selectedProgram ? selectedProgram.title_id : 'Donasi Umum Operasional MIO'}
              </span>
              <h3 className="text-2xl font-bold text-[#004d2c] font-montserrat">
                {t.donation.title}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Currency Selector */}
              <div>
                <label className="block text-xs font-bold text-[#111827]/70 uppercase tracking-wider mb-2">
                  {t.donation.currency}
                </label>
                <div className="grid grid-cols-2 gap-3 bg-white p-1.5 rounded-2xl border border-[#004d2c]/20">
                  <button
                    type="button"
                    onClick={() => {
                      setCurrency('JPY');
                      setAmount(3000);
                    }}
                    className={`py-2.5 rounded-xl font-bold text-sm transition-all ${
                      currency === 'JPY'
                        ? 'bg-[#004d2c] text-white shadow-md'
                        : 'text-[#111827] hover:text-[#004d2c]'
                    }`}
                  >
                    JPY (¥) • Yen Jepang
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setCurrency('IDR');
                      setAmount(100000);
                    }}
                    className={`py-2.5 rounded-xl font-bold text-sm transition-all ${
                      currency === 'IDR'
                        ? 'bg-[#004d2c] text-white shadow-md'
                        : 'text-[#111827] hover:text-[#004d2c]'
                    }`}
                  >
                    IDR (Rp) • Rupiah
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-xs font-bold text-[#111827]/70 uppercase tracking-wider mb-2">
                  {t.donation.selectAmount}
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {(currency === 'JPY' ? presetJPY : presetIDR).map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => {
                        setAmount(preset);
                        setCustomAmount('');
                      }}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
                        amount === preset && !customAmount
                          ? 'bg-[#d97706] text-white border-[#d97706] shadow-sm'
                          : 'bg-white text-[#111827] border-[#004d2c]/20 hover:border-[#004d2c]'
                      }`}
                    >
                      {currency === 'JPY' ? `¥${preset.toLocaleString()}` : `Rp ${preset.toLocaleString()}`}
                    </button>
                  ))}
                </div>

                <input
                  type="number"
                  placeholder="Nominal kustom lainnya..."
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    if (e.target.value) setAmount(Number(e.target.value));
                  }}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-[#004d2c]/20 focus:outline-none focus:ring-2 focus:ring-[#004d2c] text-sm"
                />
              </div>

              {/* Payment Method Selector with Real Brand Logos */}
              <div>
                <label className="block text-xs font-bold text-[#111827]/70 uppercase tracking-wider mb-2">
                  {t.donation.paymentMethod}
                </label>
                <div className="space-y-2">
                  {/* Yucho Bank Option */}
                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                      paymentType === 'jp_bank'
                        ? 'bg-white border-[#004d2c] ring-2 ring-[#004d2c]/20 shadow-sm'
                        : 'bg-white/60 border-[#004d2c]/15 hover:border-[#004d2c]/40'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentType"
                      checked={paymentType === 'jp_bank'}
                      onChange={() => setPaymentType('jp_bank')}
                      className="hidden"
                    />
                    <div className="w-12 h-10 rounded-xl bg-white border border-[#004d2c]/20 p-1 flex items-center justify-center shrink-0">
                      <img
                        src="/yucho.png"
                        alt="Yucho Bank Japan"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-grow">
                      <span className="font-bold text-sm text-[#111827] block">
                        Transfer Bank Jepang (Yucho / MUFG)
                      </span>
                      <span className="text-xs text-[#111827]/70">
                        Cocok untuk donatur di Jepang (JPY)
                      </span>
                    </div>
                  </label>

                  {/* QRIS Option */}
                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                      paymentType === 'id_qris'
                        ? 'bg-white border-[#004d2c] ring-2 ring-[#004d2c]/20 shadow-sm'
                        : 'bg-white/60 border-[#004d2c]/15 hover:border-[#004d2c]/40'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentType"
                      checked={paymentType === 'id_qris'}
                      onChange={() => setPaymentType('id_qris')}
                      className="hidden"
                    />
                    <div className="w-12 h-10 rounded-xl bg-[#d97706]/10 flex items-center justify-center text-[#d97706] shrink-0 border border-[#d97706]/20">
                      <QrCode className="w-5 h-5" />
                    </div>
                    <div className="flex-grow">
                      <span className="font-bold text-sm text-[#111827] block">
                        QRIS / Bank Indonesia / Midtrans
                      </span>
                      <span className="text-xs text-[#111827]/70">
                        Gopay, OVO, ShopeePay, VA Bank (IDR)
                      </span>
                    </div>
                  </label>

                  {/* Stripe / Visa / Mastercard Option */}
                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                      paymentType === 'stripe'
                        ? 'bg-white border-[#004d2c] ring-2 ring-[#004d2c]/20 shadow-sm'
                        : 'bg-white/60 border-[#004d2c]/15 hover:border-[#004d2c]/40'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentType"
                      checked={paymentType === 'stripe'}
                      onChange={() => setPaymentType('stripe')}
                      className="hidden"
                    />
                    <div className="w-12 h-10 rounded-xl bg-white border border-[#004d2c]/20 p-1 flex items-center justify-center shrink-0">
                      <img
                        src="/Stripe-Visa-and-Mastercard-are-close-to-launching-a-joint-stablecoin-platform-800x418.jpg"
                        alt="Stripe Visa Mastercard"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-grow">
                      <span className="font-bold text-sm text-[#111827] block">
                        Stripe International Payment
                      </span>
                      <span className="text-xs text-[#111827]/70">
                        Kartu Kredit Visa, Mastercard &amp; Global Card
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Bank Transfer Details Box */}
              {paymentType === 'jp_bank' && (
                <div className="p-4 bg-white rounded-2xl border border-[#004d2c]/20 text-xs space-y-2">
                  <span className="font-bold text-[#004d2c] block uppercase tracking-wide">
                    Rekening Resmi Masjid Istiqlal Osaka (Japan):
                  </span>
                  <div className="font-mono space-y-1 text-[#111827]">
                    <p>🏦 <strong>Yucho Bank (ゆうちょ銀行)</strong>: 14100-88392011</p>
                    <p>👤 <strong>Atas Nama</strong>: オオサカイスティクラルモスク</p>
                    <p>🏦 <strong>MUFG Bank</strong>: 021-3948291</p>
                  </div>
                </div>
              )}

              {/* Donor Details & Anonymous Checkbox */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-[#111827]">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="w-4 h-4 rounded text-[#004d2c] focus:ring-[#004d2c]"
                  />
                  <span>{t.donation.anonymous}</span>
                </label>

                {!isAnonymous && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder={t.donation.donorName}
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      required={!isAnonymous}
                      className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#004d2c]/20 text-sm"
                    />
                    <input
                      type="text"
                      placeholder={t.donation.donorEmail}
                      value={donorContact}
                      onChange={(e) => setDonorContact(e.target.value)}
                      required={!isAnonymous}
                      className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#004d2c]/20 text-sm"
                    />
                  </div>
                )}
              </div>

              {/* Action Arch Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#d97706] hover:bg-[#c2410c] text-white font-montserrat font-bold py-4 px-6 rounded-t-2xl rounded-b-lg shadow-xl transition-all"
              >
                <Heart className="w-5 h-5 fill-white/20" />
                <span>{t.donation.submitDonation}</span>
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#004d2c]/10 text-[#004d2c] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#004d2c] font-montserrat">
              Jazakumullah Khairan Katziran!
            </h3>
            <p className="text-sm text-[#111827]/80 max-w-md mx-auto">
              Terima kasih atas donasi sebesar{' '}
              <strong>
                {currency === 'JPY' ? `¥${amount.toLocaleString()}` : `Rp ${amount.toLocaleString()}`}
              </strong>{' '}
              untuk Masjid Istiqlal Osaka. Konfirmasi transaksi akan diproses oleh pengurus MIO.
            </p>

            <button
              onClick={resetAndClose}
              className="mt-4 bg-[#004d2c] text-white font-semibold text-sm px-6 py-3 rounded-t-xl rounded-b-sm shadow-md"
            >
              Tutup & Kembali
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
