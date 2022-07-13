import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import Toggler from "./components/Toggler";
import ThemeContext from "./Context/ThemeContext";

const App = () => {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Toggler />
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
