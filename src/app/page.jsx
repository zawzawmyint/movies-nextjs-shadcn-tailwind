import LandingPage from "@/components/landing/LandingPage";
import LandingPageFallBack from "@/components/movie/skeleton-fallback/LandingPageFallback";

import { Suspense } from "react";

export default async function Home() {
  return (
    <Suspense key={"landing"} fallback={<LandingPageFallBack />}>
      <LandingPage />
    </Suspense>
  );
}
