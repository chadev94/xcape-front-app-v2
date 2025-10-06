import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { themeListAtom } from "../../../recoil/atoms/themeList.ts";
import styles from "@/styles/pages/themeDetail.module.scss";
import Genre from "../../../modules/components/merchants/Genre.tsx";
import FilledStarIcon from "../../../modules/icons/FilledStarIcon.tsx";
import EmptyStarIcon from "../../../modules/icons/EmptyStarIcon.tsx";
import makeDifficultyIcon from "../../../utils/makeDifficultyIcon.ts";
import Divider from "../../../modules/icons/Divider.tsx";
import { abilityListAtom } from "../../../recoil/atoms/abilityList.ts";
import FilledOvalIcon from "../../../modules/icons/FilledOvalIcon.tsx";
import EmptyOvalIcon from "../../../modules/icons/EmptyOvalIcon.tsx";
import Button from "../../../modules/components/common/Button.tsx";
import Slider from "react-slick";
import { currentMerchantAtom } from "../../../recoil/atoms/currentMerchant.ts";
import { useEffect } from "react";

const sliderConfig = {
  dots: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 3000,
  cssEase: "linear",
};

const ThemeDetail = () => {
  const { themeId } = useParams();

  const themeListState = useRecoilValue(themeListAtom);
  const abilityListState = useRecoilValue(abilityListAtom);
  const currentMerchant = useRecoilValue(currentMerchantAtom);

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  if (!themeId) return <div>잘못된 접근입니다!</div>;

  const currentTheme = themeListState.find((theme) => theme.id === parseInt(themeId));
  const currentThemeList = themeListState.filter((theme) => theme.merchantId === currentMerchant?.id);

  const abilityList = abilityListState.filter((ability) => ability.themeId === currentTheme?.id);

  const stars = makeDifficultyIcon(currentTheme?.difficulty ?? 3);

  return (
    <div className={styles.container}>
      <div className={styles["theme-image-container"]}>
        <img src={currentTheme?.bgImagePath} className={styles["bg-image"]} alt="theme-bgImage" />
        <Genre
          genre={currentTheme?.genre ?? ""}
          style={{
            position: "absolute",
            width: "60%",
            bottom: "10%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "1.4rem 0",
            fontSize: "1.2rem",
          }}
        />
      </div>
      <div className={styles["theme-container"]}>
        <img
          src={"/assets/images/paper-background.png"}
          className={styles["paper-background"]}
          alt="paper-background"
        />
        <img src={"/assets/images/detail-for-paper.png"} className={styles["detail-paper-image"]} alt="detail-paper" />
        <img src={"/assets/images/cold-case.png"} className={styles["cold-case-image"]} alt="cold-case" />
        <div className={`${styles.label}  ${styles["label-category"]}`}>
          길고길고길고기이이인텍스트일때 이것도 길어져요
        </div>
        <div className={`${styles.label}  ${styles["label-year"]}`}>짧은 텍스트</div>
        <div className={styles["theme-info-container"]}>
          <div className={styles.title}>{currentTheme?.nameKo}</div>
          <div className={styles.description}>{currentTheme?.description}</div>
          <div className={styles["theme-stats"]}>
            <div className={styles["difficulty-container"]}>
              <div className={styles["difficulty-text"]}>난이도</div>
              <div>
                {stars.map((filled, index) =>
                  filled ? (
                    <FilledStarIcon key={`star-${currentTheme?.id}-${index}`} color={"#0C0C0C"} />
                  ) : (
                    <EmptyStarIcon key={`star-${currentTheme?.id}-${index}`} color={"#0C0C0C"} />
                  )
                )}
              </div>
            </div>
            <Divider />
            <div className={styles["running-time-container"]}>
              <div className={styles["running-time-text"]}>
                플레이 타임 <span className={styles["running-time"]}>{currentTheme?.runningTime}</span>분
              </div>
            </div>
          </div>
          <div className={styles["ability-container"]}>
            {abilityList.map((ability) => {
              return (
                <div key={`ability-${currentTheme?.id}-${ability.id}`} className={styles.ability}>
                  <div className={styles.text}>{ability.name}</div>
                  <div className={styles.icon}>
                    {makeDifficultyIcon(ability.value).map((filled, index) =>
                      filled ? (
                        <FilledOvalIcon key={`ability-${ability.id}-${index}`} size={"1.2rem"} />
                      ) : (
                        <EmptyOvalIcon key={`ability-${ability.id}-${index}`} size={"1.2rem"} />
                      )
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {currentTheme?.point && (
        <div className={styles["point-container"]}>
          <img src={"/assets/images/clip-note.png"} className={styles["clip-note"]} alt={"clip-note"} />
          <div className={styles["point-text"]}>POINT | {currentTheme.point}</div>
        </div>
      )}
      <div className={styles["reservation-container"]}>
        <Button text="실시간 예약하기" size="xl" style={{ width: "60%" }} />
      </div>
      <div className={styles["carousel-container"]}>
        <div className={styles["police-line"]}></div>
        <Slider {...sliderConfig}>
          {currentThemeList.map((theme) => {
            return (
              <div className={styles["other-theme-container"]}>
                <img
                  src="/assets/images/file-background.png"
                  className={styles["file-background"]}
                  alt="file-background"
                />
                <img src={theme.mainImagePath} className={styles["theme-image"]} alt="theme-image" />
              </div>
            );
          })}
        </Slider>
        <div className={styles["police-line"]}></div>
      </div>

      <div className={styles["category-information"]}>
        <p className={styles.bold}>
          <span className={styles.highlight}>엑스파일러</span>란 <span className={styles.highlight}>방탈출</span>과{" "}
          <span className={styles.highlight}>범죄수사게임</span>이 결합된 엑스케이프의 새로운 두뇌스포츠 라인입니다.
        </p>
        <p className={styles.light}>
          남은 공소시효는 60분! 수사관이 되어 남겨진 증거와 추리를 통해 밀실속에서 미제사건을 해결하고 범인을
          검거하세요!
        </p>
      </div>
    </div>
  );
};

export default ThemeDetail;
