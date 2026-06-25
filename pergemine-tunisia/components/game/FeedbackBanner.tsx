"use client";

type Props = {
  correct: boolean;
  feedback: string;
  onNext: () => void;
  isLast: boolean;
};

export default function FeedbackBanner({ correct, feedback, onNext, isLast }: Props) {
  return (
    <div
      className={`mt-6 p-6 rounded-lg shadow-lg ${
        correct
          ? "bg-green-50 border-l-4 border-green-500"
          : "bg-red-50 border-l-4 border-red-500"
      }`}
    >
      <p
        className={`font-bold text-lg ${
          correct ? "text-green-700" : "text-red-700"
        }`}
      >
        {correct ? "✅ Correct" : "❌ Incorrect"}
      </p>
      <p className="mt-2 text-gray-700 leading-relaxed">{feedback}</p>

      <button
        onClick={onNext}
        className="mt-5 bg-brand-blue text-white font-semibold px-6 py-3 rounded-md hover:bg-brand-dark transition"
      >
        {isLast ? "See My Result →" : "Next Question →"}
      </button>
    </div>
  );
}