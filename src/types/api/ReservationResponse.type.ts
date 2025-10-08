import type { PriceType } from "./Price.type.ts";
import type { ReservationType } from "./Reservation.type.ts";

export type ReservationResponseType = {
  themeId: number;
  themeNameKo: string;
  themeNameEn: string;
  runningTime: number;
  mainImagePath: string;
  minParticipantCount: number;
  maxParticipantCount: number;
  difficulty: number;
  colorCode: string;
  isCrimeScene: false;
  priceList: PriceType[];
  reservationList: ReservationType[];
};
