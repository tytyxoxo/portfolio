import { useEffect, useState } from "react";
import clsx from "clsx";

interface LoadingProps {
  isLoading: boolean;
}

export default function Loading({ isLoading }: LoadingProps) {
  const [shouldRender, setShouldRender] = useState(isLoading);

  useEffect(() => {
    if (isLoading) setShouldRender(true);
    else {
      const timeout = setTimeout(() => setShouldRender(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div
      className={clsx(
        "fixed inset-0 z-[9999] flex items-center justify-center bg-black/10 backdrop-blur-sm transition-opacity duration-500",
        isLoading
          ? "opacity-100 pointer-events-auto cursor-wait"
          : "opacity-0 pointer-events-none"
      )}
    >
      <div className="drop-shadow-[0_0_6px_rgba(251,207,232,0.6)] drop-shadow-[0_0_12px_rgba(244,114,182,0.8)]">
        <svg
          className="w-10 h-10 animate-pulse"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="pinkGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fbcfe8" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>
          <path
            fill="url(#pinkGradient)"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 
             2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
             4.5 2.09C13.09 3.81 14.76 3 16.5 3 
             19.58 3 22 5.42 22 8.5c0 3.78-3.4 
             6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </div>
    </div>
  );
}
