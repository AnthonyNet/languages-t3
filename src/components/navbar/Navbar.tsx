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
    <section className="nav_X w-screen">
      <NavigationMenu className=" m-auto max-w-[800px] bg-transparent px-10 text-[25px] font-bold">
        <NavigationMenuList>
          <Link href="/">
            <h2>Home</h2>
          </Link>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-[25px]">
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
            <NavigationMenuTrigger className="bg-transparent text-[25px]">
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
        <Link href="/" className="ml-auto">
          {" "}
          <h2 className="mx-8 mx-auto">LearnLanguages</h2>
        </Link>
        <DarkToggle />
      </NavigationMenu>
    </section>
  );
}

export default navbar