import Link from "next/link";

export default function GrundlagenPage() {
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
      <main style={{ paddingTop: "70px" }}>
        {/* ===================== */}
        {/* GRUNDLAGEN */}
        {/* ===================== */}
        <section className="grundlagen">
          <div className="container">
            <h2 className="section-title">Grundlagen der Finanzen</h2>
            <p className="section-subtitle">
              Starte mit den Basics – verständlich erklärt
            </p>

            <div className="cards-grid">
              {/* Karte 1 */}
              <Link href="/grundlagen/geld-verstehen" className="finance-card finance-card-link">
                <div className="card-image">
                  <img
                    src="/geld-verstehen-karte.png"
                    alt="Geld verstehen"
                    className="card-image-img"
                  />
                </div>
                <div className="card-footer">
                  <h3>Geld verstehen</h3>
                  <p>
                    Lerne die Grundlagen unseres Finanzsystems kennen und verstehe,
                    wie Geld funktioniert.
                  </p>
                </div>
              </Link>

              {/* Karte 2 */}
              <Link href="/grundlagen/budgetplanung" className="finance-card finance-card-link">
                <div className="card-image">
                  <img
                    src="/budgetplanung-karte.png"
                    alt="Budgetplanung"
                    className="card-image-img"
                  />
                </div>
                <div className="card-footer">
                  <h3>Budgetplanung</h3>
                  <p>
                    Erstelle deine persönliche Budgetplanung und behalte den Überblick
                    über Einnahmen und Ausgaben.
                  </p>
                </div>
              </Link>

              {/* Karte 3 */}
              <Link href="/grundlagen/schulden-vermeiden" className="finance-card finance-card-link">
                <div className="card-image">
                  <img
                    src="/schulden-vermeiden-karte.png"
                    alt="Schulden vermeiden"
                    className="card-image-img"
                  />
                </div>
                <div className="card-footer">
                  <h3>Schulden vermeiden</h3>
                  <p>
                    Erfahre, wie du Schulden vermeidest und langfristig die Kontrolle
                    über deine Finanzen behältst.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ===================== */}
        {/* GELD VERSTEHEN */}
        {/* ===================== */}
        <section id="geld-verstehen" className="geld-verstehen-section">
          <div className="container">
            <div className="geld-content-wrapper">
              {/* Bild / Illustration */}
              <div className="geld-illustration">
                <img
                  src="/geld-verstehen-seite.png"
                  alt="Geld verstehen Illustration"
                  className="geld-illustration-img"
                />
              </div>

              {/* Text */}
              <div className="geld-text-content">
                <h2>Geld verstehen</h2>

                <div className="geld-text-flow">
                  <p>
                    Viele Menschen stehen vor der Frage: Was bedeutet es eigentlich,
                    Geld zu verstehen? Es geht darum, die Grundlagen unseres
                    Finanzsystems zu begreifen und fundierte Entscheidungen treffen
                    zu können.
                  </p>

                  <p>
                    Geld verstehen bedeutet, den Unterschied zwischen Einnahmen und
                    Ausgaben zu kennen, zwischen Bedürfnissen und Wünschen zu
                    unterscheiden und zu verstehen, warum oft die Übersicht fehlt.
                    Es ist der erste Schritt zu finanzieller Unabhängigkeit.
                  </p>

                  <p>
                    Du bist nicht allein mit deinen Fragen – und du kannst lernen,
                    wie Geld funktioniert. Mit dem richtigen Wissen kannst du deine
                    finanzielle Situation verbessern und langfristig mehr Kontrolle
                    über deine Finanzen gewinnen.
                  </p>

                  <p>
                    Beginne damit, deine eigenen Ausgaben zu analysieren, verstehe,
                    wofür du dein Geld ausgibst, und lerne, Prioritäten zu setzen.
                    Nur wer versteht, wie Geld funktioniert, kann es auch erfolgreich
                    verwalten.
                  </p>
                </div>
              </div>
            </div>

            {/* Zurück-Button */}
            <div className="back-button-container">
              <Link href="/grundlagen" className="back-button">
                ← Zurück zu Grundlagen
              </Link>
            </div>
          </div>
        </section>

        {/* ===================== */}
        {/* BUDGETPLANUNG */}
        {/* ===================== */}
        <section id="budgetplanung" className="budgetplanung-section">
          <div className="container">
            <h2 className="budget-title">Budgetplanung</h2>

            <div className="budget-content-wrapper">
              {/* Kreisdiagramm / Visualisierung */}
              <div className="pie-chart-container">
                <svg
                  viewBox="0 0 300 300"
                  className="pie-chart-svg"
                >
                  <circle
                    cx="150"
                    cy="150"
                    r="100"
                    className="pie-background"
                  />

                  {/* Miete – 35% */}
                  <circle
                    cx="150"
                    cy="150"
                    r="100"
                    className="pie-segment"
                    stroke="#2d5016"
                    strokeDasharray="220 628"
                    strokeDashoffset="0"
                  />

                  {/* Essen – 20% */}
                  <circle
                    cx="150"
                    cy="150"
                    r="100"
                    className="pie-segment"
                    stroke="#4a7c3a"
                    strokeDasharray="126 628"
                    strokeDashoffset="-220"
                  />

                  {/* Versicherungen – 15% */}
                  <circle
                    cx="150"
                    cy="150"
                    r="100"
                    className="pie-segment"
                    stroke="#6fa25f"
                    strokeDasharray="94 628"
                    strokeDashoffset="-346"
                  />

                  {/* Transport – 10% */}
                  <circle
                    cx="150"
                    cy="150"
                    r="100"
                    className="pie-segment"
                    stroke="#9ccf8a"
                    strokeDasharray="63 628"
                    strokeDashoffset="-440"
                  />

                  {/* Sparen – 20% */}
                  <circle
                    cx="150"
                    cy="150"
                    r="100"
                    className="pie-segment"
                    stroke="#c8e6c9"
                    strokeDasharray="126 628"
                    strokeDashoffset="-503"
                  />

                  {/* Text in der Mitte */}
                  <text
                    x="150"
                    y="140"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="pie-center-text"
                    transform="rotate(90 150 150)"
                  >
                    Budget
                  </text>
                  <text
                    x="150"
                    y="160"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="pie-center-text small"
                    transform="rotate(90 150 150)"
                  >
                    100%
                  </text>
                </svg>

                {/* Legende */}
                <div className="pie-legend">
                  <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: "#2d5016" }}></span>
                    <span className="legend-label">Miete</span>
                    <span className="legend-value">35%</span>
                  </div>

                  <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: "#4a7c3a" }}></span>
                    <span className="legend-label">Essen</span>
                    <span className="legend-value">20%</span>
                  </div>

                  <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: "#6fa25f" }}></span>
                    <span className="legend-label">Versicherungen</span>
                    <span className="legend-value">15%</span>
                  </div>

                  <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: "#9ccf8a" }}></span>
                    <span className="legend-label">Transport</span>
                    <span className="legend-value">10%</span>
                  </div>

                  <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: "#c8e6c9" }}></span>
                    <span className="legend-label">Sparen</span>
                    <span className="legend-value">20%</span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="budget-text-content">
                <h3>Warum Budgetplanung wichtig ist</h3>

                <div className="budget-text-flow">
                  <p>
                    Eine gute Budgetplanung hilft dir dabei, deine Einnahmen und
                    Ausgaben im Blick zu behalten. Sie zeigt dir klar, wofür dein
                    Geld verwendet wird und wo Einsparpotenziale bestehen.
                  </p>

                  <p>
                    Durch eine strukturierte Aufteilung deiner finanziellen Mittel
                    kannst du sicherstellen, dass Fixkosten gedeckt sind, Rücklagen
                    gebildet werden und dennoch Platz für persönliche Wünsche bleibt.
                  </p>

                  <p>
                    <strong>Wer sein Budget kennt, trifft bessere Entscheidungen.</strong>
                    Budgetplanung ist kein Verzicht, sondern ein Werkzeug für
                    finanzielle Freiheit und Sicherheit.
                  </p>
                </div>
              </div>
            </div>

            {/* Zurück-Button */}
            <div className="back-button-container">
              <Link href="/grundlagen" className="back-button">
                ← Zurück zu Grundlagen
              </Link>
            </div>
          </div>
        </section>

        {/* ===================== */}
        {/* BUDGET ERSTELLEN */}
        {/* ===================== */}
        <section id="budget-erstellen" className="budget-erstellen-section">
  <div className="budget-container">
    <h2 className="budget-title">Budget erstellen</h2>
    <p className="budget-subtitle">
      Erstelle dein persönliches Budget und behalte deine Finanzen im Blick
    </p>
  </div>
</section>


            {/* Bild */}
            <div className="budget-erstellen-image-container">
              <img
                src="/budget-erstellen.png"
                alt="Budget erstellen Illustration"
                className="budget-erstellen-image"
              />
            </div>

            <div className="budget-form-wrapper">
              {/* FORMULAR */}
              <div className="budget-form-container">
                <h3>Einnahmen</h3>

                <div className="form-group">
                  <label>Monatliches Einkommen</label>
                  <input type="number" placeholder="z. B. 2500 €" />
                </div>

                <h3>Ausgaben</h3>

                <div className="expenses-container">
                  <div className="expense-item">
                    <label>Kategorie</label>
                    <input
                      type="text"
                      className="expense-category"
                      placeholder="z. B. Miete"
                    />

                    <label>Betrag</label>
                    <input
                      type="number"
                      className="expense-amount"
                      placeholder="z. B. 800 €"
                    />

                    <button className="remove-expense-btn">−</button>
                  </div>
                </div>

                <button className="add-expense-btn">
                  + Weitere Ausgabe hinzufügen
                </button>

                {/* Zusammenfassung */}
                <div className="budget-summary">
                  <div className="summary-item">
                    <span>Einnahmen</span>
                    <span>0 €</span>
                  </div>

                  <div className="summary-item">
                    <span>Ausgaben</span>
                    <span>0 €</span>
                  </div>

                  <div className="summary-item summary-balance">
                    <span>Restbetrag</span>
                    <span>0 €</span>
                  </div>
                </div>

                {/* Aktionen */}
                <div className="form-actions">
                  <button className="save-budget-btn">Budget speichern</button>
                  <button className="load-budget-btn">Budget laden</button>
                  <button className="clear-budget-btn">Zurücksetzen</button>
                </div>
              </div>

              {/* VISUALISIERUNG */}
              <div className="budget-visualization">
                <h3>Dein Budget</h3>

                <div className="pie-chart-container-custom">
                  <svg
                    viewBox="0 0 300 300"
                    className="pie-chart-svg-custom"
                  >
                    <circle
                      cx="150"
                      cy="150"
                      r="100"
                      className="pie-background-custom"
                    />

                    <circle
                      cx="150"
                      cy="150"
                      r="100"
                      className="pie-segment-custom"
                      stroke="#4a7c3a"
                      strokeDasharray="314 628"
                    />
                  </svg>

                  <text
                    x="150"
                    y="150"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="pie-center-text-custom"
                    transform="rotate(90 150 150)"
                  >
                    0 €
                  </text>
                </div>

                <div className="pie-legend-custom">
                  <div className="legend-item-custom">
                    <span
                      className="legend-color-custom"
                      style={{ backgroundColor: "#4a7c3a" }}
                    ></span>
                    <span className="legend-label-custom">Ausgaben</span>
                    <span className="legend-value-custom">0 €</span>
                  </div>
                </div>
              </div>
            </div>
         

        {/* ===================== */}
        {/* SCHULDEN VERMEIDEN */}
        {/* ===================== */}
        <section id="schulden-vermeiden" className="schulden-vermeiden-section">
          <div className="container">
            <h2 className="schulden-title">Schulden vermeiden</h2>
            <p className="schulden-subtitle">
              Lerne, wie du Schulden vermeidest und deine Finanzen unter Kontrolle behältst
            </p>

            <div className="infographics-grid">
              {/* Karte 1 */}
              <div className="infographic-card">
                <div className="infographic-icon">💸</div>
                <h3>Nicht alles sofort ausgeben</h3>
                <p>
                  Behalte immer einen finanziellen Puffer für unvorhergesehene Ausgaben.
                  Eine Notreserve von mindestens drei Monatsgehältern schützt dich davor,
                  Schulden aufnehmen zu müssen.
                </p>
              </div>

              {/* Karte 2 */}
              <div className="infographic-card">
                <div className="infographic-icon">📊</div>
                <h3>Ausgaben im Blick behalten</h3>
                <p>
                  Notiere regelmässig deine Einnahmen und Ausgaben.
                  So erkennst du frühzeitig, wo du Geld sparen kannst
                  und vermeidest finanzielle Engpässe.
                </p>
              </div>

              {/* Karte 3 */}
              <div className="infographic-card">
                <div className="infographic-icon">💡</div>
                <h3>Impulskäufe vermeiden</h3>
                <p>
                  Warte vor grösseren Käufen mindestens 24 Stunden.
                  Oft verschwindet der Kaufimpuls von selbst,
                  und du triffst eine bessere Entscheidung.
                </p>
              </div>
            </div>

            {/* Zurück-Button */}
            <div className="back-button-container">
              <Link href="/grundlagen" className="back-button">
                ← Zurück zu Grundlagen
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

