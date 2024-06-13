import React from "react";

const MoviePageHeader = ({ name }) => {
  return (
    <div className="my-5">
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {name}
      </h3>
    </div>
  );
};

export default MoviePageHeader;
