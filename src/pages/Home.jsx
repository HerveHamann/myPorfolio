import Header from "../components/layout/Header";
import Presentation from "../components/Presentation";
import About from "../components/About";
import Stack from "../components/Stack";
import Secondtrans from "../components/Secondtrans";
import Projets from "../components/Projets";
import Data from "../Data";
import useLocoScroll from "../hooks/useLocoScroll";
import Firsttrans from "../components/Firsttrans";
import Thirdtrans from "../components/Thirdtrans";
import Fourthtrans from "../components/Fourthtrans";
import Contact from "../components/Contact";

const Home = () => {
  useLocoScroll();
  return (
    <div className="home" data-scroll-container id="main-container">
      <Header />
      <Presentation />
      <Firsttrans />
      <About />
      <Secondtrans />
      <Stack />
      <Thirdtrans />
      <Projets Data={Data} />
      <Fourthtrans />
      <Contact />
    </div>
  );
};

export default Home;
