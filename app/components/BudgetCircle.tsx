"use client";
import { useState } from "react";

export default function BudgetCircle() {
  const total = 3000;
  const used = 1200;

  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const progress = used / total;
  const offset = circumference - progress * circumference;

  return (
    <svg width="300" height="300" viewBox="0 0 300 300">
      <circle
        cx="150"
        cy="150"
        r={radius}
        stroke="#e5e7eb"
        strokeWidth="30"
        fill="none"
      />

      <circle
        cx="150"
        cy="150"
        r={radius}
        stroke="#2d5016"
        strokeWidth="30"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{
          transform: "rotate(-90deg)",
          transformOrigin: "50% 50%",
          transition: "stroke-dashoffset 0.8s ease",
        }}
      />

      <text x="150" y="145" textAnchor="middle" fontSize="20" fontWeight="bold">
        Budget
      </text>
      <text x="150" y="170" textAnchor="middle" fontSize="16">
        {Math.round(progress * 100)}%
      </text>
    </svg>
  );
}
