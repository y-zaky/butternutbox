import styled, { keyframes, css } from "styled-components";

// CalenderButtonContainer.js

const ChangeDateButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: bold;
`;

const CancelCalenderChangeButton = styled.div`
  color: rgb(171, 171, 171);
  margin-right: 30px;
  cursor: pointer;
`;

const ChangeDateOpenCalenderButton = styled.div`
  color: rgb(225, 130, 112);
  border: 1px solid rgb(225, 130, 112);
  box-shadow: 1px 3px 8px 1px rgba(209, 209, 209, 1);
  cursor: pointer;
  display: flex;
  padding: 10px;
  align-items: center;
`;

// CalenderSelect.js

const CalenderTime = styled.time``;

const CalenderContainerBackground = styled.div``;

const DayOfWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-size: 20px;
  text-align: center;
  margin-bottom: 15px;
`;

const DateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 5px;
  row-gap: 5px;
  margin-bottom: 20px;

  & button:first-child {
    grid-column: 2;
  }
`;

const CalenderDayButton = styled.button`
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  border-color: rgb(225, 130, 112);
  :hover,
  :focus {
    background: rgb(225, 130, 112);
    color: white;
    outline-color: rgb(246, 245, 243);
  }

  ${props =>
    props.id === 'square-grey' &&
    css`
      background-color: rgb(171, 171, 171);
      border-color: rgb(171, 171, 171);
    `}
`;

const OpenCalenderTitle = styled.h1`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 20px;
`;

// OpenCalenderModal.js

//Animation
const animatedown = keyframes`
from {top:-300px; opacity:0}
to {top:0; opacity:1}
`;

const ModalContent = styled.div`
  font-family: "GTPressuraMono";
  position: relative;
  background-color: white;
  margin: auto;
  padding: 30px;
  max-width: 350px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation-name: ${animatedown};
  animation-duration: 0.5s;
`;

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(90, 85, 91);
`;



export {
  ChangeDateButtonsContainer,
  CancelCalenderChangeButton,
  ChangeDateOpenCalenderButton,
  CalenderTime,
  CalenderContainerBackground,
  DayOfWeek,
  DateGrid,
  CalenderDayButton,
  OpenCalenderTitle,
  ModalContent, 
  ModalBackground 
}