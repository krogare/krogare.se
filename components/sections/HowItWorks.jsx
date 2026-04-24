const steps = [
  'Vi analyserar dina inköp',
  'Du får tillgång till våra avtal',
  'Du får konkreta förbättringsförslag',
  'Du ser resultat på sista raden'
];

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <h2 className="section-title">Så fungerar det</h2>
        <div className="steps-grid">
          {steps.map((title, index) => (
            <article className="surface-card" key={title}>
              <div className="step-number">{index + 1}</div>
              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
