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
        <img src="../../image/portfolio-logo.png" alt="ポートフォリオロゴ" />
        <h1>Worksページへようこそ。ここでは学校での制作物を紹介しています。</h1>
      </header>
      <section className={styles.herstel}>
        <div className={styles.imgArea}></div>
        <h2>
          herstel<span>敢闘賞受賞✨</span>
        </h2>
        <p className={styles.explain}>
          今子育てに奮闘中の主婦の方に向けた紅茶定期便サービス。
          子育ての疲れに効果的な紅茶をご用意しております。{" "}
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
          女性に向けた服・コスメのランダムショッピング通販アプリ。
          初めてのチーム制作。
        </p>
        <div className={styles.btmWrap}>
          <p className={styles.workDate}>夏期講習</p>
          <button>詳細を見る</button>
        </div>
      </section>
      <section className={styles.faveTag}>
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
      <section className={styles.yurumetabi}>
        <div className={styles.imgArea}></div>
        <h2 className={styles.jpn}>
          ゆるめ旅<span>第7回専門学校HTML5作品アワード入選✨</span>
        </h2>
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
          <span>準グランプリ受賞✨</span>
        </h2>
        <p className={styles.explain}>
          毎年中崎町で開催されるキャンドルナイトのポスターを制作しました。
        </p>
        <div className={styles.btmWrap}>
          <p className={styles.workDate}>1年後期</p>
          <button>詳細を見る</button>
        </div>
      </section>{" "}
      <section className={styles.nameCard}>
        <div className={styles.imgArea}></div>
        <h2 className={styles.jpn}>名刺</h2>
        <p className={styles.explain}>
          1年前期と1年後期に制作した名刺です。デザインから印刷まで全て自分で行いました。
        </p>
        <div className={styles.btmWrap}>
          <p className={styles.workDate}>1年</p>
          <button>詳細を見る</button>
        </div>
      </section>
    </div>
  );
}
