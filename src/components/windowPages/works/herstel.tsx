import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../../styles/herstel.module.scss"; // import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";

export default function Herstel() {
  return (
    <div className={styles.container}>
      <header>
        <h1>学校作品</h1>
      </header>
      <div className={styles.herstelWrap}>
        <FontAwesomeIcon icon={faHtml5} size="2xl" />
        <FontAwesomeIcon icon={faCss3Alt} size="2xl" />
      </div>
    </div>
  );
}
