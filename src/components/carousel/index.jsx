"use client";
import styles from "./index.module.css";
import { useEffect, useRef } from "react";

export default function App() {
  const sliderRef = useRef(null);

  const mover = () => {
    const slider = sliderRef.current;
    slider.style.transition = "all 0.5s ease";
    slider.style.marginLeft = "-100%";

    setTimeout(() => {
      slider.appendChild(slider.firstElementChild);
      slider.style.transition = "all 0s";
      slider.style.marginLeft = "unset";
    }, 1000);
  };

  useEffect(() => {
    const intervalId = setInterval(mover, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.carousel}>
      <div className={styles.slider} ref={sliderRef}>
        <div className={`${styles.slide} ${styles.imagen1}`}></div>
        <div className={`${styles.slide} ${styles.imagen2}`}></div>
        <div className={`${styles.slide} ${styles.imagen3}`}></div>
      </div>
    </div>
  );
}
