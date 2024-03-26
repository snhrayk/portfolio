import { useEffect, useState } from "react";
import styles from "../../../styles/florita.module.scss";
import FaveTag from "./faveTag";
import Yurumetabi from "./yurumetabi";
import CandleNight from "./candleNight";
import NameCard from "./nameCard";
import Works from ".";
import Herstel from "./herstel";
import WorksSlider from "./worksSlider";
// import Splide from "@splidejs/splide";

export default function Florita() {
  const [showWorks, setShowWorks] = useState(false);
  const [showHerstel, setShowHerstel] = useState(false);
  // const [showFlorita, setShowFlorita] = useState(false);
  const [showFaveTag, setShowFaveTag] = useState(false);
  const [showYurumetabi, setShowYurumetabi] = useState(false);
  const [showCandleNight, setShowCandleNight] = useState(false);
  const [showNameCard, setShowNameCard] = useState(false);

  const handleShowWorks = () => {
    setShowWorks(true);
  };
  const handleShowHerstel = () => {
    setShowHerstel(true);
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

  if (showWorks) {
    return <Works />;
  }
  if (showHerstel) {
    return <Herstel />;
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
    <div className={styles.container}>
      <header>
        <h1 onClick={handleShowWorks}>
          <img src="../../image/portfolio-logo.png" alt="ポートフォリオロゴ" />{" "}
        </h1>
      </header>
      <div className={styles.worksList}>
        <h2>作品一覧</h2>
        <p onClick={handleShowHerstel}>herstel</p>
        <p className={styles.selected}>florita</p>
        <p onClick={handleShowFaveTag}>fave#</p>
        <p onClick={handleShowYurumetabi}>ゆるめ旅</p>
        <p onClick={handleShowCandleNight}>キャンドルナイトポスター</p>
        <p onClick={handleShowNameCard}>名刺</p>
      </div>
      <div className={styles.floritaWrap}>
        <div className={styles.sliderWrap}>
          <WorksSlider />
        </div>
        <div className={styles.data}>
          <div className={styles.dataTop}>
            {/* <p className={styles.prize}>+E展 敢闘賞受賞作品</p> */}
          </div>
          <h3>
            florita<span>フロリータ</span>
          </h3>
          <p className={styles.date}>$23.09</p>
          <p className={styles.mainExplain}>
            女性に向けた服・コスメのランダムショッピング通販アプリ。
            <br />
            『女性が買い物中に学ぶ』をテーマに2週間で制作しました。{" "}
          </p>
          <div className={styles.usedWrap}>
            <div className={styles.used}></div>
            <div className={styles.used}></div>
            <div className={styles.usedApp}>
              <p>Ai</p>
            </div>
            <div className={styles.usedApp}>
              <p>Xd</p>
            </div>{" "}
            <div className={styles.used}></div>
          </div>
          <div className={styles.btnWrap}>
            <p className={styles.term}>夏期講習</p>
            <p className={styles.siteBtn}>
              <a href="#">サイトを見る</a>
            </p>
          </div>
          <div>
            <h4>制作感想</h4>
            <p className={styles.subExplain}>
              初めてのチーム制作。私は主にLPのデザイン作成と、企画書の作成を担当しました。
              LPについてや、figma・scssの使い方、企画書の作り方など1年の前期では習わなかったことを
              先輩に丁寧に教えてもらいながら学ぶことができました。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
