"use client";

import { useEffect, useState } from "react";
import Container from "../Container";
import calculateDiff from "./utils";
import Timer from "./Timer";

interface CountdownProps {
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

const Countdown: React.FC<CountdownProps> = ({ date }) => {
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

  return (
    <div className="pt-10 w-full absolute top-0">
      <Container>
        <div className="px-2 laptop:px-5 desktop:px-12 flex">
          <Timer time={timeLeft} />
        </div>
      </Container>
    </div>
  );
};

export default Countdown;
