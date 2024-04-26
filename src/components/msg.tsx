import { useState } from "react";
import styles from "../styles/msg.module.scss";
import Close from "./parts/close";

export default function Msg() {
  // isVisible状態を管理
  const [isVisible, setIsVisible] = useState(true);

  const handleCloseClick = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div className={styles.msgBox}>
        <div className={styles.btnWrap}>
          <Close onClick={handleCloseClick} />
        </div>
        <div className={styles.textArea}>
          <p>
            Welcome to my portfolio &lt;3
            <br />
            <span>アイコンをダブルクリックしてください</span>
          </p>
        </div>
      </div>
    </>
  );
}
