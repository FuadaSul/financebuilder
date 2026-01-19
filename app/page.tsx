"use client";

import Link from "next/link";


import React, { useState } from "react";
import BudgetLiveCircle from "@/app/components/BudgetLiveCircle";
import BudgetExampleCircle from "@/app/components/BudgetExampleCircle";
import CoinStack from "@/app/components/CoinStack";
import NotesSection from "./components/NotesSection";

type ExpenseRow = {
  id: number;
  category: string;
  amount: number;
};


type FeedbackEntry = {
  id: number;
  name: string;
  email: string;
  rating: number;
  category: string;
  message: string;
  date: string;
};


// =====================
// "Geld verstehen" Buch-Seiten
// =====================
const geldPages = [
  {
    id: 1,
    title: "Geld verstehen – Grundlagen",
    image: "/geld-verstehen-seite.png",
    paragraphs: [
      "Viele Menschen stehen vor der Frage: Was bedeutet es eigentlich, Geld zu verstehen? Es geht darum, die Grundlagen unseres Finanzsystems zu begreifen und fundierte Entscheidungen treffen zu können.",
      "Geld verstehen bedeutet, den Unterschied zwischen Einnahmen und Ausgaben zu kennen, zwischen Bedürfnissen und Wünschen zu unterscheiden und zu erkennen, warum oft die Übersicht fehlt. Es ist der erste Schritt zu finanzieller Unabhängigkeit."
    ]
  },
  {
    id: 2,
    title: "Dein Umgang mit Geld",
    image: "/geld-verstehen-seite.png",
    paragraphs: [
      "Du bist nicht allein mit deinen Fragen – und du kannst lernen, wie Geld funktioniert. Mit dem richtigen Wissen kannst du deine finanzielle Situation verbessern und langfristig mehr Kontrolle über deine Finanzen gewinnen.",
      "Ein bewusster Umgang mit Geld hilft dir, Stress zu reduzieren und klarere Entscheidungen zu treffen. Je besser du deine Zahlen kennst, desto sicherer wirst du dich fühlen."
    ]
  },
  {
    id: 3,
    title: "Der erste Schritt",
    image: "/geld-verstehen-seite.png",
    paragraphs: [
      "Beginne damit, deine eigenen Ausgaben zu analysieren: Verstehe, wofür du dein Geld ausgibst, und lerne, Prioritäten zu setzen.",
      "Nur wer versteht, wie Geld funktioniert, kann es auch erfolgreich verwalten. Dieses Kapitel ist dein Startpunkt – die nächsten Seiten deiner Finanzreise schreibst du selbst."
    ]
  }
];

export default function HomePage() {

  // =====================
  // Budget (Startseite)
  // =====================
  const [income, setIncome] = useState<number>(0);

  const [rows, setRows] = useState<ExpenseRow[]>([
    { id: Date.now(), category: "", amount: 0 },
  ]);

  const addRow = () => {
    setRows((prev) => [
      ...prev,
      { id: Date.now() + Math.floor(Math.random() * 1000), category: "", amount: 0 },
    ]);
  };

  const updateRow = (id: number, patch: Partial<ExpenseRow>) => {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, ...patch } : r))
    );
  };

  const removeRow = (id: number) => {
    setRows((prev) => {
      const next = prev.filter((r) => r.id !== id);
      return next.length > 0
        ? next
        : [{ id: Date.now(), category: "", amount: 0 }];
    });
  };

  const totalExpenses = rows.reduce(
    (sum, r) => sum + (Number(r.amount) || 0),
    0
  );

  const available = income - totalExpenses;

  const circleCategories = rows
    .filter(
      (r) => r.category.trim().length > 0 && (Number(r.amount) || 0) > 0
    )
    .map((r, idx) => {
      const colors = [
        "#2d5016",
        "#4f7f2f",
        "#7fb069",
        "#a8e08e",
        "#d4f5c9",
        "#2e7d32",
        "#66bb6a",
      ];
      return {
        label: r.category.trim(),
        value: Number(r.amount) || 0,
        color: colors[idx % colors.length],
      };
    });

  const saveBudget = () => {
    const data = { income, rows, date: new Date().toISOString() };
    localStorage.setItem("budget_home", JSON.stringify(data));
    alert("Budget gespeichert!");
  };

  const loadBudget = () => {
    const saved = localStorage.getItem("budget_home");
    if (!saved) return alert("Kein gespeichertes Budget gefunden!");
    const data = JSON.parse(saved);
    setIncome(Number(data.income) || 0);
    setRows(
      Array.isArray(data.rows) && data.rows.length
        ? data.rows
        : [{ id: Date.now(), category: "", amount: 0 }]
    );
    alert("Budget geladen!");
  };

  const resetBudget = () => {
    if (confirm("Möchtest du wirklich alles zurücksetzen?")) {
      setIncome(0);
      setRows([{ id: Date.now(), category: "", amount: 0 }]);
    }
  };

  

  // Feedback-Formular 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState("");
  const [geldPageIndex, setGeldPageIndex] = useState(0);
  const [message, setMessage] = useState("");

  const [feedbacks, setFeedbacks] = useState<FeedbackEntry[]>([]);
  const [feedbackStatus, setFeedbackStatus] =
    useState<"idle" | "success" | "error">("idle");



  const handleFeedbackSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      setFeedbackStatus("error");
      return;
    }

    const newEntry: FeedbackEntry = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      rating,
      category,
      message: message.trim(),
      date: new Date().toLocaleDateString("de-DE"),
    };

    setFeedbacks((prev) => [newEntry, ...prev]);
    setFeedbackStatus("success");

    // Felder zurücksetzen
    setName("");
    setEmail("");
    setRating(0);
    setCategory("");
    setMessage("");
  };

  return (
    <>
      {/* NAVBAR */}
      <header>
        <nav className="navbar">
          <div className="container">
            <div className="logo">
              <span className="logo-text">FM</span>
            </div>
            <ul className="nav-menu" id="navMenu">
              <li>
                <a href="#grundlagen" className="nav-link">
                  Grundlagen
                </a>
              </li>
              <li>
                <a href="#community" className="nav-link">
                  Community
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#feedback" className="nav-link">
                  Feedback
                </a>
              </li>
              <li className="money-indicator"><CoinStack /></li>
            </ul>
            <button
              className="hamburger"
              id="hamburger"
              aria-label="Menü öffnen"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">
                  Mach den ersten Schritt zu deiner finanziellen Freiheit
                </h1>

                <button className="cta-button" id="ctaButton" onClick={() => {document.getElementById("grundlagen")?.scrollIntoView({
                  behavior: "smooth"});
                }}>
                  Jetzt loslegen
                </button>
              </div>
              <div className="hero-image">
                <img
                  src="/ezgif.com-animated-gif-maker.gif"
                  alt="Mann am Schreibtisch"
                  className="hero-illustration-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===================== */}
        {/* GRUNDLAGEN            */}
        {/* ===================== */}
        <section id="grundlagen" className="grundlagen">
          <div className="container">
            <h2 className="section-title">Grundlagen der Finanzen</h2>
            <p className="section-subtitle">
              Starte mit den Basics - verständlich erklärt
            </p>
            <div className="cards-grid">
              <a href="#geld-verstehen" className="finance-card finance-card-link">
                <div className="card-image">
                  <img
                    src="/geld-verstehen-karte.png"
                    alt="Geld verstehen"
                    className="card-image-img"
                  />
                </div>
                <div className="card-footer">
                  <h3>Geld verstehen</h3>
                  <p>
                    Lerne die Grundlagen unseres Finanzsystems kennen und verstehe,
                    wie Geld funktioniert. Erfahre, wie du fundierte finanzielle
                    Entscheidungen treffen kannst.
                  </p>
                </div>
              </a>

              <a href="#budgetplanung" className="finance-card finance-card-link">
                <div className="card-image">
                  <img
                    src="/budgetplanung-karte.png"
                    alt="Budgetplanung"
                    className="card-image-img"
                  />
                </div>
                <div className="card-footer">
                  <h3>Budgetplanung</h3>
                  <p>
                    Erstelle deine persönliche Budgetplanung und behalte den
                    Überblick über deine Einnahmen und Ausgaben. So kannst du gezielt
                    sparen und deine Finanzen im Griff behalten.
                  </p>
                </div>
              </a>

              <a
                href="#schulden-vermeiden"
                className="finance-card finance-card-link"
              >
                <div className="card-image">
                  <img
                    src="/schulden-vermeiden-karte.png"
                    alt="Schulden vermeiden"
                    className="card-image-img"
                  />
                </div>
                <div className="card-footer">
                  <h3>Schulden vermeiden</h3>
                  <p>
                    Lerne, wie du Schulden vermeidest und deine Finanzen unter
                    Kontrolle behältst. Erfahre praktische Tipps für einen
                    verantwortungsvollen Umgang mit Geld.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ===================== */}
        {/* GELD VERSTEHEN        */}
        {/* ===================== */}
        <section id="geld-verstehen" className="geld-verstehen-section">
          <div className="container">
            <div className="geld-content-wrapper">
              <div className="geld-illustration">
                <img
                  src="/geld-verstehen-seite.png"
                  alt="Geld verstehen Illustration"
                  className="geld-illustration-img"
                />
              </div>
              <div className="geld-text-content">
                <h2>Geld verstehen</h2>
                <div className="geld-text-flow">
                <NotesSection />
                </div>
              </div>
            </div>
            <div className="back-button-container">
              <a href="#grundlagen" className="back-button">
                ← Zurück zu Grundlagen
              </a>
            </div>
          </div>
        </section>

        {/* ===================== */}
        {/* BUDGETPLANUNG         */}
        {/* ===================== */}
        <section id="budgetplanung" className="budgetplanung-section">
          <div className="container">
            <h2 className="budget-title">Budgetplanung</h2>

            <div className="budget-content-wrapper">
              {/* Beispiel-Kreis */}
              <BudgetExampleCircle />

              <div className="budget-text-content">
                <h3>Wie man eine Budgetplanung macht</h3>

                <div className="budget-text-flow">
                  <p>
                    Eine gute Budgetplanung ist der Schlüssel zu finanzieller
                    Stabilität und Freiheit. Mit einem durchdachten Budget behältst
                    du den Überblick über deine Einnahmen und Ausgaben und kannst
                    gezielt sparen.
                  </p>
                  <p>
                    <strong>1. Einnahmen erfassen:</strong>
                    <br />
                    Beginne damit, alle deine monatlichen Einnahmen zu notieren.
                    Dazu gehören dein Gehalt, Nebeneinkünfte, Bafög oder andere
                    regelmässige Einnahmequellen.
                  </p>
                  <p>
                    <strong>2. Ausgaben kategorisieren:</strong>
                    <br />
                    Teile deine Ausgaben in Kategorien ein: Miete, Lebensmittel,
                    Versicherungen, Transport, Freizeit, Sparen und Notreserve. So
                    siehst du auf einen Blick, wofür dein Geld verwendet wird.
                  </p>
                  <p>
                    <strong>3. Verhältnisse bestimmen:</strong>
                    <br />
                    Plane, wie viel Prozent deines Einkommens für jede Kategorie
                    vorgesehen ist. Eine gute Faustregel: 30% Wohnen, 15%
                    Lebensmittel, 10% Versicherungen, 20% Sparen und Notreserve, 25%
                    für den Rest.
                  </p>
                  <p>
                    <strong>4. Überprüfen und anpassen:</strong>
                    <br />
                    Regelmässige Kontrollen sind wichtig. Überprüfe monatlich, ob du
                    dein Budget einhältst und passe es bei Bedarf an deine
                    Lebenssituation an.
                  </p>
                  <p>
                    Budgetplanung ist klar strukturiert und machbar – Schritt für
                    Schritt kannst du so deine finanzielle Situation verbessern und
                    langfristig mehr Kontrolle gewinnen.
                  </p>
                </div>
              </div>
            </div>

            <div className="back-button-container">
              <a href="#grundlagen" className="back-button">
                ← Zurück zu Budgetplanung
              </a>
              <a
                href="#budget-erstellen"
                className="back-button"
                style={{ marginLeft: "1rem" }}
              >
                Mein Budget erstellen →
              </a>
            </div>
          </div>
        </section>

        {/* ===================== */}
        {/* BUDGET ERSTELLEN      */}
        {/* ===================== */}
        <section id="budget-erstellen" className="budget-erstellen-section">
  <div className="container">
    <h2 className="budget-erstellen-title">Mein Budget erstellen</h2>
    <p className="budget-erstellen-subtitle">
      Erstelle deine persönliche Budgetplanung und behalte den Überblick über deine Finanzen
    </p>

    <div className="budget-form-wrapper">
      <div className="budget-form-container">
        <h3>Einnahmen</h3>
        <div className="form-group">
          <label htmlFor="einnahmen">Monatliche Einnahmen (EUR)</label>
          <input
            type="number"
            id="einnahmen"
            placeholder="z.B. 3000"
            min="0"
            step="0.01"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value) || 0)}
          />
        </div>

        <h3>Ausgaben</h3>

        <div className="expenses-container">
          {rows.map((row) => (
            <div className="expense-item" key={row.id}>
              <label>Kategorie</label>
              <input
                type="text"
                className="expense-category"
                placeholder="z.B. Miete"
                list="categories"
                value={row.category}
                onChange={(e) => updateRow(row.id, { category: e.target.value })}
              />

              <label>Betrag (EUR)</label>
              <input
                type="number"
                className="expense-amount"
                placeholder="0.00"
                min="0"
                step="0.01"
                value={row.amount}
                onChange={(e) => updateRow(row.id, { amount: Number(e.target.value) || 0 })}
              />

              <button
                type="button"
                className="remove-expense-btn"
                onClick={() => removeRow(row.id)}
                style={{ display: rows.length === 1 ? "none" : "inline-flex" }}
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <datalist id="categories">
          <option value="Miete" />
          <option value="Essen" />
          <option value="Versicherungen" />
          <option value="Transport" />
          <option value="Sparen" />
          <option value="Freizeit" />
          <option value="Gesundheit" />
          <option value="Sonstiges" />
        </datalist>

        <button
          type="button"
          className="add-expense-btn"
          onClick={addRow}
        >
          + Kategorie hinzufügen
        </button>

        <div className="budget-summary">
          <div className="summary-item">
            <span>Gesamteinnahmen:</span>
            <span>{income.toFixed(2)} EUR</span>
          </div>
          <div className="summary-item">
            <span>Gesamtausgaben:</span>
            <span>{totalExpenses.toFixed(2)} EUR</span>
          </div>
          <div className="summary-item summary-balance">
            <span>Verfügbar:</span>
            <span>{available.toFixed(2)} EUR</span>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="save-budget-btn" onClick={saveBudget}>
            Budget speichern
          </button>

          <button type="button" className="load-budget-btn" onClick={loadBudget}>
            Gespeichertes Budget laden
          </button>

          <button type="button" className="clear-budget-btn" onClick={resetBudget}>
            Zurücksetzen
          </button>
        </div>
      </div>

      <div className="budget-visualization">
        <h3>Budget-Übersicht</h3>

        <div className="pie-chart-container-custom">
          <BudgetLiveCircle categories={circleCategories} />
        </div>

        {circleCategories.length === 0 && (
          <div style={{ marginTop: "12px", opacity: 0.7 }}>
            Tipp: Füge Kategorien + Beträge hinzu, dann erscheint der Kreis.
          </div>
        )}
      </div>
    </div>

    <div className="back-button-container">
      <a href="#budgetplanung" className="back-button">
        ← Zurück zu Budgetplanung
      </a>
    </div>
  </div>
</section>


        {/* ===================== */}
        {/* SCHULDEN VERMEIDEN    */}
        {/* ===================== */}
        <section id="schulden-vermeiden" className="schulden-vermeiden-section">
          <div className="container">
            <h2 className="schulden-title">Schulden vermeiden</h2>
            <p className="schulden-subtitle">
              Lerne, wie du Schulden vermeidest und deine Finanzen unter Kontrolle
              behältst
            </p>

            <div className="infographics-grid">
              <div className="infographic-card">
                <div className="infographic-icon">💸</div>
                <h3>Nicht alles direkt ausgeben</h3>
                <p>
                  Behalte immer einen Puffer für unvorhergesehene Ausgaben. Eine
                  Notreserve von mindestens drei Monatsgehältern schützt dich vor
                  unerwarteten Situationen und verhindert, dass du Schulden
                  aufnehmen musst. Plane regelmässig einen Teil deines Einkommens
                  für Notfälle ein.
                </p>
              </div>

              <div className="infographic-card">
                <div className="infographic-icon">📊</div>
                <h3>Ausgaben im Blick behalten</h3>
                <p>
                  Führe regelmässig Buch über deine Ausgaben. So behältst du den
                  Überblick und erkennst schnell, wo du Geld sparst kannst. Nutze
                  Apps oder ein einfaches Haushaltsbuch, um alle Einnahmen und
                  Ausgaben zu dokumentieren und monatlich zu überprüfen.
                </p>
              </div>

              <div className="infographic-card">
                <div className="infographic-icon">💡</div>
                <h3>Impulskäufe vermeiden</h3>
                <p>
                  Warte 24 Stunden vor grösseren Käufen. Oft verschwindet der Wunsch
                  danach, und du kannst eine durchdachtere Entscheidung treffen.
                  Erstelle eine Wunschliste und priorisiere deine Ausgaben, bevor du
                  Geld ausgibst. So vermeidest du unnötige Ausgaben und Schulden.
                </p>
              </div>
            </div>

            <div className="back-button-container">
              <a href="#grundlagen" className="back-button">
                ← Zurück zu Grundlagen
              </a>
            </div>
          </div>
        </section>

        {/* ===================== */}
        {/* ÜBER UNS / TEAM       */}
        {/* ===================== */}
        <section id="about" className="about-section">
          <div className="container">
            <h2 className="team-title">Unser Team</h2>
            <p className="team-description">
              Unser Team besteht aus engagierten Studierenden, die gemeinsam eine
              moderne und verständliche Plattform für Finanzbildung entwickeln
            </p>

            <div className="team-grid">
              {/* Teammitglied 1 */}
              <div className="team-card">
                <div className="team-image">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="60" cy="60" r="60" fill="#d4e9d4" />
                    <circle
                      cx="60"
                      cy="45"
                      r="20"
                      stroke="#2d5016"
                      strokeWidth="3"
                      fill="none"
                    />
                    <path
                      d="M30 95 Q30 75 60 75 Q90 75 90 95"
                      stroke="#2d5016"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </div>
                <h3 className="team-name">Fuada Sulejmani</h3>
                <p className="team-role">Digital Marketing</p>
                <div className="team-social">
                  <a
                    href="#"
                    className="social-icon"
                    aria-label="Facebook"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="social-icon"
                    aria-label="WhatsApp"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Teammitglied 2 */}
              <div className="team-card">
                <div className="team-image">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="60" cy="60" r="60" fill="#d4e9d4" />
                    <circle
                      cx="60"
                      cy="45"
                      r="20"
                      stroke="#2d5016"
                      strokeWidth="3"
                      fill="none"
                    />
                    <path
                      d="M30 95 Q30 75 60 75 Q90 75 90 95"
                      stroke="#2d5016"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </div>
                <h3 className="team-name">Omar Haiba</h3>
                <p className="team-role">Digital Marketing</p>
                <div className="team-social">
                  <a
                    href="#"
                    className="social-icon"
                    aria-label="Facebook"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="social-icon"
                    aria-label="WhatsApp"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Teammitglied 3 */}
              <div className="team-card">
                <div className="team-image">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="60" cy="60" r="60" fill="#d4e9d4" />
                    <circle
                      cx="60"
                      cy="45"
                      r="20"
                      stroke="#2d5016"
                      strokeWidth="3"
                      fill="none"
                    />
                    <path
                      d="M30 95 Q30 75 60 75 Q90 75 90 95"
                      stroke="#2d5016"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </div>
                <h3 className="team-name">Esma Acar</h3>
                <p className="team-role">Digital Marketing</p>
                <div className="team-social">
                  <a
                    href="#"
                    className="social-icon"
                    aria-label="Facebook"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="social-icon"
                    aria-label="WhatsApp"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== */}
        {/* FEEDBACK              */}
        {/* ===================== */}
        <section id="feedback" className="feedback-section">
          <div className="container">
            <h2 className="feedback-title">Dein Feedback</h2>
            <p className="feedback-subtitle">
              Wir freuen uns über deine Meinung und Anregungen
            </p>

            {/* Formular */}
            <form className="feedback-form" onSubmit={handleFeedbackSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Dein Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-Mail</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="deine.email@beispiel.de"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Bewertung */}
              <div className="form-group">
                <label>Wie zufrieden bist du mit unserer Website?</label>
                <div className="rating-container">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <span key={star}>
                      <input
                        type="radio"
                        id={`star-${star}`}
                        name="rating"
                        value={star}
                        checked={rating === star}
                        onChange={() => setRating(star)}
                      />
                      <label htmlFor={`star-${star}`} className="rating-label">
                        ★
                      </label>
                    </span>
                  ))}
                </div>
              </div>

              {/* Kategorie */}
              <div className="form-group">
                <label htmlFor="category">Kategorie</label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Bitte wählen</option>
                  <option value="Allgemein">Allgemein</option>
                  <option value="Design">Design</option>
                  <option value="Inhalte">Inhalte</option>
                  <option value="Bedienung">Bedienung</option>
                </select>
              </div>

              {/* Nachricht */}
              <div className="form-group">
                <label htmlFor="message">Deine Nachricht</label>
                <textarea
                  id="message"
                  placeholder="Teile uns deine Gedanken mit..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {/* nur ein Button */}
              <div className="form-actions-feedback">
                <button type="submit" className="submit-feedback-btn">
                  Feedback absenden
                </button>
              </div>

              {/* Status-Meldungen */}
              {feedbackStatus === "success" && (
                <div className="feedback-message success">
                  Danke! Dein Feedback wurde erfolgreich übermittelt.
                </div>
              )}
              {feedbackStatus === "error" && (
                <div className="feedback-message error">
                  Bitte fülle mindestens Name und Nachricht aus.
                </div>
              )}
            </form>

            {/* Liste der Feedbacks */}
            <div className="feedbacks-display">
              <h3 className="feedbacks-title">Feedback von Benutzern</h3>

              {feedbacks.length === 0 ? (
                <div className="no-feedback">
                  Noch kein Feedback vorhanden. Sei der Erste!
                </div>
              ) : (
                <div className="feedbacks-container">
                  {feedbacks.map((fb) => (
                    <article key={fb.id} className="feedback-card">
                      <header className="feedback-card-header">
                        <div className="feedback-card-author">
                          <span className="feedback-author-name">
                            {fb.name || "Anonym"}
                          </span>
                          <span className="feedback-date">{fb.date}</span>
                        </div>

                        <div className="feedback-card-meta">
                          <div className="feedback-rating-display">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <span
                                key={star}
                                className={
                                  "star" + (star <= fb.rating ? " filled" : "")
                                }
                              >
                                ★
                              </span>
                            ))}
                          </div>
                          {fb.category && (
                            <span className="feedback-category-badge">
                              {fb.category}
                            </span>
                          )}
                        </div>
                      </header>

                      <div className="feedback-card-body">
                        <p className="feedback-message-text">{fb.message}</p>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      {/* ===================== */}
      {/* FOOTER                */}
      {/* ===================== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-text">FM</span>
              <footer id="community" className="footer">
              <li>
              <a href="#community" className="nav-link">Community</a>
              </li>
              </footer>
            </div>

            <div className="footer-social">
              <h3>Folge uns</h3>
              <div className="footer-social-links">
                <a
                  href="#"
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                <a
                  href="#"
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>

                <a
                  href="#"
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>

                <a
                  href="#"
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                <a
                  href="#"
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
<div
  style={{
    marginTop: "1rem",
    paddingTop: "0.75rem",
    borderTop: "1px solid rgba(255,255,255,0.2)",
    color: "white",
    textAlign: "center",
    fontSize: "0.875rem",
  }}
>
  <p>©️ 2024 Finanzielle Freiheit. Alle Rechte vorbehalten.</p>

  <p style={{ marginTop: "0.75rem", opacity: 0.9 }}>
    <strong style={{ fontWeight: 600 }}>
      Studentisches Lehrprojekt:
    </strong>{" "}
    Diese Website ist eine Studierendenarbeit der Hochschule Reutlingen zu Lehr-
    und Lernzwecken. Alle Inhalte, Produkte und Dienstleistungen sind fiktiv und
    nicht geprüft. Bitte geben Sie keine sensiblen oder personenbezogenen Daten
    ein.{" "}
    <a
      href="/legal"
      style={{ textDecoration: "underline", color: "white" }}
    >
      Mehr Informationen im Impressum →
    </a>
  </p>

  <p style={{ marginTop: "0.75rem" }}>
    <a
      href="/legal"
      style={{
        textDecoration: "underline",
        marginRight: "1rem",
        color: "white",
      }}
    >
      Impressum
    </a>
    <a
      href="/legal"
      style={{
        textDecoration: "underline",
        color: "white",
      }}
    >
      Datenschutz
    </a>
  </p>
</div>
        
</div>

      </footer>
    </>
  );
}
