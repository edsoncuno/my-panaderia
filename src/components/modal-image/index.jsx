"use client";
import styles from "./index.module.css";
import { useState } from "react";

export default function App(props) {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }

  return (
    <div
      style={{
        minWidth: "100%",
        minHeight: "100%",
        backgroundSize: "cover",
        background: `url("${props.url}")`,
        backgroundPosition: props.backgroundPosition,
      }}
      onClick={handleClick}
    >
      {active && (
        <div className={styles.modal}>
          <img src={props.url} alt="" />
        </div>
      )}
    </div>
  );
}
