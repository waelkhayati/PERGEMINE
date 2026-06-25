"use client";

import { useState } from "react";
import { HazardQuestion } from "@/data/safety-questions";

type Props = {
  q: HazardQuestion;
  onAnswer: (correct: boolean, feedback: string) => void;
  answered: boolean;
};

export default function HazardCard({ q, onAnswer, answered }: Props) {
  const [found, setFound] = useState<number[]>([]);

  function handleClick(idx: number) {
    if (answered) return;
    if (found.includes(idx)) return;

    const next = [...found, idx];
    setFound(next);

    if (next.length === q.hazards.length) {
      const correct = true;
      const feedback = `✅ You found all ${q.hazards.length} hazards! Excellent eye for safety.`;
      onAnswer(correct, feedback);
    }
  }

  function handleSubmit() {
    const correct = found.length >= Math.ceil(q.hazards.length / 2);
    const feedback = `You found ${found.length} out of ${q.hazards.length} hazards. ${
      correct ? "Good job ✅" : "Keep practicing — review all hazards below."
    }`;
    onAnswer(correct, feedback);
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-brand-yellow">
      <p className="uppercase text-xs tracking-widest text-brand-yellow font-semibold mb-2">
        {t("game.types.hazard")}
      </p>
      <h2 className="text-2xl md:text-3xl font-bold text-brand-blue leading-snug">
        {q.question}
      </h2>
      <p className="mt-2 text-gray-600 text-sm">
        {t("game.hazard.found", { found: found.length, total: q.hazards.length })}
      </p>

      <div className="relative mt-6 rounded-md overflow-hidden border border-gray-200">
        <img src={q.image} alt="Rig scene" className="w-full block" />
        {q.hazards.map((h, i) => {
          const isFound = found.includes(i);
          return (
            <button
              key={i}
              onClick={() => handleClick(i)}
              disabled={answered}
              className="absolute"
              style={{
                left: `${h.x}%`,
                top: `${h.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              aria-label={h.label}
            >
              {isFound || answered ? (
                <span className="block w-10 h-10 bg-green-500/80 border-4 border-white rounded-full shadow-lg animate-pulse">
                  ✓
                </span>
              ) : (
                <span className="block w-10 h-10 bg-transparent border-2 border-dashed border-transparent hover:border-brand-yellow hover:bg-brand-yellow/30 rounded-full transition cursor-pointer" />
              )}
            </button>
          );
        })}
      </div>

      {!answered && (
        <button
          onClick={handleSubmit}
          className="mt-6 bg-brand-blue text-white font-semibold px-6 py-3 rounded-md hover:bg-brand-dark transition"
        >
          {t("game.hazard.done")}
        </button>
      )}

      {answered && (
        <div className="mt-6 space-y-2 text-sm">
          <p className="font-semibold text-brand-blue">Hazards explained:</p>
          {q.hazards.map((h, i) => (
            <div
              key={i}
              className="bg-brand-light p-3 rounded border-l-4 border-brand-yellow"
            >
              <p className="font-semibold text-brand-blue">{h.label}</p>
              <p className="text-gray-600">{h.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}