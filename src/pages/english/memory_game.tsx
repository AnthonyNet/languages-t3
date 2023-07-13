import React from "react";
import TabsX from "~/components/shadComponents/TabsX";
import Navbar from "~/components/navbar/Navbar";

const Memory_Game = () => {
  return (
    <>
	<Navbar />
      <section className="flex h-screen w-screen items-center justify-center">
        <TabsX />
      </section>
    </>
  );
};

export default Memory_Game;
