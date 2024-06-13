import FlexBox from "@/components/generic/FlexBox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function MovieListSkeleton() {
  return (
    <FlexBox>
      {Array.from({ length: 20 }).map((_, index) => (
        <Card key={index} className={`w-full`}>
          <CardHeader>
            <Skeleton className={"h-44 w-full"} />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-md">
              <Skeleton className={"h-3 w-full my-2"} />
            </CardTitle>
            <CardDescription>
              <Skeleton className={"h-3 w-full"} />
            </CardDescription>
          </CardContent>
          <CardFooter className="flex justify-between gap-3">
            <Skeleton className={"h-5 w-full"} />
            <Skeleton className={"h-5 w-full"} />
          </CardFooter>
        </Card>
      ))}
    </FlexBox>
  );
}
