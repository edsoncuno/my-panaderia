import styles from "./index.module.css";
import Form from "./form.jsx";

export default function App() {
  return (
    <section id="section-contacto" className={styles.container}>
      <div className={styles.background}>
        <div className={styles.image}></div>
      </div>
      <div className={styles.cards}></div>
      <div className={styles.containerform}>
        <Form />
      </div>
    </section>
  );
}

/*
<div class="card" v-for="item in itemsCards">
                <div class="title">{{ item.title }}</div>
                <div class="text">{{ item.text }}</div>
            </div>
*/
