const logos = ['Restauranggruppen', 'Nordic Bistro', 'Kusthotell', 'Caféverket', 'Golfkrogen'];

export default function LogoCloud() {
  return (
    <section className="section section-tight-top">
      <div className="container">
        <p className="logo-title">Förtroende från verksamheter i hela Sverige</p>
        <div className="logo-cloud">
          {logos.map((name) => (
            <span className="logo-pill" key={name}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
