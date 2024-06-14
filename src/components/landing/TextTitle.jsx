import React from "react";
import { Motion } from "../generic/motion/Motion";

const TextTitle = ({ title }) => {
  return (
    <Motion>
      <h1 className="scroll-m-20 text-primary text-4xl font-extrabold tracking-tight lg:text-5xl">
        {title}
      </h1>
    </Motion>
  );
};

export default TextTitle;
