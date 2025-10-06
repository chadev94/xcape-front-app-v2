import { useEffect, useRef, useState } from "react";
import { addDays, format, isSameDay } from "date-fns";
import { ko } from "date-fns/locale";
import styles from "@/styles/modules/horizontalCalendar.module.scss";

type DayItem = {
  date: Date;
  label: string;
  weekday: string;
};

const generateDays = (centerDate: Date): DayItem[] => {
  const days: DayItem[] = [];
  for (let i = -5; i <= 10; i++) {
    const date = addDays(centerDate, i);

    if (date.getDate())
      days.push({
        date: date,
        label: date.getDate() === 1 ? format(date, "M.d") : format(date, "d"),
        weekday: format(date, "EEE", { locale: ko }),
      });
  }
  return days;
};

const now = new Date();
const dayList = generateDays(now);

const HorizontalCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(now);

  const scrollRef = useRef<HTMLDivElement>(null);
  const dayRefList = useRef<(HTMLButtonElement | null)[]>([]);

  const handleClick = (date: Date, isInit?: boolean) => {
    setSelectedDate(date);

    const index = dayList.findIndex((day) => isSameDay(day.date, date));

    const container = scrollRef.current;
    const target = dayRefList.current[index];
    if (container && target) {
      const containerRect = container.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      const containerCenter = containerRect.left + containerRect.width / 2;
      const targetCenter = targetRect.left + targetRect.width / 2;

      const scrollOffset = targetCenter - containerCenter;

      container.scrollBy({
        left: scrollOffset,
        behavior: isInit ? "instant" : "smooth",
      });
    }
  };

  useEffect(() => {
    handleClick(now, true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles["header-container"]}>
        <h4 className={styles.header}>{format(selectedDate, "yy년 M월")}</h4>
        <div className={styles["date-container"]} ref={scrollRef}>
          {dayList.map((day, index) => (
            <button
              key={`date-${day.date.getTime()}`}
              ref={(el) => (dayRefList.current[index] = el)}
              className={`${styles["btn-date"]} ${format(day.date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd") ? styles.active : ""}`}
              onClick={() => handleClick(day.date)}
              disabled={day.date < now}
            >
              <div className={styles.weekday}>{day.weekday}</div>
              <div className={styles.label}>{day.label}</div>
            </button>
          ))}
        </div>
      </div>
      <div className={styles["detail-date-container"]}>{format(selectedDate, "M.d (EEE)", { locale: ko })}</div>
    </div>
  );
};

export default HorizontalCalendar;
