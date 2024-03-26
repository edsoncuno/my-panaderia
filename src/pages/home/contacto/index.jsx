import styles from "./index.module.css";

import Button from "./../../../components/button";
import InputText from "./../../../components/input-text";

export default function App() {
  return (
    <>
      Contacto
      <Button click={click} text="asd" />
      <InputText field={"Nombre"} message={"Por favor llena el campo con tu nombre"} />
    </>
  );
}

function click() {
  console.log("button funciona");
}
