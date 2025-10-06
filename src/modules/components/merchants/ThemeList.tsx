import type { ThemeType } from "../../../types/api/Theme.type.ts";
import styles from "@/styles/modules/themeList.module.scss";
import CrimeSceneLogoIcon from "../../icons/CrimeSceneLogoIcon.tsx";
import ShieldIcon from "../../icons/ShieldIcon.tsx";
import CrimeSceneTitleIcon from "../../icons/CrimeSceneTitleIcon.tsx";
import XFilerTitleIcon from "../../icons/XFilerTitleIcon.tsx";
import ThemeCard from "./ThemeCard.tsx";

type Props = {
  themeList: ThemeType[];
  isCrimeScene: boolean;
};

const ThemeList = ({ themeList, isCrimeScene }: Props) => {
  return (
    <div className={styles.themeListContainer}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.icon}>{isCrimeScene ? <CrimeSceneLogoIcon /> : <ShieldIcon />}</div>
          <div className={styles.category}>
            <div className={styles.title}>{isCrimeScene ? <CrimeSceneTitleIcon /> : <XFilerTitleIcon />}</div>
            <div className={styles.description}>BRAIN EXPERIENCE GAME</div>
          </div>
        </div>
        <div className={styles.right}>
          <div>{isCrimeScene ? "역할극 롤-플레잉 게임" : "사건수사 프로파일 게임"}</div>
        </div>
        <div className={styles.borderBottom}></div>
      </div>
      <div className={styles.cardContainer}>
        {themeList.map((theme) => {
          return <ThemeCard key={`themeCard-${theme.id}`} theme={theme} />;
        })}
      </div>
    </div>
  );
};

export default ThemeList;
