import { useState } from "react";
import styles from "../../../styles/herstel.module.scss";
import Florita from "./florita";
import FaveTag from "./faveTag";
import Yurumetabi from "./yurumetabi";
import CandleNight from "./candleNight";
import NameCard from "./nameCard";
import Works from ".";

export default function Herstel() {
  const [showWorks, setShowWorks] = useState(false);
  // const [showHerstel, setShowHerstel] = useState(false);
  const [showFlorita, setShowFlorita] = useState(false);
  const [showFaveTag, setShowFaveTag] = useState(false);
  const [showYurumetabi, setShowYurumetabi] = useState(false);
  const [showCandleNight, setShowCandleNight] = useState(false);
  const [showNameCard, setShowNameCard] = useState(false);
  const [slideCount, setSlideCount] = useState(0);

  const handleShowWorks = () => {
    setShowWorks(true);
  };
  // const handleShowHerstel = () => {
  //   setShowHerstel(true);
  // };
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

  if (showWorks) {
    return <Works />;
  }
  // if (showHerstel) {
  //   return <Herstel />;
  // }
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

  // スライドショー
  const images = ["../../../image/herstel.png", "../../../image/CN-poster.png"];

  const backBtn = () => {
    setSlideCount(
      (prevCount) => (prevCount - 1 + images.length) % images.length
    );
  };
  const nextBtn = () => {
    setSlideCount((prevCount) => (prevCount + 1) % images.length);
  };

  // const page = document.createElement("p");
  // page.style.color = "lightgray";

  // const imgWrap = document.querySelector("imgWrap");
  // imgWrap.insertBefore(p, img.nextElementSibling);

  return (
    <div className={styles.container}>
      <header>
        <h1 onClick={handleShowWorks}>
          <img src="../../image/portfolio-logo.png" alt="ポートフォリオロゴ" />{" "}
        </h1>
      </header>
      <div className={styles.worksList}>
        <h2>作品一覧</h2>
        <p className={styles.selected}>herstel</p>
        <p onClick={handleShowFlorita}>florita</p>
        <p onClick={handleShowFaveTag}>fave#</p>
        <p onClick={handleShowYurumetabi}>ゆるめ旅</p>
        <p onClick={handleShowCandleNight}>キャンドルナイトポスター</p>
        <p onClick={handleShowNameCard}>名刺</p>
      </div>
      {/* <WorksList /> */}
      <div className={styles.herstelWrap}>
        <div className={styles.slideWrap}>
          <div className={styles.imgWrap}>
            <img
              className={styles.herstelImg}
              src={images[slideCount]}
              id="slide_image"
              alt={`Slide ${slideCount + 1}`}
            />
            <div className={styles.back} onClick={backBtn}></div>
            <div className={styles.next} onClick={nextBtn}></div>
          </div>
          <p>作品全体</p>
        </div>
        <div className={styles.data}>
          <div className={styles.dataTop}>
            <p className={styles.prize}>+E展 敢闘賞受賞作品</p>
            {/* <p>#1年前期</p> */}
            {/* <p>#個人制作</p> */}
          </div>
          <h3>
            herstel<span>ハーステル</span>
          </h3>
          <p className={styles.date}>$23.04~23.08</p>
          <p className={styles.mainExplain}>
            今子育てに奮闘中の主婦の方に向けた<span>紅茶定期便サービス</span>。
            <br />
            子育ての疲れに効果的な紅茶をご用意しております。
          </p>
          <div className={styles.usedWrap}>
            <div className={styles.used}></div>
            <div className={styles.used}></div>
            <div className={styles.usedApp}>
              <p>Xd</p>
            </div>{" "}
            <div className={styles.usedApp}>
              <p>Ps</p>
            </div>{" "}
            <div className={styles.usedApp}>
              <p>Ai</p>
            </div>
          </div>

          {/* <p className={styles.subExplain}>
            紅茶×定期便をテーマに、企画からデザイン・コーディングまで個人で制作しました。
            初めての制作でしたが、自分が考えるものを形にする楽しさを知ることができました。
          </p> */}
          <div className={styles.btnWrap}>
            <p className={styles.term}>1年前期</p>
            <p className={styles.siteBtn}>
              <a href="#">サイトを見る</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
