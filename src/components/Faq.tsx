import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

function Faq() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
        <div className="flex-1 p-4 md:p-8">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold tracking-wide text-left text-xl md:text-3xl text-black">
                How To Enhance Motivation for Better Business Leads?
              </AccordionTrigger>
              <AccordionContent className="md:text-xl text-lg tracking-wide text-neutral-800 font-medium">
                Read how businessmen must use UX design and enhancement of motivation for better business leads. Reveal the secret now!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-bold tracking-wide text-left text-xl md:text-3xl text-black">
                7 Ways Neuromarketing Impact Marketing Campaign?
              </AccordionTrigger>
              <AccordionContent className="md:text-xl text-lg tracking-wide text-neutral-800 font-medium">
                Follow these 7 Neuromarketing ways and measures to create an astonishing impact in your upcoming marketing campaign. Read now!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-bold tracking-wide text-left text-xl md:text-3xl text-black">
                Can Good Design Grow Your Business And Customers?
              </AccordionTrigger>
              <AccordionContent className="md:text-xl text-lg tracking-wide text-neutral-800 font-medium">
                Learn how to grow your business and customers to generate huge profits and create awareness for your brand. Best way to grow your business in 2020.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex-1 p-4 md:p-8">
          <Image
            src="/Faq1.png"
            width={773}
            height={826}
            alt="faq"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Faq;
