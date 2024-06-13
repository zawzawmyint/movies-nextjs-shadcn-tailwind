import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src={"/images/logo/movie-logo.jpg"}
      width={60}
      height={50}
      alt="logp"
      className=" rounded-sm h-8 sm:h-10"
    />
  );
};

export default Logo;
