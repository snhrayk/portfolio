import styles from "../../../styles/herstel.module.scss";

export default function Herstel() {
  return (
    <div className={styles.container}>
      <header>
        <h1>
          <img src="../../image/portfolio-logo.png" alt="ポートフォリオロゴ" />
        </h1>
      </header>
      <div className={styles.worksList}>
        <h2>個人制作・チーム制作</h2>
        <p>herstel</p>
        <p>florita</p>
        <p>fave#</p>
        <p>ゆるめ旅</p>
        <h2>グラフィックデザイン</h2>
        <p>キャンドルナイトポスター</p>
        <p>名刺</p>
      </div>
      <div className={styles.herstelWrap}>
        <div className={styles.imgWrap}></div>
        <div className={styles.imgDetail}>
          <p>
            +E展 敢闘賞受賞作品<span>#1年前期 #個人制作</span>
          </p>
          <h3>
            herstel<span>ハーステル</span>
          </h3>
          <p>
            今子育てに奮闘中の主婦の方に向けた紅茶定期便サービス。
            子育ての疲れに効果的な紅茶をご用意しております。
          </p>
          <p>
            紅茶×定期便をテーマに、企画からデザイン・Webサイトまで行いました。
            初めての制作だったため、
          </p>
          <div>
            <p>1年前期</p>
            <p>
              <a href=""></a>
            </p>
          </div>
          <p>使用言語：HTML, CSS</p>
          <div>
            使用ツール：
            <div className={styles.tools}></div>
            <div className={styles.tools}></div>
            <div className={styles.tools}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
