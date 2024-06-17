import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <h3 className="text-md font-semibold tracking-wider">
      M<span className="text-primary">O</span>v
      <span className="text-primary">I</span>es
    </h3>
  );
};

export default Logo;

// <Image
//   src={"/images/logo/movie-logo.jpg"}
//   width={60}
//   height={50}
//   alt="logp"
//   className=" rounded-sm h-8 sm:h-10"
// />
