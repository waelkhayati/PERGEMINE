"use client";

import { useState, useMemo } from "react";
import { MatchQuestion } from "@/data/safety-questions";
import { useTranslations } from "@/lib/useTranslations";

type Props = {
  q: MatchQuestion;
  onAnswer: (correct: boolean, feedback: string) => void;
  answered: boolean;
};

const ROW_HEIGHT = "h-28"; // unified row height for signs + descriptions

export default function MatchCard({ q, onAnswer, answered }: Props) {
  const { t } = useTranslations();

  const shuffledDescriptions = useMemo(
    () => [...q.pairs].sort(() => Math.random() - 0.5),
    [q]
  );

  const [selectedSign, setSelectedSign] = useState<number | null>(null);
  const [matches, setMatches] = useState<Record<number, number>>({});

  function handleSignClick(i: number) {
    if (answered) return;
    setSelectedSign(i);
  }

  function handleDescriptionClick(i: number) {
    if (answered || selectedSign === null) return;

    setMatches((prev) => {
      const next = { ...prev };
      for (const key of Object.keys(next)) {
        if (next[+key] === i) delete next[+key];
      }
      next[selectedSign] = i;
      return next;
    });
    setSelectedSign(null);
  }

  function handleSubmit() {
    let correctCount = 0;
    for (const [signIdxStr, descIdx] of Object.entries(matches)) {
      const signIdx = +signIdxStr;
      const matchedDescription = shuffledDescriptions[descIdx].description;
      if (matchedDescription === q.pairs[signIdx].description) correctCount++;
    }

    const total = q.pairs.length;
    const isCorrect = correctCount === total;

    let feedback: string;
    if (isCorrect) {
      feedback = t("game.match.resultAll");
    } else if (correctCount > 0) {
      feedback = t("game.match.resultPartial", {
        correct: correctCount,
        total,
      });
    } else {
      feedback = t("game.match.resultFail");
    }

    onAnswer(isCorrect, feedback);
  }

  function handleReset() {
    if (answered) return;
    setMatches({});
    setSelectedSign(null);
  }

  function descriptionPaired(descIdx: number): number | null {
    for (const [signIdx, dIdx] of Object.entries(matches)) {
      if (dIdx === descIdx) return +signIdx;
    }
    return null;
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-brand-yellow">
      <p className="uppercase text-xs tracking-widest text-brand-yellow font-semibold mb-2">
        {t("game.types.match")}
      </p>
      <h2 className="text-2xl md:text-3xl font-bold text-brand-blue leading-snug">
        {q.question}
      </h2>
      <p className="mt-2 text-gray-600 text-sm">{t("game.match.hint")}</p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {/* Signs column */}
        <div className="space-y-3">
          {q.pairs.map((p, i) => {
            const isSelected = selectedSign === i;
            const paired = matches[i] !== undefined;
            const correctAfter =
              answered &&
              shuffledDescriptions[matches[i]]?.description === p.description;
            const wrongAfter = answered && paired && !correctAfter;

            let style = "border-gray-200 hover:border-brand-blue";
            if (isSelected) style = "border-brand-blue bg-brand-light";
            if (paired && !answered) style = "border-brand-yellow bg-yellow-50";
            if (correctAfter) style = "border-green-500 bg-green-50";
            if (wrongAfter) style = "border-red-500 bg-red-50";

            return (
              <button
                key={i}
                onClick={() => handleSignClick(i)}
                disabled={answered}
                className={`w-full ${ROW_HEIGHT} flex items-center justify-center p-3 rounded-md border-2 transition bg-white ${style}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                
<img
  src={p.sign}
  alt={`Sign ${i + 1}`}
  className="h-20 w-20 object-contain"
/>

              </button>
            );
          })}
        </div>

        {/* Descriptions column */}
        <div className="space-y-3">
          {shuffledDescriptions.map((p, i) => {
            const pairedSign = descriptionPaired(i);
            const paired = pairedSign !== null;
            const correctAfter =
              answered &&
              paired &&
              q.pairs[pairedSign!].description === p.description;
            const wrongAfter = answered && paired && !correctAfter;

            let style = "border-gray-200 hover:border-brand-blue";
            if (paired && !answered) style = "border-brand-yellow bg-yellow-50";
            if (correctAfter) style = "border-green-500 bg-green-50";
            if (wrongAfter) style = "border-red-500 bg-red-50";

            return (
              <button
                key={i}
                onClick={() => handleDescriptionClick(i)}
                disabled={answered || selectedSign === null}
                className={`w-full ${ROW_HEIGHT} flex items-center text-left p-4 rounded-md border-2 transition font-medium ${style} disabled:opacity-70`}
              >
                {p.description}
              </button>
            );
          })}
        </div>
      </div>

      {!answered && (
        <div className="mt-6 flex gap-3">
          <button
            onClick={handleSubmit}
            disabled={Object.keys(matches).length !== q.pairs.length}
            className="flex-1 bg-brand-blue text-white font-semibold px-6 py-3 rounded-md hover:bg-brand-dark transition disabled:opacity-60"
          >
            {t("game.match.submit")}
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 border-2 border-brand-blue text-brand-blue rounded-md font-semibold hover:bg-brand-blue hover:text-white transition"
          >
            {t("game.match.reset")}
          </button>
        </div>
      )}
    </div>
  );
}