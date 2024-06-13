import IconButton from "@/components/generic/icon-button/IconButton";
import { PlayIcon } from "@radix-ui/react-icons";
import { YoutubeIcon } from "lucide-react";
import Link from "next/link";

import React from "react";

const PlayIcons = ({ id }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Link href={`/movies/${id}`}>
        <IconButton
          name={"Watch Tailer"}
          variant={"secondary"}
          icon={<YoutubeIcon className="mr-1" />}
        />
      </Link>
      <Link href={`/movies/${id}`}>
        <IconButton name={"Watch Now"} icon={<PlayIcon className="mr-1" />} />
      </Link>
    </div>
  );
};

export default PlayIcons;
