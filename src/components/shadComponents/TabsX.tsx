import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import MemoryCard from '../MemoryCard';
import {useState} from 'react'

const styles = {
  content:"w-full sm:w-[95%]  h-[79vh]  grid  grid-cols-2 sm:grid-cols-4 grid-rows-8 sm:grid-rows-4 gap-2 sm:gap-4 grid-flow-row",
};

const TabsX = () => {
	const [click, setClick] = useState(true);

	 const renderMemoryCards = () => {
     const memoryCards = [];
     for (let i = 0; i < 16; i++) {
       memoryCards.push(<MemoryCard key={i} />);
     }
     return memoryCards;
   };

  return (
    <Tabs
      defaultValue="english"
      className="flex w-screen flex-col items-center justify-center"
    >
      <TabsList>
        <TabsTrigger value="english" onClick={() => setClick(true)}>
          English
        </TabsTrigger>
        <TabsTrigger value="deutsch" onClick={() => setClick(false)}>
          Deutsch
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="english"
        className={click ? styles.content : " hidden"}
      >
        {click && renderMemoryCards()}
      </TabsContent>
      <TabsContent
        value="deutsch"
        className={!click ? styles.content : " hidden"}
      >
        {!click && renderMemoryCards()}
      </TabsContent>
    </Tabs>
  );
}

export default TabsX