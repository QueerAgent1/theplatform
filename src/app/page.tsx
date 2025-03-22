import { Hero } from '@/components/Hero'
import { ValueProposition } from '@/components/ValueProposition'
import { FeaturedDestinations } from '@/components/FeaturedDestinations'
import { Testimonials } from '@/components/Testimonials'
import { HowItWorks } from '@/components/HowItWorks'
import { BlogPreview } from '@/components/BlogPreview'
import { Newsletter } from '@/components/Newsletter'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProposition />
      <FeaturedDestinations />
      <Testimonials />
      <HowItWorks />
      <BlogPreview />
      <Newsletter />
    </main>
  )
}
