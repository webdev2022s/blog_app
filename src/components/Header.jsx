import usePost from "../hook/usePost";
import Button from "./Button";
import styles from "./Header.module.css";

function Header({ children }) {
  const { clear } = usePost();
  return (
    <header className={styles.header}>
      <div>
        <img src="react.svg" role="logo blog" /> <h4>Blog</h4>
      </div>

      <div>
        {children}
        <Button label="clear" clickFunction={clear} />
      </div>
    </header>
  );
}

export default Header;
