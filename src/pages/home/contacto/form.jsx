import styles from "./form.module.css";
import InputSubmit from "./../../../components/input-submit";
import InputText from "./../../../components/input-text";

export default function App() {
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <InputText
        text={"Nombre"}
        id={"contacto-nombre"}
        existError={true}
        error={"Hay un error"}
      />
      <InputSubmit click={click} text="Enviar" />
    </form>
  );
}

function handleSubmit(event) {
  event.preventDefault();
}

function click() {
  console.log("button funciona");
}
