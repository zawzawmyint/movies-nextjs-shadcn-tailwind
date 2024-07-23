import FlexBox from "@/components/generic/FlexBox";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { getMoviesList } from "@/endpoints/movie/movieList";
import { wait } from "@/utils/helper";
import { MovieCard } from "../card/MovieCard";

const MovieList = async ({ query, currentPage, category = "" }) => {
  const { page, results } = await getMoviesList(query, currentPage, category);
  await wait(1000);

  return (
    <div>
      <FlexBox>
        {results.length !== 0 &&
          results.map((movie, i) => <MovieCard key={i} movie={movie} />)}
      </FlexBox>

      {results.length === 0 && <div>No movies</div>}
    </div>
  );
};

export default MovieList;
