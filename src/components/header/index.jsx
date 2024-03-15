import style from "./index.module.css";
import logo from "/logos/logo.png";

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
    <li key={"id-nav-ul-li" + index}>
      <a href={item.href}>{item.label}</a>
    </li>
  ));

  const listLogos = logos.map((item, index) => (
    <Logo
      key={"id-nav-ul-li-ul-li-" + index}
      url={item.url}
      href={item.href}
      size={"3rem"}
    />
  ));

  return (
    <header>
      <a href="#section-inicio">
        <img src={logo} alt="logo" className={style.logo} />
      </a>
      <nav>
        <ul>{list}
        <ul className={style.socialNetworks}>{listLogos}</ul>
        </ul>
      </nav>
      <div className={style.bars} />
      <ul className={style.socialNetworks}>{listLogos}</ul>
    </header>
  );
}

function Logo(props) {
  return (
    <li>
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className={style.logo}
        style={{
          backgroundImage: `url(${props.url})`,
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          minWidth: `${props.size}`,
          minHeight: `${props.size}`,
        }}
      />
    </li>
  );
}
