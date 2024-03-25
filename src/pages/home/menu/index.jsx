"use cliente";
import styles from "./index.module.css";
import data from "./data.js";
import { useState } from "react";

export default function App() {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (item) => {
    setActiveItem(item === activeItem ? null : item);
  };

  return (
    <section className={styles.container}>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.categories}>
        {data.categories.map((item) => (
          <div
            key={item}
            className={`${styles.category} ${
              activeItem === item ? styles.categoryActive : ""
            }`}
            onClick={() => handleClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
