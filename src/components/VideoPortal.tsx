'use client';

import React from 'react';
import { Play, BookOpen } from 'lucide-react';
import { Language, translations } from '@/lib/i18n';

interface VideoPortalProps {
  lang: Language;
}

export const VideoPortal: React.FC<VideoPortalProps> = ({ lang }) => {
  const t = translations[lang];

  const videosList = [
    {
      id: 'video-1',
      title: t.videos.video1Title,
      description: t.videos.video1Desc,
      embedId: 'XyNelsj-ajM',
      url: 'https://youtu.be/XyNelsj-ajM?si=QBXzs0kQ9YYRCXVB',
    },
    {
      id: 'video-2',
      title: t.videos.video2Title,
      description: t.videos.video2Desc,
      embedId: 'oBHlQ87RYvM',
      url: 'https://youtu.be/oBHlQ87RYvM?si=0kOPvSgIfwBqHvwE',
    },
    {
      id: 'video-3',
      title: t.videos.video3Title,
      description: t.videos.video3Desc,
      embedId: '3uBYcivkgNY',
      url: 'https://youtu.be/3uBYcivkgNY?si=XBD9e3eKOl1Xut8z',
    },
  ];

  return (
    <section id="videos" className="py-20 bg-white border-y border-[#004d2c]/15 relative overflow-hidden">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 japanese-emerald-crest pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#004d2c]/15 pb-6 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004d2c]/10 text-[#004d2c] text-xs font-bold font-inter uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-[#d97706]" />
              <span>{t.videos.badge}</span>
            </div>
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-[#004d2c]">
              {t.videos.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#111827]/70 font-inter max-w-xl">
              {t.videos.subtitle}
            </p>
          </div>

          <a
            href="https://www.youtube.com/@mioofficialmasjidistiqlalo8159"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold font-montserrat uppercase tracking-wider text-[#004d2c] hover:text-[#d97706] transition-colors"
          >
            <Play className="w-4 h-4 text-[#d97706]" />
            <span>YouTube Channel Official MIO</span>
          </a>
        </div>

        {/* 3 YouTube Video Embed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videosList.map((video) => (
            <div
              key={video.id}
              className="bg-[#faf8f5] rounded-2xl border border-[#004d2c]/15 overflow-hidden shadow-sm hover:shadow-md hover:border-[#004d2c]/40 transition-all flex flex-col justify-between"
            >
              {/* Responsive 16:9 YouTube iframe */}
              <div className="relative w-full aspect-video bg-[#003820]">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              {/* Video Info */}
              <div className="p-5 space-y-2 flex-grow">
                <h3 className="font-montserrat font-bold text-base text-[#111827] line-clamp-2 leading-snug">
                  {video.title}
                </h3>
                <p className="text-xs text-[#111827]/70 font-inter line-clamp-2 leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
