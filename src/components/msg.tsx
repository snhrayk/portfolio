import styles from "../styles/msg.module.scss";
import Close from "./parts/close";

export default function Msg() {
  return (
    <>
      <div className={styles.msgBox}>
        <div className={styles.btnWrap}>
          <Close />
        </div>
        <div className={styles.textArea}>
          <p>Welcome to my page ＜3</p>
        </div>
      </div>
    </>
  );
}
