import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/motion/reveal'
import { MotionCta } from '@/components/motion/cta-motion'
import Link from 'next/link'

interface CallToActionProps {
    heading?: string
    description?: string
    primaryLabel?: string
    primaryHref?: string
    secondaryLabel?: string
    secondaryHref?: string
}

export default function CallToAction({
    heading = 'Start Building',
    description = 'Libero sapiente aliquam quibusdam aspernatur.',
    primaryLabel = 'Get Started',
    primaryHref = '/',
    secondaryLabel = 'Book Demo',
    secondaryHref = '/',
}: CallToActionProps) {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32">
                <div className="text-center">
                    <Reveal direction="none">
                        <h2 className="text-balance text-4xl font-semibold lg:text-5xl">{heading}</h2>
                        <p className="mt-4">{description}</p>
                    </Reveal>

                    <Reveal className="mt-12 flex flex-wrap justify-center gap-4" direction="none" delay={0.05}>
                        <MotionCta>
                            <Button
                                asChild
                                size="lg">
                                <Link href={primaryHref}>
                                    <span>{primaryLabel}</span>
                                </Link>
                            </Button>
                        </MotionCta>

                        <MotionCta>
                            <Button
                                asChild
                                size="lg"
                                variant="outline">
                                <Link href={secondaryHref}>
                                    <span>{secondaryLabel}</span>
                                </Link>
                            </Button>
                        </MotionCta>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
