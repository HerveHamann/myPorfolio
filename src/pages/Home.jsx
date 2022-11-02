import Header from "../components/layout/Header";
import Presentation from "../components/Presentation";
import About from "../components/About";
import Transition from "../components/Transition";
import Stack from "../components/Stack";
import Secondtrans from "../components/Secondtrans";
import Projets from "../components/Projets";
import Data from "../Data";

const Home = () => {
  return (
    <div>
      <Header />
      <Presentation />
      <Transition />
      <About />
      <Secondtrans />
      <Stack />
      <Projets Data={Data} />
    </div>
  );
};

export default Home;
