import styled from "styled-components";

// ClosedCalenderButton.js
const CalenderButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 1px 3px 8px 1px rgba(209, 209, 209, 1);
`;

// ClosedCalenderButtonLeft.js

const VanImg = styled.img`
  margin-right: 5px;
`;

const VanContainer = styled.div`
  font-family: "GT-Pressura-Regular";
  background-color: rgb(241, 247, 238);
  display: flex;
  width: 140px;
  padding: 3px;
`;

const DatePara = styled.p`
  align-self: baseline;
  margin: 0;
  margin-bottom: 3px;
  font-size: 20px;
`;

const CalenderButtonLeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

// ClosedCalenderButtonRight.js

const ChangeDateButton = styled.div`
  background-color: rgb(205, 219, 232);
  font-family: "GTPressuraMono";
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  padding-left: 35px;
  padding-right: 10px;
  justify-content: center;
  text-decoration: underline;
  cursor: pointer;
`;

const CalenderButtonRightDiv = styled.div``;

const CalenderImg = styled.img``;

const CalenderImageContainer = styled.div`
position:relative;
display: flex;
justify-content: center;
`
const DateSelectedDiv = styled.div`
position:absolute;
top: 30%;
`

export {
  CalenderButtonSection,
  VanImg,
  VanContainer,
  DatePara,
  CalenderButtonLeftDiv,
  ChangeDateButton,
  CalenderButtonRightDiv,
  CalenderImg,
  CalenderImageContainer,
  DateSelectedDiv
}
