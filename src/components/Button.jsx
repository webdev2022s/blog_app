import styles from "./Button.module.css";
function Button({ label = "click", type, clickFunction }) {
  return (
    <>
      <button
        className={`${styles.button} ${styles[type]}`}
        onClick={clickFunction}
      >
        {label}
      </button>
    </>
  );
}

export default Button;
