"use client";

import Link from "next/link";
import { useState } from "react";

export default function FeedbackPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, comment: message, email, rating, category }),
    });
    const data = await res.json();
    setSubmitMessage(data.message || "Feedback erfolgreich abgesendet!");
    setName("");
    setEmail("");
    setRating("");
    setCategory("");
    setMessage("");
  };

  return (
    <>
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

      <main style={{ paddingTop: "70px" }}>
        {/* ===================== */}
        {/* FEEDBACK */}
        {/* ===================== */}
        <section id="feedback" className="feedback-section">
          <div className="container">
            <h2 className="feedback-title">Dein Feedback</h2>
            <p className="feedback-subtitle">
              Wir freuen uns über deine Meinung und Anregungen
            </p>

            {/* Formular */}
            <form className="feedback-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="feedbackName">Name</label>
                  <input
                    type="text"
                    id="feedbackName"
                    placeholder="Dein Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="feedbackEmail">E-Mail</label>
                  <input
                    type="email"
                    id="feedbackEmail"
                    placeholder="deine.email@beispiel.de"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Wie zufrieden bist du mit unserer Website?</label>
                <div className="rating-container">
                  <input 
                    type="radio" 
                    id="star5" 
                    name="rating" 
                    value="5"
                    checked={rating === "5"}
                    onChange={(e) => setRating(e.target.value)}
                  />
                  <label htmlFor="star5" className="rating-label">⭐</label>

                  <input 
                    type="radio" 
                    id="star4" 
                    name="rating" 
                    value="4"
                    checked={rating === "4"}
                    onChange={(e) => setRating(e.target.value)}
                  />
                  <label htmlFor="star4" className="rating-label">⭐</label>

                  <input 
                    type="radio" 
                    id="star3" 
                    name="rating" 
                    value="3"
                    checked={rating === "3"}
                    onChange={(e) => setRating(e.target.value)}
                  />
                  <label htmlFor="star3" className="rating-label">⭐</label>

                  <input 
                    type="radio" 
                    id="star2" 
                    name="rating" 
                    value="2"
                    checked={rating === "2"}
                    onChange={(e) => setRating(e.target.value)}
                  />
                  <label htmlFor="star2" className="rating-label">⭐</label>

                  <input 
                    type="radio" 
                    id="star1" 
                    name="rating" 
                    value="1"
                    checked={rating === "1"}
                    onChange={(e) => setRating(e.target.value)}
                  />
                  <label htmlFor="star1" className="rating-label">⭐</label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="feedbackCategory">Kategorie</label>
                <select 
                  id="feedbackCategory"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Bitte wählen</option>
                  <option>Allgemeines Feedback</option>
                  <option>Fehler melden</option>
                  <option>Verbesserungsvorschlag</option>
                  <option>Frage</option>
                  <option>Lob</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="feedbackMessage">Deine Nachricht</label>
                <textarea
                  id="feedbackMessage"
                  rows={6}
                  placeholder="Teile uns deine Gedanken mit..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <div className="form-actions-feedback">
                <button type="submit" className="submit-feedback-btn">
                  Feedback absenden
                </button>
                <button 
                  type="reset" 
                  className="reset-feedback-btn"
                  onClick={() => {
                    setName("");
                    setEmail("");
                    setRating("");
                    setCategory("");
                    setMessage("");
                    setSubmitMessage("");
                  }}
                >
                  Zurücksetzen
                </button>
              </div>

              {submitMessage && (
                <div style={{ 
                  marginTop: "1rem", 
                  padding: "1rem", 
                  background: "var(--light-green)", 
                  borderRadius: "8px",
                  color: "var(--dark-green)",
                  textAlign: "center"
                }}>
                  {submitMessage}
                </div>
              )}
            </form>

            {/* Anzeige */}
            <div className="feedbacks-display">
              <h3 className="feedbacks-title">Feedback von Benutzern</h3>

              <div className="feedbacks-container">
                <p className="no-feedback">
                  Noch kein Feedback vorhanden. Sei der Erste!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
