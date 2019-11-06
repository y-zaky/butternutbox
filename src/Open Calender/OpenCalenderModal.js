import React, { useEffect, useRef } from "react";
import "../App.css";

import { ModalContent, ModalBackground } from "./styledCSS";

import CalenderSelect from "./CalenderSelect";
import CalenderButtonContainer from "./CalenderButtonContainer";

export default ({ handleDateSelect, handleModalState, handleDateSubmit }) => {
  const node = useRef();

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    handleModalState();
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <ModalBackground>
      <ModalContent ref={node}>
        <CalenderSelect handleDateSelect={handleDateSelect}></CalenderSelect>
        <CalenderButtonContainer
          handleDateSubmit={handleDateSubmit}
          handleDateSelect={handleDateSelect}
          handleModalState={handleModalState}
        ></CalenderButtonContainer>
      </ModalContent>
    </ModalBackground>
  );
};
