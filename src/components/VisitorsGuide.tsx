'use client';

import React from 'react';
import { Clock, Shirt, MapPin, ExternalLink } from 'lucide-react';
import { Language, translations } from '@/lib/i18n';

interface VisitorsGuideProps {
  lang: Language;
}

export const VisitorsGuide: React.FC<VisitorsGuideProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className="bg-white py-24 relative overflow-hidden my-12 border-y border-[#004d2c]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* Upper Split Asymmetric Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Mihrab Shaped Photo - Left Column */}
          <div className="lg:col-span-6 relative">
            <div className="w-full h-[400px] sm:h-[460px] rounded-t-[180px] rounded-b-3xl overflow-hidden border-4 border-[#004d2c] shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1000&q=80"
                alt="Visitors at Masjid Istiqlal Osaka"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003820]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white font-montserrat">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d97706] block">
                  Warm Welcome in Osaka
                </span>
                <h3 className="font-bold text-xl">ようこそ • Welcome to MIO</h3>
              </div>
            </div>
          </div>

          {/* Info Section - Right Column */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-[#d97706] font-bold text-xs uppercase tracking-[0.3em] font-inter">
                {t.visitors.badge}
              </span>
              <h2 className="font-montserrat font-bold text-3xl sm:text-5xl text-[#004d2c]">
                {t.visitors.title}
              </h2>
              <p className="text-base text-[#111827]/80 leading-relaxed font-inter">
                {t.visitors.description}
              </p>
            </div>

            {/* Hairline Divider List Layout */}
            <div className="divide-y divide-[#004d2c]/15 border-y border-[#004d2c]/15">
              <div className="py-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-t-xl rounded-b-sm bg-[#004d2c]/10 text-[#004d2c] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-base text-[#111827]">
                    {t.visitors.hoursTitle}
                  </h4>
                  <p className="text-xs text-[#111827]/70 mt-1">{t.visitors.hoursDesc}</p>
                </div>
              </div>

              <div className="py-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-t-xl rounded-b-sm bg-[#d97706]/10 text-[#d97706] flex items-center justify-center shrink-0">
                  <Shirt className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-base text-[#111827]">
                    {t.visitors.dressTitle}
                  </h4>
                  <p className="text-xs text-[#111827]/70 mt-1">{t.visitors.dressDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Google Map & Full Address Section */}
        <div className="pt-8 border-t border-[#004d2c]/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#faf8f5] rounded-t-[40px] rounded-b-2xl p-6 sm:p-8 border-2 border-[#004d2c]/20 shadow-xl">
            {/* Address Details - Left */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004d2c]/10 text-[#004d2c] font-semibold text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#d97706]" />
                <span>Peta Lokasi & Alamat Lengkap</span>
              </div>

              <h3 className="font-montserrat font-bold text-2xl text-[#004d2c]">
                Masjid Istiqlal Osaka
              </h3>

              <div className="space-y-2 text-xs text-[#111827]/80 font-inter">
                <p className="font-semibold text-sm text-[#111827]">
                  📍 1-Chome-1-21 Nakazato, Nishinari Ward, Osaka, 557-0042, Japan
                </p>
                <p>
                  🇯🇵 〒557-0042 大阪府大阪市西成区中里1-1-21
                </p>
                <p className="text-[#111827]/60">
                  Akses Mudah: 3 Menit Jalan Kaki dari Stasiun Tengachaya / Kishinosato (Kansai Area).
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Masjid+Istiqlal+Osaka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#004d2c] hover:bg-[#003820] text-white px-5 py-3 rounded-t-xl rounded-b-sm font-montserrat font-bold text-xs uppercase tracking-wider shadow-md transition-all mt-2"
              >
                <span>Buka di Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#d97706]" />
              </a>
            </div>

            {/* Custom Sized Embedded Google Map iframe - Right */}
            <div className="lg:col-span-7 w-full h-[320px] sm:h-[380px] rounded-t-[32px] rounded-b-2xl overflow-hidden shadow-lg border-2 border-[#004d2c]/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.13536992688!2d135.49297867574236!3d34.65128407293735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e72e09ab57f1%3A0xeb6d6bf463ac6555!2sMasjid%20Istiqlal%20Osaka!5e0!3m2!1sen!2sid!4v1785125682055!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Peta Lokasi Masjid Istiqlal Osaka"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
