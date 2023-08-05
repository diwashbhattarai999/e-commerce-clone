import Container from "../Container";
import Widgets from "./Widgets";

const contact = [
  {
    id: 1,
    value: "Customer Care",
  },
  {
    id: 2,
    value: "FAQs",
  },
  {
    id: 3,
    value: "Return and Refund Policy",
  },
  {
    id: 4,
    value: "Terms and Conditions",
  },
  {
    id: 5,
    value: "Raise a ticket",
  },
];

const sastodeal = [
  {
    id: 1,
    value: "About Us",
  },
  {
    id: 2,
    value: "Careers @ SD",
  },
  {
    id: 3,
    value: "Advertise on SD",
  },
  {
    id: 4,
    value: "Sell on SD",
  },
];

const Footer = () => {
  return (
    <div className="bg-white fixed bottom-0 w-full pt-14 pb-4">
      <Container>
        <div className="flex flex-col">
          <div className="left">
            <div className="flex">
              <Widgets title="Contact us" subtitles={contact} />
              <Widgets title="Sastodeal" subtitles={sastodeal} />
            </div>
            <div className="buttom"></div>
          </div>
          <div className="right"></div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
