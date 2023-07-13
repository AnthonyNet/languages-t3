import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import MemoryCard from '../MemoryCard';

const styles = {
  content:"w-full sm:w-[95%]  h-[79vh]  grid  grid-cols-2 sm:grid-cols-4 grid-rows-8 sm:grid-rows-4 gap-2 sm:gap-4 grid-flow-row",
};

const TabsX = () => {
  return (
    <Tabs
      defaultValue="account"
      className="flex w-screen flex-col items-center justify-center"
    >
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className={styles.content}>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
}

export default TabsX