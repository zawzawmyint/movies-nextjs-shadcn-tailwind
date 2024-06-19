import FlexBox from "@/components/generic/FlexBox";
import { getMoviesList } from "@/endpoints/movie/movieList";
import { wait } from "@/utils/helper";
import { MovieCard } from "../card/MovieCard";

const MovieList = async ({ query, currentPage }) => {
  const { page, results } = await getMoviesList(query, currentPage);
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
