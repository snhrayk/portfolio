import styles from "../../styles/close.module.scss";

export default function Close() {
  // cursorの設定
  const cursor = {
    cursor: 'url("./image/cursor.png"), auto',
  };
  return (
    <>
      <button className={styles.closeBtn} style={cursor}>
        <img src="/image/close.svg" alt="閉じる" />
      </button>
    </>
  );
}
