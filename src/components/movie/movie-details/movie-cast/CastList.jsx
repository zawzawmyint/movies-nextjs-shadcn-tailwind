import { getMovieDetails } from "@/endpoints/movie/movieList";
import React from "react";
import CastCard from "./CastCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { wait } from "@/utils/helper";

const CastList = async ({ movieId }) => {
  const result = await getMovieDetails(movieId, "credits");
  await wait(1000);

  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="flex gap-1 w-max space-x-4 p-4">
        {result.cast.map((cast, index) => (
          <CastCard key={index + cast.name} cast={cast} />
        ))}
      </div>
      {result.cast.length === 0 && <p className="p-2 text-sm">No Casts</p>}
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default CastList;
