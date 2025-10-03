import styles from "@/styles/modules/genre.module.scss";
import type { CSSProperties } from "react";

type Props = {
  genre: string;
  style: CSSProperties;
};

const Genre = ({ genre, style }: Props) => {
  return (
    <div
      className={styles.genre}
      style={{
        ...style,
        background:
          " linear-gradient(90deg, rgba(168, 45, 45, 0.80) 0%, rgba(28, 9, 48, 0.80) 50%, rgba(40, 104, 183, 0.80) 100%)",
      }}
    >
      {genre}
    </div>
  );
};

export default Genre;
