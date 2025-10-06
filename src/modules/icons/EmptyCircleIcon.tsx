type Props = {
  size?: string | number;
  color?: string;
};

const EmptyCircleIcon = ({ size, color }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={size ? size : 8} viewBox="0 0 7 8" fill="none">
      <circle cx="3.5" cy="4" r="3.35" stroke={color ? color : "#EDEDEF"} strokeWidth="0.3" />
    </svg>
  );
};

export default EmptyCircleIcon;
