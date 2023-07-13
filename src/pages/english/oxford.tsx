import React from 'react'
import Navbar from '~/components/navbar/Navbar';
import AccordionX from '~/components/shadComponents/AccordionX'
import { motion } from "framer-motion";
import Script from 'next/script'

const Oxford = () => {
  return (
    <>
      <Navbar />
      <section className="flex h-[95vh] w-screen items-center justify-center">
       <AccordionX />
      </section>
    </>
  );

}

export default Oxford