import Image from "next/image";
import PriceFunnel from "./PriceFunnel";

type Brand = "floors" | "abbi";

const content = {
  floors: {
    logo: "/assets/floors-more-logo.svg",
    logoAlt: "Floors & More",
    phone: "03 888 84 84",
    phoneHref: "tel:038888484",
    eyebrow: "Naadloze gietvloeren op maat",
    title: <>Ontdek wat jouw <span>gietvloer</span> ongeveer kost.</>,
    intro: "Beantwoord vijf korte vragen en krijg meteen een realistische richtprijs — zonder eerst je contactgegevens achter te laten.",
    bullets: ["Meteen zicht op je budget", "Gebaseerd op vloerkeuze en oppervlakte", "Vrijblijvend, zonder verrassingen"],
    hero: "/assets/floors-more-hero.png",
    proof: ["Bijna 40 jaar expertise", "Toonzalen in Niel & Knokke", "Belgische kwaliteitsproducten"],
    sectionTitle: "Van eerste idee naar een vloer die klopt.",
    sectionText: "Een gietvloer is een investering voor jaren. Daarom geven we je eerst een transparante prijsindicatie. Zo weet jij meteen of je project en budget bij elkaar passen.",
    theme: "theme-floors",
  },
  abbi: {
    logo: "/assets/abbi-logo.svg",
    logoAlt: "ABBI Industrie",
    phone: "03 888 84 84",
    phoneHref: "tel:038888484",
    eyebrow: "Vloerherstellingen voor industrie",
    title: <>Snel zicht op het budget voor je <span>vloerherstelling.</span></>,
    intro: "Schat de grootte van de schade in en ontvang meteen een richtprijs. Pas daarna beslis je of een ABBI-specialist contact mag opnemen.",
    bullets: ["Budgetindicatie in minder dan 1 minuut", "Voor industriële vloeren en werkomgevingen", "Exacte offerte na technische beoordeling"],
    hero: "/assets/abbi-hero.jpg",
    proof: ["Meer dan 30 jaar ervaring", "Team van 50 vakspecialisten", "Minimale impact op je werking"],
    sectionTitle: "Eerst duidelijkheid. Daarna pas advies.",
    sectionText: "Schade aan een industrievloer wil je snel en duurzaam aanpakken. Met deze calculator krijg je vooraf een bruikbare budgetrange, zodat een vervolggesprek meteen concreet wordt.",
    theme: "theme-abbi",
  },
};

export default function LandingPage({ brand }: { brand: Brand }) {
  const item = content[brand];
  return (
    <main className={`landing ${item.theme}`}>
      <header className="site-header">
        <a className="brand-logo" href={brand === "floors" ? "https://www.floorsandmore.be/" : "https://abbi.be/"} aria-label={`${item.logoAlt} homepage`}>
          <Image src={item.logo} alt={item.logoAlt} width={brand === "floors" ? 105 : 146} height={brand === "floors" ? 100 : 92} priority />
        </a>
        <div className="header-actions">
          <a className="phone-link" href={item.phoneHref}><span aria-hidden="true">☎</span> {item.phone}</a>
          <a className="header-cta" href="#calculator">Bereken je prijs <span aria-hidden="true">→</span></a>
        </div>
      </header>

      <section className="hero">
        <div className="hero__background" style={{ backgroundImage: `url(${item.hero})` }} aria-hidden="true" />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__content">
          <div className="hero__copy">
            <p className="eyebrow">{item.eyebrow}</p>
            <h1>{item.title}</h1>
            <p className="hero__intro">{item.intro}</p>
            <ul className="hero__bullets">
              {item.bullets.map((bullet) => <li key={bullet}><CheckIcon />{bullet}</li>)}
            </ul>
            <a className="mobile-hero-cta" href="#calculator">Bereken mijn richtprijs <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero__calculator"><PriceFunnel brand={brand} /></div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Waarom kiezen voor ons">
        {item.proof.map((proof, index) => <div key={proof}><span>0{index + 1}</span><strong>{proof}</strong></div>)}
      </section>

      <section className="explain">
        <div>
          <p className="eyebrow">Transparant van bij de start</p>
          <h2>{item.sectionTitle}</h2>
        </div>
        <div>
          <p>{item.sectionText}</p>
          <ol className="process-list">
            <li><span>1</span><div><strong>Beantwoord enkele vragen</strong><small>Alleen wat nodig is voor een betrouwbare indicatie.</small></div></li>
            <li><span>2</span><div><strong>Bekijk je richtprijs</strong><small>Je prijs verschijnt vóór we contactgegevens vragen.</small></div></li>
            <li><span>3</span><div><strong>Kies zelf of we contact opnemen</strong><small>Alleen geïnteresseerde projecten gaan door naar het team.</small></div></li>
          </ol>
        </div>
      </section>

      <footer className="site-footer">
        <Image src={item.logo} alt={item.logoAlt} width={brand === "floors" ? 78 : 116} height={70} />
        <p>Richtprijzen zijn indicatief en vormen geen bindende offerte.</p>
        <a href={brand === "floors" ? "https://www.floorsandmore.be/privacy/" : "https://abbi.be/privacy-policy/"}>Privacy</a>
      </footer>
    </main>
  );
}

function CheckIcon() {
  return <span className="check-icon" aria-hidden="true">✓</span>;
}
