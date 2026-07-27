'use client';

import React, { useState, useEffect } from 'react';
import { Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { Language, translations } from '@/lib/i18n';

interface PrayerScheduleProps {
  lang: Language;
}

interface AladhanResponse {
  data: {
    timings: {
      Fajr: string;
      Dhuhr: string;
      Asr: string;
      Maghrib: string;
      Isha: string;
    };
    date: {
      readable: string;
      hijri: {
        day: string;
        month: { en: string; ar: string };
        year: string;
      };
    };
  };
}

export const PrayerSchedule: React.FC<PrayerScheduleProps> = ({ lang }) => {
  const t = translations[lang];

  // Osaka Coordinates: 34.6937° N, 135.5023° E (JST UTC+9)
  const [timings, setTimings] = useState({
    fajr: '03:45',
    dhuhr: '12:12',
    asr: '15:56',
    maghrib: '19:12',
    isha: '20:34',
  });

  const [hijriStr, setHijriStr] = useState<string>('');
  const [activePrayer, setActivePrayer] = useState<string>('dhuhr');
  const [currentTimeJST, setCurrentTimeJST] = useState<string>('');

  // Clock Hand Angles for Realtime Analog Clock (JST)
  const [hourAngle, setHourAngle] = useState(0);
  const [minuteAngle, setMinuteAngle] = useState(0);
  const [secondAngle, setSecondAngle] = useState(0);

  // Fetch Realtime Prayer Times for Osaka via Aladhan API
  useEffect(() => {
    const fetchOsakaPrayerTimes = async () => {
      try {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = today.getDate();

        const res = await fetch(
          `https://api.aladhan.com/v1/timings/${day}-${month}-${year}?latitude=34.6937&longitude=135.5023&method=2`
        );
        const json: AladhanResponse = await res.json();

        if (json && json.data) {
          const tData = json.data.timings;
          setTimings({
            fajr: tData.Fajr.split(' ')[0],
            dhuhr: tData.Dhuhr.split(' ')[0],
            asr: tData.Asr.split(' ')[0],
            maghrib: tData.Maghrib.split(' ')[0],
            isha: tData.Isha.split(' ')[0],
          });

          const h = json.data.date.hijri;
          setHijriStr(`${h.day} ${h.month.en} ${h.year} H`);
        }
      } catch (err) {
        console.log('Using fallback Osaka prayer times');
      }
    };

    fetchOsakaPrayerTimes();
  }, []);

  // Update Realtime Osaka Analog & Digital Clock (JST Asia/Tokyo)
  useEffect(() => {
    const updateOsakaClock = () => {
      const now = new Date();

      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      const jstFormatted = new Intl.DateTimeFormat('id-ID', options).format(now);
      setCurrentTimeJST(jstFormatted);

      const jstDateStr = now.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' });
      const jstDate = new Date(jstDateStr);
      const hours = jstDate.getHours();
      const minutes = jstDate.getMinutes();
      const seconds = jstDate.getSeconds();

      setSecondAngle(seconds * 6);
      setMinuteAngle(minutes * 6 + seconds * 0.1);
      setHourAngle((hours % 12) * 30 + minutes * 0.5);

      const currentMinutes = hours * 60 + minutes;
      const timeToMinutes = (timeStr: string) => {
        const [ph, pm] = timeStr.split(':').map(Number);
        return ph * 60 + pm;
      };

      const fajrM = timeToMinutes(timings.fajr);
      const dhuhrM = timeToMinutes(timings.dhuhr);
      const asrM = timeToMinutes(timings.asr);
      const maghribM = timeToMinutes(timings.maghrib);
      const ishaM = timeToMinutes(timings.isha);

      if (currentMinutes >= fajrM && currentMinutes < dhuhrM) {
        setActivePrayer('dhuhr');
      } else if (currentMinutes >= dhuhrM && currentMinutes < asrM) {
        setActivePrayer('asr');
      } else if (currentMinutes >= asrM && currentMinutes < maghribM) {
        setActivePrayer('maghrib');
      } else if (currentMinutes >= maghribM && currentMinutes < ishaM) {
        setActivePrayer('isha');
      } else {
        setActivePrayer('fajr');
      }
    };

    updateOsakaClock();
    const interval = setInterval(updateOsakaClock, 1000);
    return () => clearInterval(interval);
  }, [timings]);

  const prayerList = [
    { key: 'fajr', name: t.prayer.fajr, time: timings.fajr },
    { key: 'dhuhr', name: t.prayer.dhuhr, time: timings.dhuhr },
    { key: 'asr', name: t.prayer.asr, time: timings.asr },
    { key: 'maghrib', name: t.prayer.maghrib, time: timings.maghrib },
    { key: 'isha', name: t.prayer.isha, time: timings.isha },
  ];

  return (
    <section id="schedule" className="relative z-20 -mt-6 sm:-mt-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="bg-white rounded-t-3xl rounded-b-xl shadow-2xl p-4 sm:p-8 border border-[#004d2c]/15">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6">
          {/* Realtime Dual Clock */}
          <div className="flex items-center gap-3 sm:gap-5 text-left w-full lg:w-auto">
            {/* Realtime Analog Clock */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#004d2c] border-2 border-[#d97706] shadow-md flex items-center justify-center shrink-0">
              <div className="absolute top-1 text-[7px] sm:text-[8px] text-[#d97706] font-bold">12</div>
              <div className="absolute right-1 text-[7px] sm:text-[8px] text-[#d97706] font-bold">3</div>
              <div className="absolute bottom-1 text-[7px] sm:text-[8px] text-[#d97706] font-bold">6</div>
              <div className="absolute left-1 text-[7px] sm:text-[8px] text-[#d97706] font-bold">9</div>

              <div
                className="absolute w-1 h-3.5 sm:h-4 bg-white rounded-full origin-bottom bottom-1/2 left-[calc(50%-2px)] shadow-xs transition-transform duration-300"
                style={{ transform: `rotate(${hourAngle}deg)` }}
              />
              <div
                className="absolute w-0.5 h-5 sm:h-6 bg-[#d97706] rounded-full origin-bottom bottom-1/2 left-[calc(50%-1px)] shadow-xs transition-transform duration-300"
                style={{ transform: `rotate(${minuteAngle}deg)` }}
              />
              <div
                className="absolute w-[1px] h-6 sm:h-7 bg-red-400 rounded-full origin-bottom bottom-1/2 left-[calc(50%-0.5px)] transition-transform duration-100"
                style={{ transform: `rotate(${secondAngle}deg)` }}
              />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#d97706] z-10" />
            </div>

            {/* Realtime Digital Clock */}
            <div className="flex-grow">
              <h3 className="font-montserrat font-bold text-base sm:text-xl text-[#004d2c] leading-tight">
                {t.prayer.title}
              </h3>

              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="font-mono font-bold text-xl sm:text-2xl text-[#004d2c] tracking-tight">
                  {currentTimeJST ? currentTimeJST : '12:00:00'} <span className="text-xs font-semibold text-[#d97706]">JST</span>
                </span>
                {hijriStr && <span className="text-[11px] font-bold text-[#d97706] block sm:inline">({hijriStr})</span>}
              </div>

              <p className="text-[11px] sm:text-xs text-[#111827]/70 flex items-center gap-1 font-inter mt-0.5">
                <MapPin className="w-3 h-3 text-[#d97706]" /> Osaka, Japan (JST)
              </p>
            </div>
          </div>

          {/* Mobile Horizontal Scrollable / 5-Column Prayer Timeline */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 w-full lg:w-auto">
            {prayerList.map((p) => {
              const isNext = activePrayer === p.key;
              return (
                <div
                  key={p.key}
                  className={`flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-t-2xl rounded-b-md transition-all relative ${
                    isNext
                      ? 'bg-[#004d2c] text-white shadow-lg ring-2 ring-[#004d2c]/30 scale-[1.02]'
                      : 'bg-[#faf8f5] text-[#111827] border border-[#004d2c]/10'
                  }`}
                >
                  {isNext && (
                    <span className="absolute -top-2 bg-[#d97706] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-0.5 shadow-xs">
                      <CheckCircle2 className="w-2 h-2" /> Next
                    </span>
                  )}
                  <span
                    className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider font-inter mb-0.5 ${
                      isNext ? 'text-[#d97706]' : 'text-[#111827]/60'
                    }`}
                  >
                    {p.name}
                  </span>
                  <span className="font-montserrat font-bold text-base sm:text-xl leading-none">
                    {p.time}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
