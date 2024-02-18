import styles from "../styles/footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footerWrap}>
      <div className={styles.snsWrap}>
        <a href="https://github.com/snhrayk">
          <img src="/image/github_icon.svg" alt="私のGitHub" />
        </a>
        <a href="https://www.instagram.com/web.s7/">
          <img src="/image/instagram_icon.svg" alt="私のInstagram" />
        </a>
      </div>
      <p>
        <small>&copy; 2024 Ayaka's Portfolio</small>
      </p>
    </div>
  );
}
