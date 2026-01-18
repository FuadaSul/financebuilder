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
          </div>
        </div>
      </section>
    </>
  );
}
