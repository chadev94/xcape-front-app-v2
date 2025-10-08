import HorizontalCalendar from "../../../../modules/components/common/HorizontalCalendar.tsx";
import { useRecoilValue } from "recoil";
import { currentMerchantAtom } from "../../../../recoil/atoms/currentMerchant.ts";
import ReservationsThemeCard from "../../../../modules/components/merchants/reservations/ReservationsThemeCard.tsx";
import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { fetchReservations } from "../../../../api/reservationApi.ts";
import styles from "@/styles/pages/reservations.module.scss";

const ReservationsPage = () => {
  const currentMerchant = useRecoilValue(currentMerchantAtom);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const formattedDate = format(selectedDate, "yyyy-MM-dd");

  const { data: reservationResponseList, isFetching } = useQuery({
    queryKey: ["reservations", currentMerchant?.id, formattedDate],
    queryFn: () => fetchReservations(currentMerchant!.id, formattedDate),
    enabled: !!currentMerchant?.id,
    retry: false,
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });

  return (
    <div className={styles.container}>
      <HorizontalCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <div className={styles.content}>
        {isFetching && <div className={styles.loading}></div>}
        {reservationResponseList?.map((reservationResponse) => {
          return (
            <ReservationsThemeCard
              key={`reservation-theme-${reservationResponse.themeId}`}
              reservationResponse={reservationResponse}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ReservationsPage;
