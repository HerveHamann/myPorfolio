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
import Footer from "../components/layout/Footer";

const Home = () => {
  useLocoScroll();
  return (
    <div className="home" data-scroll-container id="main-container">
      <div className="home-button">
        <a href="#header" data-scroll-to>
          <svg
            className="arrowup"
            width="100px"
            height="100px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.5 16.5L12 13L8.5 16.5"
              stroke="#ffc371"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.5 10.5L12 7L8.5 10.5"
              stroke="#ffc371"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
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
      <Footer />
    </div>
  );
};

export default Home;
