"use client";

import { TimeLeft } from "./Countdown";

interface TimerProps {
  time: TimeLeft;
}

const unitLabels: { [key: string]: string } = {
  seconds: "Secs",
  minutes: "Min",
  hours: "Hrs",
  days: "Day",
};

const Timer: React.FC<TimerProps> = ({ time }) => {
  const reversedUnits = Object.entries(time).reverse();

  return (
    <>
      {reversedUnits.map(([unit, value]) => (
        <div className="mr-2 text-center" key={unit}>
          <div
            className="w-11 min-h-[50px] 
            bg-white text-primary-color 
            inline-flex items-center justify-center 
            text-3xl font-semibold
        "
          >
            {value}
          </div>
          <div className="label">{unitLabels[unit]}</div>
        </div>
      ))}
    </>
  );
};

export default Timer;
