import styles from "@/styles/modules/reservationsThemeCard.module.scss";
import makeDifficultyIcon from "../../../../utils/makeDifficultyIcon.ts";
import FilledStarIcon from "../../../icons/FilledStarIcon.tsx";
import EmptyStarIcon from "../../../icons/EmptyStarIcon.tsx";
import type { ReservationResponseType } from "../../../../types/api/ReservationResponse.type.ts";

type Props = {
  reservationResponse: ReservationResponseType;
};

const ReservationsThemeCard = ({ reservationResponse }: Props) => {
  const stars = makeDifficultyIcon(reservationResponse.difficulty);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div className={styles["name-korean"]}>{reservationResponse.themeNameKo}</div>
          <div className={styles["name-english"]}>{reservationResponse.themeNameEn}</div>
        </div>
        <div className={styles.info}>
          <div className={styles.difficulty}>
            {stars.map((filled, index) =>
              filled ? (
                <FilledStarIcon key={`star-${reservationResponse.themeId}-${index}`} size={"1.8rem"} />
              ) : (
                <EmptyStarIcon key={`star-${reservationResponse.themeId}-${index}`} size={"1.8rem"} />
              )
            )}
          </div>
          <div className={styles["participant-count"]}>
            인원 {reservationResponse.minParticipantCount}-{reservationResponse.maxParticipantCount}명
          </div>
        </div>
      </div>
      <div className={styles["theme-image-container"]}>
        <img src={reservationResponse.mainImagePath} className={styles["theme-image"]} alt={"theme-image"} />
      </div>
      <div className={styles["reservations-container"]}>
        {/*TODO 오픈룸 버튼 디자인 필요*/}
        {reservationResponse.reservationList.map((reservation) => (
          <button
            key={`reservationTime-${reservation.time}`}
            className={styles["btn-reservation-time"]}
            disabled={reservation.isReserved}
          >
            <div className={styles["time-text"]}>{reservation.time}</div>
            <div>{reservation.isReserved ? "예약불가" : "예약가능"}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReservationsThemeCard;
