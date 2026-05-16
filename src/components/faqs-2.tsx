"use client";

import { useState } from "react";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { faqItems } from "@/lib/faqs";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import Link from "next/link";
import { cn } from "@/lib/utils";

function FaqTrigger({
  children,
  open,
}: {
  children: React.ReactNode;
  open: boolean;
}) {
  const reduced = useReducedMotion();
  const baseTriggerClass =
    "group/faq-trigger relative flex flex-1 items-start gap-3 rounded-md border border-transparent py-4 text-left text-base font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring disabled:pointer-events-none disabled:opacity-50";

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(baseTriggerClass)}
      >
        <span className="flex-1 text-pretty">{children}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: reduced ? 0 : 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="pointer-events-none shrink-0 text-muted-foreground"
          aria-hidden
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export default function FAQsTwo() {
  const [open, setOpen] = useState<string>("");

  return (
    <section className="">
      <div className="border-t border-muted-foreground/20">
        <div className="container border-x border-muted-foreground/20 py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <Reveal className="mx-auto max-w-xl text-center" direction="none">
              <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
                Common Buyer Questions
              </h2>
              <p className="text-muted-foreground mt-4 text-balance">
                Answers to the most common questions from importers about ordering,
                payment, shipping, and customisation.
              </p>
            </Reveal>

            <div className="mx-auto mt-12 max-w-xl">
              <Reveal direction="none">
                <Accordion
                  type="single"
                  collapsible
                  value={open}
                  onValueChange={setOpen}
                  className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0"
                >
                  {faqItems.map((item) => {
                    const isOpen = open === item.id;
                    return (
                      <AccordionItem
                        key={item.id}
                        value={item.id}
                        className="border-dashed"
                      >
                        <FaqTrigger open={isOpen}>{item.question}</FaqTrigger>
                        <AccordionContent>
                          <p className="text-base">{item.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </Reveal>

              <Reveal delay={0.05}>
                <p className="text-muted-foreground mt-6 px-8">
                  Have a different question?{" "}
                  <Link
                    href="/contact"
                    className="text-primary font-medium hover:underline"
                  >
                    Send us an inquiry
                  </Link>
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
