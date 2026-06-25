"use client";

import { useEffect } from "react";

type Props = {
  src: string;
  title: string;
  subtitle?: string;
  onClose: () => void;
};

export default function CertificateLightbox({
  src,
  title,
  subtitle,
  onClose,
}: Props) {
  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-white rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-brand-blue text-white hover:bg-brand-yellow hover:text-brand-blue transition flex items-center justify-center text-xl font-bold shadow-lg"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Image */}
        <div className="bg-gray-100 flex items-center justify-center max-h-[80vh] overflow-auto">
          <img
            src={src}
            alt={title}
            className="max-w-full max-h-[80vh] object-contain"
          />
        </div>

        {/* Caption */}
        <div className="p-5 text-center border-t border-gray-100">
          <h3 className="font-bold text-brand-blue text-lg">{title}</h3>
          {subtitle && (
            <p className="text-gray-600 text-sm mt-1">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}