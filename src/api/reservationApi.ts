import axios from "axios";
import type { ReservationResponseType } from "../types/api/ReservationResponse.type.ts";

export const fetchReservations = async (merchantId: number, date: string): Promise<ReservationResponseType[]> => {
  const res = await axios.get("https://api.xcape-apps.com/reservations", {
    params: { merchantId, date },
  });

  if (res.data.resultCode === "SUCCESS") {
    return res.data.result;
  } else {
    return [];
  }
};
