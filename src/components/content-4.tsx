import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function ContentSection() {
    return (
        <section className="">
            <div className="border-t border-muted-foreground/20">
                <div className="container border-x border-muted-foreground/20 py-16 md:py-32">
                    <div className="mx-auto max-w-5xl">
                        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                            <h2 className="text-4xl font-medium">Simple, transparent ordering from Dhaka to your door.</h2>
                            <div className="space-y-6">
                                <p>Send us your requirements — product, grade, quantity, destination, and preferred Incoterm. We respond within one business day with a Proforma Invoice and confirm payment terms: LC at Sight, T/T in Advance, or CAD.</p>
                                <p>
                                    Production runs <span className="font-bold">3–6 weeks</span> from order confirmation. Pre-shipment samples are available on request. All orders ship FOB Chittagong — 20&apos; FCL holds 13 MT, 40&apos; FCL holds 24–26 MT depending on product.
                                </p>
                                <Button
                                    asChild
                                    variant="secondary"
                                    size="sm"
                                    className="gap-1 pr-1.5">
                                    <Link href="/contact">
                                        <span>Send an Inquiry</span>
                                        <ChevronRight className="size-2" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
