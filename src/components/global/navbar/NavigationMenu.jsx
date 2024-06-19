"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useAppSelector } from "@/lib/hooks";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";

export function NavigationMenuBar({ mobile = false }) {
  const pathname = usePathname();
  const favoriates = useAppSelector((state) => state.favoriate.favoriates);

  const menus = [
    { route: "/", name: "Home" },
    { route: "/movies", name: "Movies" },
    {
      route: "/favs",
      name: favsMenu(),
    },
  ];

  function favsMenu() {
    return mobile ? (
      <>Favs ❤️ {favoriates.length !== 0 && favoriates.length}</>
    ) : (
      <div className="flex gap-2 justify-center items-center">
        <HeartFilledIcon className={`h-[1.2rem] w-[1.2rem] text-red-600  `} />
        {favoriates.length !== 0 && favoriates.length}
      </div>
    );
  }
  return (
    <NavigationMenu>
      <NavigationMenuList className={`${mobile ? "w-full flex-col" : ""}`}>
        {menus.map((menu) => (
          <NavigationMenuItem key={menu.route}>
            <Link href={menu.route} legacyBehavior passHref>
              <NavigationMenuLink
                active={menu.route === pathname}
                className={navigationMenuTriggerStyle()}
              >
                {menu.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
