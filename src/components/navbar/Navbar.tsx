import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../ui/navigation-menu";

import Link from "next/link";
import DarkToggle from "../DarkToggle";

const navbar = () => {
  return (
    <NavigationMenu className="nav_X m-auto flex justify-around dark:bg-red-500">
      <NavigationMenuList className="flex w-screen max-w-[900px] px-10 font-bold">
        <Link href="/" className="mr-auto">
          {" "}
          <h2 className="mx-auto">LearnLanguages</h2>
        </Link>
        <Link href="/">
          <h2>Home</h2>
        </Link>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="nav_X">
            English
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <div className="flex h-[400px] w-[374px] flex-col items-center justify-center">
                <Link href="/english/irregular_verbs">
                  <h2>Irregular verbs</h2>
                </Link>
                <Link href="/english/oxford">
                  <h2>Oxford</h2>
                </Link>
                <Link href="/english/memory_game">
                  <h2>Memory Game</h2>
                </Link>
              </div>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="nav_X">
            German
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <div className="flex h-[400px] w-[374px] items-center justify-center">
                <Link href="/german/irregular_ger">
                  <h2>Unregelmäßige Verben</h2>
                </Link>
              </div>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <DarkToggle />
    </NavigationMenu>
  );
}

export default navbar