"use client";
import styles from "./index.module.css";

export default function App(props) {
  return <button onClick={props.click}>{props.text}</button>;
}
