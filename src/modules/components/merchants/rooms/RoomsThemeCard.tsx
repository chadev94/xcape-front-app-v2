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
      <div className={styles["theme-image-container"]}>
        <img className={styles["theme-image"]} src={theme.mainImagePath} alt="theme-image" />
      </div>
      <div className={styles["theme-info"]}>
        <Genre genre={theme.genre} style={{ width: "80%" }} />
        <div className={styles["difficulty-container"]}>
          <div className={styles.border}></div>
          <div className={styles["difficulty-wrap"]}>
            <div className={styles["difficulty-text"]}>난이도</div>
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
        <div className={styles["name-container"]}>
          <div className={styles["name-english"]}>{theme.nameEn}</div>
          <div className={styles.description}>
            <div className={styles["name-korean"]}>{theme.nameKo}</div>
            <div className={styles["runningTime"]}>{theme.runningTime}분</div>
          </div>
        </div>
        <div className={styles["ability-container"]}>
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
      <div className={styles["icon-container"]}>
        <RightArrow />
      </div>
    </div>
  );
};

export default RoomsThemeCard;
