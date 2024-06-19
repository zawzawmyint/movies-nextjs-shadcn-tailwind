import FavsList from "@/components/favs/favs-list/FavsList";
import Container from "@/components/global/Container";
import MoviePageHeader from "@/components/movie/MoviePageHeader";
import { MovieListSkeleton } from "@/components/movie/skeleton-fallback/MovieListSkeleton";
import { Suspense } from "react";

const page = ({ searchParams }) => {
  const query = searchParams?.query || "";
  return (
    <Container>
      <MoviePageHeader name={"Favorite List"} />
      <Suspense key={"favs"} fallback={<MovieListSkeleton />}>
        <FavsList query={query} />
      </Suspense>
      {/* <div className="my-5 overflow-hidden overflow-x-auto">
        <PaginationBox />
      </div> */}
    </Container>
  );
};

export default page;
