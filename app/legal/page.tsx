"use client";

import { useState } from "react";
import Link from "next/link";

type Section = "impressum" | "datenschutz" | "urheberrecht";

export default function LegalPage() {
  const [section, setSection] = useState<Section>("impressum");

  return (
    <main className="legal-page">
      <div className="legal-container">
        {/* Zurück-Button */}
        <div className="legal-back-wrapper">
          <Link href="/" className="legal-back-button">
            ← Zurück zur Startseite
          </Link>
        </div>

        {/* Tabs */}
        <div className="legal-tabs">
          <button
            className={`legal-tab ${section === "impressum" ? "active" : ""}`}
            onClick={() => setSection("impressum")}
          >
            Impressum
          </button>
          <button
            className={`legal-tab ${section === "datenschutz" ? "active" : ""}`}
            onClick={() => setSection("datenschutz")}
          >
            Datenschutz
          </button>
          <button
            className={`legal-tab ${
              section === "urheberrecht" ? "active" : ""
            }`}
            onClick={() => setSection("urheberrecht")}
          >
            Urheberrecht &amp; Haftung
          </button>
        </div>

        {/* Inhalt */}
        <div className="legal-content">
          {section === "impressum" && (
            <>
              <h1>Impressum</h1>

              <h2>Angaben gemäß § 5 TMG</h2>
              <p>
                Fuada Sulejmani<br />
                Omar Haiba<br />
                Esma Acar<br />
                Alteburgstr. 150<br />
                72762 Reutlingen<br />
                Deutschland<br />
                (Hochschule Reutlingen)
              </p>

              <h2>Kontakt</h2>
              <p>
                E-Mail:
                <br />
                fuada.sulejmani@hochschule.reutlingen-university.de
                <br />
                omar.haiba@hochschule.reutlingen-university.de
                <br />
                esma.acar@hochschule.reutlingen-university.de
              </p>

              <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <p>
                Fuada Sulejmani, Omar Haiba &amp; Esma Acar
                <br />
                jeweils unter der oben genannten Anschrift
              </p>

              <h2>Hinweis</h2>
              <p>
                Dieses Angebot ist ein nicht-kommerzielles Hochschulprojekt im
                Rahmen der Hochschule Reutlingen zum Thema Finanzbildung.
              </p>
            </>
          )}

          {section === "datenschutz" && (
            <>
              <h1>Datenschutzerklärung</h1>

              <h2>1. Allgemeines</h2>
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns wichtig. Dieses
                Projekt dient ausschließlich Lehr- und Demonstrationszwecken.
                Personenbezogene Daten werden nur im technisch notwendigen
                Umfang verarbeitet.
              </p>

              <h2>2. Verantwortliche Stelle</h2>
              <p>
                Verantwortlich sind:
                <br />
                Fuada Sulejmani, Omar Haiba &amp; Esma Acar
                <br />
                Alteburgstr. 150, 72762 Reutlingen, Deutschland
                <br />
                E-Mail: siehe Impressum
              </p>

              <h2>3. Erhebung und Speicherung personenbezogener Daten</h2>
              <p>
                Beim Aufruf dieser Website werden automatisch Informationen durch
                den Browser an den Server gesendet (z.&nbsp;B. IP-Adresse, Datum
                und Uhrzeit des Zugriffs, Browsertyp, Betriebssystem). Diese
                Daten werden nur zur Sicherstellung des technischen Betriebs
                verwendet.
              </p>

              <h2>4. Feedback-Funktion</h2>
              <p>
                Wenn Sie über die Website Feedback senden, können Ihr Name,
                Ihre E-Mail-Adresse, Ihre Bewertung und Ihre Nachricht
                verarbeitet werden. Die Nutzung erfolgt freiwillig im Rahmen des
                Hochschulprojekts. Eine Weitergabe an Dritte findet nicht statt.
              </p>

              <h2>5. Cookies / Lokale Speicherung</h2>
              <p>
                Diese Website verwendet ausschließlich technisch notwendige
                Mechanismen (z.&nbsp;B. Local Storage) zur Darstellung von
                Inhalten. Es werden keine Tracking- oder Marketing-Cookies
                eingesetzt.
              </p>

              <h2>6. Ihre Rechte</h2>
              <p>
                Ihnen stehen die Rechte auf Auskunft, Berichtigung, Löschung,
                Einschränkung der Verarbeitung, Widerspruch sowie
                Datenübertragbarkeit im Rahmen der gesetzlichen Bestimmungen zu.
              </p>

              <h2>7. Stand</h2>
              <p>Stand dieser Datenschutzerklärung: Januar 2026.</p>
            </>
          )}

          {section === "urheberrecht" && (
            <>
              <h1>Urheberrecht &amp; Haftung</h1>

              <h2>Urheberrecht</h2>
              <p>
                Die durch die Projektteilnehmenden erstellten Inhalte und Werke
                auf dieser Website unterliegen dem deutschen Urheberrecht.
                Beiträge dürfen ausschließlich im Rahmen des Hochschulprojekts
                verwendet werden.
              </p>

              <h2>Haftung für Inhalte</h2>
              <p>
                Alle Inhalte dieser Website dienen ausschließlich Informations-
                und Lernzwecken. Es handelt sich nicht um eine Finanz- oder
                Anlageberatung. Für die Richtigkeit, Vollständigkeit und
                Aktualität der Inhalte wird keine Gewähr übernommen.
              </p>

              <h2>Haftung für Links</h2>
              <p>
                Diese Website kann Links zu externen Websites enthalten, auf
                deren Inhalte wir keinen Einfluss haben. Für diese fremden
                Inhalte ist stets der jeweilige Anbieter oder Betreiber
                verantwortlich.
              </p>

              <h2>Online-Streitbeilegung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:&nbsp;
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Wir sind nicht verpflichtet und nicht bereit, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  );
}