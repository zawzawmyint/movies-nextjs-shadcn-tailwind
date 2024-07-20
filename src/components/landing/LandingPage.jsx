import { getMovieDetails, getMoviesList } from "@/endpoints/movie/movieList";
import Image from "next/image";
import Link from "next/link";
import { Motion } from "../generic/motion/Motion";
import MovieDetailFavButton from "../movie/movie-details/MovieDetailFavButton";
import PlayIcons from "../movie/movie-details/PlayIcons";
import MoviePageHeader from "../movie/MoviePageHeader";
import { Suggessions } from "../movie/Suggessions/Suggessions";
import TextTitle from "./TextTitle";
import { wait } from "@/utils/helper";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const LandingPage = async () => {
  const { page, results } = await getMoviesList("", 1);
  await wait(1000);
  const details = await getMovieDetails(results[0].id, "recommendations");
  const data = results[0];

  return (
    <div className="relative w-full">
      <Image
        src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
        width={50}
        height={50}
        alt="logo"
        className=" bg-transparent w-full h-[700px] object-cover"
      />
      <div className="max-w-xl text-gray-300/100  flex flex-col gap-5 absolute top-10 sm:top-32 sm:left-14 p-5 ">
        <TextTitle title={data.title} />
        <Motion delay="0.6">
          <p className="leading-2   [&:not(:first-child)]:mt-6 text-balance text-center sm:text-start">
            {data.overview}
          </p>
        </Motion>
        <div className="text-center sm:text-start">
          <Link href={`/movies/${data.id}`}>More info➡️</Link>
        </div>
        <Motion delay="0.7">
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start items-center">
            <PlayIcons id={data.id} />
            <MovieDetailFavButton movie={data} />
          </div>
        </Motion>
      </div>
      <div className="m-2 mx-14 sm:mx-20  ">
        <MoviePageHeader name={"Recommendations"} />

        <Suggessions data={details.results} />
      </div>
    </div>
  );
};

export default LandingPage;
