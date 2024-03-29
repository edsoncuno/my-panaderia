import styles from "./index.module.css";
import Form from "./form.jsx";
import data from "./data";

export default function App() {
  return (
    <section id="section-contacto" className={styles.container}>
      <div className={styles.background}>
        <div className={styles.image}></div>
      </div>
      <div className={styles.cards}>
        {data.cards.map((item) => (
          <div
            key={"id-contacto-cards-card-" + item.id}
            className={styles.card}
          >
            <div className={styles.title}>{item.title}</div>
            <div className={styles.text}>{item.text}</div>
          </div>
        ))}
      </div>
      <div className={styles.containerform}>
        <Form />
      </div>
    </section>
  );
}
