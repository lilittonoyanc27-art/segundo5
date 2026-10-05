import React, { useState } from 'react';
import { CheckCircle2, Eye, EyeOff, Sparkles } from 'lucide-react';

interface AnswerButtonProps {
  answerTitleEs?: string;
  answerTitleAm?: string;
  explanationEs?: string;
  explanationAm?: string;
  customContent?: React.ReactNode;
  globalShowAnswers?: boolean;
  buttonLabel?: string;
}

export const AnswerButton: React.FC<AnswerButtonProps> = ({
  answerTitleEs,
  answerTitleAm,
  explanationEs,
  explanationAm,
  customContent,
  globalShowAnswers = false,
  buttonLabel = 'Պատասխան (Ver respuesta)',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const show = globalShowAnswers || isOpen;

  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 shadow-xs border ${
          show
            ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-600 shadow-emerald-200 dark:shadow-none'
            : 'bg-white hover:bg-slate-50 text-emerald-700 hover:text-emerald-800 border-emerald-300 dark:bg-slate-800 dark:border-emerald-600 dark:text-emerald-400 dark:hover:bg-slate-700'
        }`}
      >
        {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        <span>{show ? 'Թաքցնել պատասխանը' : buttonLabel}</span>
      </button>

      {show && (
        <div className="mt-3 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/70 dark:bg-emerald-950/40 text-slate-800 dark:text-slate-100 transition-all animate-in fade-in slide-in-from-top-1 duration-200">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
            <div className="space-y-2 w-full">
              {answerTitleEs && (
                <div className="font-semibold text-emerald-900 dark:text-emerald-200 text-base">
                  <span>✅ {answerTitleEs}</span>
                  {answerTitleAm && (
                    <span className="ml-2 font-normal text-slate-700 dark:text-slate-300">
                      — {answerTitleAm}
                    </span>
                  )}
                </div>
              )}

              {explanationEs && (
                <div className="text-sm bg-white/70 dark:bg-slate-900/60 p-3 rounded-lg border border-emerald-100 dark:border-emerald-900/50 space-y-1">
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-xs text-amber-700 dark:text-amber-400 shrink-0">🇪🇸</span>
                    <span className="text-slate-800 dark:text-slate-200 font-medium">{explanationEs}</span>
                  </div>
                  {explanationAm && (
                    <div className="flex items-start gap-2 pt-1 border-t border-emerald-100/60 dark:border-slate-800">
                      <span className="font-semibold text-xs text-red-600 dark:text-red-400 shrink-0">🇦🇲</span>
                      <span className="text-slate-700 dark:text-slate-300">{explanationAm}</span>
                    </div>
                  )}
                </div>
              )}

              {customContent}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
