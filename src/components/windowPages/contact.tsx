import styles from "../../styles/contact.module.scss";
export default function Contact() {
  return (
    <div className={styles.contactWrap}>
      <div className={styles.to}>
        <p>from:</p>
        <input type="text" />
      </div>
      <div className={styles.subject}>
        <p>subject:</p>
        <input type="text" />
      </div>
      <div className={styles.msgArea}>
        <textarea name="text" id="text"></textarea>
      </div>
      <div className={styles.btnWrap}>
        <button>send</button>
      </div>
    </div>
  );
}
