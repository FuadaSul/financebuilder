"use client";

import Link from "next/link";
import { useState } from "react";

export default function BudgetplanungPage() {
  const [selectedCategory, setSelectedCategory] = useState("Sparen");

  const categories = [
    { name: "Miete", percentage: 35, color: "#2e7d32" },
    { name: "Essen", percentage: 20, color: "#4caf50" },
    { name: "Versicherungen", percentage: 15, color: "#66bb6a" },
    { name: "Transport", percentage: 10, color: "#81c784" },
    { name: "Sparen", percentage: 20, color: "#a5d6a7" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container">
          <Link href="/" className="logo">
            <span className="logo-text">FM</span>
          </Link>

          <ul className="nav-menu">
            <li><Link href="/grundlagen" className="nav-link">Grundlagen</Link></li>
            <li><Link href="/community" className="nav-link">Community</Link></li>
            <li><Link href="/ueber-uns" className="nav-link">Über uns</Link></li>
            <li><Link href="/feedback" className="nav-link">Feedback</Link></li>
          </ul>

          <div className="user-icon">👤</div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <section style={{ background: "white", padding: "3rem 0", minHeight: "80vh" }}>
        <div className="container">
          <Link href="/grundlagen" style={{ textDecoration: "none" }}>
            <button className="btn-secondary" style={{ marginBottom: "2rem" }}>
              ← Zurück zu Grundlagen
            </button>
          </Link>

          <h1 className="page-title" style={{ textAlign: "left", marginTop: "1rem" }}>
            Budgetplanung
          </h1>
          <h2 style={{ 
            color: "var(--dark-green)",
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "2rem"
          }}>
            Wie man eine Budgetplanung macht
          </h2>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 2fr", 
            gap: "3rem",
            marginTop: "2rem"
          }}>
            {/* Left Column - Chart and Categories */}
            <div>
              {/* Donut Chart */}
              <div className="donut-chart-container">
                <div className="donut-chart">
                  <svg width="300" height="300" viewBox="0 0 300 300" style={{ position: "relative", zIndex: 1 }}>
                    <circle
                      cx="150"
                      cy="150"
                      r="120"
                      fill="none"
                      stroke="#e0e0e0"
                      strokeWidth="40"
                    />
                    {categories.map((cat, index) => {
                      const startAngle = categories.slice(0, index).reduce((sum, c) => sum + (c.percentage / 100) * 360, 0);
                      const endAngle = startAngle + (cat.percentage / 100) * 360;
                      const startRad = (startAngle - 90) * (Math.PI / 180);
                      const endRad = (endAngle - 90) * (Math.PI / 180);
                      const x1 = 150 + 120 * Math.cos(startRad);
                      const y1 = 150 + 120 * Math.sin(startRad);
                      const x2 = 150 + 120 * Math.cos(endRad);
                      const y2 = 150 + 120 * Math.sin(endRad);
                      const largeArc = cat.percentage > 50 ? 1 : 0;

                      return (
                        <path
                          key={cat.name}
                          d={`M 150 150 L ${x1} ${y1} A 120 120 0 ${largeArc} 1 ${x2} ${y2} Z`}
                          fill={cat.color}
                        />
                      );
                    })}
                  </svg>
                  <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    zIndex: 2,
                    pointerEvents: "none"
                  }}>
                    <div style={{ 
                      color: "var(--dark-green)",
                      fontWeight: "bold",
                      fontSize: "1.5rem"
                    }}>
                      Budget
                    </div>
                    <div style={{ 
                      color: "#666",
                      fontSize: "1.2rem"
                    }}>
                      100%
                    </div>
                  </div>
                </div>
              </div>

              {/* Categories List */}
              <ul className="budget-categories" style={{ marginTop: "2rem" }}>
                {categories.map((cat) => (
                  <li
                    key={cat.name}
                    className={`budget-category ${selectedCategory === cat.name ? "active" : ""}`}
                    onClick={() => setSelectedCategory(cat.name)}
                  >
                    <div 
                      className="category-icon"
                      style={{ background: cat.color }}
                    />
                    <span className="category-name">{cat.name}</span>
                    <span className="category-percentage">{cat.percentage}%</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Text Content */}
            <div>
              <p className="text-content">
                Eine gute Budgetplanung ist der Schlüssel zu finanzieller Stabilität und Freiheit. 
                Mit einem durchdachten Budget behältst du den Überblick über deine Einnahmen und 
                Ausgaben und kannst gezielt sparen.
              </p>

              <div style={{ marginTop: "2rem" }}>
                <h3 style={{ 
                  color: "var(--dark-green)",
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  marginBottom: "0.5rem"
                }}>
                  1. Einnahmen erfassen
                </h3>
                <p className="text-content">
                  Beginne damit, alle deine monatlichen Einnahmen zu notieren. Dazu gehören dein Gehalt, 
                  Nebeneinkünfte, Bafög oder andere regelmässige Einnahmequellen.
                </p>
              </div>

              <div style={{ marginTop: "2rem" }}>
                <h3 style={{ 
                  color: "var(--dark-green)",
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  marginBottom: "0.5rem"
                }}>
                  2. Ausgaben kategorisieren
                </h3>
                <p className="text-content">
                  Teile deine Ausgaben in Kategorien ein: Miete, Lebensmittel, Versicherungen, Transport, 
                  Freizeit, Sparen und Notreserve. So siehst du auf einen Blick, wofür dein Geld verwendet wird.
                </p>
              </div>

              <div style={{ marginTop: "2rem" }}>
                <h3 style={{ 
                  color: "var(--dark-green)",
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  marginBottom: "0.5rem"
                }}>
                  3. Verhältnisse bestimmen
                </h3>
                <p className="text-content">
                  Plane, wie viel Prozent deines Einkommens für jede Kategorie vorgesehen ist. Eine gute 
                  Faustregel: 30% Wohnen, 15% Lebensmittel, 10% Versicherungen, 20% Sparen und Notreserve, 
                  25% für den Rest.
                </p>
              </div>

              <div style={{ marginTop: "2rem" }}>
                <h3 style={{ 
                  color: "var(--dark-green)",
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  marginBottom: "0.5rem"
                }}>
                  4. Überprüfen und anpassen
                </h3>
                <p className="text-content">
                  Regelmässige Kontrollen sind wichtig. Überprüfe monatlich, ob du dein Budget einhältst 
                  und passe es bei Bedarf an deine Lebenssituation an.
                </p>
              </div>

              <p className="text-content" style={{ marginTop: "2rem" }}>
                Budgetplanung ist klar strukturiert und machbar - Schritt für Schritt kannst du so deine 
                finanzielle Situation verbessern und langfristig mehr Kontrolle gewinnen.
              </p>

              <div style={{ 
                display: "flex", 
                gap: "1rem", 
                marginTop: "3rem",
                justifyContent: "flex-end"
              }}>
                <Link href="/grundlagen" style={{ textDecoration: "none" }}>
                  <button className="btn-secondary">
                    ← Zurück zu Grundlagen
                  </button>
                </Link>
                <Link href="/budget-erstellen" style={{ textDecoration: "none" }}>
                  <button className="btn-primary">
                    Mein Budget erstellen →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

<section id="budget-erstellen" className="budget-section">
  <div className="container">
    <h1 className="budget-title">Mein Budget erstellen</h1>
    <p className="budget-subtitle">
      Erstelle deine persönliche Budgetplanung und behalte den Überblick über deine Finanzen
    </p>

    {/* NEUER WRAPPER */}
    <div className="budget-layout">
      {/* linke Spalte: Formular + Summen */}
      <div className="budget-column-left">
        {/* dein Einnahmen-/Ausgabenformular usw. */}
      </div>

      {/* rechte Spalte: Donut-Chart + Tipp-Text */}
      <div className="budget-column-right">
        {/* dein Kreis-Chart + Text */}
      </div>
    </div>

    {/* Zurück-Button */}
    <div className="budget-back-wrapper">
      <button className="budget-back-button">
        ← Zurück zu Budgetplanung
      </button>
    </div>
  </div>
</section>
