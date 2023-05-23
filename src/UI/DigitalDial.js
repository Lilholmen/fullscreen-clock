import React from "react";

const DigitalDial = ({ value }) => {
  const hours = Math.floor(+value / 3600);
  const minutes = Math.floor(+value / 60) - 60 * hours;
  const seconds = value % 60;

  const view = {
    h: ("0" + hours).slice(-2),
    m: ("0" + minutes).slice(-2),
    s: ("0" + seconds).slice(-2),
  };

  return (
    <span>
      {view.h}:{view.m}:{view.s}
    </span>
  );
};

export default DigitalDial;
