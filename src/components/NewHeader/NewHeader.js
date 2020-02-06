/* eslint-disable jsx-a11y/accessible-emoji */
<<<<<<< HEAD
import React, { useState, useEffect } from "./node_modules/react";
import "./Header.css";
import { CSSTransition } from "./node_modules/react-transition-group";
=======
import React, { useState, useEffect } from "react";
import "./newHeader.css";
import CSSTransition from "react-transition-group";
>>>>>>> 06ad38c7275c4795ba8d494b3582b66166857851

/** 
export default function NewHeader() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src={require("../assets/logo.png")} className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
<<<<<<< HEAD
          <a href="/">Home</a>
          <a href="/">Articles</a>
          <a href="/">About</a>
          <button>Logout</button>
=======
          <a href="/programs">PROGRAMS</a>
          <a href="/board">BOARD</a>
          <a href="/prospectives">PROSPECTIVES</a>
          <a href="/contact">CONTACT</a>
>>>>>>> 06ad38c7275c4795ba8d494b3582b66166857851
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        🍔
      </button>
    </header>
  );
}
*/