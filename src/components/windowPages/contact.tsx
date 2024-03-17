import styles from "../../styles/contact.module.scss";
export default function Contact() {
  const sendEmail = () => {
    window.location.href = "mailto:ayaka21sunahara@gmail.com";
  };
  return (
    <div className={styles.contactWrap}>
      <div className={styles.titleWrap}>
        <p>subject:</p>
        <p>お問い合わせについて</p>
      </div>
      <div className={styles.titleWrap}>
        <p>mail:</p>
        <p>ayaka21sunahara@gmail.com</p>
      </div>
      <div className={styles.msg}>
        <p>
          ご連絡等がございましたら、以下のcontactボタンからお願いします。
          <br />
          <span>※contactボタンを押して頂くと、メールアプリが起動します。</span>
        </p>
      </div>
      <div className={styles.btnWrap}>
        <button onClick={sendEmail}>contact</button>
      </div>
    </div>
  );
}
