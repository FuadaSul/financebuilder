"use client";

import useScrollProgress from "../hooks/useScrollprogress";

export default function CoinStack() {
  const progress = useScrollProgress();
  const totalCoins = 7;
  const visibleCoins = Math.round(progress * totalCoins);

  return (
    <svg width="28" height="36" viewBox="0 0 120 160">
      {[...Array(totalCoins)].map((_, index) => {
        const isActive = index < visibleCoins;

        return (
          <g
            key={index}
            style={{
              opacity: isActive ? 1 : 0.2,
              transform: `translateY(${-index * 18}px)`,
              transition: "all 0.3s ease",
            }}
          >
            <ellipse
              cx="60"
              cy="120"
              rx="40"
              ry="12"
              fill={isActive ? "#f4c430" : "#7fbf7f"}
              stroke={isActive ? "#b38b00" : "#2d5016"}
              strokeWidth="4"
            />
            <ellipse
              cx="60"
              cy="115"
              rx="40"
              ry="12"
              fill={isActive ? "#ffe27a" : "#a8e08e"}
            />
          </g>
        );
      })}
    </svg>
  );
}