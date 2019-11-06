import React from "react";

import {
  ChangeDateButton,
  CalenderButtonRightDiv,
  CalenderImg,
  CalenderImageContainer,
  DateSelectedDiv
} from "./styledCSS";

import calenderSVG from "../../assets/images/calendar.svg";

export default ({ handleModalState, dateSelected }) => {

  return (
    <CalenderButtonRightDiv>
      <ChangeDateButton onClick={() => handleModalState()}>
        Change >
        <CalenderImageContainer>
          <CalenderImg
            name="calender"
            src={calenderSVG}
            alt="A calender image"
          ></CalenderImg>
          <DateSelectedDiv>{dateSelected}</DateSelectedDiv>
        </CalenderImageContainer>
      </ChangeDateButton>
    </CalenderButtonRightDiv>
  );
};
