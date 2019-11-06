import React from 'react';
import '../App.css';

import { Title, SubTitle, ClosedCalenderDiv} from './styledCSS'
import CalenderButton from './Close Calender Button/ClosedCalenderButton'

export default ({handleModalState, dateSelected, selectedDay}) => {
  return (
    <ClosedCalenderDiv >
      <Title>Choose your delivery day  <SubTitle>Delivery is always free</SubTitle></Title>
      <CalenderButton selectedDay={selectedDay} dateSelected={dateSelected} handleModalState={handleModalState}/>
    </ClosedCalenderDiv>
  );
}
