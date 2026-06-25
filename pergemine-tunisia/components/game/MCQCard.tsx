"use client";

import { MCQQuestion } from "@/data/safety-questions";

type Props = {
  q: MCQQuestion;
  onAnswer: (correct: boolean, feedback: string) => void;
  answered: number | null;
};

export default function MCQCard({ q, onAnswer, answered }: Props) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-brand-yellow">
      <p className="uppercase text-xs tracking-widest text-brand-yellow font-semibold mb-2">
        Multiple Choice
      </p>
      <h2 className="text-2xl md:text-3xl font-bold text-brand-blue leading-snug">
        {q.question}
      </h2>

      <div className="mt-8 space-y-3">
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