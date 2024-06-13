import Container from "@/components/global/Container";
import MoviePageHeader from "@/components/movie/MoviePageHeader";
import MovieDetails from "@/components/movie/movie-details/MovieDetails";
import MovieDetailSkelenton from "@/components/movie/skeleton-fallback/MovieDetailSklenton";

import React, { Suspense } from "react";

const page = ({ params: { id } }) => {
  return (
    <Container>
      <MoviePageHeader name={"Movie Details"} />
      <Suspense key={"movie-details"} fallback={<MovieDetailSkelenton />}>
        <MovieDetails movieId={id} />
      </Suspense>
    </Container>
  );
};

export default page;
