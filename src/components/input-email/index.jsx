"use client";
import styles from "./index.module.css";
import { useState } from "react";

export default function App(props) {
  const [isActive, setIsActive] = useState(false);

  function handleFocus() {
    setIsActive(true);
  }

  function handleBlur() {
    if (props.value == "") {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }

  return (
    <div className={styles.container}>
      <label
        htmlFor={props.id}
        style={
          isActive
            ? {
                top: "-0.75rem",
                marginLeft: 0,
                fontSize: "0.75rem",
                lineHeight: "2rem",
              }
            : {}
        }
      >
        {props.text}
      </label>
      <input
        type="email"
        id={props.id}
        name={props.id}
        className={styles.element}
        value={props.value}
        onChange={props.onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {props.existError && <span>{props.error}</span>}
    </div>
  );
}
