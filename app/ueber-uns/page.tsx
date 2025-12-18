import Link from "next/link";

export default function UeberUnsPage() {
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
        {/* UNSER TEAM */}
        {/* ===================== */}
        <section id="about" className="about-section">
          <div className="container">
            <h2 className="team-title">Unser Team</h2>
            <p className="team-description">
              Unser Team besteht aus engagierten Studierenden, die gemeinsam
              eine moderne und verständliche Plattform für Finanzbildung entwickeln.
            </p>

            <div className="team-grid">
              {/* Teammitglied 1 */}
              <div className="team-card">
                <div className="team-image">
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <circle cx="60" cy="60" r="60" fill="#d4e9d4" />
                    <circle cx="60" cy="45" r="20" stroke="#2d5016" strokeWidth="3" fill="none" />
                    <path d="M30 95 Q30 75 60 75 Q90 75 90 95" stroke="#2d5016" strokeWidth="3" fill="none" />
                  </svg>
                </div>

                <h3 className="team-name">Fuada Sulejmani</h3>
                <p className="team-role">Digital Marketing</p>

                <div className="team-social">
                  <a href="#" className="social-icon">F</a>
                  <a href="#" className="social-icon">W</a>
                </div>
              </div>

              {/* Teammitglied 2 */}
              <div className="team-card">
                <div className="team-image">
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <circle cx="60" cy="60" r="60" fill="#d4e9d4" />
                    <circle cx="60" cy="45" r="20" stroke="#2d5016" strokeWidth="3" fill="none" />
                    <path d="M30 95 Q30 75 60 75 Q90 75 90 95" stroke="#2d5016" strokeWidth="3" fill="none" />
                  </svg>
                </div>

                <h3 className="team-name">Omar Haiba</h3>
                <p className="team-role">Digital Marketing</p>

                <div className="team-social">
                  <a href="#" className="social-icon">F</a>
                  <a href="#" className="social-icon">W</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

