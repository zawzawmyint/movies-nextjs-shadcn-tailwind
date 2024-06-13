import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { getMoviesList } from "@/endpoints/movie/movieList";
import { Suggessions } from "../movie/Suggessions/Suggessions";
import MoviePageHeader from "../movie/MoviePageHeader";
import { wait } from "@/utils/helper";
import { Motion } from "../generic/motion/Motion";
import IconButton from "../generic/icon-button/IconButton";
import { PlayIcon, SunIcon } from "@radix-ui/react-icons";
import { YoutubeIcon } from "lucide-react";
import PlayIcons from "../movie/movie-details/PlayIcons";

const LandingPage = async () => {
  const { page, results } = await getMoviesList("", 1, "top_rated");
  await wait(1000);
  const data = results[0];
  return (
    <div className="relative w-full">
      <Image
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        width={50}
        height={50}
        alt="logo"
        className=" bg-transparent w-full h-[700px] object-cover"
      />
      <div className="max-w-xl text-gray-300/100  flex flex-col gap-5 absolute top-10 sm:top-32 sm:left-14 p-5 ">
        <Motion>
          <h1 className="scroll-m-20 text-primary text-4xl font-extrabold tracking-tight lg:text-5xl">
            {data.title}
          </h1>
        </Motion>
        <Motion delay="0.6">
          <p className="leading-2   [&:not(:first-child)]:mt-6 text-balance">
            {data.overview}
          </p>
        </Motion>
        <div>
          <Link href={`/movies/${data.id}`}>More info➡️</Link>
        </div>
        <Motion delay="0.7">
          <PlayIcons id={data.id} />
        </Motion>
      </div>
      <div className="m-2 mx-14 sm:mx-20  ">
        <MoviePageHeader name={"Suggessions"} />
        <Suggessions data={results} />
      </div>
    </div>
  );
};

export default LandingPage;