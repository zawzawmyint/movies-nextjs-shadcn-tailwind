import { Motion } from "@/components/generic/motion/Motion";
import Container from "@/components/global/Container";
import { Button } from "@/components/ui/button";
import { getMovieDetails, getMovieGenres } from "@/endpoints/movie/movieList";
import { wait } from "@/utils/helper";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import PlayIcons from "./PlayIcons";
import TextTitle from "@/components/landing/TextTitle";
import MovieGenresAndDate from "./MovieGenresAndDate";
import { ScrollArea } from "@/components/ui/scroll-area";

const MovieDetails = async ({ movieId }) => {
  const data = await getMovieDetails(movieId);
  await wait(1000);
  return (
    <div className="m-2 relative">
      <Motion x={10} y={10} scale={[0.5, 1]} duration={1}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          width={50}
          height={50}
          alt="logo"
          className="rounded bg-transparent w-full h-[800px] sm:h-[800px] object-cover "
        />
      </Motion>

      <div className="max-w-xl flex flex-col justify-center text-center items-center gap-5 absolute top-24 sm:top-44 sm:left-[24%] p-5 text-gray-50/100 ">
        <TextTitle title={data.title} />

        <MovieGenresAndDate
          date={data.release_date}
          stars={data.vote_average}
          genres={data.genres}
        />

        <div className="flex flex-wrap gap-2 justify-center items-center">
          <PlayIcons id={data.id} />
          <HeartFilledIcon className="w-[2rem] h-[2rem] border-1  border-x-sky-600 text-white" />
        </div>
        <ScrollArea className="h-64 rounded p-5 bg-gray-400 bg-opacity-60 leading-2 [&:not(:first-child)]:mt-10 min-w-full">
          {data.overview
            ? data.overview
            : "No overview available for this video. Will be updated soon. "}
        </ScrollArea>
      </div>
    </div>
  );
};

export default MovieDetails;
