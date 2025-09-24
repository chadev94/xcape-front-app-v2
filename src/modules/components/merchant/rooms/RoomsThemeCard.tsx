import styles from "@/styles/modules/roomsThemeCard.module.scss";
import type { ThemeType } from "../../../../types/api/Theme.type.ts";
import Genre from "../Genre.tsx";
import FilledStarIcon from "../../../icons/FilledStarIcon.tsx";
import EmptyStarIcon from "../../../icons/EmptyStarIcon.tsx";
import makeDifficultyIcon from "../../../../utils/makeDifficultyIcon.ts";
import { useRecoilValue } from "recoil";
import { abilityListAtom } from "../../../../recoil/atoms/abilityList.ts";
import RightArrow from "../../../icons/RightArrow.tsx";
import FilledCircleIcon from "../../../icons/FilledCircleIcon.tsx";
import EmptyCircleIcon from "../../../icons/EmptyCircleIcon.tsx";

type Props = {
  theme: ThemeType;
};

const RoomsThemeCard = ({ theme }: Props) => {
  const stars = makeDifficultyIcon(theme.difficulty);

  const abilityListState = useRecoilValue(abilityListAtom);
  const abilityList = abilityListState.filter((ability) => ability.themeId === theme.id);

  return (
    <div className={styles.container}>
      <div className={styles.themeImageContainer}>
        <img className={styles.themeImage} src={theme.mainImagePath} alt="theme-image" />
      </div>
      <div className={styles.themeInfo}>
        <Genre genre={theme.genre} style={{ width: "80%" }} />
        <div className={styles.nameContainer}>
          <div className={styles.nameEn}>{theme.nameEn}</div>
          <div className={styles.description}>
            <div className={styles.nameKo}>{theme.nameKo}</div>
            <div className={styles.runningTime}>{theme.runningTime}분</div>
          </div>
        </div>
        <div className={styles.difficultyContainer}>
          <div className={styles.border}></div>
          <div className={styles.dd}>
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
        </div>
        <div className={styles.abilityContainer}>
          {abilityList.map((ability) => {
            return (
              <div key={`ability-${theme.id}-${ability.id}`} className={styles.ability}>
                <div className={styles.text}>{ability.name}</div>
                <div className={styles.icon}>
                  {makeDifficultyIcon(ability.value).map((filled, index) =>
                    filled ? (
                      <FilledCircleIcon key={`ability-${ability.id}-${index}`} />
                    ) : (
                      <EmptyCircleIcon key={`ability-${ability.id}-${index}`} />
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ flex: 0.1 }}>
        <RightArrow />
      </div>
    </div>
  );
};

export default RoomsThemeCard;
