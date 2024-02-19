import styles from "../../styles/close.module.scss";

export default function Close({ onClick }: any) {
  // cursorの設定
  const cursor = {
    cursor: 'url("./image/cursor.png"), auto',
  };
  return (
    <>
      <button className={styles.closeBtn} style={cursor} onClick={onClick}>
        <img src="/image/close.svg" alt="閉じる" />
      </button>
    </>
  );
}
