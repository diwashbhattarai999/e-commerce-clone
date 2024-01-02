import Image from "next/image";
import Container from "../reusable/Container";
import Links from "./Links";
import Socials from "./Socials";
import qr_app from "/public/images/footer_qr_app.png";

const Footer = () => {
  return (
    <div className="bg-white w-full pt-14 pb-4 mt-auto">
      <Container>
        <div className="flex flex-col-reverse laptop:flex-row">
          <div className="w-full">
            <Links />
            <Socials />
          </div>
          <div className="w-full laptop:max-w-[40%] flex flex-col laptop:items-end mb-8 laptop:mb-0 -mx-2">
            <h3 className="text-dark-color text-base mb-5 font-bold laptop:text-right">
              For better Shopping experience Download Sastodeal app
            </h3>
            <Image src={qr_app} alt="qr_app" className="max-w-xs block" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
