"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Motion } from "@/components/generic/motion/Motion";
import { View, VoteIcon } from "lucide-react";
import moment from "moment";
import { dateFormat } from "@/utils/helper";

export function MovieCard({ movie }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Motion x={10} y={10} scale={[0.5, 1]} duration={1}>
      <Link href={`/movies/${movie.id}`}>
        <Card
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`w-full  hover:shadow-md hover:drop-shadow-lg`}
        >
          <CardHeader className="relative">
            <div
              className={`absolute top-12 right-10 ${
                isHovered ? "opacity-100" : "opacity-0"
              }    transition-opacity duration-300 `}
            >
              {/* <HeartIcon className="w-[1.5rem] h-[1.5rem]" /> */}
              <HeartFilledIcon className="w-[1.5rem] h-[1.5rem] border-1  border-x-sky-600 text-white" />
            </div>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width={100}
              height={200}
              alt={movie.title}
              className="rounded w-full max-h-64 object-cover"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-md text-primary">
              {movie.title}
            </CardTitle>
            <CardDescription>{dateFormat(movie.release_date)}</CardDescription>
          </CardContent>
          <CardFooter className="flex justify-between">
            <CardDescription className="flex justify-center items-center">
              <VoteIcon /> : {Math.round(movie.vote_count)}
            </CardDescription>
            <CardDescription className="flex justify-center items-center">
              <View /> : {Math.round(movie.popularity)}
            </CardDescription>
          </CardFooter>
        </Card>
      </Link>
    </Motion>
  );
}
