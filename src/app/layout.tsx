import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Masjid Istiqlal Osaka (MIO) | Digital Portal & Donasi Satu Pintu',
  description:
    'Portal resmi Masjid Istiqlal Osaka. Pusat ibadah, kajian, kebudayaan diaspora Indonesia di Kansai, Jepang, serta saluran donasi & wakaf transparan.',
  keywords: [
    'Masjid Istiqlal Osaka',
    'Osaka Islamic Center',
    'Donasi Masjid Jepang',
    'Jadwal Shalat Osaka',
    'Muslim Osaka',
    'Wakaf Osaka',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className="h-full antialiased scroll-smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cinzel:wght@600;700;800&family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#faf8f5] text-[#111827]">{children}</body>
    </html>
  );
}
