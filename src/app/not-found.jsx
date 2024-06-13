import Container from "@/components/global/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <Container>
      <div className="min-h-screen flex flex-col gap-5 justify-center items-center">
        <p className="font-bold text-4xl text-primary">Page Not Found :(</p>
        <Link href={"/"} className="hover:underline">
          Go back home
        </Link>
      </div>
    </Container>
  );
};

export default Page;
