const ICQuestion = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={className}
    >
      <path
        d="M7 10.5C7.36244 10.5 7.65625 10.2062 7.65625 9.84375C7.65625 9.48131 7.36244 9.1875 7 9.1875C6.63756 9.1875 6.34375 9.48131 6.34375 9.84375C6.34375 10.2062 6.63756 10.5 7 10.5Z"
        fill="#98A2B3"
      />
      <path
        d="M7 7.875V7.4375C7.96633 7.4375 8.75 6.75172 8.75 5.90625C8.75 5.06078 7.96633 4.375 7 4.375C6.03367 4.375 5.25 5.06078 5.25 5.90625V6.125"
        stroke="#98A2B3"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 12.25C9.8995 12.25 12.25 9.8995 12.25 7C12.25 4.10051 9.8995 1.75 7 1.75C4.10051 1.75 1.75 4.10051 1.75 7C1.75 9.8995 4.10051 12.25 7 12.25Z"
        stroke="#98A2B3"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ICQuestion;
