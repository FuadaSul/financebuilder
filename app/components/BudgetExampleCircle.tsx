"use client";
import { useState } from "react";


type Category = { label: string; value: number; color: string };

const categories: Category[] = [
  { label: "Miete", value: 35, color: "#2d5016" },
  { label: "Essen", value: 20, color: "#4f7f33" },
  { label: "Versicherungen", value: 15, color: "#7fb069" },
  { label: "Transport", value: 10, color: "#a7d98b" },
  { label: "Sparen", value: 20, color: "#cdecc2" },
];

export default function BudgetExampleCircle() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const radius = 120;
  const stroke = 30;
  const c = 2 * Math.PI * radius;

  const total = categories.reduce((sum, x) => sum + x.value, 0);

  let acc = 0; // laufende Summe für Startposition

  return (
    <div className="budget-example-wrapper">
      <svg width="300" height="300" viewBox="0 0 300 300">
        {/* Hintergrund */}
        <circle
          cx="150"
          cy="150"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={stroke}
          fill="none"
        />

        {/* Segmente */}
        {categories.map((cat, i) => {
            const fraction = cat.value / total;
            const dash = fraction * c;
            const offset = c - acc;
            acc += dash;

            const isActive = activeIndex === i;

            return (
                <circle
                    key={cat.label}
                    cx="150"
                    cy="150"
                    r={isActive ? radius + 6 : radius}
                    stroke={cat.color}
                    strokeWidth={isActive ? stroke + 4 : stroke}
                    fill="none"
                    strokeDasharray={`${dash} ${c - dash}`}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    opacity={activeIndex === null || isActive ? 1 : 0.35}
                    style={{
                        transform: "rotate(-90deg)",
                        transformOrigin: "50% 50%",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                    }}
                    onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                    onClick={() => setActiveIndex(i)}
    />
  );
})}


        {/* Center Text */}
        <text x="150" y="145" textAnchor="middle" fontSize="22" fontWeight="700">
          Budget
        </text>
        <text x="150" y="170" textAnchor="middle" fontSize="16">
          100%
        </text>
      </svg>

      {/* Legende */}
      {categories.map((c, i) => (
        <div
            className="legend-item"
            key={c.label}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => setActiveIndex(i)}
            style={{
                cursor: "pointer",
                opacity: activeIndex === null || activeIndex === i ? 1 : 0.4,
                transition: "opacity 0.3s ease",
        }}
  >
    <span className="legend-color" style={{ background: c.color }} />
    <span className="legend-label">{c.label}</span>
    <span className="legend-value">{c.value}%</span>
  </div>
))}

     
    </div>
  );
}


