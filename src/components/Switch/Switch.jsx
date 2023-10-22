import React, { useState } from "react";
import SwitchStyled from "./SwitchStyled.jsx";

const Switch = ({ textOne, textTwo }) => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = (isLeft) => {
    if ((isLeft && !toggle) || (!isLeft && toggle)) {
      setToggle((prevState) => !prevState);
    }
  };

  return (
    <SwitchStyled>
      <div
        className={`left ${toggle ? "active" : ""}`}
        onClick={() => handleToggle(true)}
      >
        {textOne}
      </div>
      <div
        className={`right ${toggle ? "" : "active"}`}
        onClick={() => handleToggle(false)}
      >
        {textTwo}
      </div>
    </SwitchStyled>
  );
};

export default Switch;
