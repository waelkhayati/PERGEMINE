"use client";

import { useState, useMemo } from "react";
import { SequenceQuestion } from "@/data/safety-questions";
import { useTranslations } from "@/lib/useTranslations";

type Props = {
  q: SequenceQuestion;
  onAnswer: (correct: boolean, feedback: string) => void;
  answered: boolean;
};

export default function SequenceCard({ q, onAnswer, answered }: Props) {
  const { t } = useTranslations();

  // Shuffled steps with original index preserved
  const shuffled = useMemo(
    () =>
      q.steps
        .map((text, originalIdx) => ({ text, originalIdx }))
        .sort(() => Math.random() - 0.5),
    [q]
  );

  // Order = array of "shuffled indexes" in the order the user picked
  const [order, setOrder] = useState<number[]>([]);

  function handlePick(shuffledIdx: number) {
    if (answered) return;
    if (order.includes(shuffledIdx)) return;
    setOrder((prev) => [...prev, shuffledIdx]);
  }

  function handleReset() {
    if (answered) return;
    setOrder([]);
  }

  function handleSubmit() {
    // user's chosen sequence = order of original indexes
    const userSequence = order.map((shIdx) => shuffled[shIdx].originalIdx);
    let correctCount = 0;
    for (let i = 0; i < userSequence.length; i++) {
      if (userSequence[i] === i) correctCount++;
    }

    const total = q.steps.length;
    const isCorrect = correctCount === total;

    let feedback: string;
    if (isCorrect) {
      feedback = t("game.sequence.resultCorrect");
    } else if (correctCount > 0) {
      feedback = t("game.sequence.resultPartial", { correct: correctCount });
    } else {
      feedback = t("game.sequence.resultFail");
    }

    onAnswer(isCorrect, feedback);
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-brand-yellow">
      <p className="uppercase text-xs tracking-widest text-brand-yellow font-semibold mb-2">
        {t("game.types.sequence")}
      </p>

      <div className="bg-brand-light border-l-4 border-brand-blue p-5 rounded my-4">
        <p className="text-brand-blue italic leading-relaxed">📍 {q.situation}</p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold text-brand-blue leading-snug">
        {q.question}
      </h2>
      <p className="mt-2 text-gray-600 text-sm">{t("game.sequence.hint")}</p>

      {/* Pickable steps */}
      <div className="mt-6 space-y-3">
        {shuffled.map((s, i) => {
          const pickedAt = order.indexOf(i);
          const isPicked = pickedAt !== -1;

          let style = "border-gray-200 hover:border-brand-blue hover:bg-brand-light";
          if (isPicked && !answered) style = "border-brand-yellow bg-yellow-50";

          if (answered && isPicked) {
            const correctPosition = s.originalIdx === pickedAt;
            style = correctPosition
              ? "border-green-500 bg-green-50"
              : "border-red-500 bg-red-50";
          }

          return (
            <button
              key={i}
              onClick={() => handlePick(i)}
              disabled={answered || isPicked}
              className={`w-full text-left p-4 rounded-md border-2 transition font-medium flex items-center gap-3 ${style} disabled:cursor-default`}
            >
              {isPicked && (
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white font-bold text-sm shrink-0">
                  {pickedAt + 1}
                </span>
              )}
              <span>{s.text}</span>
            </button>
          );
        })}
      </div>

      {!answered && (
        <div className="mt-6 flex gap-3">
          <button
            onClick={handleSubmit}
            disabled={order.length !== q.steps.length}
            className="flex-1 bg-brand-blue text-white font-semibold px-6 py-3 rounded-md hover:bg-brand-dark transition disabled:opacity-60"
          >
            {t("game.sequence.submit")}
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 border-2 border-brand-blue text-brand-blue rounded-md font-semibold hover:bg-brand-blue hover:text-white transition"
          >
            {t("game.sequence.reset")}
          </button>
        </div>
      )}

      {answered && (
        <div className="mt-6 text-sm">
          <p className="font-semibold text-brand-blue mb-2">
            {t("game.sequence.correctOrder")}
          </p>
          <ol className="space-y-2 list-decimal list-inside text-gray-700">
            {q.steps.map((s, i) => (
              <li key={i} className="bg-brand-light p-2 rounded border-l-4 border-brand-yellow">
                {s}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}