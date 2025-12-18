"use client";
import { useMemo } from "react";

type Category = {
  label: string;
  value: number;
  color: string;
};

export default function BudgetLiveCircle({
  categories,
}: {
  categories: Category[];
}) {
  const total = categories.reduce((sum, c) => sum + c.value, 0);

  const radius = 120;
  const stroke = 28;
  const c = 2 * Math.PI * radius;

  let acc = 0;

  return (
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
        const fraction = cat.value / 100;
        const dash = fraction * c;
        const offset = c - acc;
        acc += dash;

        return (
          <circle
            key={i}
            cx="150"
            cy="150"
            r={radius}
            stroke={cat.color}
            strokeWidth={stroke}
            fill="none"
            strokeDasharray={`${dash} ${c - dash}`}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
              transition: "all 0.4s ease",
            }}
          />
        );
      })}

      {/* Text */}
      <text x="150" y="145" textAnchor="middle" fontSize="20" fontWeight="bold">
        Budget
      </text>
      <text x="150" y="170" textAnchor="middle" fontSize="16">
        {Math.round(total)}%
      </text>
    </svg>
  );
}
