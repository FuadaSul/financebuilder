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

      <main style={{ marginTop: "100px" }}>
        <section className="community-section">
          <div className="container">
            <h2 className="community-title">Unsere Community</h2>
            <p className="community-subtitle">
              Werde Teil einer Community, die sich gegenseitig hilft, besser mit Geld umzugehen.
            </p>

            <div className="community-info">
              <p>
                In unserer Community tauschen sich Menschen über Finanzbildung, Budgetplanung und
                Investitionen aus. Gemeinsam lernt man schneller und bleibt motiviert.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
