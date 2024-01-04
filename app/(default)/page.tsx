
export const metadata = {
	title: 'Home',
	description: 'Home page',
}

import React from 'react';
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

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
