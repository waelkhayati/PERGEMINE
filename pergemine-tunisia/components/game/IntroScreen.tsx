"use client";

import { useTranslations } from "@/lib/useTranslations";

type Props = { onStart: () => void };

export default function IntroScreen({ onStart }: Props) {
  const { t, messages } = useTranslations();

  return (
    <div className="max-w-3xl mx-auto text-center py-16 px-6">
      <p className="uppercase tracking-[0.3em] text-brand-yellow text-sm mb-4">
        {t("game.intro.pre")}
      </p>
      <h1 className="text-5xl md:text-6xl font-bold text-brand-blue leading-tight">
        {t("game.intro.title")}
      </h1>
      <p className="mt-6 text-gray-600 text-lg leading-relaxed">
        {t("game.intro.desc")}
      </p>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
        {messages.game.intro.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <button
        onClick={onStart}
        className="mt-12 bg-brand-yellow text-brand-blue font-semibold px-10 py-4 rounded-md hover:bg-yellow-400 transition shadow-lg text-lg"
      >
        {t("game.intro.start")}
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