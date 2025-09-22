export const formatTimeString = (remainingTime: number) => {
  const minutes = Math.floor((remainingTime / 1000 / 60) % 60)
    .toString()
    .padStart(2, "0");

  const seconds = Math.floor((remainingTime / 1000) % 60)
    .toString()
    .padStart(2, "0");

  const millis = Math.floor((remainingTime % 1000) / 10)
    .toString()
    .padStart(2, "0");

  return `${minutes} : ${seconds} : ${millis}`;
};
