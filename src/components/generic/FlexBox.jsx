import React from "react";

const FlexBox = ({ className, children }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-4 gap-3 `}>{children}</div>
  );
};

export default FlexBox;
