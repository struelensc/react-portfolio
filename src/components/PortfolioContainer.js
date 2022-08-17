import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./Footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // const renderPage = () => {
  //   if (currentPage === "Portfolio") {
  //     return <Portfolio />;
  //   }
  //   if (currentPage === "Contact") {
  //     return <Contact />;
  //   }
  //   return <About />;
  // };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
