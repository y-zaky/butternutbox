import React from "react";

import {
  CalenderTime,
  CalenderContainerBackground,
  DayOfWeek,
  DateGrid,
  CalenderDayButton,
  OpenCalenderTitle
} from "./styledCSS";

export default ({handleDateSelect}) => {

  const greyArr = [1,8,15,22,29,4,11,18,25,5,12,19,26]
  const calenderDates = new Array(31)
    .fill("")
    .map((square, index) => <CalenderDayButton key={`calender-date-button-${index+1}`} id={ greyArr.includes(index+1) ? `square-grey`:`square-${index+1}`} onClick={handleDateSelect}><CalenderTime datetime={`2019-08-${index+1}`}>{index + 1}</CalenderTime></CalenderDayButton>);

  return (
    <CalenderContainerBackground>
       <OpenCalenderTitle>August 2019</OpenCalenderTitle>
      <DayOfWeek>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
        <div>S</div>
      </DayOfWeek >

      <DateGrid>
         {calenderDates}
      </DateGrid>
    </CalenderContainerBackground>
  );
};
