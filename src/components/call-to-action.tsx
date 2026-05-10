import { Button } from '@/components/ui/button'
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
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">{heading}</h2>
                    <p className="mt-4">{description}</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg">
                            <Link href={primaryHref}>
                                <span>{primaryLabel}</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline">
                            <Link href={secondaryHref}>
                                <span>{secondaryLabel}</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
