import styles from "./index.module.css";
import data from "./data";
import Carousel from "./../../../components/carousel";

export default function App() {
  return (
    <section id="section-nuestro-chef" className={styles.container}>
      <div className={styles.left}>
        <Carousel />
      </div>
      <div className={styles.right}>
        <h3>{data.title}</h3>
        <p>{data.text}</p>
      </div>
    </section>
  );
}
