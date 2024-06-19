"use client";
import { wait } from "@/utils/helper";
import { useAppSelector } from "@/lib/hooks";
import FlexBox from "@/components/generic/FlexBox";
import { MovieCard } from "@/components/movie/card/MovieCard";

const FavsList = ({ query }) => {
  const favoriates = useAppSelector((state) => state.favoriate.favoriates);

  const formatedFavorites =
    query !== ""
      ? favoriates.filter((fav) =>
          fav.title.toLowerCase().includes(query.toLowerCase())
        )
      : favoriates;

  return (
    <div>
      <FlexBox>
        {formatedFavorites.length !== 0 &&
          formatedFavorites.map((movie, i) => (
            <MovieCard key={i} movie={movie} />
          ))}
      </FlexBox>
      {formatedFavorites.length === 0 && <div>No favorites</div>}
    </div>
  );
};

export default FavsList;
