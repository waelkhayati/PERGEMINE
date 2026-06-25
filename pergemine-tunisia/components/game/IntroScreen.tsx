"use client";

type Props = { onStart: () => void };

export default function IntroScreen({ onStart }: Props) {
  return (
    <div className="max-w-3xl mx-auto text-center py-16 px-6">
      <p className="uppercase tracking-[0.3em] text-brand-yellow text-sm mb-4">
        HSE Training Game
      </p>
      <h1 className="text-5xl md:text-6xl font-bold text-brand-blue leading-tight">
        Safety First
      </h1>
      <p className="mt-6 text-gray-600 text-lg leading-relaxed">
        You&apos;re on a Pergemine drilling site. Every decision counts. Answer
        8 questions covering PPE, emergencies, hazards, and environment. Are you
        HSE ready?
      </p>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
        <Tag>🦺 PPE</Tag>
        <Tag>🚨 Emergency</Tag>
        <Tag>⚠️ Hazards</Tag>
        <Tag>🌿 Environment</Tag>
      </div>

      <button
        onClick={onStart}
        className="mt-12 bg-brand-yellow text-brand-blue font-semibold px-10 py-4 rounded-md hover:bg-yellow-400 transition shadow-lg text-lg"
      >
        Start the Game
      </button>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-brand-light border border-brand-yellow rounded-md py-3 font-semibold">
      {children}
    </div>
  );
}