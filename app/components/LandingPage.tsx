import Image from "next/image";
import PriceFunnel from "./PriceFunnel";

type Brand = "floors" | "abbi";

const content = {
  floors: {
    logo: "/assets/floors-more-logo.svg",
    logoAlt: "Floors & More",
    title: "Bereken de richtprijs van je gietvloer",
    privacy: "https://www.floorsandmore.be/privacy/",
    theme: "theme-floors",
  },
  abbi: {
    logo: "/assets/abbi-logo.svg",
    logoAlt: "ABBI Industrie",
    title: "Bereken de richtprijs van je vloerherstelling",
    privacy: "https://abbi.be/privacy-policy/",
    theme: "theme-abbi",
  },
};

export default function LandingPage({ brand }: { brand: Brand }) {
  const item = content[brand];

  return (
    <main className={`calculator-page ${item.theme}`}>
      <header className="funnel-header">
        <Image
          src={item.logo}
          alt={item.logoAlt}
          width={brand === "floors" ? 104 : 148}
          height={brand === "floors" ? 96 : 84}
          priority
        />
        <div className="funnel-header__assurance"><span aria-hidden="true">✓</span> Gratis en vrijblijvend</div>
      </header>

      <section className="funnel-stage">
        <h1 className="sr-only">{item.title}</h1>
        <PriceFunnel brand={brand} />
      </section>

      <footer className="funnel-footer">
        <span>© {new Date().getFullYear()} {item.logoAlt}</span>
        <a href={item.privacy}>Privacy</a>
      </footer>
    </main>
  );
}
