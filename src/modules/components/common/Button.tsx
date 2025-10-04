import styles from "@/styles/modules/button.module.scss";
import type { CSSProperties } from "react";

type Props = {
  text?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  style?: CSSProperties;
};

const Button = ({ text, size, style }: Props) => {
  return (
    <div className={`${styles.btn} ${styles[`btn-${size}`]}`} style={style}>
      {text}
    </div>
  );
};

export default Button;
