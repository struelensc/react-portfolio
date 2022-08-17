import NavTabs from "./NavTabs";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./Footer";

export default function PortfolioContainer() {
  return (
    <div>
      <NavTabs />
      <main>
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
