import { useState } from "react";
import styles from "../../../styles/works.module.scss";
import Herstel from "./herstel";
import Florita from "./florita";
import FaveTag from "./faveTag";
import Yurumetabi from "./yurumetabi";
import CandleNight from "./candleNight";
import NameCard from "./nameCard";

export default function Works() {
  const [showHerstel, setShowHerstel] = useState(false);
  const [showFlorita, setShowFlorita] = useState(false);
  const [showFaveTag, setShowFaveTag] = useState(false);
  const [showYurumetabi, setShowYurumetabi] = useState(false);
  const [showCandleNight, setShowCandleNight] = useState(false);
  const [showNameCard, setShowNameCard] = useState(false);

  const handleShowHerstel = () => {
    setShowHerstel(true);
  };
  const handleShowFlorita = () => {
    setShowFlorita(true);
  };
  const handleShowFaveTag = () => {
    setShowFaveTag(true);
  };
  const handleShowYurumetabi = () => {
    setShowYurumetabi(true);
  };
  const handleShowCandleNight = () => {
    setShowCandleNight(true);
  };
  const handleShowNameCard = () => {
    setShowNameCard(true);
  };

  if (showHerstel) {
    return <Herstel />;
  }
  if (showFlorita) {
    return <Florita />;
  }
  if (showFaveTag) {
    return <FaveTag />;
  }
  if (showYurumetabi) {
    return <Yurumetabi />;
  }
  if (showCandleNight) {
    return <CandleNight />;
  }
  if (showNameCard) {
    return <NameCard />;
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
          女性に向けた服・コスメのランダムショッピング通販アプリ。
          『女性が買い物中に学ぶ』をテーマに2週間で制作しました。{" "}
        </p>
        <div className={styles.btmWrap}>
          <p className={styles.workDate}>夏期講習</p>
          <button onClick={handleShowFlorita}>詳細を見る</button>
        </div>
      </section>
      <section className={styles.faveTag}>
        <div className={styles.imgArea}></div>
        <h2>fave#</h2>
        <p className={styles.explain}>
          洋楽好きに向けたコミュニティWebアプリ。自分の好きな洋楽アーティストごとに作られたコミュニティスペースで、他のユーザーと交流できます。
        </p>
        <div className={styles.btmWrap}>
          <p className={styles.workDate}>1年後期</p>
          <button onClick={handleShowFaveTag}>詳細を見る</button>
        </div>
      </section>
      <section className={styles.yurumetabi}>
        <div className={styles.imgArea}></div>
        <h2 className={styles.jpn}>
          ゆるめ旅<span>第7回専門学校HTML5作品アワード入選</span>
        </h2>
        <p className={styles.explain}>
          遠回りをして目的地の着くルート案内機能と見つけたスポットを撮影して共有できるスポット共有機能を合わせた新しいルート案内アプリです。
        </p>
        <div className={styles.btmWrap}>
          <p className={styles.workDate}>1年後期</p>
          <button onClick={handleShowYurumetabi}>詳細を見る</button>
        </div>
      </section>
      <section className={styles.candleNight}>
        <div className={styles.imgArea}></div>
        <h2 className={styles.jpn}>
          キャンドルナイトポスター
          <span>準グランプリ受賞</span>
        </h2>
        <p className={styles.explain}>
          毎年中崎町で開催されるキャンドルナイト。そのイベントのポスターを制作しました。
        </p>
        <div className={styles.btmWrap}>
          <p className={styles.workDate}>1年後期</p>
          <button onClick={handleShowCandleNight}>詳細を見る</button>
        </div>
      </section>{" "}
      <section className={styles.nameCard}>
        <div className={styles.imgArea}></div>
        <h2 className={styles.jpn}>名刺</h2>
        <p className={styles.explain}>
          1年前期と1年後期に制作した名刺。デザインから印刷まで全て自分で行いました。
        </p>
        <div className={styles.btmWrap}>
          <p className={styles.workDate}>1年</p>
          <button onClick={handleShowNameCard}>詳細を見る</button>
        </div>
      </section>
    </div>
  );
}
