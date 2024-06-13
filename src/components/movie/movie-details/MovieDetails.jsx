import { Motion } from "@/components/generic/motion/Motion";
import Container from "@/components/global/Container";
import { Button } from "@/components/ui/button";
import { getMovieDetails } from "@/endpoints/movie/movieList";
import { wait } from "@/utils/helper";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import PlayIcons from "./PlayIcons";

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
      <div className="max-w-xl flex flex-col justify-center text-center items-center gap-5 absolute top-24 sm:top-48 sm:left-[24%] p-5 text-gray-50/100 ">
        <h1 className="scroll-m-20 text-red-600 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {data.title}
        </h1>
        <div className="flex flex-wrap gap-2 justify-center items-center">
          <PlayIcons id={data.id} />
          <HeartFilledIcon className="w-[2rem] h-[2rem] border-1  border-x-sky-600 text-white" />
        </div>
        <p className="leading-2 [&:not(:first-child)]:mt-16  text-balance bg-gray-400 bg-opacity-60 p-5 rounded">
          {data.overview}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
