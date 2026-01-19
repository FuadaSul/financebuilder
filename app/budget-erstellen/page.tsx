"use client";

import Link from "next/link";
import { useState } from "react";
import BudgetLiveCircle from "@/app/components/BudgetLiveCircle";

interface Expense {
  id: number;
  category: string;
  amount: number;
}

export default function BudgetErstellenPage() {
  const [income, setIncome] = useState<string>("");
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [newCategory, setNewCategory] = useState<string>("");
  const [newAmount, setNewAmount] = useState<string>("");

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  // Unterstützt auch "3.000,50"
  const totalIncome =
    parseFloat(income.replace(/\./g, "").replace(",", ".")) || 0;

  const available = totalIncome - totalExpenses;

  // Rot wenn Ausgaben > Einnahmen (Budget überschritten)
  const isOverBudget = totalIncome > 0 && totalExpenses > totalIncome;

  const addExpense = () => {
    if (!newCategory || !newAmount) {
      alert("Bitte fülle beide Felder aus (Kategorie und Betrag)!");
      return;
    }

    const amount = parseFloat(newAmount.replace(",", "."));
    if (isNaN(amount) || amount <= 0) {
      alert("Bitte gib einen gültigen Betrag ein (größer als 0)!");
      return;
    }

    setExpenses((prev) => [
      ...prev,
      {
        id: Date.now(),
        category: newCategory.trim(),
        amount,
      },
    ]);

    setNewCategory("");
    setNewAmount("");
  };

  const removeExpense = (id: number) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  const saveBudget = () => {
    const budgetData = {
      income: totalIncome,
      expenses,
      date: new Date().toISOString(),
    };
    localStorage.setItem("budget", JSON.stringify(budgetData));
    alert("Budget gespeichert!");
  };

  const loadBudget = () => {
    const saved = localStorage.getItem("budget");
    if (saved) {
      const budgetData = JSON.parse(saved);

      setIncome(budgetData.income?.toString() ?? "");
      setExpenses(
        (budgetData.expenses ?? []).map((e: any) => ({
          id: Number(e.id),
          category: String(e.category),
          amount: Number(e.amount),
        }))
      );

      alert("Budget geladen!");
    } else {
      alert("Kein gespeichertes Budget gefunden!");
    }
  };

  const resetBudget = () => {
    if (confirm("Möchtest du wirklich alles zurücksetzen?")) {
      setIncome("");
      setExpenses([]);
      setNewCategory("");
      setNewAmount("");
    }
  };

  const colors = [
    "#2e7d32",
    "#4caf50",
    "#66bb6a",
    "#81c784",
    "#a5d6a7",
    "#c8e6c9",
  ];

  // Kreis: EURO-Werte rein; BudgetLiveCircle macht daraus Anteile.
  // Wenn Budget überschritten: alles rot.
  const circleCategories = expenses.map((exp, i) => ({
    label: exp.category,
    value: exp.amount,
    color: isOverBudget ? "#d32f2f" : colors[i % colors.length],
  }));

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container">
          <Link href="/" className="logo">
            <span className="logo-text">FM</span>
          </Link>

          <ul className="nav-menu">
            <li>
              <Link href="/grundlagen" className="nav-link">
                Grundlagen
              </Link>
            </li>
            <li>
              <Link href="/community" className="nav-link">
                Community
              </Link>
            </li>
            <li>
              <Link href="/ueber-uns" className="nav-link">
                Über uns
              </Link>
            </li>
            <li>
              <Link href="/feedback" className="nav-link">
                Feedback
              </Link>
            </li>
          </ul>

          <div className="user-icon">👤</div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <section
        style={{ background: "white", padding: "3rem 0", minHeight: "80vh" }}
      >
        <div className="container">
          <h1 className="page-title">Mein Budget erstellen</h1>
          <p className="page-subtitle">
            Erstelle deine persönliche Budgetplanung und behalte den Überblick
            über deine Finanzen
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
              marginTop: "2rem",
            }}
          >
            {/* Left Panel */}
            <div className="card">
              <h2
                style={{
                  color: "var(--dark-green)",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "1.5rem",
                }}
              >
                Einnahmen
              </h2>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#333",
                  fontWeight: "500",
                }}
              >
                Monatliche Einnahmen (EUR)
              </label>
              <input
                type="number"
                className="input-field"
                placeholder="z.B. 3000"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
              />

              <h2
                style={{
                  color: "var(--dark-green)",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginTop: "2rem",
                  marginBottom: "1.5rem",
                }}
              >
                Ausgaben
              </h2>

              {/* Expense List */}
              {expenses.length > 0 && (
                <div style={{ marginBottom: "2rem" }}>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "var(--dark-green)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Deine Kategorien:
                  </h3>

                  {expenses.map((exp) => (
                    <div
                      key={exp.id}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0.75rem 1rem",
                        background: "var(--bg-light-green)",
                        border: "2px solid var(--green-light)",
                        borderRadius: "8px",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <span style={{ fontWeight: "500", color: "var(--dark-green)" }}>
                        {exp.category}
                      </span>

                      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <span style={{ fontWeight: "600", color: "var(--dark-green)" }}>
                          {exp.amount.toFixed(2)} EUR
                        </span>
                        <button
                          type="button"
                          onClick={() => removeExpense(exp.id)}
                          style={{
                            background: "#d32f2f",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            padding: "0.25rem 0.5rem",
                            cursor: "pointer",
                            fontSize: "0.9rem",
                            fontWeight: "600",
                          }}
                        >
                          Entfernen
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Neue Kategorie hinzufügen */}
              <div
                style={{
                  background: "#f9fafb",
                  padding: "1.5rem",
                  borderRadius: "10px",
                  border: "2px dashed var(--green-light)",
                  marginBottom: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "var(--dark-green)",
                    marginBottom: "1rem",
                  }}
                >
                  {expenses.length === 0
                    ? "Erste Kategorie hinzufügen:"
                    : "Weitere Kategorie hinzufügen:"}
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        color: "#333",
                        fontWeight: "500",
                      }}
                    >
                      Kategorie
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="z.B. Miete, Essen, Auto..."
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      list="category-suggestions"
                    />
                    <datalist id="category-suggestions">
                      <option value="Miete" />
                      <option value="Essen" />
                      <option value="Versicherungen" />
                      <option value="Transport" />
                      <option value="Freizeit" />
                      <option value="Sparen" />
                      <option value="Kleidung" />
                      <option value="Gesundheit" />
                      <option value="Bildung" />
                      <option value="Sonstiges" />
                      <option value="Auto" />
                      <option value="Tanken" />
                      <option value="Restaurant" />
                      <option value="Handy" />
                      <option value="Internet" />
                      <option value="Strom" />
                      <option value="Gas" />
                      <option value="Wasser" />
                      <option value="GEZ" />
                      <option value="Netflix" />
                      <option value="Spotify" />
                      <option value="Fitnessstudio" />
                      <option value="Hobby" />
                      <option value="Geschenke" />
                      <option value="Medikamente" />
                      <option value="Arzt" />
                      <option value="Kosmetik" />
                      <option value="Friseur" />
                    </datalist>
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        color: "#333",
                        fontWeight: "500",
                      }}
                    >
                      Betrag (EUR)
                    </label>
                    <input
                      type="number"
                      className="input-field"
                      placeholder="0.00"
                      value={newAmount}
                      onChange={(e) => setNewAmount(e.target.value)}
                      step="0.01"
                      min="0"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  className="btn-primary"
                  onClick={addExpense}
                  style={{ width: "100%", fontSize: "1rem" }}
                >
                  ✓ Kategorie hinzufügen
                </button>
              </div>

              {/* Summary */}
              <div
                style={{
                  borderTop: "2px solid #ddd",
                  paddingTop: "1rem",
                  marginTop: "2rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span>Gesamteinnahmen:</span>
                  <span>{totalIncome.toFixed(2)} EUR</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span>Gesamtausgaben:</span>
                  <span>{totalExpenses.toFixed(2)} EUR</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "1rem",
                    paddingTop: "1rem",
                    borderTop: "2px solid #ddd",
                    fontWeight: "bold",
                    color: isOverBudget ? "#d32f2f" : "var(--dark-green)",
                  }}
                >
                  <span>Verfügbar:</span>
                  <span>{available.toFixed(2)} EUR</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  marginTop: "2rem",
                }}
              >
                <button
                  type="button"
                  className="btn-primary"
                  onClick={saveBudget}
                  style={{ fontSize: "1rem" }}
                >
                  Budget speichern
                </button>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={loadBudget}
                  style={{ fontSize: "1rem" }}
                >
                  Gespeichertes Budget laden
                </button>
                <button
                  type="button"
                  onClick={resetBudget}
                  style={{
                    background: "#fff3cd",
                    color: "#856404",
                    border: "2px solid #ffc107",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.background = "#ffc107")}
                  onMouseOut={(e) => (e.currentTarget.style.background = "#fff3cd")}
                >
                  Alles zurücksetzen
                </button>
              </div>
            </div>

            {/* Right Panel */}
            <div className="card">
              <h2
                style={{
                  color: "var(--dark-green)",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "2rem",
                }}
              >
                Budget-Übersicht
              </h2>

              <div className="donut-chart-container">
                <div className="donut-chart">
                  <div style={{ position: "relative", width: 300, height: 300 }}>
                    <BudgetLiveCircle categories={circleCategories} totalIncome={totalIncome} />


              
                  </div>
                </div>
              </div>

              {/* Legend */}
              {expenses.length > 0 && (
                <div style={{ marginTop: "2rem" }}>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      color: "var(--dark-green)",
                      marginBottom: "1rem",
                    }}
                  >
                    Kategorien
                  </h3>

                  {expenses.map((exp, index) => {
                    const color = isOverBudget ? "#d32f2f" : colors[index % colors.length];
                    const percentage = totalIncome > 0 ? (exp.amount / totalIncome) * 100 : 0;

                    return (
                      <div
                        key={exp.id}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.75rem",
                          padding: "0.75rem",
                          borderRadius: "8px",
                          marginBottom: "0.5rem",
                          background: "#f5f5f5",
                        }}
                      >
                        <div
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "6px",
                            backgroundColor: color,
                            flexShrink: 0,
                            marginTop: 2,
                          }}
                        />
                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              gap: "0.75rem",
                              marginBottom: 6,
                            }}
                          >
                            <span style={{ fontWeight: 600 }}>{exp.category}</span>
                            <span style={{ fontWeight: 800, color: isOverBudget ? "#d32f2f" : "var(--dark-green)" }}>
                              {exp.amount.toFixed(2)} EUR
                            </span>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: 6,
                              color: "#555",
                              fontSize: "0.9rem",
                              fontWeight: 600,
                            }}
                          >
                            <span>Anteil</span>
                            <span>{percentage.toFixed(1)}%</span>
                          </div>

                          <div
                            style={{
                              height: 8,
                              background: "#e5e7eb",
                              borderRadius: 999,
                              overflow: "hidden",
                            }}
                          >
                            <div
                              style={{
                                height: 8,
                                width: `${Math.min(100, percentage)}%`,
                                background: color,
                                borderRadius: 999,
                                transition: "width 0.3s ease",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}