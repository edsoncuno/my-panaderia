"use client";
import styles from "./form.module.css";
import InputSubmit from "./../../../components/input-submit";
import InputText from "./../../../components/input-text";
import InputEmail from "./../../../components/input-email";
import Textarea from "./../../../components/textarea";

import { useState } from "react";

export default function App() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    setContact({
      ...contact,
      [event.target.name]: event.target.value,
    });
  }

  function click() {
    alert([contact.name, contact.email, contact.message]);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <InputText
        value={contact.name}
        text={"Nombre"}
        id={"name"}
        existError={true}
        error={"Hay un error"}
        onChange={handleChange}
      />
      <InputEmail
        value={contact.email}
        text={"Correo Electronico"}
        id={"email"}
        existError={true}
        error={"Hay un error en el correo"}
        onChange={handleChange}
      />
      <Textarea
        text={"Mensaje"}
        id={"message"}
        existError={true}
        error={"Hay un error en el mensaje"}
        onChange={handleChange}
      />
      <InputSubmit click={click} text="Enviar" />
    </form>
  );
}

function handleSubmit(event) {
  event.preventDefault();
}
