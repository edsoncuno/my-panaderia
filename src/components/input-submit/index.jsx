import styles from "./index.module.css";

export default function App(props) {
  return (
    <input
      type="submit"
      onClick={props.click}
      value={props.text}
      className={styles.inputSubmit}
    />
  );
}
