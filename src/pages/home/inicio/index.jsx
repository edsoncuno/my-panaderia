import styles from "./index.module.css";
import ModalImage from "./../../../components/modal-image";

export default function App() {
  return (
    <section id="section-inicio" className={styles.container}>
      <div className={styles.column}>
        <div className={styles.texto}>
          <h2>Mejor Calidad</h2>
          <p>
            Lorem ipsum dolor sit arnet, consertetur adipisicing elit. Esse
            provident asperiores, ipsa. In dicta vel, ipsa odio quasi
            perspicialist illo sint reiciendis voluptatum incidunt excepturi
            doloremque nisi impedit rerum nam expedita delectus molestiac
            voluptate, animi unde quia ex.
          </p>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.texto}>
          <h2>Mejor Sabor</h2>
          <p>
            Lorem ipsum dolor sit arnet, consertetur adipisicing elit. Quod
            incidunt doloremque cumque, nobis possimus porro perferendis,
            suscipit. Laboriosam similique inventore sequi rem velit
            consequuntor quasi laborum maxime maiores aspernatur voluptatum,
            animi, aut atque alias sunt.
          </p>
        </div>
      </div>
    </section>
  );
}
