const ICErr = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      className={`${className}`}
    >
      <mask
        id="mask0_68808_1362"
        // style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="18"
        height="17"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.25 0.25H0.75V16.75H17.25V0.25ZM9 4C9.41422 4 9.75 4.33579 9.75 4.75V8.5C9.75 8.91422 9.41422 9.25 9 9.25C8.58577 9.25 8.25 8.91422 8.25 8.5V4.75C8.25 4.33579 8.58577 4 9 4ZM9.9375 11.5C9.9375 12.0178 9.5178 12.4375 9 12.4375C8.4822 12.4375 8.0625 12.0178 8.0625 11.5C8.0625 10.9822 8.4822 10.5625 9 10.5625C9.5178 10.5625 9.9375 10.9822 9.9375 11.5Z"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_68808_1362)">
        <path
          d="M9 15.4375C12.8315 15.4375 15.9375 12.3315 15.9375 8.5C15.9375 4.66853 12.8315 1.5625 9 1.5625C5.16853 1.5625 2.0625 4.66853 2.0625 8.5C2.0625 12.3315 5.16853 15.4375 9 15.4375Z"
          fill="#CD3645"
          stroke="#CD3645"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default ICErr;
