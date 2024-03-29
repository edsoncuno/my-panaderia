"use client";
import styles from "./form.module.css";
import InputSubmit from "./../../../components/input-submit";
import InputText from "./../../../components/input-text";
import InputEmail from "./../../../components/input-email";
import Textarea from "./../../../components/textarea";

import { useState, useEffect } from "react";

export default function App() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    if (!errorName && !errorEmail && !errorMessage) {
      setContact((prevContact) => ({
        ...prevContact,
        name: "",
        email: "",
        message: "",
      }));
    }
  }, [errorName, errorEmail, errorMessage]);

  function handleChange(event) {
    setContact((prevContact) => ({
      ...prevContact,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    //
    contact.name == "" ? setErrorName(true) : setErrorName(false);
    contact.email == "" ? setErrorEmail(true) : setErrorEmail(false);
    contact.message == "" ? setErrorMessage(true) : setErrorMessage(false);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container} noValidate>
      <InputText
        value={contact.name}
        text={"Nombre"}
        id={"name"}
        existError={errorName}
        error={"Por favor llena el campo con tu nombre"}
        onChange={handleChange}
      />
      <InputEmail
        value={contact.email}
        text={"Correo Electronico"}
        id={"email"}
        existError={errorEmail}
        error={"Por favor llena el campo con tu email"}
        onChange={handleChange}
      />
      <Textarea
        text={"Mensaje"}
        id={"message"}
        existError={errorMessage}
        error={"Por favor llena el campo con tu mensaje"}
        value={contact.message}
        onChange={handleChange}
      />
      <InputSubmit text="Enviar" />
    </form>
  );
}
