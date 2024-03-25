import styles from "./index.module.css";
import data from "./data.js";

export default function App() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.categories}>
        <div className={styles.category}>POSTRES</div>
        <div className={styles.category}>CAFÉS</div>
      </div>
    </section>
  );
}
