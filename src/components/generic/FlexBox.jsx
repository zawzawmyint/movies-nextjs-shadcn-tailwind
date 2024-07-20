import React from "react";

const FlexBox = ({ className, children }) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3 `}
    >
      {children}
    </div>
  );
};

export default FlexBox;
