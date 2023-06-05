import React, { useState, useEffect } from "react";

import Header from "./Header";
import Greeting from "./sections/Greeting";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Footer from "./Footer";

export default function PortfolioContainer() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Header isSmallScreen={isSmallScreen} />
      <main>
        <Greeting isSmallScreen={isSmallScreen} />
        <About />
        <Skills />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
