import Link from "next/link";
import Logo from "../logo/Logo";
import { ModeToggle } from "./ModeToggle";
import SearchBar from "./SearchBar";
import { NavigationMenuBar } from "./NavigationMenu";
import { DrawerBox } from "../drawer/DrawerBox";
import { HeartIcon } from "@radix-ui/react-icons";
import { Suspense } from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-40 bg-background">
      <nav className="max-w-7xl mx-auto p-3 py-4 flex gap-2 justify-between items-center ">
        <Link href={"/"}>
          <Logo />
        </Link>
        <div className="flex gap-2 justify-between items-center">
          <div className="hidden sm:block">
            <NavigationMenuBar />
          </div>
          <Suspense fallback={<div></div>}>
            <SearchBar />
          </Suspense>
          <ModeToggle />
          <div className="sm:hidden">
            <DrawerBox />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
