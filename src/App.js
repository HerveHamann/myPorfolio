import { useState, useEffect } from "react";
import Particles from "./components/Particles";
import Modale from "./components/Modale";
import Home from "./pages/Home";

function App() {
  const [showIntro, SetShowIntro] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetShowIntro(false);
    }, 10000);
  });
  return (
    <div>
      {showIntro === true ? <Particles /> : ""}
      {showIntro === true ? <Modale /> : ""}
      {showIntro === false ? <Home /> : ""}
    </div>
  );
}

export default App;
