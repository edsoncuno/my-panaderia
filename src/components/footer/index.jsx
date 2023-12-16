import style from "./index.module.css";

export default function App() {
  const logos = [
    { url: "/logos/facebook-logo.svg", href: "https://www.facebook.com" },
    { url: "/logos/twitter-logo.svg", href: "https://www.twitter.com" },
    { url: "/logos/instagram-logo.svg", href: "https://www.instagram.com" },
  ];

  const list = logos.map((item, index) => (
    <Logo key={"id_" + index} url={item.url} href={item.href} />
  ));

  return (
    <footer className={style.app}>
      <div className={style.derechosDeAutor}>Todos los derechos reservados</div>
      <div className={style.redesSociales}>{list}</div>
    </footer>
  );
}

function Logo(props) {
  return (
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
      }}
    />
  );
}
