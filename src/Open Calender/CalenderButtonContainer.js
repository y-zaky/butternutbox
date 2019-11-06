import React from "react";

import {
  ChangeDateButtonsContainer,
  CancelCalenderChangeButton,
  ChangeDateOpenCalenderButton
} from "./styledCSS";

export default ({ handleModalState, handleDateSelect, handleDateSubmit }) => {
  return (
    <ChangeDateButtonsContainer>
      <CancelCalenderChangeButton onClick={() => handleModalState()}>
        CANCEL,<div>DON'T CHANGE</div>
      </CancelCalenderChangeButton>
      <ChangeDateOpenCalenderButton
        onClick={() => {
          handleDateSubmit();
          handleModalState();
        }}
      >
        CHANGE DATE
      </ChangeDateOpenCalenderButton>
    </ChangeDateButtonsContainer>
  );
};
