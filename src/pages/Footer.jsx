import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <span>
          <strong>&copy; </strong>
          {new Date().getFullYear()} BLOG POST
        </span>
      </p>
    </footer>
  );
}

export default Footer;
