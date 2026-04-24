const segments = ['Fine dining', 'Café & bageri', 'Hotell & konferens'];

export default function PortfolioCards() {
  return (
    <section className="section section-muted">
      <div className="container">
        <h2 className="section-title">Anpassat för olika typer av verksamheter</h2>
        <div className="portfolio-grid">
          {segments.map((segment) => (
            <article className="surface-card" key={segment}>
              <h3>{segment}</h3>
              <p>Avtal, sortiment och rekommendationer anpassade till din drift och gästprofil.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
