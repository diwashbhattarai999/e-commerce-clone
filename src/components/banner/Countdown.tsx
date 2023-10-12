import Container from "../reusable/Container";
import Timer from "./Timer";

interface CountdownProps {
  date: Date;
}

const Countdown: React.FC<CountdownProps> = ({ date }) => {
  return (
    <div className="pt-10 w-full absolute top-0">
      <Container>
        <div className="px-2 laptop:px-5 desktop:px-12 flex">
          <Timer date={date} />
        </div>
      </Container>
    </div>
  );
};

export default Countdown;
