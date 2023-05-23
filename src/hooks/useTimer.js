import { useEffect, useState } from "react";

const useTimer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return [time];
};

export default useTimer;
