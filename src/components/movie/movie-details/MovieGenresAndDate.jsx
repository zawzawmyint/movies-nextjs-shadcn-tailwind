import React from "react";
import moment from "moment";
import { calculateRates, dateFormat } from "@/utils/helper";
import { Motion } from "@/components/generic/motion/Motion";

const MovieGenresAndDate = ({ date, stars, genres = [] }) => {
  const genreNames = genres && genres.map((genre, i) => genre.name).join(", ");
  const rates = calculateRates(stars);
  return (
    <Motion delay="0.6">
      <div className="flex flex-wrap gap-2 justify-center items-center text-white ">
        <p>⭐{rates.toFixed(2)}% /</p>
        <p>{dateFormat(date)} /</p>
        <p>{genreNames}</p>
      </div>
    </Motion>
  );
};

export default MovieGenresAndDate;
