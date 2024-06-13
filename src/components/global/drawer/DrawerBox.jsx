"use client";
import * as React from "react";
import { HamburgerMenuIcon, MinusIcon, PlusIcon } from "@radix-ui/react-icons";
// import { Bar, BarChart, ResponsiveContainer } from "recharts";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { NavigationMenuBar } from "../navbar/NavigationMenu";
import Footer from "../footer/Footer";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

export function DrawerBox() {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
      </DrawerTrigger>
      <DrawerContent>
        <div className=" flex justify-center items-center my-5 flex-col max-w-sm ">
          <DrawerHeader>
            <DrawerTitle>Movies</DrawerTitle>
            <DrawerDescription>Enjoy watching movies.✨</DrawerDescription>
          </DrawerHeader>
          <NavigationMenuBar mobile />
        </div>
        <div>
          <Footer />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
