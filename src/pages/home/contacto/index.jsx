import styles from "./index.module.css";

import Button from "./../../../components/button";
import InputText2 from "./../../../components/input-text/index2";

export default function App() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={{ alignContent: "center", width: "50%", display: "flex" }}>
          <InputText2
            text={"Nombre"}
            id={"contacto-nombre"}
            existError={true}
            error={"Hay un error"}
          />
        </div>
        <Button click={click} text="asd" />
      </form>
    </>
  );
}

function click() {
  console.log("button funciona");
}
