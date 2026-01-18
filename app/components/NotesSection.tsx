"use client";

import { useState } from "react";

const paragraphs = [
  `Warum ist es wichtig, Geld zu verstehen? Viele Menschen haben Fragen zu ihren Finanzen,
  wissen aber nicht, wo sie anfangen sollen. Das Verstehen der Grundlagen unseres Finanzsystems
  ist der erste Schritt, um fundierte Entscheidungen zu treffen und deine finanzielle Zukunft
  selbst in die Hand zu nehmen.`,

  `Was bedeutet „Geld verstehen“ eigentlich? Es geht darum, die Grundlagen unseres Finanzsystems
  zu kennen: den Unterschied zwischen Einnahmen und Ausgaben zu verstehen, Bedürfnisse von
  Wünschen zu unterscheiden und zu begreifen, warum viele Menschen keine Klarheit über ihre
  Finanzen haben. Dies ist der erste Schritt auf dem Weg zur finanziellen Unabhängigkeit.`,

  `Du bist nicht allein mit deinen Fragen. Viele Menschen haben ähnliche Unsicherheiten, wenn es
  um Geld geht. Aber das Gute ist: Du kannst lernen, wie Geld funktioniert. Mit dem richtigen
  Wissen kannst du deine finanzielle Situation verbessern und langfristig mehr Kontrolle über
  dein Geld gewinnen.`,

  `Beginne damit, deine Ausgaben zu analysieren. Verstehe, wofür du dein Geld ausgibst, und lerne,
  Prioritäten zu setzen. Nur wer Geld versteht, kann es auch erfolgreich verwalten. Starte heute
  und mache den ersten Schritt zu einem besseren Verständnis deiner Finanzen.`
];

export default function NotesSection() {
    const [currentStep, setCurrentStep] = useState(0);
  
    const nextStep = () => {
      if (currentStep < paragraphs.length - 1) setCurrentStep(currentStep + 1);
    };
  
    const prevStep = () => {
      if (currentStep > 0) setCurrentStep(currentStep - 1);
    };
  
    return (
      <section className="notes-section">
        <div className="container">
          <div className="note-card">
            <p className="note-text">{paragraphs[currentStep]}</p>
  
            <div className="buttons">
              {currentStep > 0 && (
                <button className="prev-btn" onClick={prevStep}>
                  ← Zurück
                </button>
              )}
  
              {currentStep < paragraphs.length - 1 && (
                <button className="next-btn" onClick={nextStep}>
                  Weiter →
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }