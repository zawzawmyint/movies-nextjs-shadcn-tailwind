import FlexBox from "@/components/generic/FlexBox";
import Container from "@/components/global/Container";
import MoviePageHeader from "@/components/movie/MoviePageHeader";
import MovieList from "@/components/movie/movielist/MovieList";
import { PaginationBox } from "@/components/movie/movielist/PaginationBox";
import { MovieListSkeleton } from "@/components/movie/skeleton-fallback/MovieListSkeleton";
import { getMoviesList } from "@/endpoints/movie/movieList";
import { Suspense } from "react";

const page = async ({ searchParams }) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <Container>
      <MoviePageHeader name={"Movie List"} />
      <Suspense key={query + currentPage} fallback={<MovieListSkeleton />}>
        <MovieList query={query} currentPage={currentPage} />
      </Suspense>
      <div className="my-5 overflow-hidden overflow-x-auto">
        <PaginationBox />
      </div>
    </Container>
  );
};

export default page;
