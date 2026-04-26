import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

type QuizOption = {
  label: string;
  score: number;
};

type QuizQuestion = {
  question: string;
  options: QuizOption[];
};

const quizQuestions: QuizQuestion[] = [
  {
    question: "When you enter an important room, how aligned is your appearance with your authority?",
    options: [
      { label: "Not aligned yet. I feel underestimated.", score: 1 },
      { label: "Somewhat aligned, but inconsistent.", score: 2 },
      { label: "Mostly aligned with occasional gaps.", score: 3 },
      { label: "Fully aligned and confidently consistent.", score: 4 },
    ],
  },
  {
    question: "How clear is your personal brand across LinkedIn, photos, and public presence?",
    options: [
      { label: "My visual identity is unclear.", score: 1 },
      { label: "I have a style, but no clear brand system.", score: 2 },
      { label: "My brand is clear but can be elevated.", score: 3 },
      { label: "My brand is premium and signature-level.", score: 4 },
    ],
  },
  {
    question: "How confident do you feel on camera or while speaking publicly?",
    options: [
      { label: "I avoid camera whenever possible.", score: 1 },
      { label: "I manage it, but I do not feel natural.", score: 2 },
      { label: "I am fairly confident and improving.", score: 3 },
      { label: "I command presence on-camera and on-stage.", score: 4 },
    ],
  },
  {
    question: "How intentional are your wardrobe and styling choices for your goals?",
    options: [
      { label: "Mostly reactive and last-minute.", score: 1 },
      { label: "Some planning, but not strategy-driven.", score: 2 },
      { label: "Purposeful for key moments.", score: 3 },
      { label: "Fully strategic and role-aligned.", score: 4 },
    ],
  },
  {
    question: "Which statement best describes your next goal?",
    options: [
      { label: "Build confidence and stop feeling invisible.", score: 1 },
      { label: "Upgrade my image for better opportunities.", score: 2 },
      { label: "Position myself as a credible authority.", score: 3 },
      { label: "Own an iconic, high-impact executive presence.", score: 4 },
    ],
  },
];

const getQuizResult = (score: number) => {
  if (score <= 8) {
    return {
      title: "Foundation Reset",
      summary:
        "You need a strong baseline: personal style clarity, confidence rituals, and a polished first-impression system.",
      cta: "Start Your Presence Reset",
    };
  }

  if (score <= 14) {
    return {
      title: "Authority Build",
      summary:
        "You are ready for a strategic upgrade. With wardrobe architecture and visual brand alignment, you can move into premium positioning.",
      cta: "Build My Authority Plan",
    };
  }

  return {
    title: "Executive Signature",
    summary:
      "You already carry strong presence. Now the focus is signature refinement, elite consistency, and iconic visibility across every platform.",
    cta: "Craft My Signature Presence",
  };
};

const TransformationSection = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const totalQuestions = quizQuestions.length;
  const isFinished = step >= totalQuestions;
  const progress = Math.round((Math.min(step, totalQuestions) / totalQuestions) * 100);
  const score = useMemo(() => answers.reduce((sum, val) => sum + val, 0), [answers]);
  const result = getQuizResult(score);

  const handleSelect = (value: number) => {
    const updated = [...answers];
    updated[step] = value;
    setAnswers(updated);
    setStep((prev) => prev + 1);
  };

  const resetQuiz = () => {
    setAnswers([]);
    setStep(0);
  };

  return (
    <section id="transformations" className="relative overflow-hidden bg-[#f7f7f4] text-black py-24 px-6 md:px-16 lg:px-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-16 w-80 h-80 rounded-full bg-[#f2df00]/14 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-black/5 blur-3xl" />
      </div>

      <div className="relative z-10 grid lg:grid-cols-[1.05fr_1fr] gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:sticky lg:top-28"
        >
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-[#f2df00] mb-5">
            <Sparkles size={14} />
            Presence Quiz
          </span>
          <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6">
            Find Your <span className="text-[#f2df00]">Image Authority</span> Blueprint
          </h2>
          <p className="font-sans text-black/70 max-w-xl leading-relaxed">
            In less than 90 seconds, discover where your personal brand currently stands and what your
            next-level transformation should focus on.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-black/15 bg-white/80 p-4">
              <p className="text-2xl font-display text-[#f2df00]">{totalQuestions}</p>
              <p className="text-xs tracking-[0.16em] uppercase text-black/65 mt-1">Questions</p>
            </div>
            <div className="rounded-2xl border border-black/15 bg-white/80 p-4">
              <p className="text-2xl font-display text-[#f2df00]">90s</p>
              <p className="text-xs tracking-[0.16em] uppercase text-black/65 mt-1">Quick Test</p>
            </div>
            <div className="rounded-2xl border border-black/15 bg-white/80 p-4">
              <p className="text-2xl font-display text-[#f2df00]">1</p>
              <p className="text-xs tracking-[0.16em] uppercase text-black/65 mt-1">Action Plan</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-black/15 bg-white/82 backdrop-blur-sm p-6 md:p-8"
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs tracking-[0.2em] uppercase text-black/65">Quiz Progress</p>
            <p className="text-xs text-[#f2df00] font-sans">{progress}% complete</p>
          </div>
          <div className="h-2 rounded-full bg-black/10 overflow-hidden mb-8">
            <motion.div
              className="h-full bg-gradient-to-r from-[#f2df00] to-[#ffd84f]"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.35 }}
            />
          </div>

          <AnimatePresence mode="wait">
            {!isFinished ? (
              <motion.div
                key={`q-${step}`}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-xs tracking-[0.18em] uppercase text-black/60 mb-3">
                  Question {step + 1} of {totalQuestions}
                </p>
                <h3 className="font-display text-2xl md:text-3xl leading-tight mb-7">
                  {quizQuestions[step].question}
                </h3>

                <div className="space-y-3">
                  {quizQuestions[step].options.map((option, idx) => (
                    <button
                      key={`${option.label}-${idx}`}
                      type="button"
                      onClick={() => handleSelect(option.score)}
                      className="w-full text-left rounded-xl border border-black/15 bg-white px-4 py-3.5 font-sans text-sm text-black/90 hover:border-[#f2df00]/80 hover:bg-[#f2df00]/10 transition-all duration-250"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.28 }}
                className="rounded-2xl border border-[#f2df00]/35 bg-white p-6 md:p-8"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-[#f2df00]/35 bg-[#f2df00]/10 px-3 py-1 mb-5">
                  <CheckCircle2 size={14} className="text-[#f2df00]" />
                  <span className="text-xs tracking-[0.16em] uppercase text-[#f2df00]">Your Result</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl mb-3 text-black">{result.title}</h3>
                <p className="font-sans text-black/75 leading-relaxed mb-7">{result.summary}</p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f2df00] px-6 py-3 text-black text-xs tracking-[0.18em] uppercase font-sans hover:brightness-95 transition"
                  >
                    {result.cta}
                    <ArrowRight size={14} />
                  </a>
                  <button
                    type="button"
                    onClick={resetQuiz}
                    className="inline-flex items-center justify-center rounded-full border border-black/20 px-6 py-3 text-xs tracking-[0.18em] uppercase font-sans text-black hover:bg-black/5 transition"
                  >
                    Retake Quiz
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationSection;
