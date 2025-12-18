import Link from "next/link";

export default function GeldVerstehenPage() {
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
            Geld verstehen
          </h1>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 2fr", 
            gap: "3rem",
            marginTop: "3rem",
            alignItems: "start"
          }}>
            {/* Illustration */}
            <div style={{ 
              background: "#f5f5dc",
              borderRadius: "12px",
              padding: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <img 
                src="/geld-verstehen-seite.png" 
                alt="Geld verstehen Illustration"
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            {/* Text Content */}
            <div>
              <p className="text-content">
                Warum ist es wichtig, Geld zu verstehen? Viele Menschen haben Fragen zu ihren Finanzen, 
                wissen aber nicht, wo sie anfangen sollen. Das Verstehen der Grundlagen unseres Finanzsystems 
                ist der erste Schritt, um fundierte Entscheidungen zu treffen und deine finanzielle Zukunft 
                selbst in die Hand zu nehmen.
              </p>

              <p className="text-content">
                Was bedeutet "Geld verstehen" eigentlich? Es geht darum, die Grundlagen unseres Finanzsystems 
                zu kennen: den Unterschied zwischen Einnahmen und Ausgaben zu verstehen, Bedürfnisse von 
                Wünschen zu unterscheiden und zu begreifen, warum viele Menschen keine Klarheit über ihre 
                Finanzen haben. Dies ist der erste Schritt auf dem Weg zur finanziellen Unabhängigkeit.
              </p>

              <p className="text-content">
                Du bist nicht allein mit deinen Fragen. Viele Menschen haben ähnliche Unsicherheiten, wenn es 
                um Geld geht. Aber das Gute ist: Du kannst lernen, wie Geld funktioniert. Mit dem richtigen 
                Wissen kannst du deine finanzielle Situation verbessern und langfristig mehr Kontrolle über 
                dein Geld gewinnen.
              </p>

              <p className="text-content">
                Beginne damit, deine Ausgaben zu analysieren. Verstehe, wofür du dein Geld ausgibst, und lerne, 
                Prioritäten zu setzen. Nur wer Geld versteht, kann es auch erfolgreich verwalten. Starte heute 
                und mache den ersten Schritt zu einem besseren Verständnis deiner Finanzen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

