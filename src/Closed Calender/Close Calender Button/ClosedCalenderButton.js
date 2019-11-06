import React from "react";

import {
  CalenderButtonSection
} from "./styledCSS";

import CalenderButtonLeft from "./ClosedCalenderButtonLeft";
import CalenderButtonRight from "./ClosedCalenderButtonRight";

export default ({handleModalState, dateSelected, selectedDay}) => {
 

  return (
    <CalenderButtonSection>
      <CalenderButtonLeft selectedDay={selectedDay} dateSelected={dateSelected}></CalenderButtonLeft>
      <CalenderButtonRight dateSelected={dateSelected} handleModalState={handleModalState}></CalenderButtonRight>
    </CalenderButtonSection>
  );
};
