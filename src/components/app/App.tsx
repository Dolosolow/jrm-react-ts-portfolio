import React, { useState, useEffect } from "react";
import { useSpring } from "react-spring";
import { MainWrapper } from "./styled";

import Navbar from "components/navbar";

const App: React.FC = () => {
  const [enableFocus, setEnableFocus] = useState(false);
  const animatedProgress = useSpring({
    value: 105,
    from: { value: 0 },
    delay: 100,
    config: { duration: 600 },
  });

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