import { useEffect, useState } from "react";
import styles from "../../../styles/nameCard.module.scss";
import Florita from "./florita";
import FaveTag from "./faveTag";
import Yurumetabi from "./yurumetabi";
import CandleNight from "./candleNight";
import Works from ".";
import Herstel from "./herstel";
import WorksSlider from "./worksSlider";

export default function NameCard() {
  const [showWorks, setShowWorks] = useState(false);
  const [showHerstel, setShowHerstel] = useState(false);
  const [showFlorita, setShowFlorita] = useState(false);
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
  const link = (event: React.MouseEvent, href: string, windowName: string) => {
    event.preventDefault();
    window.open(href, windowName);
  };

  if (showWorks) {
    return <Works />;
  }
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
        <p onClick={handleShowFlorita}>florita</p>
        <p onClick={handleShowFaveTag}>fave#</p>
        <p onClick={handleShowYurumetabi}>ゆるめ旅</p>
        <p onClick={handleShowCandleNight}>キャンドルナイトポスター</p>
        <p className={styles.selected}>名刺</p>
      </div>
      <div className={styles.nameCardWrap}>
        <div className={styles.sliderWrap}>
          <WorksSlider
            images={[
              "../../../image/nameCard.png",
              "../../../image/nameCard-iceCream-front.png",
              "../../../image/nameCard-iceCream-back.png",
              "../../../image/nameCard-gradation-front.png",
              "../../../image/nameCard-gradation-back.png",
            ]}
          />{" "}
          <p className={styles.pdfLink}>
            <a
              href="../../../image/nameCard.pdf"
              onClick={(event) =>
                link(
                  event,
                  "../../../image/nameCard.pdf",
                  "スライドショー拡大表示"
                )
              }
            >
              スライドショー拡大表示
            </a>
          </p>{" "}
        </div>
        <div className={styles.data}>
          <div className={styles.dataTop}></div>
          <h3>名刺</h3>
          <p className={styles.date}>$23.00</p>
          <p className={styles.mainExplain}>
            1年前期と1年後期に制作した名刺。デザインから印刷まで全て自分で行いました。
          </p>
          <div className={styles.usedWrap}>
            <div className={styles.usedApp}>
              <p>Ai</p>
            </div>
          </div>
          <div className={styles.btnWrap}>
            <p className={styles.term}>1年</p>
            <p className={styles.siteBtn}>サイトはありません</p>
          </div>
          <div>
            <h4>制作感想</h4>
            <p className={styles.subExplain}>
              1年前期ではアイスクリームをテーマにポップで可愛い名刺を作りました。
              1年後期ではグラデーションとぼかしを使用し、個性を出しつつもシンプルな名刺を作りました。
              名刺交換するたびに自分の名刺を褒めて頂けることが多かったため、嬉しかったです。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
