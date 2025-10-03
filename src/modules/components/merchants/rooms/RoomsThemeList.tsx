import type { ThemeType } from "../../../../types/api/Theme.type.ts";
import styles from "@/styles/modules/roomsThemeList.module.scss";
import CrimeSceneLogoIcon from "../../../icons/CrimeSceneLogoIcon.tsx";
import ShieldIcon from "../../../icons/ShieldIcon.tsx";
import CrimeSceneTitleIcon from "../../../icons/CrimeSceneTitleIcon.tsx";
import XFilerTitleIcon from "../../../icons/XFilerTitleIcon.tsx";
import RoomsThemeCard from "./RoomsThemeCard.tsx";

type Props = {
  themeList: ThemeType[];
  isCrimeScene: boolean;
};

const RoomsThemeList = ({ themeList, isCrimeScene }: Props) => {
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
        <div className={styles.right}></div>
      </div>
      <div className={styles.cardContainer}>
        {themeList.map((theme) => {
          return <RoomsThemeCard key={`themeCard-${theme.id}`} theme={theme} />;
        })}
      </div>
    </div>
  );
};

export default RoomsThemeList;
