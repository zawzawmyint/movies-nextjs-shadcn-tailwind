import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const CastCard = ({ cast }) => {
  return (
    <Card
      className={`w-full hover:shadow-md hover:drop-shadow-lg max-w-32 max-h-48 overflow-hidden `}
    >
      <CardHeader className="relative aspect-square">
        <Image
          src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
          fill
          alt={cast.name}
          className="rounded object-cover hover:scale-125 transition-all duration-500"
        />
      </CardHeader>
      <CardContent className="mt-2">
        <CardDescription className="text-xs text-primary text-ellipsis overflow-hidden">
          {cast.name}
        </CardDescription>
        <CardDescription className="text-xs text-opacity-75 text-ellipsis overflow-hidden">
          {cast.character}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default CastCard;
