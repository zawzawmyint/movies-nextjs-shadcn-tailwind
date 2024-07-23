"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Categories = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  function handleSearch(term) {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    params.delete("query");
    if (term) {
      params.set("category", term);
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="my-5 sm:my-0 sm:mt-5 ">
      <Select
        onValueChange={(value) => {
          handleSearch(value);
        }}
        defaultValue={searchParams.get("category")?.toString() || ""}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categories</SelectLabel>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="now_playing">Now Playing</SelectItem>
            <SelectItem value="popular">Popular</SelectItem>
            <SelectItem value="top_rated">Top Rated</SelectItem>
            <SelectItem value="upcoming">Upcoming</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Categories;
