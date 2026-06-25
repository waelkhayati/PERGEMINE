"use client";

import Link from "next/link";

type Props = {
  score: number;
  total: number;
  onRetry: () => void;
};

export default function ResultScreen({ score, total, onRetry }: Props) {
  const pct = (score / total) * 100;

  let badge = "🥉";
  let title = "Needs Training";
  let color = "text-orange-600";

  if (pct >= 80) {
    badge = "🥇";
    title = "HSE Champion";
    color = "text-brand-yellow";
  } else if (pct >= 50) {
    badge = "🥈";
    title = "Safety Ready";
    color = "text-gray-500";
  }

  return (
    <div className="max-w-2xl mx-auto text-center py-16 px-6">
      <div className="text-7xl">{badge}</div>
      <h2 className={`mt-4 text-4xl font-bold ${color}`}>{title}</h2>

      <div className="mt-8 bg-white rounded-lg shadow-lg p-8 border-t-4 border-brand-yellow">
        <p className="text-gray-600 uppercase tracking-widest text-xs font-semibold">
          Your Score
        </p>
        <p className="text-6xl font-bold text-brand-blue mt-2">
          {score} / {total}
        </p>
        <p className="text-gray-600 mt-2">{Math.round(pct)}% correct</p>

        <div className="mt-6 w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-brand-yellow h-3 rounded-full transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div className="mt-10 flex justify-center gap-4 flex-wrap">
        <button
          onClick={onRetry}
          className="bg-brand-yellow text-brand-blue font-semibold px-8 py-3 rounded-md hover:bg-yellow-400 transition shadow-lg"
        >
          Play Again
        </button>
        <Link
          href="/hse"
          className="border-2 border-brand-blue text-brand-blue font-semibold px-8 py-3 rounded-md hover:bg-brand-blue hover:text-white transition"
        >
          Back to HSE
        </Link>
      </div>
    </div>
  );
}