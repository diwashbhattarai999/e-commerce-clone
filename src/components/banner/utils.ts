import dayjs from "dayjs";
import { TimeLeft } from "./Timer"; 

interface GetRemainingParams {
  nowDayjs: dayjs.Dayjs;
  timestamDayjs: dayjs.Dayjs;
}

const calculateDiff = (timeInMs: number): TimeLeft => {
  const timestamDayjs = dayjs(timeInMs);
  const nowDayjs = dayjs();

  if (timestamDayjs.isBefore(nowDayjs)) {
    return {
      seconds: "00",
      minutes: "00",
      hours: "00",
      days: "00",
    };
  }

  return {
    seconds: getRemainingSeconds(nowDayjs, timestamDayjs),
    minutes: getRemainingMinutes(nowDayjs, timestamDayjs),
    hours: getRemainingHours(nowDayjs, timestamDayjs),
    days: getRemainingDays(nowDayjs, timestamDayjs),
  };
};

export default calculateDiff;

function getRemainingSeconds(
  nowDayjs: dayjs.Dayjs,
  timestamDayjs: dayjs.Dayjs
): string {
  const seconds = (timestamDayjs.diff(nowDayjs, "seconds") % 60)
    .toString()
    .padStart(2, "0");
  return seconds;
}
function getRemainingMinutes(
  nowDayjs: dayjs.Dayjs,
  timestamDayjs: dayjs.Dayjs
): string {
  const minutes = (timestamDayjs.diff(nowDayjs, "minutes") % 60)
    .toString()
    .padStart(2, "0");
  return minutes;
}
function getRemainingHours(
  nowDayjs: dayjs.Dayjs,
  timestamDayjs: dayjs.Dayjs
): string {
  const hours = (timestamDayjs.diff(nowDayjs, "hours") % 24)
    .toString()
    .padStart(2, "0");
  return hours;
}
function getRemainingDays(
  nowDayjs: dayjs.Dayjs,
  timestamDayjs: dayjs.Dayjs
): string {
  const days = timestamDayjs.diff(nowDayjs, "days").toString();
  return days;
}

function padWithZeros(number: number, length: number): string {
  const numberString = number.toString();
  if (numberString.length >= length) return numberString;

  return "0".repeat(length - numberString.length) + numberString;
}

export const calculateTimeLeft = (date: Date) => {
  const timeInMs = date.getTime();
  return calculateDiff(timeInMs);
};
