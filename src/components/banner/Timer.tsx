"use client";
import { useEffect, useState } from "react";
import calculateDiff from "./utils";

interface TimerProps {
  date: Date;
}

interface DefaultTimeLeft {
  seconds: string;
  minutes: string;
  hours: string;
  days: string;
}

const defaultTimeLeft: DefaultTimeLeft = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

export type TimeLeft = number | DefaultTimeLeft;

const unitLabels: { [key: string]: string } = {
  seconds: "Secs",
  minutes: "Min",
  hours: "Hrs",
  days: "Day",
};

const Timer: React.FC<TimerProps> = ({ date }) => {
  //date.getTime() gives date in milliseconds since January 01, 1970
  const [timeInMS, setTimeInMs] = useState<number>(date.getTime());
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(defaultTimeLeft);

  useEffect(() => {
    setTimeInMs(date.getTime());
  }, [date]);

  useEffect(() => {
    const interval = setInterval(() => {
      updateTimeLeft(timeInMS);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeInMS]);

  const updateTimeLeft = (timeInMS: number) => {
    setTimeLeft(calculateDiff(timeInMS));
  };

  const reversedUnits = Object.entries(timeLeft).reverse();

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
