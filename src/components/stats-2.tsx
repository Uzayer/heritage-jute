import { Map } from "@/components/map"

export function StatsSection() {
    return (
        <section className="@container">
            <div className="border-t border-muted-foreground/20">
            <div className="container border-x border-muted-foreground/20 py-12 md:py-20">
                <div className="mx-auto max-w-5xl space-y-8 md:space-y-16">
                    <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                        <h2 className="text-4xl font-semibold lg:text-5xl">Trusted by Importers Worldwide</h2>
                        <p>A government-certified exporter operating since 2014, serving buyers across 31 countries with consistent quality and reliable shipping.</p>
                    </div>

                    <div className="mask-y-from-75% mx-auto max-w-4xl">
                        <Map />
                    </div>

                    <div className="relative mx-auto max-w-3xl">
                        <span className="@2xl:block bg-border pointer-events-none absolute inset-y-4 left-1/3 hidden w-px"></span>
                        <span className="@2xl:block bg-border pointer-events-none absolute inset-y-4 left-2/3 hidden w-px"></span>
                        <div className="**:text-center @max-2xl:max-w-2xs @max-2xl:mx-auto @max-2xl:gap-6 @2xl:grid-cols-3 grid *:px-6">
                            <div className="space-y-4 *:block">
                                <span className="text-5xl font-semibold">
                                    2014
                                </span>
                                <p className="text-muted-foreground text-balance text-sm">
                                    <strong className="text-foreground font-medium">Established in Dhaka</strong>, Bangladesh — over 10 years of export operations.
                                </p>
                            </div>
                            <div className="space-y-4 *:block">
                                <span className="text-5xl font-semibold">
                                    31 <span className="text-muted-foreground text-2xl">countries</span>
                                </span>
                                <p className="text-muted-foreground text-balance text-sm">
                                    <strong className="text-foreground font-medium">Active export relationships</strong> across Europe, Asia, the Middle East, and beyond.
                                </p>
                            </div>
                            <div className="space-y-4 *:block">
                                <span className="text-5xl font-semibold">
                                    11 <span className="text-muted-foreground text-2xl">products</span>
                                </span>
                                <p className="text-muted-foreground text-balance text-sm">
                                    <strong className="text-foreground font-medium">11 product lines</strong> from raw fibre to finished bags, ropes, and fabrics.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}
