export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#" className="brand">Svenska Krögare</a>
        <nav className="header-nav" aria-label="Main navigation">
          <a href="#how-it-works">Så fungerar det</a>
          <a href="#benefits">Medlemsfördelar</a>
          <a href="#insights">Insikter</a>
        </nav>
        <a href="#" className="btn btn-primary">Bli medlem</a>
      </div>
    </header>
  );
}
