"use client";

import { useState } from "react";
import { questions } from "@/data/safety-questions";
import IntroScreen from "@/components/game/IntroScreen";
import MCQCard from "@/components/game/MCQCard";
import ScenarioCard from "@/components/game/ScenarioCard";
import HazardCard from "@/components/game/HazardCard";
import FeedbackBanner from "@/components/game/FeedbackBanner";
import ResultScreen from "@/components/game/ResultScreen";

type Phase = "intro" | "playing" | "done";

export default function SafetyGamePage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const [answeredIdx, setAnsweredIdx] = useState<number | null>(null);
  const [hazardAnswered, setHazardAnswered] = useState(false);
  const [feedback, setFeedback] = useState<{
    correct: boolean;
    text: string;
  } | null>(null);

  const current = questions[index];

  function start() {
    setPhase("playing");
    setIndex(0);
    setScore(0);
    resetAnswerState();
  }

  function resetAnswerState() {
    setAnsweredIdx(null);
    setHazardAnswered(false);
    setFeedback(null);
  }

  function handleAnswer(correct: boolean, text: string, choiceIdx?: number) {
    if (correct) setScore((s) => s + 1);
    setFeedback({ correct, text });

    if (current.type === "hazard") setHazardAnswered(true);
    else if (choiceIdx !== undefined) setAnsweredIdx(choiceIdx);
  }

  function next() {
    if (index + 1 >= questions.length) {
      setPhase("done");
    } else {
      setIndex((i) => i + 1);
      resetAnswerState();
    }
  }

  return (
    <section className="min-h-screen bg-brand-light pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {phase === "intro" && <IntroScreen onStart={start} />}

        {phase === "playing" && current && (
          <>
            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between text-xs uppercase tracking-widest text-brand-blue font-semibold mb-2">
                <span>
                  Question {index + 1} / {questions.length}
                </span>
                <span>Score: {score}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-brand-yellow h-2 rounded-full transition-all"
                  style={{
                    width: `${((index + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {current.type === "mcq" && (
              <MCQCard
                q={current}
                answered={answeredIdx}
                onAnswer={(correct, fb) => {
                  const idx = current.choices.findIndex((c) => c.feedback === fb);
                  handleAnswer(correct, fb, idx);
                }}
              />
            )}

            {current.type === "scenario" && (
              <ScenarioCard
                q={current}
                answered={answeredIdx}
                onAnswer={(correct, fb) => {
                  const idx = current.choices.findIndex((c) => c.feedback === fb);
                  handleAnswer(correct, fb, idx);
                }}
              />
            )}

            {current.type === "hazard" && (
              <HazardCard
                q={current}
                answered={hazardAnswered}
                onAnswer={(correct, fb) => handleAnswer(correct, fb)}
              />
            )}

            {feedback && (
              <FeedbackBanner
                correct={feedback.correct}
                feedback={feedback.text}
                isLast={index + 1 >= questions.length}
                onNext={next}
              />
            )}
          </>
        )}

        {phase === "done" && (
          <ResultScreen
            score={score}
            total={questions.length}
            onRetry={start}
          />
        )}
      </div>
    </section>
  );
}