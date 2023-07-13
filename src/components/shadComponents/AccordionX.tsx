import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

const AccordionX = () => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Slovo anglicky</AccordionTrigger>
          <AccordionContent>
           Slovo překlad
          </AccordionContent>
          <AccordionContent>
            Věta překlad
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AccordionX