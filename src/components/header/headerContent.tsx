import React from "react";
import { useTrail } from "react-spring";
import { StyledHeaderContent } from "./styled";

interface Props {
  children: any;
}

const HeaderContent: React.FC<Props> = ({ children }) => {
  const animatedTrails = useTrail(React.Children.count(children), {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    delay: 2300,
  });
  const animatedText = animatedTrails.map((props, idx) =>
    React.cloneElement(children[idx], {
      key: idx,
      style: {
        opacity: props.opacity,
        transform: props.y.to((y) => `translate3d(0,${y}px,0)`),
      },
    })
  );

  return <StyledHeaderContent>{animatedText}</StyledHeaderContent>;
};

export default HeaderContent;
