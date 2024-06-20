"use client";
import { Button } from "@/components/ui/button";
import {
  addToFavoraites,
  removeFromFavoraites,
} from "@/lib/features/favoriates/favoriateSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import React from "react";
import { motion } from "framer-motion";

const MovieDetailFavButton = ({ movie }) => {
  const favoriates = useAppSelector((state) => state.favoriate.favoriates);
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
    <Button variant="secondary" size="icon" className="rounded-lg">
      {index !== -1 ? (
        <motion.div
          initial={{ opacity: 0, y: 70, x: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            x: 0,
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 350,
            damping: 15,
          }}
        >
          <HeartFilledIcon
            onClick={handleRemoveFromFavorites}
            className="w-[1.5rem] h-[1.5rem] text-red-600 "
          />
        </motion.div>
      ) : (
        <HeartFilledIcon
          className="w-[1.5rem] h-[1.5rem]  "
          onClick={handleAddToFavorites}
        />
      )}
    </Button>
  );
};

export default MovieDetailFavButton;
