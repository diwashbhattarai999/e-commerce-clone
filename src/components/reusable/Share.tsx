"use client";

import { useEffect, useState } from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberIcon,
  ViberShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";


const Share = () => {
  const [currentURL, setCurrentURL] = useState("");

  useEffect(() => {
    // Get the current URL when the component mounts
    setCurrentURL(window?.location.href);
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      <FacebookShareButton url={currentURL}>
        <FacebookIcon size={38} round={true} className="hover:scale-125 transition"/>
      </FacebookShareButton>

      <EmailShareButton url={currentURL}>
        <EmailIcon size={38} round={true} className="hover:scale-125 transition"/>
      </EmailShareButton>

      <LinkedinShareButton url={currentURL}>
        <LinkedinIcon size={38} round={true} className="hover:scale-125 transition"/>
      </LinkedinShareButton>

      <PinterestShareButton url={currentURL} media="pinterest.com">
        <PinterestIcon size={38} round={true} className="hover:scale-125 transition"/>
      </PinterestShareButton>

      <RedditShareButton url={currentURL}>
        <RedditIcon size={38} round={true} className="hover:scale-125 transition"/>
      </RedditShareButton>

      <TelegramShareButton url={currentURL}>
        <TelegramIcon size={38} round={true} className="hover:scale-125 transition"/>
      </TelegramShareButton>

      <TwitterShareButton url={currentURL}>
        <TwitterIcon size={38} round={true} className="hover:scale-125 transition"/>
      </TwitterShareButton>

      <ViberShareButton url={currentURL}>
        <ViberIcon size={38} round={true} className="hover:scale-125 transition"/>
      </ViberShareButton>

      <WhatsappShareButton url={currentURL}>
        <WhatsappIcon size={38} round={true} className="hover:scale-125 transition"/>
      </WhatsappShareButton>
    </div>
  );
};

export default Share;
