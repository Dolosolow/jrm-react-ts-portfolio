import React, { useState, useEffect } from "react";
import { useSpring } from "react-spring";
import { MainWrapper } from "./styled";

import Header from "components/header";
import Navbar from "components/navbar";

const App: React.FC = () => {
  const [enableFocus, setEnableFocus] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", (evt) => {
      setEnableFocus(true);
    });

    document.addEventListener("mousedown", (evt) => {
      setEnableFocus(false);
    });
  }, []);

  return (
    <MainWrapper $enableFocus={enableFocus}>
      <Navbar />
    </MainWrapper>
  );
};

export default App;
