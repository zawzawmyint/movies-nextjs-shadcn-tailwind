import Container from "@/components/global/Container";
import { Skeleton } from "@/components/ui/skeleton";

const LandingPageFallBack = () => {
  return (
    <Container>
      <div className="mt-[10%]">
        <Skeleton className={"h-10 w-4/5 m-2"} />
        <Skeleton className={"h-32 w-4/5 m-2"} />
        <Skeleton className={"h-10 w-3/5 m-2"} />
        <Skeleton className={"h-10 w-2/5 m-2"} />
      </div>
      <Skeleton className={"h-40 w-full m-2 mt-20"} />
    </Container>
  );
};

export default LandingPageFallBack;
