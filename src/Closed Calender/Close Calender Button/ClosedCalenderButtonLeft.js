import React from "react";

import {
  VanImg,
  VanContainer,
  DatePara,
  CalenderButtonLeftDiv
} from "./styledCSS";

import vanSVG from "../../assets/images/van.svg";

export default ({ dateSelected, selectedDay }) => {
  return (
    <CalenderButtonLeftDiv>
      <DatePara>
        {selectedDay} August {dateSelected}
      </DatePara>
      <VanContainer>
        <VanImg name="calender" src={vanSVG} alt="A delivery van"></VanImg>
        Earliest delivery
      </VanContainer>
    </CalenderButtonLeftDiv>
  );
};
