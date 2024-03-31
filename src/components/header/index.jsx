"use client";
import styles from "./index.module.css";
import logo from "/logos/logo.png";
import { useState } from "react";
import data from "./data.js";
import SocialNetworks from "./../social-networks";

export default function App() {
  const [isShowingSideBar, setIsShowingSideBar] = useState(false);

  const list = data.sections.map((item, index) => (
    <li key={"header-nav-ul-li" + index}>
      <a href={item.href} onClick={(e) => scrollToSection(e)}>
        {item.label}
      </a>
    </li>
  ));

  function handleSideBar() {
    setIsShowingSideBar(!isShowingSideBar);
  }

  function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }

    setIsShowingSideBar(false);
  }

  return (
    <header>
      <a href="#section-inicio">
        <img src={logo} alt="logo" className={styles.logo} />
      </a>
      <nav className={`${isShowingSideBar ? styles.navOpen : ""}`}>
        <ul>
          {list}
          <li>
            <div className={styles.socialNetworksMobile}>
              <SocialNetworks logos={data.redes} size={"3rem"} />
            </div>
          </li>
        </ul>
      </nav>
      <div className={styles.bars} onClick={handleSideBar} />
      <div className={styles.socialNetworksPc}>
        <SocialNetworks logos={data.redes} size={"3rem"} />
      </div>
    </header>
  );
}
