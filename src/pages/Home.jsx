import Header from "../components/layout/Header";
import Presentation from "../components/Presentation";
import About from "../components/About";
import Transition from "../components/Transition";
import Stack from "../components/Stack";

const Home = () => {
  return (
    <div>
      <Header />
      <Presentation />
      <Transition />
      <About />
      <Stack />
    </div>
  );
};

export default Home;
