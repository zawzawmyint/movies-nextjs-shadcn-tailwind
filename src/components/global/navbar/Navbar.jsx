import Link from "next/link";
import { Suspense } from "react";
import { DrawerBox } from "../drawer/DrawerBox";
import Logo from "../logo/Logo";
import { ModeToggle } from "./ModeToggle";
import { NavigationMenuBar } from "./NavigationMenu";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-40 backdrop-filter backdrop-contrast-125 backdrop-blur-lg bg-opacity-40">
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
