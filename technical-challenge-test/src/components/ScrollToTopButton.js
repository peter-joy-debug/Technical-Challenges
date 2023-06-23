import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faArrowUp,faSearch, faUser,  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '../FloatingButtonStyle.css';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    // Change the scroll threshold value as per your requirement
    if (scrollTop > 400) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FontAwesomeIcon icon={ faArrowUp} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;