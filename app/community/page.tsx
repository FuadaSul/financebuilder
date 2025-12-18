import Link from "next/link";

export default function CommunityPage() {
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
        {/* COMMUNITY */}
        {/* ===================== */}
        <section id="community" className="community-section">
          <div className="container">
            <div className="community-social">
              <h3>Folge uns auf</h3>

              <div className="social-links">
                <a href="#" className="social-link">
                  <span>📸</span>
                  <span>Instagram</span>
                </a>

                <a href="#" className="social-link">
                  <span>💬</span>
                  <span>Discord</span>
                </a>

                <a href="#" className="social-link">
                  <span>📘</span>
                  <span>Facebook</span>
                </a>

                <a href="#" className="social-link">
                  <span>▶️</span>
                  <span>YouTube</span>
                </a>

                <a href="#" className="social-link">
                  <span>💼</span>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

