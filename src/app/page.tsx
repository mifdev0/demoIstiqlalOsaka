'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PrayerSchedule } from '@/components/PrayerSchedule';
import { VisitorsGuide } from '@/components/VisitorsGuide';
import { DonationSection } from '@/components/DonationSection';
import { DonationModal } from '@/components/DonationModal';
import { NewsPortal } from '@/components/NewsPortal';
import { TransparencySection } from '@/components/TransparencySection';
import { Footer } from '@/components/Footer';
import { Language } from '@/lib/i18n';
import { DonationProgram } from '@/lib/supabase';

export default function Home() {
  const [lang, setLang] = useState<Language>('id');
  const [isDonateModalOpen, setIsDonateModalOpen] = useState<boolean>(false);
  const [selectedProgram, setSelectedProgram] = useState<DonationProgram | null>(null);

  const handleOpenDonateModal = (program?: DonationProgram) => {
    if (program) {
      setSelectedProgram(program);
    } else {
      setSelectedProgram(null);
    }
    setIsDonateModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#111827] selection:bg-[#004d2c]/20 selection:text-[#004d2c]">
      {/* Navbar */}
      <Header
        lang={lang}
        onLanguageChange={(newLang) => setLang(newLang)}
        onOpenDonateModal={() => handleOpenDonateModal()}
      />

      <main className="flex flex-col w-full overflow-hidden">
        {/* Hero */}
        <Hero lang={lang} onOpenDonateModal={() => handleOpenDonateModal()} />

        {/* Prayer Schedule Bar */}
        <PrayerSchedule lang={lang} />

        {/* News Portal */}
        <NewsPortal lang={lang} />

        {/* Donation Portal */}
        <DonationSection
          lang={lang}
          onOpenDonateModal={(prog) => handleOpenDonateModal(prog)}
        />

        {/* Financial Transparency */}
        <TransparencySection lang={lang} />

        {/* Visitors Guide & Interactive Google Map (Placed right after Financial Transparency and before Footer) */}
        <VisitorsGuide lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} onOpenDonateModal={() => handleOpenDonateModal()} />

      {/* Interactive Modal */}
      <DonationModal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
        lang={lang}
        selectedProgram={selectedProgram}
      />
    </div>
  );
}
