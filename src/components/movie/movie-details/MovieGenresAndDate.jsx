import React from "react";
import moment from "moment";
import { dateFormat } from "@/utils/helper";
import { Motion } from "@/components/generic/motion/Motion";

const MovieGenresAndDate = ({ date, stars, genres = [] }) => {
  const genreNames = genres && genres.map((genre, i) => genre.name).join(", ");
  return (
    <Motion delay="0.6">
      <div className="flex flex-wrap gap-2 justify-center items-center text-white ">
        <p>{stars} /</p>
        <p>{dateFormat(date)} /</p>
        <p>{genreNames}</p>
      </div>
    </Motion>
  );
};

export default MovieGenresAndDate;
