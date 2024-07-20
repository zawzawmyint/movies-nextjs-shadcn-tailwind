import Container from "@/components/global/Container";
import MoviePageHeader from "@/components/movie/MoviePageHeader";
import { Suggessions } from "@/components/movie/Suggessions/Suggessions";
import MovieDetails from "@/components/movie/movie-details/MovieDetails";
import CastList from "@/components/movie/movie-details/movie-cast/CastList";
import MovieDetailSkelenton from "@/components/movie/skeleton-fallback/MovieDetailSklenton";
import { MovieListSkeleton } from "@/components/movie/skeleton-fallback/MovieListSkeleton";
import { getMovieDetails } from "@/endpoints/movie/movieList";

import React, { Suspense } from "react";

const page = async ({ params: { id } }) => {
  const details = await getMovieDetails(id, "recommendations");
  return (
    <div>
      <Container>
        <MoviePageHeader name={"Movie Details"} />
        <Suspense key={"movie-details"} fallback={<MovieDetailSkelenton />}>
          <MovieDetails movieId={id} />
        </Suspense>
        <MoviePageHeader name={"Series Cast"} />
        <Suspense
          key={"movie-details-cast"}
          fallback={<MovieListSkeleton length={6} />}
        >
          <CastList movieId={id} />
        </Suspense>
      </Container>
      <div className="m-2 mx-14 sm:mx-20  ">
        <MoviePageHeader name={"Recommendations"} />
        <Suggessions data={details.results} />
      </div>
    </div>
  );
};

export default page;
