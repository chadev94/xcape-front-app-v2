import styles from "@/styles/modules/button.module.scss";
import type { CSSProperties } from "react";

type Props = {
  text?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  style?: CSSProperties;
};

const Button = ({ text, size, style }: Props) => {
  return (
    <button className={`${styles.btn} ${styles[`btn-${size}`]}`} style={style}>
      {text}
    </button>
  );
};

export default Button;
