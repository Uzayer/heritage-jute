'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQsTwo() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What is the minimum order quantity?',
            answer: 'We supply container-load quantities. A 20\' FCL holds approximately 13 MT and a 40\' FCL holds 24–26 MT depending on the product. We do not supply less-than-container (LCL) quantities.',
        },
        {
            id: 'item-2',
            question: 'What payment terms do you accept?',
            answer: 'We accept LC at Sight (Letter of Credit), T/T in Advance (Telegraphic Transfer), and CAD (Cash Against Documents). Payment terms are confirmed at the time of order.',
        },
        {
            id: 'item-3',
            question: 'What are your shipping terms?',
            answer: 'We ship FOB Chittagong as standard. CIF terms are available on request. All exports are from Chittagong Port, Bangladesh.',
        },
        {
            id: 'item-4',
            question: 'Can you customise product specifications?',
            answer: 'Yes. We accept custom orders for dimensions, grades, yarn counts, GSM weights, and packing configurations. Private labeling and bespoke bag printing are also available for bulk orders.',
        },
        {
            id: 'item-5',
            question: 'How long does production and shipment take?',
            answer: 'Lead time is typically 3–6 weeks from order confirmation, depending on product type and quantity. We provide a production schedule and pre-shipment samples on request.',
        },
        {
            id: 'item-6',
            question: 'What HS codes do your products ship under?',
            answer: 'Raw Jute: 53031000 · Jute Sliver: 53039000 · Jute Yarn: 53071000 · Jute Twine: 53072000 · Hessian Cloth: 58019000 · Jute Bags & Sacks: 63051000 · Jute Rope: 56079090. HS codes are confirmed on all commercial invoices and packing lists.',
        },
    ]

    return (
        <section className="">
            <div className="border-t border-muted-foreground/20">
            <div className="container border-x border-muted-foreground/20 py-16 md:py-24">
            <div className="mx-auto max-w-5xl">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Common Buyer Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance">Answers to the most common questions from importers about ordering, payment, shipping, and customisation.</p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dashed">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6 px-8">
                        Have a different question?{' '}
                        <Link
                            href="/contact"
                            className="text-primary font-medium hover:underline">
                            Send us an inquiry
                        </Link>
                    </p>
                </div>
            </div>
            </div>
            </div>
        </section>
    )
}
