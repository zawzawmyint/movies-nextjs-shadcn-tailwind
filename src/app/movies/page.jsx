import Container from "@/components/global/Container";
import MoviePageHeader from "@/components/movie/MoviePageHeader";
import MovieList from "@/components/movie/movielist/MovieList";
import { PaginationBox } from "@/components/movie/movielist/PaginationBox";
import Categories from "@/components/movie/movielist/filter/Categories";
import { MovieListSkeleton } from "@/components/movie/skeleton-fallback/MovieListSkeleton";
import { Suspense } from "react";

const page = async ({ searchParams }) => {
  const query = searchParams?.query || "";
  const category = searchParams?.category || "";
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <Container>
      <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center">
        <MoviePageHeader name={"Movie List"} />
        <Categories />
      </div>
      <Suspense key={query + currentPage} fallback={<MovieListSkeleton />}>
        <MovieList
          query={query}
          category={category}
          currentPage={currentPage}
        />
      </Suspense>
      <div className="my-5 overflow-hidden overflow-x-auto">
        <PaginationBox />
      </div>
    </Container>
  );
};

export default page;
