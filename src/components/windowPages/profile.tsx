import styles from "../../styles/profile.module.scss";

export default function Profile() {
  return (
    <div className={styles.profWrap}>
      <div className={styles.profTop}>
        <div className={styles.imgWrap}></div>
        <div className={styles.textTop}>
          <h1>
            Hi! My name is...
            <br />
            <span>Sunahara Ayaka</span>
          </h1>
          <p className={styles.name}>砂原彩花(すなはらあやか)</p>
          <p className={styles.sch}>
            ECCコンピュータ専門学校(26年卒業予定)
            <br />
            <span>マルチメディア研究学科 / Webデザインコース</span>
          </p>
          <p className={styles.from}>
            兵庫県出身。<time dateTime="2005-02-21">2005年2月21日生まれ。</time>
          </p>
        </div>
      </div>
      <div className={styles.about}>
        <h2>about</h2>
        <p>texttexttext</p>
      </div>
    </div>
  );
}
