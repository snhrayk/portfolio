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
      <header>
        <h1>
          <img src="../../image/portfolio-logo.png" alt="ポートフォリオロゴ" />
        </h1>
        <p></p>
      </header>
      <section className={styles.herstel}>
        <div className={styles.imgArea}></div>
        <h2>
          herstel<span>敢闘賞受賞</span>
        </h2>
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
        <h2>fave#</h2>
        <p className={styles.explain}>
          洋楽好きに向けたコミュニティWebアプリ。
        </p>
        <div className={styles.btmWrap}>
          <p className={styles.workDate}>1年後期</p>
          <button>詳細を見る</button>
        </div>
      </section>
      <section>
        <div className={styles.imgArea}></div>
        <h2 className={styles.jpn}>ゆるめ旅</h2>
        <p className={styles.explain}>
          景色を楽しみながら遠回りをして、目的地へ向かう新しいルート案内アプリ。
        </p>
        <div className={styles.btmWrap}>
          <p className={styles.workDate}>1年後期</p>
          <button>詳細を見る</button>
        </div>
      </section>
      <section className={styles.candleNight}>
        <div className={styles.imgArea}></div>
        <h2 className={styles.jpn}>
          キャンドルナイトポスター
          <span>準グランプリ受賞</span>
        </h2>
        <p className={styles.explain}>中崎町キャンドルナイトのポスター制作。</p>
        <div className={styles.btmWrap}>
          <p className={styles.workDate}>1年後期</p>
          <button>詳細を見る</button>
        </div>
      </section>{" "}
      <section>
        <div className={styles.imgArea}></div>
        <h2 className={styles.jpn}>名刺</h2>
        <p className={styles.explain}>
          自分の名刺をデザインして実際に印刷しました。
        </p>
        <div className={styles.btmWrap}>
          <p className={styles.workDate}>1年</p>
          <button>詳細を見る</button>
        </div>
      </section>
    </div>
  );
}
