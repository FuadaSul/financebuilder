"use client";

import Link from "next/link";
import { useState } from "react";

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
  const totalIncome = parseFloat(income) || 0;
  const available = totalIncome - totalExpenses;

  const addExpense = () => {
    if (newCategory && newAmount) {
      setExpenses([
        ...expenses,
        {
          id: Date.now(),
          category: newCategory,
          amount: parseFloat(newAmount) || 0,
        },
      ]);
      setNewCategory("");
      setNewAmount("");
    }
  };

  const removeExpense = (id: number) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  const saveBudget = () => {
    const budgetData = {
      income: totalIncome,
      expenses: expenses,
      date: new Date().toISOString(),
    };
    localStorage.setItem("budget", JSON.stringify(budgetData));
    alert("Budget gespeichert!");
  };

  const loadBudget = () => {
    const saved = localStorage.getItem("budget");
    if (saved) {
      const budgetData = JSON.parse(saved);
      setIncome(budgetData.income.toString());
      setExpenses(budgetData.expenses);
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

  // Calculate percentages for chart
  const getPercentage = (amount: number) => {
    if (totalIncome === 0) return 0;
    return (amount / totalIncome) * 100;
  };

  // Generate donut chart segments
  const generateChartSegments = () => {
    if (totalIncome === 0) return null;
    
    let currentAngle = 0;
    return expenses.map((exp, index) => {
      const percentage = getPercentage(exp.amount);
      const angle = (percentage / 100) * 360;
      const startAngle = currentAngle;
      const endAngle = currentAngle + angle;
      currentAngle = endAngle;

      const startRad = (startAngle - 90) * (Math.PI / 180);
      const endRad = (endAngle - 90) * (Math.PI / 180);
      const x1 = 150 + 120 * Math.cos(startRad);
      const y1 = 150 + 120 * Math.sin(startRad);
      const x2 = 150 + 120 * Math.cos(endRad);
      const y2 = 150 + 120 * Math.sin(endRad);
      const largeArc = percentage > 50 ? 1 : 0;

      const colors = ["#2e7d32", "#4caf50", "#66bb6a", "#81c784", "#a5d6a7", "#c8e6c9"];
      const color = colors[index % colors.length];

      return (
        <path
          key={exp.id}
          d={`M 150 150 L ${x1} ${y1} A 120 120 0 ${largeArc} 1 ${x2} ${y2} Z`}
          fill={color}
        />
      );
    });
  };

  const budgetPercentage = totalIncome > 0 ? ((totalExpenses / totalIncome) * 100).toFixed(0) : 0;

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
          <h1 className="page-title">Mein Budget erstellen</h1>
          <p className="page-subtitle">
            Erstelle deine persönliche Budgetplanung und behalte den Überblick über deine Finanzen
          </p>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 1fr", 
            gap: "2rem",
            marginTop: "2rem"
          }}>
            {/* Left Panel - Input */}
            <div className="card">
              <h2 style={{ 
                color: "var(--dark-green)",
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1.5rem"
              }}>
                Einnahmen
              </h2>
              <label style={{ 
                display: "block",
                marginBottom: "0.5rem",
                color: "#333",
                fontWeight: "500"
              }}>
                Monatliche Einnahmen (EUR)
              </label>
              <input
                type="number"
                className="input-field"
                placeholder="z.B. 3000"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
              />

              <h2 style={{ 
                color: "var(--dark-green)",
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginTop: "2rem",
                marginBottom: "1.5rem"
              }}>
                Ausgaben
              </h2>
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "1fr 1fr", 
                gap: "1rem",
                marginBottom: "1rem"
              }}>
                <div>
                  <label style={{ 
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "#333",
                    fontWeight: "500"
                  }}>
                    Kategorie
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="z.B. Miete"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                  />
                </div>
                <div>
                  <label style={{ 
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "#333",
                    fontWeight: "500"
                  }}>
                    Betrag (EUR)
                  </label>
                  <input
                    type="number"
                    className="input-field"
                    placeholder="0.00"
                    value={newAmount}
                    onChange={(e) => setNewAmount(e.target.value)}
                  />
                </div>
              </div>
              <button 
                className="btn-secondary"
                onClick={addExpense}
                style={{ width: "100%", marginBottom: "2rem" }}
              >
                + Kategorie hinzufügen
              </button>

              {/* Expense List */}
              {expenses.length > 0 && (
                <div style={{ marginBottom: "2rem" }}>
                  {expenses.map((exp) => (
                    <div key={exp.id} style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0.75rem",
                      background: "#f5f5f5",
                      borderRadius: "8px",
                      marginBottom: "0.5rem"
                    }}>
                      <span>{exp.category}: {exp.amount.toFixed(2)} EUR</span>
                      <button
                        onClick={() => removeExpense(exp.id)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#d32f2f",
                          cursor: "pointer",
                          fontSize: "1.2rem"
                        }}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Summary */}
              <div style={{
                borderTop: "2px solid #ddd",
                paddingTop: "1rem",
                marginTop: "2rem"
              }}>
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between",
                  marginBottom: "0.5rem"
                }}>
                  <span>Gesamteinnahmen:</span>
                  <span>{totalIncome.toFixed(2)} EUR</span>
                </div>
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between",
                  marginBottom: "0.5rem"
                }}>
                  <span>Gesamtausgaben:</span>
                  <span>{totalExpenses.toFixed(2)} EUR</span>
                </div>
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between",
                  marginTop: "1rem",
                  paddingTop: "1rem",
                  borderTop: "2px solid #ddd",
                  fontWeight: "bold",
                  color: "var(--dark-green)"
                }}>
                  <span>Verfügbar:</span>
                  <span>{available.toFixed(2)} EUR</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ 
                display: "flex", 
                flexDirection: "column",
                gap: "1rem",
                marginTop: "2rem"
              }}>
                <button className="btn-primary" onClick={saveBudget}>
                  Budget speichern
                </button>
                <button className="btn-secondary" onClick={loadBudget}>
                  Gespeichertes Budget laden
                </button>
                <button 
                  onClick={resetBudget}
                  style={{
                    background: "white",
                    color: "#666",
                    border: "2px solid #ddd",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "600"
                  }}
                >
                  Zurücksetzen
                </button>
              </div>
            </div>

            {/* Right Panel - Budget Overview */}
            <div className="card">
              <h2 style={{ 
                color: "var(--dark-green)",
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "2rem"
              }}>
                Budget-Übersicht
              </h2>
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
                    {generateChartSegments()}
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
                      {budgetPercentage}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

