import React, { useState, useEffect } from "react";
import { useSpring } from "react-spring";
import { MainWrapper, ProgressBar, SectionDivider } from "./styled";

import Header from "components/header";
import Navbar from "components/navbar";

const App: React.FC = () => {
  const [enableFocus, setEnableFocus] = useState(false);
  const animatedProgress = useSpring({
    value: 105,
    from: { value: 0 },
    delay: 100,
    config: { duration: 600 },
  });
  const animatedProgressBar = {
    width: animatedProgress.value.to((value) => `${value}%`),
    display: animatedProgress.value.to((value) =>
      value === 105 ? "none" : "block"
    ),
  };

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
      <SectionDivider $name="top" id="top" />
      <ProgressBar style={animatedProgressBar} />
      <Navbar />
      <Header />
      <SectionDivider $name="projects" id="projects" />
    </MainWrapper>
  );
};

export default App;
