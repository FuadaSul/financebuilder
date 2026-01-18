"use client";

import { useState } from "react";

export default function LegalPage() {
  const [section, setSection] = useState<"impressum" | "datenschutz" | "urheberrecht">("impressum");

  return (
    <div style={{ maxWidth: 900, margin: "40px auto", padding: 20 }}>
      {/* Buttons */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        <button
          onClick={() => setSection("impressum")}
          style={buttonStyle(section === "impressum")}
        >
          Impressum
        </button>
        <button
          onClick={() => setSection("datenschutz")}
          style={buttonStyle(section === "datenschutz")}
        >
          Datenschutz
        </button>
        <button
          onClick={() => setSection("urheberrecht")}
          style={buttonStyle(section === "urheberrecht")}
        >
          Urheberrecht & Haftung
        </button>
      </div>

      {/* Inhalte */}
      <div>
        {section === "impressum" && (
          <div>
            <h1>Impressum</h1>
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              Fuada Sulejmani<br />
              Omar Haiba<br />
              Esma Acar<br />
              Alteburgstr. 150<br />
              72762 Reutlingen<br />
              Deutschland (Hochschule Reutlingen)
            </p>

            <h2>Kontakt</h2>
            <p>
              E-Mail:<br />
              fuada.sulejmani@hochschule.reutlingen-university.de<br />
              omar.haiba@hochschule.reutlingen-university.de<br />
              esma.acar@hochschule.reutlingen-university.de
            </p>

            <h2>Verantwortlich nach § 18 Abs. 2 MStV</h2>
            <p>
              Fuada Sulejmani, Omar Haiba &amp; Esma Acar<br />
              jeweils unter der oben genannten Anschrift
            </p>
          </div>
        )}

        {section === "datenschutz" && (
          <div>
            <h1>Datenschutzerklärung</h1>
            <h2>1. Allgemeines</h2>
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. ...
            </p>
            {/* Rest DSGVO-Text – kann ich komplett reinrenden wenn du willst */}
          </div>
        )}

        {section === "urheberrecht" && (
          <div>
            <h1>Urheberrecht & Haftung</h1>
            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte ...
            </p>
            {/* Rest wie oben – kann ich auch komplett reinfüllen */}
          </div>
        )}
      </div>
    </div>
  );
}

function buttonStyle(active: boolean): React.CSSProperties {
  return {
    padding: "8px 16px",
    borderRadius: 9999,
    border: "1px solid #ccc",
    background: active ? "#111827" : "#fff",
    color: active ? "#fff" : "#111827",
    cursor: "pointer",
    transition: "0.2s",
  };
}
