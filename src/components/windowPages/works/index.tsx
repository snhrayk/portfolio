import { useState } from "react";
import styles from "../../../styles/works.module.scss";
import Herstel from "./herstel";

export default function Works() {
  const [showHerstel, setShowHerstel] = useState(false);

  const handleShowHerstel = () => {
    setShowHerstel(true);
  };

  if (showHerstel) {
    return <Herstel />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h1>学校作品</h1>
      </div>
      <section className={styles.herstel}>
        <div className={styles.imgArea}>
          <img src="../../image/award.svg" alt="賞" />
        </div>
        <h2>herstel</h2>
        <p className={styles.explain}>
          今子育てに奮闘中の主婦の方に向けた紅茶定期便サービス。
          子育ての疲れに効果的な紅茶をご用意しております。
        </p>
        <div className={styles.btmWrap}>
          <p className={styles.workDate}>1年前期</p>
          <button onClick={handleShowHerstel}>詳細を見る</button>
        </div>
      </section>
      <section className={styles.florita}>
        <div className={styles.imgArea}></div>
        <h2>florita</h2>
        <p className={styles.explain}>
          女性に向けた服・コスメのランダムショッピング 通販（EC）アプリ。
          初めてのチーム制作。
        </p>
        <div className={styles.btmWrap}>
          <p className={styles.workDate}>夏期講習</p>
          <button>詳細を見る</button>
        </div>
      </section>
      <section>
        <div className={styles.imgArea}></div>
        <h2>herstel</h2>
        <p className={styles.explain}>
          今子育てに奮闘中の主婦の方に向けた紅茶定期便サービス。
          子育ての疲れに効果的な紅茶をご用意しております。
        </p>
        <div className={styles.btmWrap}>
          <p className={styles.workDate}>1年前期</p>
          <button>詳細を見る</button>
        </div>
      </section>
      <section>
        <div className={styles.imgArea}></div>
        <h2>herstel</h2>
        <p className={styles.explain}>
          今子育てに奮闘中の主婦の方に向けた紅茶定期便サービス。
          子育ての疲れに効果的な紅茶をご用意しております。
        </p>
        <div className={styles.btmWrap}>
          <p className={styles.workDate}>1年前期</p>
          <button>詳細を見る</button>
        </div>
      </section>
    </div>
  );
}
