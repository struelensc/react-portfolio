import Header from "./Header";
import Greeting from "./sections/Greeting";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Footer from "./Footer";

export default function PortfolioContainer() {
  return (
    <div>
      <Header />
      <main>
        <Greeting />
        <About />
        <Skills />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
