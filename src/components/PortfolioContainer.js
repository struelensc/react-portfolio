import NavTabs from "./NavTabs";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./Footer";

export default function PortfolioContainer() {
  return (
    <div>
      <NavTabs />
      <main>
        <About />
        {/* <Skills /> */}
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
