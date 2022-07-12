import React from "react";

const SharedButton = (props) => {
  const { btnText, btnColor, btnEmitEvent, disabled } = props;

  const submitEvent = () => {
    if (btnEmitEvent) {
      btnEmitEvent();
    }
  };

  return (
    <button
      disabled={disabled}
      onClick={() => submitEvent()}
      data-test="SharedButton"
      className={
        btnColor === "primary"
          ? "button is-primary"
          : btnColor === "danger"
          ? "button is-danger"
          : "button"
      }
    >
      {btnText}
    </button>
  );
};

export default SharedButton;
