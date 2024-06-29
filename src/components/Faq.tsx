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
                Know how businesses must use design and enhancement of
                motivation for better business leads.Connect with us to reveal
                the secret now!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-bold tracking-wide text-left text-xl md:text-3xl text-black">
                How can effective usage of social media help small businesses in
                today&apos;s digital world?
              </AccordionTrigger>
              <AccordionContent className="md:text-xl text-lg tracking-wide text-neutral-800 font-medium">
                Effective use of social media can significantly benefit small
                businesses in today’s digital world by enhancing their
                visibility, customer engagement, and overall brand presence.
                <div className=" flex flex-col mb-2">
                  <div className="mb-1">1.Brand Awareness </div>
                  <div className="mb-1">2.Customer Engagement</div>
                  <div className="mb-1">3.Targeted Advertising</div>
                  <div className="mb-1">4.Customer Insights </div>
                  <div className="mb-1"> 5.Content Marketing </div>
                  <div className="mb-1">6.Influencer Collaborations </div>
                  <div className="mb-1">7.Promotions and Deals </div>
                  <div>8.Local Community Engagement</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-bold tracking-wide text-left text-xl md:text-3xl text-black">
                Can Good Strategy Grow Your Business And Customers?
              </AccordionTrigger>
              <AccordionContent className="md:text-xl text-lg tracking-wide text-neutral-800 font-medium">
                Learn how to grow your business and customers to generate huge
                profits and create awareness for your brand. Best way to grow
                your business in 2024.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex-1 p-4 md:p-8">
          <Image
            src="/faqfinal.png"
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
