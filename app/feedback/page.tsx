"use client";

import { useState } from "react";

export default function FeedbackPage() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, comment }),
    });
    const data = await res.json();
    setMessage(data.message);
    setName("");
    setComment("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Feedback abgeben</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Dein Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="Dein Feedback"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <br />
        <button type="submit">Senden</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
