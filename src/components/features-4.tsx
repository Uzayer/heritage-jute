import { Award, Factory, Globe, Settings2, Shield, Truck } from 'lucide-react'

export default function Features() {
    return (
        <section className="">
            <div className="border-t border-muted-foreground/20">
            <div className="container border-x border-muted-foreground/20 py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Why Partner with Heritage Jute</h2>
                    <p>A government-certified exporter with over 10 years of experience, serving buyers in 31 countries with consistent quality and reliable logistics.</p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Award className="size-4" />
                            <h3 className="text-sm font-medium">Government Certified</h3>
                        </div>
                        <p className="text-sm">BJGEA member, ERC registered, and approved by the Bangladesh Jute Ministry — credentials every serious buyer can verify.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Factory className="size-4" />
                            <h3 className="text-sm font-medium">Factory Pricing</h3>
                        </div>
                        <p className="text-sm">Direct sourcing from mills across Bangladesh — no middlemen, competitive pricing passed straight to you.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Settings2 className="size-4" />
                            <h3 className="text-sm font-medium">Custom Orders</h3>
                        </div>
                        <p className="text-sm">Bespoke dimensions, grades, private labeling, and packing configurations available on request.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Truck className="size-4" />
                            <h3 className="text-sm font-medium">Reliable Shipping</h3>
                        </div>
                        <p className="text-sm">FOB Chittagong and CIF terms available. Standard loads: 20&apos; FCL = 13 MT, 40&apos; FCL = 24–26 MT.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Shield className="size-4" />
                            <h3 className="text-sm font-medium">10+ Years Experience</h3>
                        </div>
                        <p className="text-sm">Established in 2014, with a decade of consistent export operations and buyer relationships across 6 continents.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Globe className="size-4" />
                            <h3 className="text-sm font-medium">Global Reach</h3>
                        </div>
                        <p className="text-sm">Active export relationships in 31 countries — from Europe and Australia to the Middle East and Southeast Asia.</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </section>
    )
}
