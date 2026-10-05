import React, { useState } from 'react';
import { Volume2, ChevronDown, ChevronUp, Languages } from 'lucide-react';

interface SpanishArmenianCardProps {
  textEs: string;
  textAm: string;
  globalShowArmenian?: boolean;
  className?: string;
  label?: string;
  badge?: string;
  highlightWords?: string[];
  size?: 'sm' | 'md' | 'lg';
}

export const SpanishArmenianCard: React.FC<SpanishArmenianCardProps> = ({
  textEs,
  textAm,
  globalShowArmenian = false,
  className = '',
  label,
  badge,
  size = 'md',
}) => {
  const [localOpen, setLocalOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const isOpen = globalShowArmenian || localOpen;

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textEs);
    utterance.lang = 'es-ES';
    utterance.rate = 0.9;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const handleToggle = () => {
    setLocalOpen((prev) => !prev);
  };

  const textSizeClass =
    size === 'lg' ? 'text-lg sm:text-xl font-medium' : size === 'sm' ? 'text-sm' : 'text-base sm:text-lg';

  return (
    <div
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleToggle();
        }
      }}
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-200 cursor-pointer select-none text-left
        ${
          isOpen
            ? 'border-indigo-300 dark:border-indigo-600 bg-white dark:bg-slate-900 shadow-sm'
            : 'border-slate-200 hover:border-indigo-300 dark:border-slate-800 dark:hover:border-slate-700 bg-slate-50/70 hover:bg-white dark:bg-slate-900/60 dark:hover:bg-slate-900'
        } ${className}`}
    >
      {/* Spanish text section */}
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800">
              <span>🇪🇸</span> Español
            </span>
            {label && (
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {label}
              </span>
            )}
            {badge && (
              <span className="text-xs px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 font-medium">
                {badge}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={handleSpeak}
              title="Լսել իսպաներեն արտասանությունը (Escuchar)"
              aria-label="Escuchar en español"
              className={`p-1.5 rounded-lg border text-xs transition-colors flex items-center gap-1 ${
                isSpeaking
                  ? 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950 dark:text-amber-300'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 dark:border-slate-700'
              }`}
            >
              <Volume2 className={`w-4 h-4 ${isSpeaking ? 'animate-pulse text-amber-600' : ''}`} />
              <span className="hidden sm:inline text-[11px] font-medium">
                {isSpeaking ? 'Հնչում է...' : 'Լսել'}
              </span>
            </button>

            <span className="inline-flex items-center gap-1 text-xs text-indigo-600 dark:text-indigo-400 font-medium ml-1">
              <Languages className="w-3.5 h-3.5" />
              <span className="hidden md:inline">
                {isOpen ? 'Թաքցնել թարգմանությունը' : 'Կտտացրեք թարգմանության համար'}
              </span>
              {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </span>
          </div>
        </div>

        {/* Text in Spanish */}
        <p className={`text-slate-900 dark:text-slate-100 leading-relaxed font-serif whitespace-pre-line ${textSizeClass}`}>
          {textEs}
        </p>

        {!isOpen && (
          <div className="mt-2.5 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping mr-1"></span>
            <span>👆 Սեղմեք տեքստի վրա՝ հայերեն թարգմանությունը բացելու համար</span>
          </div>
        )}
      </div>

      {/* Armenian translation revealed on click */}
      {isOpen && (
        <div className="border-t border-indigo-100 dark:border-slate-800 bg-gradient-to-br from-indigo-50/60 to-purple-50/40 dark:from-slate-800/80 dark:to-indigo-950/40 p-4 sm:p-5 transition-all">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-900 border border-red-200 dark:bg-red-950/60 dark:text-red-200 dark:border-red-800">
              <span>🇦🇲</span> Հայերեն թարգմանություն
            </span>
          </div>
          <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed whitespace-pre-line font-normal">
            {textAm}
          </p>
        </div>
      )}
    </div>
  );
};
