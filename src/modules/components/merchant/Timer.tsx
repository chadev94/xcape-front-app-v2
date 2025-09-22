import { useEffect, useState } from "react";
import { formatTimeString } from "../../../utils/formatTimerToString.ts";

const ONE_HOUR = 60 * 60 * 1000; // 60분 = 3,600,000ms
type Props = {
  className: string;
};

const Timer = ({ className }: Props) => {
  const [remainingTime, setRemainingTime] = useState(ONE_HOUR);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 0) {
          return ONE_HOUR;
        }
        return prev - 10;
      });
    }, 10);

    return () => clearInterval(timer);
  }, []);

  return <div className={className}>{formatTimeString(remainingTime)}</div>;
};

export default Timer;
