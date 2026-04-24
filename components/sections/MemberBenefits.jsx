const benefits = [
  'Bättre inköpsavtal och priser',
  'Personlig rådgivning',
  'Löpande uppföljning av resultat',
  'Tillgång till partnererbjudanden'
];

export default function MemberBenefits() {
  return (
    <section className="section" id="benefits">
      <div className="container">
        <h2 className="section-title">Medlemsfördelar</h2>
        <ul className="benefits-list">
          {benefits.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
  );
}
