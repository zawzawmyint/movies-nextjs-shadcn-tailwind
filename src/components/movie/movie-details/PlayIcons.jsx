import IconButton from "@/components/generic/icon-button/IconButton";
import { Motion } from "@/components/generic/motion/Motion";
import { DownloadIcon, PlayIcon } from "@radix-ui/react-icons";
import { YoutubeIcon } from "lucide-react";
import Link from "next/link";

import React from "react";

const PlayIcons = ({ id }) => {
  return (
    <Motion delay="0.7">
      <div className="flex flex-wrap gap-2">
        <Link href={`/movies/${id}`}>
          <IconButton
            name={"Watch Tailer"}
            variant={"secondary"}
            icon={<YoutubeIcon className="mr-1" />}
          />
        </Link>
        <Link href={`/movies/${id}`}>
          <IconButton
            name={"Download Now"}
            icon={<DownloadIcon className="mr-1" />}
          />
        </Link>
      </div>
    </Motion>
  );
};

export default PlayIcons;
