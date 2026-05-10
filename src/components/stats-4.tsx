export default function StatsSection() {
    return (
        <section className="">
            <div className="border-t border-muted-foreground/20">
            <div className="mx-auto max-w-5xl border-x border-muted-foreground/20 py-16 md:py-32 px-6">
                <div className="relative z-10 max-w-xl space-y-6">
                    <h2 className="text-4xl font-medium lg:text-5xl">Heritage Jute in numbers</h2>
                    <p>
                        A decade of consistent export operations — direct mill sourcing, government-verified credentials, and buyers across <span className="font-medium">six continents</span>.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24 mt-8 md:mt-12">
                    <div>
                        <p className="text-muted-foreground">From raw jute fibre to finished export bags — reliable supply at factory pricing, shipped FOB Chittagong or CIF to your port.</p>
                        <div className="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">31</div>
                                <p>Export Countries</p>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">10+</div>
                                <p>Years of Experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <blockquote className="border-l-4 pl-4">
                            <p>Heritage Jute&apos;s documentation and shipping terms were exactly as described. The quality was consistent across both container loads — we&apos;ve made them our primary jute supplier.</p>
                            <div className="mt-6 space-y-1">
                                <cite className="block font-medium not-italic">Procurement Manager</cite>
                                <p className="text-sm text-muted-foreground">European packaging distributor</p>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}
