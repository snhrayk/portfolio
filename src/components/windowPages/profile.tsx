import styles from "../../styles/profile.module.scss";

export default function Profile() {
  return (
    <div className={styles.profWrap}>
      <div className={styles.profTop}>
        <div className={styles.imgWrap}></div>
        <div className={styles.textTop}>
          <h1>砂原彩花</h1>
          <p>
            <span>ECCコンピュータ専門学校</span>
            <br />
            マルチメディア研究学科
            <br />
            Webデザインコース
          </p>
          {/* <p>
            <time dateTime="2005-02-21">2005年2月21日生まれ</time>
          </p> */}
        </div>
      </div>
    </div>
  );
}
