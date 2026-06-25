"use client";

import { ScenarioQuestion } from "@/data/safety-questions";
import { useTranslations } from "@/lib/useTranslations";

type Props = {
  q: ScenarioQuestion;
  onAnswer: (correct: boolean, feedback: string) => void;
  answered: number | null;
};

export default function ScenarioCard({ q, onAnswer, answered }: Props) {
  const { t } = useTranslations();

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-brand-yellow">
      <p className="uppercase text-xs tracking-widest text-brand-yellow font-semibold mb-2">
        {t("game.types.scenario")}
      </p>

      <div className="bg-brand-light border-l-4 border-brand-blue p-5 rounded my-4">
        <p className="text-brand-blue italic leading-relaxed">
          📍 {q.situation}
        </p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold text-brand-blue leading-snug">
        {q.question}
      </h2>

      <div className="mt-6 space-y-3">
        {q.choices.map((c, i) => {
          const isSelected = answered === i;
          const isCorrect = c.correct;
          let style = "border-gray-200 hover:border-brand-blue hover:bg-brand-light";
          if (answered !== null) {
            if (isCorrect) style = "border-green-500 bg-green-50";
            else if (isSelected) style = "border-red-500 bg-red-50";
            else style = "border-gray-200 opacity-60";
          }

          return (
            <button
              key={i}
              disabled={answered !== null}
              onClick={() => onAnswer(c.correct, c.feedback)}
              className={`w-full text-left p-5 rounded-md border-2 transition font-medium ${style}`}
            >
              {c.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}