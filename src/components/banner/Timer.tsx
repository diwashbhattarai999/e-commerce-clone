"use client";

interface TimerProps {
  title: string;
  time: number;
}

const Timer: React.FC<TimerProps> = ({ title, time }) => {
  return (
    <div className="mr-2 text-center">
      <div
        className="w-11 min-h-[50px] 
        bg-white text-primary-color 
        inline-flex items-center justify-center 
        text-3xl font-semibold
        "
      >
        {time}
      </div>
      <div className="label">{title}</div>
    </div>
  );
};

export default Timer;
