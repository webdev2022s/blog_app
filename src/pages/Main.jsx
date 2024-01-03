import { memo } from "react";
import styles from "./Main.module.css";

const Main = memo(function Main({ children }) {
  return <main className={styles.main}>{children}</main>;
});

export default Main;
