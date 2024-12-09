"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div
      onClick={scrollToTop}
      className="md:hidden w-[3.5rem] h-[3.5rem] rounded-full bg-[#131313] flex justify-center items-center fixed bottom-[2.34rem] right-[1.46rem] z-50 cursor-pointer"
    >
      <svg
        className="w-[1.46413rem] h-[1.46413rem] object-contain"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 19.5651C10.5799 19.5651 11.05 19.095 11.05 18.5151L11.05 4.22086L16.6822 9.85302C17.0922 10.2631 17.757 10.2631 18.1671 9.85302C18.5771 9.44297 18.5771 8.77814 18.1671 8.36809L10.7425 0.943473C10.3324 0.533422 9.66759 0.533422 9.25754 0.943473L1.83292 8.36809C1.42287 8.77814 1.42287 9.44297 1.83292 9.85302C2.24297 10.2631 2.90779 10.2631 3.31784 9.85302L8.95 4.22086L8.95 18.5151C8.95 19.095 9.4201 19.5651 10 19.5651Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
