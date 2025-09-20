const FilledStarIcon = () => {
  return (
    <svg height="1.2rem" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_439_185)">
        <path
          d="M8.25 0L10.1022 5.70061H16.0962L11.247 9.22378L13.0992 14.9244L8.25 11.4012L3.40077 14.9244L5.25301 9.22378L0.403784 5.70061H6.39776L8.25 0Z"
          fill="#EDEDEF"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_439_185"
          x="0.403809"
          y="0"
          width="16.0924"
          height="15.3244"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="0.5" dy="0.5" />
          <feGaussianBlur stdDeviation="0.2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_439_185" />
        </filter>
      </defs>
    </svg>
  );
};

export default FilledStarIcon;
