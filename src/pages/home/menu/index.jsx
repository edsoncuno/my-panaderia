"use cliente";
import styles from "./index.module.css";
import data from "./data.js";
import { useState } from "react";

export default function App() {
  const [activeItem, setActiveItem] = useState(data.categories[0]);
  const [items, setItems] = useState(data.itemsPostres);

  const handleClick = (item) => {
    setActiveItem(item === activeItem ? null : item);
    if (item == data.categories[0]) {
      setItems(data.itemsPostres)
    } else {
      setItems(data.itemsCafes)
    }
  };

  return (
    <section className={styles.container} id="section-menu">
      <div className={styles.title}>{data.title}</div>
      <div className={styles.categories}>
        {data.categories.map((item) => (
          <div
            key={"id-menu-categoryes-category-" + item}
            className={`${styles.category} ${
              activeItem === item ? styles.categoryActive : ""
            }`}
            onClick={() => handleClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className={styles.items}>
        {items.map((item) => (
          <div
            key={"id-menu-categoryes-category-items-item" + item.nombre}
            className={styles.item}
          >
            <div className={styles.left}>
              <div>{item.nombre}</div>
              <p>{item.descripcion}</p>
            </div>
            <div className={styles.right}>${item.precio}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
