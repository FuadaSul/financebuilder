import Link from "next/link";

export default function SchuldenVermeidenPage() {
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
            Schulden vermeiden
          </h1>
          <p className="page-subtitle" style={{ textAlign: "left", marginTop: "0.5rem" }}>
            Lerne, wie du Schulden vermeidest und deine Finanzen unter Kontrolle behältst
          </p>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(3, 1fr)", 
            gap: "2rem",
            marginTop: "3rem"
          }}>
            {/* Card 1: Nicht alles direkt ausgeben */}
            <div className="card-green" style={{ padding: "2rem" }}>
              <div style={{ 
                fontSize: "3rem",
                marginBottom: "1rem",
                textAlign: "center"
              }}>
                💸
              </div>
              <h3 style={{ 
                color: "var(--dark-green)",
                fontSize: "1.3rem",
                fontWeight: "bold",
                marginBottom: "1rem"
              }}>
                Nicht alles direkt ausgeben
              </h3>
              <p style={{ 
                color: "#333",
                lineHeight: "1.6"
              }}>
                Behalte immer einen Puffer für unvorhergesehene Ausgaben. Eine Notreserve von mindestens 
                drei Monatsgehältern schützt dich vor unerwarteten Situationen und verhindert, dass du 
                Schulden aufnehmen musst.
              </p>
            </div>

            {/* Card 2: Ausgaben im Blick behalten */}
            <div className="card-green" style={{ padding: "2rem" }}>
              <div style={{ 
                fontSize: "3rem",
                marginBottom: "1rem",
                textAlign: "center"
              }}>
                📊
              </div>
              <h3 style={{ 
                color: "var(--dark-green)",
                fontSize: "1.3rem",
                fontWeight: "bold",
                marginBottom: "1rem"
              }}>
                Ausgaben im Blick behalten
              </h3>
              <p style={{ 
                color: "#333",
                lineHeight: "1.6"
              }}>
                Führe regelmässig Buch über deine Ausgaben. So behältst du den Überblick und erkennst 
                schnell, wo du Geld sparen kannst. Nutze Apps oder ein einfaches Haushaltsbuch, um alle 
                Einnahmen und Ausgaben zu dokumentieren.
              </p>
            </div>

            {/* Card 3: Impulskäufe vermeiden */}
            <div className="card-green" style={{ padding: "2rem" }}>
              <div style={{ 
                fontSize: "3rem",
                marginBottom: "1rem",
                textAlign: "center"
              }}>
                💡
              </div>
              <h3 style={{ 
                color: "var(--dark-green)",
                fontSize: "1.3rem",
                fontWeight: "bold",
                marginBottom: "1rem"
              }}>
                Impulskäufe vermeiden
              </h3>
              <p style={{ 
                color: "#333",
                lineHeight: "1.6"
              }}>
                Warte 24 Stunden vor grösseren Käufen. Oft verschwindet der Wunsch danach, und du kannst 
                eine durchdachtere Entscheidung treffen. Erstelle eine Wunschliste und priorisiere deine 
                Ausgaben, bevor du Geld ausgibst. So vermeidest du unnötige Schulden.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

