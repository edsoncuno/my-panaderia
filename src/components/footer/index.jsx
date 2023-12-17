import style from "./index.module.css";
import SocialNetworks from "./../social-networks";

export default function App() {
  const logos = [
    { url: "/logos/facebook-logo.svg", href: "https://www.facebook.com" },
    { url: "/logos/twitter-logo-white.svg", href: "https://www.twitter.com" },
    { url: "/logos/instagram-logo.svg", href: "https://www.instagram.com" },
  ];

  return (
    <footer className={style.app}>
      <div className={style.derechosDeAutor}>Todos los derechos reservados</div>
      <SocialNetworks logos={logos} size={"3rem"}/>
    </footer>
  );
}
