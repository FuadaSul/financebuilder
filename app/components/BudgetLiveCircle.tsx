"use client";

type Category = {
  label: string;
  value: number; // Euro-Werte
  color: string;
};

export default function BudgetLiveCircle({ 
  categories, 
  totalIncome 
}: { 
  categories: Category[];
  totalIncome: number;
}) {
  const radius = 120;
  const stroke = 28;
  const c = 2 * Math.PI * radius;

  // Gesamte Ausgaben in Euro
  const totalExpenses = categories.reduce((sum, cat) => sum + (Number(cat.value) || 0), 0);

  // Prozent je Segment berechnen basierend auf Gesamtausgaben (Verteilung der Kategorien)
  // So wird der Kreis voll, wenn alle Kategorien eingegeben sind
  const percents = categories.map((cat) => {
    const v = Number(cat.value) || 0;
    const p = totalExpenses > 0 ? (v / totalExpenses) * 100 : 0;
    return Math.max(0, p);
  });

  let offset = 0;

  // Prüfe ob Budget überschritten
  // Wenn Einnahmen vorhanden sind und Ausgaben größer sind, dann Budget überschritten
  // Oder wenn keine Einnahmen eingegeben sind, aber Ausgaben vorhanden sind
  const isOverBudget = (totalIncome > 0 && totalExpenses > totalIncome) || (totalIncome === 0 && totalExpenses > 0);
  
  // Farbe für Text: rot wenn Budget überschritten
  const textColor = isOverBudget ? "#d32f2f" : "var(--dark-green)";
  
  // WICHTIG: Wenn Budget überschritten, alle Segmente müssen rot sein
  // Ignoriere die übergebenen Farben komplett wenn Budget überschritten

  return (
    <svg width="300" height="300" viewBox="0 0 300 300">
      {/* Hintergrund */}
      <circle cx="150" cy="150" r={radius} stroke="#e5e7eb" strokeWidth={stroke} fill="none" />

      {/* Segmente */}
      {categories.map((cat, i) => {
        const p = percents[i]; // 0..100
        const dash = (p / 100) * c;
        // Verwende rote Farbe wenn Budget überschritten, sonst die übergebene Farbe
        const strokeColor = isOverBudget ? "#d32f2f" : cat.color;

        const seg = (
          <circle
            key={i}
            cx="150"
            cy="150"
            r={radius}
            stroke={strokeColor}
            strokeWidth={stroke}
            fill="none"
            strokeDasharray={`${dash} ${c - dash}`}
            strokeDashoffset={-offset}
            strokeLinecap="round"
            transform="rotate(-90 150 150)"
          />
        );

        offset += dash;
        return seg;
      })}

      {/* Text */}
      <text x="150" y="145" textAnchor="middle" fontSize="20" fontWeight="bold" fill={textColor}>
        Budget
      </text>
      <text x="150" y="170" textAnchor="middle" fontSize="16" fill={textColor}>
        {totalExpenses.toFixed(2)} EUR
      </text>
    </svg>
  );
}
