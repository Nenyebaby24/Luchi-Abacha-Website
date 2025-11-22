import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";


const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 600, smooth: "easeInOutQuad" });
  };

  return (
    isVisible && (
      <div className="back-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </div>
    )
  );
};

export default BackToTopButton;
