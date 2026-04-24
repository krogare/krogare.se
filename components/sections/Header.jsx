export default function Header() {
  return (
    <header className="site-header" id="top">
      <a className="skip-link" href="#main-content">Hoppa till huvudinnehåll</a>
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label="Tillbaka till sidans topp">Svenska Krögare</a>
        <nav className="header-nav" aria-label="Huvudnavigering">
          <a href="#how-it-works">Så fungerar det</a>
          <a href="#benefits">Medlemsfördelar</a>
          <a href="#insights">Insikter</a>
        </nav>
        <a href="#contact" className="btn btn-primary">Bli medlem</a>
      </div>
    </header>
  );
}
