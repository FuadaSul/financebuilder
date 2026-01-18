"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";

type FeedbackEntry = {
  id: number;
  name: string;
  email: string;
  rating: number;
  category: string;
  message: string;
  date: string;
};

export default function FeedbackPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const [feedbacks, setFeedbacks] = useState<FeedbackEntry[]>([]);
  const [feedbackStatus, setFeedbackStatus] =
    useState<"idle" | "success" | "error">("idle");

  const handleFeedbackSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Mini-Validierung
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

    // Neues Feedback nach oben in die Liste pushen
    setFeedbacks((prev) => [newEntry, ...prev]);
    setFeedbackStatus("success");

    // Felder leeren
    setName("");
    setEmail("");
    setRating(0);
    setCategory("");
    setMessage("");
  };

  return (
    <>
      {/* NAVBAR – gleiche Optik wie auf der Startseite */}
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

          <div className="user-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </div>
      </nav>

      <main>
        {/* ===================== */}
        {/* FEEDBACK-FORMULAR     */}
        {/* ===================== */}
        <section id="feedback" className="feedback-section">
          <div className="container">
            <h2 className="feedback-title">Dein Feedback</h2>
            <p className="feedback-subtitle">
              Wir freuen uns über deine Meinung und Anregungen
            </p>

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

              {/* Sterne-Bewertung */}
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
                      <label
                        htmlFor={`star-${star}`}
                        className="rating-label"
                      >
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

              {/* Nur EIN Button */}
              <div className="form-actions-feedback">
                <button type="submit" className="submit-feedback-btn">
                  Feedback absenden
                </button>
              </div>

              {/* Status-Meldung */}
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

            {/* ===================== */}
            {/* FEEDBACK VON BENUTZERN */}
            {/* ===================== */}
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
                                  "star" +
                                  (star <= fb.rating ? " filled" : "")
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
                        <p className="feedback-message-text">
                          {fb.message}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

