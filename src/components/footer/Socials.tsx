import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";

const Socials = () => {
  return (
    <div className="flex items-center gap-5 flex-wrap -mx-2 w-full">
      <div className="font-normal text-sm text-lightgrey-color">
        Connect with us:
      </div>
      <div className="flex gap-1">
        <a
          href="https://www.facebook.com/sastodealonlineshopping"
          target="_blank"
          className="bg-[#4267B2] text-white rounded-full p-1 flex items-center justify-center"
        >
          <BiLogoFacebook size="20px" />
        </a>
        <a
          href="https://www.instagram.com/sastodeal_/"
          target="_blank"
          className="bg-[#4f5bd5] text-white rounded-full p-1 flex items-center justify-center"
        >
          <BiLogoInstagram size="20px" />
        </a>
        <a
          href="https://twitter.com/SastoDeal"
          target="_blank"
          className="bg-[#00acee] text-white rounded-full p-1 flex items-center justify-center"
        >
          <BiLogoTwitter size="20px" />
        </a>
      </div>
      <p className="text-primary-color text-sm">
        Sastodeal Pvt. Ltd. Pandol Marga, Lazimpat, Kathmandu
      </p>
    </div>
  );
};

export default Socials;
