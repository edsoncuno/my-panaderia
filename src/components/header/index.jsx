import style from "./index.module.css";
import logo from "/logos/logo.png";

import SocialNetworks from "./../social-networks";

export default function App() {
  const logos = [
    { url: "/logos/facebook-logo.svg", href: "https://www.facebook.com" },
    { url: "/logos/twitter-logo-black.svg", href: "https://www.twitter.com" },
    { url: "/logos/instagram-logo.svg", href: "https://www.instagram.com" },
  ];

  const enlaces = [
    { href: "#section-inicio", label: "Inicio" },
    { href: "#section-nosotros", label: "Nosotros" },
    { href: "#section-nuestro-chef", label: "Nuestro Chef" },
    { href: "#section-menu", label: "Menú" },
    { href: "#section-contacto", label: "Contacto" },
  ];

  const list = enlaces.map((item, index) => (
    <a key={"id-" + index} href={item.href}>
      {item.label}
    </a>
  ));

  return (
    <header>
      <a href="#section-inicio">
        <img src={logo} alt="logo" className={style.logo} />
      </a>
      <nav>{list}</nav>
      <div>
        <SocialNetworks logos={logos} size={"3rem"} />
      </div>
    </header>
  );
}
