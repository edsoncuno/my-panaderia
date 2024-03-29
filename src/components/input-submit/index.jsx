import styles from "./index.module.css";

export default function App(props) {
  return (
    <input
      type="submit"
      value={props.text}
      className={styles.inputSubmit}
    />
  );
}
