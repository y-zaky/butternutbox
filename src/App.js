import React, { useState } from "react";
import "./App.css";

import ClosedCalender from "./Closed Calender/ClosedCalender";
import OpenCalenderModal from "./Open Calender/OpenCalenderModal";

//CLEANUP AND FULE STRUCTURE.

function App() {
  const [isClicked, setClicked] = useState(false);
  const [prevDateSelected, setDate] =useState(1)
  const [newDateSelected, setNewDate] = useState(2)
  const [selectedDay, setDay] = useState('Mon')

  
  const handleDateSelect = (e) => {
    e.persist()
    setNewDate(prevState => prevState = parseInt(e.target.textContent))
  }
  
  const handleDateSubmit = () => {
    handleDaySelect(newDateSelected)
    setDate(newDateSelected)
  }
  
  const handleModalState = event => setClicked(prevState => !prevState);
  
  //Very Hacky - Change!
  const handleDaySelect = (date) => {
    if ( date === 7|| date === 14|| date === 21|| date === 28 ) setDay( prevState => prevState='Mon' );
    if (date === 1 || date === 8 || date === 15|| date === 22 || date === 29 ) setDay( prevState => prevState='Tues' );
    if (date === 2 || date === 9 || date === 16|| date === 23 || date === 30 ) setDay( prevState => prevState='Wed' );
    if (date === 3 || date ===10 || date === 17|| date === 24 || date === 31)  setDay( prevState => prevState='Thurs' );
    if (date === 4 || date ===11 || date === 18|| date === 25) setDay( prevState => prevState='Fri' );
    if (date === 5 || date ===12 || date === 19|| date === 26)  setDay( prevState => prevState='Sat' );
    if (date === 6 || date ===13 || date === 20|| date === 27)  setDay( prevState => prevState='Sun' );
  }
  
  return (
    <>
      {isClicked ? (
        <OpenCalenderModal handleDateSubmit={handleDateSubmit} handleDateSelect={handleDateSelect} handleModalState={handleModalState}></OpenCalenderModal>
      ) : (
        <ClosedCalender selectedDay={selectedDay} dateSelected={prevDateSelected} handleModalState={handleModalState}></ClosedCalender>
      )}
    </>
  );
}

export default App;
