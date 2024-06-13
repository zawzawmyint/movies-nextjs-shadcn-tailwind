import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  PersonIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="text-center flex flex-col gap-2 justify-center items-center h-14 my-3">
      <div className="flex flax-warp gap-3">
        <Link href={"https://github.com/zawzawmyint"} target="_">
          <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
        </Link>

        <Link
          href={"https://www.linkedin.com/in/zaw-zaw-myint-29745a199/"}
          target="_"
        >
          <LinkedInLogoIcon className="h-[1.2rem] w-[1.2rem]" />
        </Link>
        <Link
          href={"https://zawzawmyint-alpha-portfolio.vercel.app/"}
          target="_"
        >
          <PersonIcon className="h-[1.2rem] w-[1.2rem]" />
        </Link>
        <Link href={"https://www.instagram.com/iknowspeech/"} target="_">
          <InstagramLogoIcon className="h-[1.2rem] w-[1.2rem]" />
        </Link>
        <Link href={"https://x.com/ZmMusk"} target="_">
          <TwitterLogoIcon className="h-[1.2rem] w-[1.2rem]" />
        </Link>
      </div>
      <p className="text-primary">Create with Love ❤️ by Zaw Myint</p>
    </div>
  );
};

export default Footer;
