
export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import React from 'react';
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Service from '@/components/service'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
		<Newsletter />
		<Testimonials />
      {/* <FeaturesBlocks /> */}
    </>
  )
}
