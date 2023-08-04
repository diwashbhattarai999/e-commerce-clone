import Container from "../Container";
import Bottom from "./bottom/Bottom";
import Middle from "./middle/Middle";
import Top from "./top/Top";

const Header = () => {
  return (
    <div className="pt-2 bg-content-background-color">
      <Container>
        <div className="flex flex-col gap-4">
          <Top />
          <Middle />
          <Bottom />
        </div>
      </Container>
    </div>
  );
};

export default Header;
