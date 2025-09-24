import type { ThemeType } from "../../../types/api/Theme.type.ts";
import styles from "@/styles/modules/themeCard.module.scss";
import makeDifficultyIcon from "../../../utils/makeDifficultyIcon.ts";
import FilledStarIcon from "../../icons/FilledStarIcon.tsx";
import EmptyStarIcon from "../../icons/EmptyStarIcon.tsx";
import Genre from "./Genre.tsx";

type Props = {
  theme: ThemeType;
};

const ThemeCard = ({ theme }: Props) => {
  const stars = makeDifficultyIcon(theme.difficulty);

  return (
    <div className={styles.card}>
      <div className={styles.nameEn}>{theme.nameEn}</div>
      <div className={styles.flexContainer}>
        <div className={styles.runningTime}>{theme.runningTime}분</div>
        <div className={styles.nameKo}>{theme.nameKo}</div>
      </div>
      <div className={styles.border}></div>
      <div className={styles.difficultyContainer}>
        <div className={styles.difficultyText}>난이도</div>
        <div>
          {stars.map((filled, index) =>
            filled ? (
              <FilledStarIcon key={`star-${theme.id}-${index}`} />
            ) : (
              <EmptyStarIcon key={`star-${theme.id}-${index}`} />
            )
          )}
        </div>
      </div>
      <div className={styles.border}></div>
      <div className={styles.imageContainer}>
        <img className={styles.themeImage} src={theme.mainImagePath} alt="theme-image" />
        <Genre genre={theme.genre} style={{ position: "absolute", bottom: "10%", left: 0, right: 0 }} />
      </div>
      <div className={styles.reservationButton}>실시간 예약하기</div>
    </div>
  );
};

export default ThemeCard;
