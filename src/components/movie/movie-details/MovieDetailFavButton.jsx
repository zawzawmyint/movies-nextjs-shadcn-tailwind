"use client";
import { Button } from "@/components/ui/button";
import {
  addToFavoraites,
  removeFromFavoraites,
} from "@/lib/features/favoriates/favoriateSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import React from "react";

const MovieDetailFavButton = ({ movie }) => {
  const favoriates = useAppSelector((state) => state.favoriate.favoriates);
  console.log(`MovieDetailFavButton`, favoriates);
  const dispatch = useAppDispatch();

  const index = favoriates.findIndex((fav) => fav.id === movie.id);

  const handleAddToFavorites = (event) => {
    event.preventDefault();
    dispatch(addToFavoraites(movie));
  };

  const handleRemoveFromFavorites = (event) => {
    event.stopPropagation();
    dispatch(removeFromFavoraites(movie.id));
  };
  return (
    <div>
      <Button variant="secondary" size="icon" className="rounded-lg">
        {index !== -1 ? (
          <HeartFilledIcon
            className="w-[1.5rem] h-[1.5rem] text-red-600 "
            onClick={handleRemoveFromFavorites}
          />
        ) : (
          <HeartFilledIcon
            className="w-[1.5rem] h-[1.5rem]  "
            onClick={handleAddToFavorites}
          />
        )}
      </Button>
    </div>
  );
};

export default MovieDetailFavButton;
