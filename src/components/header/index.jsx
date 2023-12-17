import style from "./index.module.css";
import logo from "/logos/logo.png";

import SocialNetworks from "./../social-networks";
import Navigation from "./Navigation";

export default function App() {
  const logos = [
    { url: "/logos/facebook-logo.svg", href: "https://www.facebook.com" },
    { url: "/logos/twitter-logo-black.svg", href: "https://www.twitter.com" },
    { url: "/logos/instagram-logo.svg", href: "https://www.instagram.com" },
  ];

  return (
    <header className={style.app}>
      <a href="#section-inicio">
        <img src={logo} alt="logo" className={style.logo} />
      </a>
      <Navigation />
      <SocialNetworks logos={logos} size={"3rem"} />
    </header>
  );
}
