"use client";
import styles from "./index.module.css";
import { useState } from "react";

export default function App({
  field,
  error,
  message,
  modelValue,
  isError,
  onUpdateModelValue,
}) {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => {
    if (modelValue === "") {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const handleBlur = () => {
    if (modelValue === "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <div className={styles.container}>
      <label
        style={{
          color: "#777",
          position: "absolute",
          top: "1rem",
          left: 0,
          marginLeft: "1rem",
          transition: "all 0.3s",
          ...(isActive && {
            top: "-0.75rem",
            marginLeft: 0,
            fontSize: "0.75rem",
            lineHeight: "2rem",
          }),
        }}
      >
        {field}
      </label>
      <input
        style={{
          width: "100%",
          height: "3rem",
          outline: "none",
          border: "none",
          fontSize: "1.2rem",
          ...(isActive && { borderBottom: "2px solid gold" }),
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={modelValue}
        onChange={(e) => onUpdateModelValue(e.target.value)}
      />
      {isError && (
        <span style={{ color: "rgb(255, 59, 59)", fontSize: "0.8rem" }}>
          {message}
        </span>
      )}
    </div>
  );
}
