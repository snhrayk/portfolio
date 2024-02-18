import styles from "../styles/nav.module.scss";

export default function Nav() {
  return (
    <nav>
      <section className={styles.navChild}>
        <img
          src="./image/about.png"
          alt="希望職種や勉強中の言語・アプリについて"
        />
        <h1>About</h1>
      </section>
      <section className={styles.navChild}>
        <img src="./image/profile.png" alt="私の自己紹介" />
        <h1>Profile</h1>
      </section>
      <section className={styles.navChild}>
        <img src="./image/works.png" alt="作品一覧" />
        <h1>Works</h1>
      </section>
      <section className={styles.navChild}>
        <img src="./image/contact.png" alt="私の連絡先・SNS" />
        <h1>Contact</h1>
      </section>
    </nav>
  );
}
