import styles from "../../styles/zoomUp.module.scss";

export default function ZoomUp() {
  const cursor = {
    cursor: 'url("/image/cursor.png"), auto',
  };
  return (
    <>
      <button className={styles.zoomUpBtn} style={cursor}>
        <img src="/image/zoomUp.svg" alt="ウィンドウを拡大" />
      </button>
    </>
  );
}
