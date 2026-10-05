import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle,
  HelpCircle,
  Sparkles,
  Search,
  Volume2,
  BookmarkCheck,
  Award,
  Layers,
  FileText,
  RotateCcw,
  Check,
  X,
  Languages,
  Eye,
  EyeOff,
  Flame,
  Info
} from 'lucide-react';
import {
  TEXT_TYPES,
  EJERCICIO_1_ITEMS,
  EJERCICIO_2_ITEMS,
  EJERCICIO_3_ITEMS,
  EJERCICIO_4_ITEMS,
  EJERCICIO_5_ITEMS,
  EJERCICIO_6_STORY,
  EJERCICIO_7_DATA,
  EJERCICIO_8_ITEMS,
  MINI_EXAM_ITEMS,
  MEMORIZE_ITEMS,
  TEXTO_GENERAL
} from './data.ts';
import { SpanishArmenianCard } from './SpanishArmenianCard.tsx';
import { AnswerButton } from './AnswerButton.tsx';

type TabType = 'all' | 'theory' | 'exercises' | 'miniexam' | 'memorize' | 'generaltext';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [globalShowArmenian, setGlobalShowArmenian] = useState<boolean>(false);
  const [globalShowAnswers, setGlobalShowAnswers] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Interactive user selections state for practice
  const [ex1Selected, setEx1Selected] = useState<Record<number, string>>({});
  const [ex2Selected, setEx2Selected] = useState<Record<number, string>>({});
  const [ex4Selected, setEx4Selected] = useState<Record<number, string>>({});
  const [ex5Selected, setEx5Selected] = useState<Record<number, string>>({});
  const [ex8Selected, setEx8Selected] = useState<Record<number, boolean>>({});

  // Active paragraph in Texto general for highlighting
  const [selectedParagraph, setSelectedParagraph] = useState<number | null>(null);

  // Audio helper
  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  // Reset all exercises
  const resetProgress = () => {
    setEx1Selected({});
    setEx2Selected({});
    setEx4Selected({});
    setEx5Selected({});
    setEx8Selected({});
  };

  // Calculate score
  const scoreEx2 = Object.entries(ex2Selected).filter(
    ([id, key]) => EJERCICIO_2_ITEMS.find((item) => item.id === Number(id))?.correctKey === key
  ).length;

  const scoreEx4 = Object.entries(ex4Selected).filter(
    ([id, val]) => EJERCICIO_4_ITEMS.find((item) => item.id === Number(id))?.correctEs === val
  ).length;

  const scoreEx5 = Object.entries(ex5Selected).filter(
    ([id, val]) => EJERCICIO_5_ITEMS.find((item) => item.id === Number(id))?.correctEs === val
  ).length;

  const scoreEx8 = Object.entries(ex8Selected).filter(
    ([id, val]) => EJERCICIO_8_ITEMS.find((item) => item.id === Number(id))?.isTrue === val
  ).length;

  const totalAnswered =
    Object.keys(ex2Selected).length +
    Object.keys(ex4Selected).length +
    Object.keys(ex5Selected).length +
    Object.keys(ex8Selected).length;

  const totalCorrect = scoreEx2 + scoreEx4 + scoreEx5 + scoreEx8;

  const filterMatches = (text: string) => {
    if (!searchQuery.trim()) return true;
    return text.toLowerCase().includes(searchQuery.toLowerCase());
  };

  return (
    <div className="min-h-screen bg-slate-100/70 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      {/* Top Banner / Navigation */}
      <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold tracking-tight flex items-center gap-2">
                  <span>Tipos de textos</span>
                  <span className="text-slate-400 font-light">—</span>
                  <span className="text-indigo-600 dark:text-indigo-400">Տեքստերի տեսակները</span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Preparación para examen de 7.º curso • 7-րդ դասարանի քննության պատրաստություն
                </p>
              </div>
            </div>

            {/* Quick Global Toggles */}
            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => setGlobalShowArmenian((prev) => !prev)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  globalShowArmenian
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700'
                }`}
                title="Բացել կամ թաքցնել բոլոր հայերեն թարգմանությունները"
              >
                <Languages className="w-3.5 h-3.5" />
                <span>{globalShowArmenian ? 'Բոլոր թարգմանությունները բաց են' : 'Բացել բոլոր թարգմանությունները'}</span>
              </button>

              <button
                type="button"
                onClick={() => setGlobalShowAnswers((prev) => !prev)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  globalShowAnswers
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700'
                }`}
                title="Բացել կամ թաքցնել բոլոր պատասխանները"
              >
                {globalShowAnswers ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{globalShowAnswers ? 'Պատասխանները բաց են' : 'Բացել բոլոր պատասխանները'}</span>
              </button>

              {totalAnswered > 0 && (
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-800 rounded-lg text-xs text-amber-800 dark:text-amber-300 font-medium">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span>
                    Արդյունք: <b>{totalCorrect}</b> / {totalAnswered}
                  </span>
                  <button
                    onClick={resetProgress}
                    title="Մաքրել պատասխանները"
                    className="ml-1 hover:text-red-500"
                  >
                    <RotateCcw className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 sm:gap-2 mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 overflow-x-auto no-scrollbar text-xs sm:text-sm">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              Բոլոր բաժինները (Todos)
            </button>
            <button
              onClick={() => setActiveTab('theory')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                activeTab === 'theory'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              📖 Տեսություն (6 Տեսակ)
            </button>
            <button
              onClick={() => setActiveTab('exercises')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                activeTab === 'exercises'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              ✏️ Վարժություններ (Ejercicios 1-8)
            </button>
            <button
              onClick={() => setActiveTab('miniexam')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                activeTab === 'miniexam'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              📝 Փոքր քննություն (Mini examen)
            </button>
            <button
              onClick={() => setActiveTab('memorize')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                activeTab === 'memorize'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              🧠 Հիշելու համար (Memo)
            </button>
            <button
              onClick={() => setActiveTab('generaltext')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                activeTab === 'generaltext'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              ⚽ Ընդհանուր տեքստ (Texto general)
            </button>
          </div>
        </div>
      </header>

      {/* Guide / Instruction strip */}
      <div className="bg-gradient-to-r from-indigo-50 via-amber-50 to-emerald-50 dark:from-indigo-950/40 dark:via-slate-900 dark:to-emerald-950/40 border-b border-indigo-100 dark:border-slate-800 py-2.5 px-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-base">💡</span>
            <span>
              <b>Ինտերակտիվ կանոն:</b> Կտտացրեք ցանկացած <b>իսպաներեն</b> տեքստի վրա՝ <b>հայերեն թարգմանությունը</b> բացելու համար։
              Յուրաքանչյուր առաջադրանք ունի առանձին <b>«Պատասխան»</b> կոճակ։
            </span>
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Որոնել բառ կամ տեքստ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-12">
        {/* ======================================================== */}
        {/* SECTION 1: THEORY (1 to 6 Text Types) */}
        {/* ======================================================== */}
        {(activeTab === 'all' || activeTab === 'theory') && (
          <section id="theory" className="space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between flex-wrap gap-2">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
                  <BookmarkCheck className="w-4 h-4" />
                  <span>Տեսություն • Teoría</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Tipos de textos — Տեքստերի տեսակները
                </h2>
              </div>
              <span className="text-xs bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 px-3 py-1 rounded-full font-medium">
                6 հիմնական տեսակ
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {TEXT_TYPES.map((type) => (
                <div
                  key={type.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
                >
                  <div className="p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">
                          {type.id}
                        </span>
                        <div>
                          <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                            {type.nameEs}
                          </h3>
                          <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                            {type.nameAm}
                          </span>
                        </div>
                      </div>
                      <span className={`text-xs px-2.5 py-1 rounded-full border font-semibold ${type.badgeColor}`}>
                        {type.nameEs}
                      </span>
                    </div>

                    {/* Spanish with interactive Armenian click reveal */}
                    <SpanishArmenianCard
                      textEs={type.definitionEs}
                      textAm={type.definitionAm}
                      globalShowArmenian={globalShowArmenian}
                      label="Սահմանում"
                    />

                    {/* Frequent words / expressions if available */}
                    {type.frequentWords && type.frequentWords.length > 0 && (
                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
                          <Flame className="w-3.5 h-3.5 text-amber-500" />
                          <span>{type.frequentWordsLabel}:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {type.frequentWords.map((word, idx) => (
                            <span
                              key={idx}
                              onClick={() => speakText(word.replace('…', ''))}
                              title="Սեղմիր լսելու համար"
                              className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 hover:bg-amber-100 text-slate-800 dark:bg-slate-800 dark:hover:bg-amber-950 dark:text-slate-200 border border-slate-200 dark:border-slate-700 cursor-pointer transition-colors"
                            >
                              {word}
                            </span>
                          ))}
                        </div>
                        {type.frequentWordsAm && (
                          <div className="mt-2 text-xs text-slate-500 dark:text-slate-400 italic">
                            🇦🇲 {type.frequentWordsAm}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* SECTION 2: EXERCISES 1 TO 8 */}
        {/* ======================================================== */}
        {(activeTab === 'all' || activeTab === 'exercises') && (
          <section id="exercises" className="space-y-12">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between flex-wrap gap-2">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>Գործնական վարժություններ • Ejercicios</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Վարժություններ 1-ից 8 (Քայլ առ քայլ)
                </h2>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Բոլոր 8 վարժությունները՝ ինտերակտիվ թարգմանությամբ և պատասխաններով
              </span>
            </div>

            {/* ---------------- Ejercicio 1 ---------------- */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="flex items-start justify-between flex-wrap gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
                    Ejercicio 1
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                    Identifica el tipo de texto — Որոշի՛ր տեքստի տեսակը
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Elige entre: <b>Narrativo / Descriptivo / Expositivo / Argumentativo / Instructivo / Dialogado</b>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {EJERCICIO_1_ITEMS.map((item) => {
                  const selected = ex1Selected[item.id];
                  const isCorrect = selected === item.answerTypeEs;

                  return (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 text-xs font-bold flex items-center justify-center">
                            #{item.id}
                          </span>
                          <span className="text-xs text-slate-500">
                            {item.questionEs} — {item.questionAm}
                          </span>
                        </div>

                        {/* Spanish + Armenian click reveal */}
                        <SpanishArmenianCard
                          textEs={item.textEs}
                          textAm={item.textAm}
                          globalShowArmenian={globalShowArmenian}
                        />

                        {/* Interactive options to test yourself */}
                        <div className="pt-2">
                          <div className="text-xs text-slate-500 dark:text-slate-400 mb-1.5 font-medium">
                            Ընտրիր տարբերակը փորձելու համար:
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {item.options.map((opt) => {
                              const isThisSelected = selected === opt;
                              let btnStyle =
                                'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-indigo-400';
                              if (isThisSelected) {
                                btnStyle =
                                  opt === item.answerTypeEs
                                    ? 'bg-emerald-600 text-white border-emerald-600'
                                    : 'bg-rose-600 text-white border-rose-600';
                              }

                              return (
                                <button
                                  key={opt}
                                  type="button"
                                  onClick={() =>
                                    setEx1Selected((prev) => ({
                                      ...prev,
                                      [item.id]: opt,
                                    }))
                                  }
                                  className={`px-2.5 py-1 text-xs rounded-lg font-medium border transition-colors ${btnStyle}`}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Dedicated Answer button */}
                      <AnswerButton
                        answerTitleEs={item.answerTypeEs}
                        answerTitleAm={item.answerTypeAm}
                        explanationEs={
                          item.whyQuestionEs
                            ? `${item.whyQuestionEs} ${item.explanationEs}`
                            : item.explanationEs
                        }
                        explanationAm={
                          item.whyQuestionAm
                            ? `${item.whyQuestionAm} ${item.explanationAm}`
                            : item.explanationAm
                        }
                        globalShowAnswers={globalShowAnswers}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ---------------- Ejercicio 2 ---------------- */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  Ejercicio 2
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  Elige la respuesta correcta — Ընտրի՛ր ճիշտ պատասխանը
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Թեստային հարցեր (A, B, C, D)՝ երկլեզու տարբերակներով և պատասխաններով
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {EJERCICIO_2_ITEMS.map((item) => {
                  const userChoice = ex2Selected[item.id];
                  const hasAnswered = !!userChoice;

                  return (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center">
                            #{item.id}
                          </span>
                        </div>

                        {/* Question Card */}
                        <SpanishArmenianCard
                          textEs={item.questionEs}
                          textAm={item.questionAm}
                          globalShowArmenian={globalShowArmenian}
                          label="Հարց"
                        />

                        {/* Choices A, B, C, D */}
                        <div className="space-y-2 pt-1">
                          {item.choices.map((choice) => {
                            const isSelected = userChoice === choice.key;
                            const isCorrectChoice = choice.key === item.correctKey;

                            let choiceStyle =
                              'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-amber-400 text-slate-800 dark:text-slate-200';

                            if (hasAnswered) {
                              if (isSelected) {
                                choiceStyle = isCorrectChoice
                                  ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold'
                                  : 'bg-rose-50 dark:bg-rose-950/50 border-rose-500 text-rose-900 dark:text-rose-200';
                              } else if (isCorrectChoice && globalShowAnswers) {
                                choiceStyle =
                                  'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-400 text-emerald-800';
                              }
                            }

                            return (
                              <button
                                key={choice.key}
                                type="button"
                                onClick={() =>
                                  setEx2Selected((prev) => ({
                                    ...prev,
                                    [item.id]: choice.key,
                                  }))
                                }
                                className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between gap-3 ${choiceStyle}`}
                              >
                                <div className="flex items-center gap-2.5">
                                  <span className="w-6 h-6 rounded-md bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-xs shrink-0">
                                    {choice.key}
                                  </span>
                                  <div>
                                    <span className="font-medium">{choice.textEs}</span>
                                    <span className="text-slate-400 dark:text-slate-500 ml-1.5">
                                      — {choice.textAm}
                                    </span>
                                  </div>
                                </div>

                                {hasAnswered && isSelected && (
                                  <div>
                                    {isCorrectChoice ? (
                                      <Check className="w-4 h-4 text-emerald-600" />
                                    ) : (
                                      <X className="w-4 h-4 text-rose-600" />
                                    )}
                                  </div>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Dedicated Answer button */}
                      <AnswerButton
                        answerTitleEs={item.answerEs}
                        answerTitleAm={item.answerAm}
                        globalShowAnswers={globalShowAnswers}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ---------------- Ejercicio 3 ---------------- */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300">
                  Ejercicio 3
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  Encuentra las pistas — Գտի՛ր հուշումները
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Բացահայտիր տեքստի տեսակը մատնանշող բառերը, կարծիքն ու փաստարկը
                </p>
              </div>

              <div className="space-y-6">
                {EJERCICIO_3_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-slate-50/50 dark:bg-slate-900/50 space-y-4"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-cyan-600 text-white text-xs font-bold flex items-center justify-center">
                        #{item.id}
                      </span>
                      <span className="font-semibold text-sm text-slate-700 dark:text-slate-300">
                        {item.questionEs} — {item.questionAm}
                      </span>
                    </div>

                    <SpanishArmenianCard
                      textEs={item.textEs}
                      textAm={item.textAm}
                      globalShowArmenian={globalShowArmenian}
                    />

                    {/* Dedicated Answer button with custom content if breakdown exists */}
                    <AnswerButton
                      answerTitleEs={item.answerEs}
                      answerTitleAm={item.answerAm}
                      customContent={
                        item.breakdown ? (
                          <div className="mt-3 space-y-2">
                            {item.breakdown.map((b, idx) => (
                              <div
                                key={idx}
                                className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-emerald-200 dark:border-emerald-800/60"
                              >
                                <div className="text-xs font-bold text-emerald-800 dark:text-emerald-300 mb-1">
                                  {b.labelEs} — {b.labelAm}:
                                </div>
                                <div className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100">
                                  🇪🇸 {b.contentEs}
                                </div>
                                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                                  🇦🇲 {b.contentAm}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : undefined
                      }
                      globalShowAnswers={globalShowAnswers}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------- Ejercicio 4 & 5 (Side by side comparison) ---------------- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Ejercicio 4 */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 space-y-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
                      Ejercicio 4
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                      ¿Narrativo o descriptivo? — Պատմողակա՞ն, թե՞ նկարագրական
                    </h3>
                  </div>

                  <div className="space-y-4 mt-4">
                    {EJERCICIO_4_ITEMS.map((item) => {
                      const userChoice = ex4Selected[item.id];
                      return (
                        <div
                          key={item.id}
                          className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-3"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-500">#{item.id}</span>
                          </div>

                          <SpanishArmenianCard
                            textEs={item.textEs}
                            textAm={item.textAm}
                            globalShowArmenian={globalShowArmenian}
                            size="sm"
                          />

                          <div className="flex gap-2">
                            {item.options.map((opt) => {
                              const isSelected = userChoice === opt.es;
                              let btnClass =
                                'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700';
                              if (isSelected) {
                                btnClass =
                                  opt.es === item.correctEs
                                    ? 'bg-emerald-600 text-white border-emerald-600 font-semibold'
                                    : 'bg-rose-600 text-white border-rose-600 font-semibold';
                              }

                              return (
                                <button
                                  key={opt.es}
                                  type="button"
                                  onClick={() =>
                                    setEx4Selected((prev) => ({
                                      ...prev,
                                      [item.id]: opt.es,
                                    }))
                                  }
                                  className={`flex-1 py-1.5 px-3 rounded-lg text-xs border transition-colors ${btnClass}`}
                                >
                                  {opt.es} ({opt.am})
                                </button>
                              );
                            })}
                          </div>

                          <AnswerButton
                            answerTitleEs={item.correctEs}
                            answerTitleAm={item.correctAm}
                            globalShowAnswers={globalShowAnswers}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Ejercicio 5 */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 space-y-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300">
                      Ejercicio 5
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                      ¿Expositivo o argumentativo? — Բացատրակա՞ն, թե՞ փաստարկային
                    </h3>
                  </div>

                  <div className="space-y-4 mt-4">
                    {EJERCICIO_5_ITEMS.map((item) => {
                      const userChoice = ex5Selected[item.id];
                      return (
                        <div
                          key={item.id}
                          className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-3"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-500">#{item.id}</span>
                          </div>

                          <SpanishArmenianCard
                            textEs={item.textEs}
                            textAm={item.textAm}
                            globalShowArmenian={globalShowArmenian}
                            size="sm"
                          />

                          <div className="flex gap-2">
                            {item.options.map((opt) => {
                              const isSelected = userChoice === opt.es;
                              let btnClass =
                                'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700';
                              if (isSelected) {
                                btnClass =
                                  opt.es === item.correctEs
                                    ? 'bg-emerald-600 text-white border-emerald-600 font-semibold'
                                    : 'bg-rose-600 text-white border-rose-600 font-semibold';
                              }

                              return (
                                <button
                                  key={opt.es}
                                  type="button"
                                  onClick={() =>
                                    setEx5Selected((prev) => ({
                                      ...prev,
                                      [item.id]: opt.es,
                                    }))
                                  }
                                  className={`flex-1 py-1.5 px-3 rounded-lg text-xs border transition-colors ${btnClass}`}
                                >
                                  {opt.es} ({opt.am})
                                </button>
                              );
                            })}
                          </div>

                          <AnswerButton
                            answerTitleEs={item.correctEs}
                            answerTitleAm={item.correctAm}
                            globalShowAnswers={globalShowAnswers}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* ---------------- Ejercicio 6 ---------------- */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">
                  Ejercicio 6
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  Lee y responde — Կարդա՛ և պատասխանի՛ր
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Կարդա պատմությունը Պաբլոյի մասին և պատասխանիր 5 հարցերին
                </p>
              </div>

              {/* Story presentation */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Տեքստ / Texto
                </span>
                <SpanishArmenianCard
                  textEs={EJERCICIO_6_STORY.textEs}
                  textAm={EJERCICIO_6_STORY.textAm}
                  globalShowArmenian={globalShowArmenian}
                  size="lg"
                />
              </div>

              {/* 5 Questions */}
              <div className="space-y-4 pt-3">
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  Preguntas — Հարցեր
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {EJERCICIO_6_STORY.questions.map((q) => (
                    <div
                      key={q.num}
                      className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-5 h-5 rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center">
                            {q.num}
                          </span>
                          <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">
                            {q.questionEs}
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 ml-7 mb-2">
                          🇦🇲 {q.questionAm}
                        </div>
                      </div>

                      <AnswerButton
                        answerTitleEs={q.answerEs}
                        answerTitleAm={q.answerAm}
                        globalShowAnswers={globalShowAnswers}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ---------------- Ejercicio 7 ---------------- */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                  Ejercicio 7
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  Convierte el texto — Փոխի՛ր տեքստի տեսակը
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Նկարագրական տեքստը դարձրու պատմողական (Descriptivo ➔ Narrativo)
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Original text */}
                <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                      Texto original — Սկզբնական տեքստ
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-md font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      ✅ {EJERCICIO_7_DATA.originalTypeEs} ({EJERCICIO_7_DATA.originalTypeAm})
                    </span>
                  </div>

                  <SpanishArmenianCard
                    textEs={EJERCICIO_7_DATA.originalTextEs}
                    textAm={EJERCICIO_7_DATA.originalTextAm}
                    globalShowArmenian={globalShowArmenian}
                  />

                  <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-900 text-xs text-amber-900 dark:text-amber-200">
                    <p className="font-semibold">🎯 {EJERCICIO_7_DATA.taskEs}</p>
                    <p className="mt-0.5">{EJERCICIO_7_DATA.taskAm}</p>
                  </div>
                </div>

                {/* Converted Example */}
                <div className="p-5 rounded-2xl border border-indigo-200 dark:border-indigo-900 bg-indigo-50/40 dark:bg-indigo-950/30 space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wide">
                        Օրինակ / Ejemplo de conversión
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-md font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                        ➡️ {EJERCICIO_7_DATA.resultTypeEs} ({EJERCICIO_7_DATA.resultTypeAm})
                      </span>
                    </div>

                    <SpanishArmenianCard
                      textEs={EJERCICIO_7_DATA.exampleEs}
                      textAm={EJERCICIO_7_DATA.exampleAm}
                      globalShowArmenian={globalShowArmenian}
                    />
                  </div>

                  <AnswerButton
                    answerTitleEs="Narrativo — Պատմողական"
                    explanationEs="Ayer mi gato salió al jardín, vio un pájaro y empezó a correr detrás de él. Después volvió a casa."
                    explanationAm="Երեկ իմ կատուն դուրս եկավ այգի, տեսավ թռչուն և սկսեց վազել նրա հետևից։ Հետո վերադարձավ տուն։"
                    globalShowAnswers={globalShowAnswers}
                  />
                </div>
              </div>
            </div>

            {/* ---------------- Ejercicio 8 ---------------- */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300">
                  Ejercicio 8
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  Verdadero o falso — Ճի՞շտ, թե՞ սխալ
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Ստուգիր քո գիտելիքները պնդումների ճշմարտացիության վերաբերյալ
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {EJERCICIO_8_ITEMS.map((item) => {
                  const userVal = ex8Selected[item.id];
                  const hasAnswered = userVal !== undefined;

                  return (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col justify-between space-y-3"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-violet-600 text-white text-xs font-bold flex items-center justify-center">
                            {item.id}
                          </span>
                        </div>

                        <SpanishArmenianCard
                          textEs={item.statementEs}
                          textAm={item.statementAm}
                          globalShowArmenian={globalShowArmenian}
                          size="sm"
                        />

                        {/* Interactive True/False buttons */}
                        <div className="flex gap-2 pt-1">
                          <button
                            type="button"
                            onClick={() =>
                              setEx8Selected((prev) => ({
                                ...prev,
                                [item.id]: true,
                              }))
                            }
                            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold border transition-all ${
                              userVal === true
                                ? item.isTrue
                                  ? 'bg-emerald-600 text-white border-emerald-600'
                                  : 'bg-rose-600 text-white border-rose-600'
                                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-emerald-400'
                            }`}
                          >
                            ✅ Verdadero (Ճիշտ)
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              setEx8Selected((prev) => ({
                                ...prev,
                                [item.id]: false,
                              }))
                            }
                            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold border transition-all ${
                              userVal === false
                                ? !item.isTrue
                                  ? 'bg-emerald-600 text-white border-emerald-600'
                                  : 'bg-rose-600 text-white border-rose-600'
                                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-rose-400'
                            }`}
                          >
                            ❌ Falso (Սխալ)
                          </button>
                        </div>
                      </div>

                      {/* Dedicated Answer button */}
                      <AnswerButton
                        answerTitleEs={item.isTrue ? 'Verdadero' : 'Falso'}
                        answerTitleAm={item.isTrue ? 'Ճիշտ' : 'Սխալ'}
                        explanationEs={item.correctionEs}
                        explanationAm={item.correctionAm}
                        globalShowAnswers={globalShowAnswers}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* SECTION 3: MINI EXAM (A to F) */}
        {/* ======================================================== */}
        {(activeTab === 'all' || activeTab === 'miniexam') && (
          <section id="miniexam" className="space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between flex-wrap gap-2">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-1">
                  <Award className="w-4 h-4" />
                  <span>Քննական փորձություն • Mini examen</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  📝 Mini examen — Փոքր քննություն
                </h2>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Lee cada fragmento e indica: <b>1. Tipo de texto</b>, <b>2. Una característica</b>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {MINI_EXAM_ITEMS.map((item) => (
                <div
                  key={item.letter}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 space-y-4 shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-xl bg-purple-600 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                        {item.letter}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        Fragmento {item.letter}
                      </span>
                    </div>

                    <SpanishArmenianCard
                      textEs={item.textEs}
                      textAm={item.textAm}
                      globalShowArmenian={globalShowArmenian}
                    />
                  </div>

                  <AnswerButton
                    answerTitleEs={item.typeEs}
                    answerTitleAm={item.typeAm}
                    explanationEs={`Característica: ${item.characteristicEs}`}
                    explanationAm={`Հատկանիշ: ${item.characteristicAm}`}
                    globalShowAnswers={globalShowAnswers}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* SECTION 4: PARA MEMORIZAR (Cheat sheet / matrix) */}
        {/* ======================================================== */}
        {(activeTab === 'all' || activeTab === 'memorize') && (
          <section id="memorize" className="space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between flex-wrap gap-2">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Հուշաթերթիկ • Para memorizar</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  🧠 Para memorizar — Հիշելու համար
                </h2>
              </div>
              <span className="text-xs text-slate-500">
                Ամենատարածված հարցերը յուրաքանչյուր տեսակի համար
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {MEMORIZE_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => speakText(`${item.typeEs}. ${item.questionEs}`)}
                  className={`p-5 rounded-2xl border transition-all hover:scale-[1.02] cursor-pointer shadow-xs ${item.badgeColor}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold tracking-tight">{item.typeEs}</span>
                    <button
                      type="button"
                      title="Լսել"
                      className="p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-1">
                    <div className="text-base font-serif font-bold flex items-center gap-1.5">
                      <span>➡️ 🇪🇸</span>
                      <span>{item.questionEs}</span>
                    </div>
                    <div className="text-sm font-medium opacity-90 flex items-center gap-1.5">
                      <span>➡️ 🇦🇲</span>
                      <span>{item.questionAm}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* SECTION 5: TEXTO GENERAL (Un partido especial) */}
        {/* ======================================================== */}
        {(activeTab === 'all' || activeTab === 'generaltext') && (
          <section id="generaltext" className="space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between flex-wrap gap-2">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
                  <Layers className="w-4 h-4" />
                  <span>Ընդհանուր տեքստ • Texto general</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {TEXTO_GENERAL.titleEs} — {TEXTO_GENERAL.titleAm}
                </h2>
              </div>
              <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 px-3 py-1 rounded-full font-medium">
                6 պարբերություն • 6 տեսակ
              </span>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs sm:text-sm text-blue-900 dark:text-blue-200 flex items-start gap-2.5">
              <Info className="w-4 h-4 mt-0.5 shrink-0" />
              <span>
                <b>Նկարագրություն:</b> Ընդհանուր չեզոք տեքստ ֆուտբոլի մասին, որտեղ աշակերտը պետք է ինքնուրույն գտնի տեքստի տարբեր տեսակները (պատմողական, նկարագրական, բացատրական, հրահանգային, երկխոսական, փաստարկային)։ Կտտացրեք ցանկացած պարբերության վրա՝ թարգմանությունը բացելու համար։
              </span>
            </div>

            {/* Paragraphs list */}
            <div className="space-y-4">
              {TEXTO_GENERAL.paragraphs.map((p) => {
                const isSelected = selectedParagraph === p.pNum;

                return (
                  <div
                    key={p.pNum}
                    className={`rounded-2xl border transition-all ${
                      isSelected
                        ? 'border-indigo-500 shadow-md ring-2 ring-indigo-200 dark:ring-indigo-900'
                        : 'border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <div className="bg-slate-50 dark:bg-slate-900/80 px-4 py-2 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between rounded-t-2xl">
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Պարբերություն #{p.pNum} (Párrafo {p.pNum})
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedParagraph(isSelected ? null : p.pNum)
                        }
                        className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                      >
                        {isSelected ? 'Փակել տեսակի նշումը' : 'Ո՞ր տեսակն է սա'}
                      </button>
                    </div>

                    <SpanishArmenianCard
                      textEs={p.es}
                      textAm={p.am}
                      globalShowArmenian={globalShowArmenian}
                      className="border-none rounded-t-none"
                    />

                    {isSelected && (
                      <div className="p-3 bg-indigo-50/80 dark:bg-indigo-950/60 border-t border-indigo-100 dark:border-indigo-900 flex items-center justify-between text-xs rounded-b-2xl">
                        <span className="font-semibold text-indigo-900 dark:text-indigo-200">
                          ✅ Տեսակը՝ {p.type} ({p.typeAm})
                        </span>
                        <span className="text-slate-500 dark:text-slate-400">
                          {p.pNum === 1 && 'Պատմվում է խաղի իրադարձությունների մասին'}
                          {p.pNum === 2 && 'Խաղադաշտի և Պաբլոյի նկարագրություն'}
                          {p.pNum === 3 && 'Բացատրվում է, թե ինչ է ֆուտբոլը'}
                          {p.pNum === 4 && 'Գործողությունների հերթականությամբ քայլեր'}
                          {p.pNum === 5 && 'Կառլոսի և Պաբլոյի զրույցը'}
                          {p.pNum === 6 && 'Կարծիք և դրա հիմնավորում'}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Ejercicio for Texto General */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-xs mt-8">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  Ejercicio — Վարժություն
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  Busca en el texto — Գտի՛ր տեքստում
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {TEXTO_GENERAL.exercises.map((ex) => (
                  <div
                    key={ex.num}
                    className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">
                          {ex.num}
                        </span>
                        <span className="font-bold text-sm text-slate-800 dark:text-slate-200">
                          {ex.targetTypeEs}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 ml-7">
                        🇦🇲 {ex.targetTypeAm}
                      </div>
                    </div>

                    <AnswerButton
                      answerTitleEs={ex.targetTypeEs}
                      answerTitleAm={ex.targetTypeAm}
                      explanationEs={ex.explanationRu}
                      explanationAm={ex.explanationAm}
                      customContent={
                        <div className="text-xs font-serif italic text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-slate-800/50 p-2 rounded-md">
                          «{ex.snippetEs}»
                        </div>
                      }
                      globalShowAnswers={globalShowAnswers}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 px-4 text-center text-xs text-slate-500">
        <p className="font-semibold text-slate-700 dark:text-slate-300">
          Tipos de textos — Տեքստերի տեսակները (7.º curso / 7-րդ դասարան)
        </p>
        <p className="mt-1">
          Իսպաներենից հայերեն ուսուցողական հավելված • Բոլոր նյութերը, վարժությունները և պատասխանները ամբողջությամբ
        </p>
      </footer>
    </div>
  );
}
