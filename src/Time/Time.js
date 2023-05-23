import React from "react";
import useTimer from "../hooks/useTimer";
import DigitalDial from "../UI/DigitalDial";

const Time = () => {
  const time = useTimer();

  return (
    <div className="text-7xl font-bold text-amber-600">
      <DigitalDial value={time} />
    </div>
  );
};

export default Time;
