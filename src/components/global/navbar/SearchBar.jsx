"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const path = pathname.includes("favs") ? "/favs" : "/movies";

  const handleSearch = useDebouncedCallback(
    (term) => {
      const params = new URLSearchParams(searchParams);
      params.set("page", "1");
      if (term) {
        params.set("query", term);
      } else {
        params.delete("query");
      }
      replace(`${path}?${params.toString()}`);
    },
    [500]
  );

  return (
    <Dialog>
      <DialogTrigger>
        <Search className="h-[1.2rem]  w-[1.2rem]" />
      </DialogTrigger>
      <DialogContent className="top-[15%]">
        <DialogHeader>
          <DialogTitle>
            Search {pathname.includes("favs") ? "Favoriates" : "Movies"}
          </DialogTitle>
        </DialogHeader>
        <div className="flex justify-center items-center gap-3 border-2 p-1 px-2 rounded-lg">
          <Search className="h-[1.2rem]  w-[1.2rem]" />
          <Input
            type="search"
            placeholder="Search"
            className="border-none focus-visible:ring-transparent h-8"
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            defaultValue={searchParams.get("query")?.toString()}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBar;
