import React from "react";
import Navbar from "~/components/navbar/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import Input from "~/components/Input";

const Irregular__verbs = () => {
  return (
    <section className="h-screen w-screen bg-black">
      <Navbar />
      <div className="flex h-full w-full items-center justify-center text-center">
        <Card>
          <CardHeader>
            <CardTitle>Slovo</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent className="flex min-h-[200px] flex-col justify-around">
            <Input inputText={"present Perfect"} />
            <Input inputText={"past Simple"} />
            <Input inputText={"past Participle"} />
          </CardContent>
          <CardFooter className="flex justify-center items-center border-2  border-red-400 h-auto w-full">
            <p>Řešení</p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Irregular__verbs;
