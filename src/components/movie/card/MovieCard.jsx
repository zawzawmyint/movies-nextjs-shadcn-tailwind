"use client";

import { Motion } from "@/components/generic/motion/Motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { calculateRates, dateFormat } from "@/utils/helper";
import { View } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MovieDetailFavButton from "../movie-details/MovieDetailFavButton";

export function MovieCard({ movie }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const rates = calculateRates(movie.vote_average);
  return (
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`w-full  hover:shadow-md hover:drop-shadow-lg`}
    >
      <Motion x={10} y={10} scale={[1.5, 0.8, 1]} duration={1}>
        <CardHeader className="relative aspect-square m-2">
          <div
            className={`absolute top-12 z-50 right-10 ${
              isHovered ? "opacity-100" : "opacity-0"
            }    transition-opacity duration-300 `}
          >
            <MovieDetailFavButton movie={movie} />
            {/* <HeartIcon className="w-[1.5rem] h-[1.5rem]" /> */}
          </div>
          <Link href={`/movies/${movie.id}`}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              fill
              alt={movie.title}
              className="rounded object-cover"
            />
          </Link>
        </CardHeader>
      </Motion>
      <CardContent>
        <CardTitle className="text-md text-primary">{movie.title}</CardTitle>
        <CardDescription>{dateFormat(movie.release_date)}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-wrap justify-between">
        <CardDescription className="flex justify-center items-center">
          ⭐{rates.toFixed(2)}%
        </CardDescription>
        <CardDescription className="flex justify-center items-center">
          <View /> : {Math.round(movie.popularity)}
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
