"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname, useRouter } from "next/navigation";
import { HeartIcon } from "@radix-ui/react-icons";

export function NavigationMenuBar({ mobile = false }) {
  const pathname = usePathname();

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
      <>Favs ❤️</>
    ) : (
      <HeartIcon className="h-[1.2rem] w-[1.2rem] " />
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
