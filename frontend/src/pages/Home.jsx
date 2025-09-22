import Hero from '../components/home/Hero'
import LandingInfoSection from '../components/home/LandingInfoSection'
import TestimonialSection from '../components/home/TestimonialSection'
import './Home.css'

export default function Home() {
	return (
		<div className="home-container">
			<Hero />
			<LandingInfoSection />
			<TestimonialSection />
		</div>
	)
}
