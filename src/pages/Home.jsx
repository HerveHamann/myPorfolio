import Header from "../components/layout/Header";
import Presentation from "../components/Presentation";
import About from "../components/About";
import Transition from "../components/Transition";
import Stack from "../components/Stack";
import Secondtrans from "../components/Secondtrans";
import Projets from "../components/Projets";
import Data from "../Data";
import useLocoScroll from "../hooks/useLocoScroll";
import Firsttrans from "../components/Firsttrans";

const Home = () => {
  useLocoScroll();
  return (
    <div className="home" data-scroll-container id="main-container">
      <Header />
      <Presentation />
      {/* <Transition /> */}
      <Firsttrans />
      <About />
      <Secondtrans />
      <Stack />
      <Projets Data={Data} />
    </div>
  );
};

export default Home;
