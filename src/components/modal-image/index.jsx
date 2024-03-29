"use client";
import styles from "./index.module.css";
import { useState } from "react";

export default function App(props) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={styles.container}
      style={{
        backgroundSize: "cover",
        background: `url("${props.url}")`,
        backgroundPosition: props.backgroundPosition,
      }}
    >
      <img className={styles.image}></img>
    </div>
  );
}
