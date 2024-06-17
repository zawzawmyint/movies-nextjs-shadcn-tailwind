import React from "react";
import { MovieCard } from "../card/MovieCard";
import MoviePageHeader from "../MoviePageHeader";
import FlexBox from "@/components/generic/FlexBox";
import { getMoviesList } from "@/endpoints/movie/movieList";
import { wait } from "@/utils/helper";

const MovieList = async ({ query, currentPage }) => {
  const { page, results } = await getMoviesList(query, currentPage);
  await wait(1000);

  return (
    <div>
      <FlexBox>
        {results &&
          results.map((movie, i) => <MovieCard key={i} movie={movie} />)}
      </FlexBox>
    </div>
  );
};

export default MovieList;
