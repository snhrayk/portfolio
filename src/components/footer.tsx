import { useEffect, useState } from "react";
import styles from "../styles/footer.module.scss";

export default function Footer() {
  // cursorの設定
  // const cursor = {
  //   cursor: 'url("./image/cursor.png"), auto',
  // };
  // 時間取得
  // const [time, setTime] = useState(new Date());
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime(new Date());
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  const link = (event: React.MouseEvent, href: string, windowName: string) => {
    event.preventDefault();
    window.open(href, windowName);
  };

  return (
    <div className={styles.borderTop}>
      <div className={styles.footerWrap}>
        <div className={styles.snsWrap}>
          <a
            href="https://github.com/snhrayk"
            onClick={(event) =>
              link(event, "https://github.com/snhrayk", "私のGitHub")
            }
          >
            <img src="/image/github_icon.svg" alt="私のGitHub" />
          </a>
          <a
            href="https://www.instagram.com/a8ksw_/"
            onClick={(event) =>
              link(event, "https://www.instagram.com/a8ksw_/", "私のInstagram")
            }
          >
            <img src="/image/instagram_icon.svg" alt="私のInstagram" />
          </a>
        </div>
        <p>
          <small>© 2024 Sunahara Ayaka's Portfolio</small>
        </p>
      </div>
    </div>
  );
}
