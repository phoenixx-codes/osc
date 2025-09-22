import TestimonialCard from './TestimonialCard'
import styles from './TestimonialSection.module.css'

const testimonialsData = [
	{
		title: 'My Experience',
		image: '/images/testimonials/1.webp',
		job: 'President 2022',
		name: 'Ojasva Jain',
		url: 'https://www.linkedin.com/in/ojasva-jain-9958071b2',
		description: `It was an amazing journey honestly.
    I applied to OSC at the end of my first year, thinking there is no way I am capable of getting into this club. But miraculously, I got in for the interview and furthermore was elected as the secretary for the club.
    Then, the club became very close to me, and I used to love being a part of it. There were although ups and downs, with a lot of events, things not going as we wanted to be, but everything used to end in our favour.
    
    So, yeah it was pretty much it, 4 semester, 2 years of a roller coaster ride at OSC 😂`,
	},
	{
		title: 'My Experience',
		image: '/images/testimonials/2.webp',
		job: 'President 2023',
		name: 'Dhruv Jha',
		url: 'https://www.linkedin.com/in/dhruv-jha-2002/',
		description: `Man, OSC –
    what a wild ride! From the moment I jumped in,
    it was like crashing a tech carnival where rules are just suggestions.
    Code flowing like good vibes, and the camaraderie?
    We flipped off limitations, embraced collaboration like it's the new cool, and yeah,
    we've had our share of legendary bug hunts – those were the real treasure hunts.
    Whether it's wrangling lines of code or cracking jokes,
    OSC isn't just about software, it's a damn mindset.
    Here's to the rebels crafting tomorrow's tech with
    a friendly 'fuck you' to the norm!`,
	},
	{
		title: 'My Experience',
		image: '/images/testimonials/3.webp',
		job: 'Community Lead 2022',
		name: 'Rahul Alokkan',
		url: 'https://www.linkedin.com/in/rahul-alokkan-16384b196/',
		description: `My time at the Open Source Community has been an incredibly enriching and rewarding experience. Immersed in a dynamic environment of collaboration and innovation, I have had the privilege to contribute to works that resonate with the ethos of open-source development.
   Engaging in discussions, event plannings and problem solving within this community has expanded my understanding of various paradigms of the real world and encouraged me to push the boundaries of my skills.
  In short my time at OSC had been eventful and filled with experience.`,
	},
	{
		title: 'My Experience',
		image: '/images/testimonials/4.webp',
		job: 'Head of Videography 2023',
		name: 'Apoorva Parashar',
		url: 'https://www.linkedin.com/in/apoorva-parashar-512bb722a/',
		description: `Being a part of OSC has been an incredible journey!
    From day one, I dived into a world of endless opportunities and friendships.
    The atmosphere is charged with positive vibes and everyone's genuine enthusiasm for tech.
    The support we give each other is heartwarming.
    Whether it's coding marathons or problem-solving sessions,
    the energy never falters. The late-night brainstorming –
    it's like a big, diverse family where we're all working together to make a difference.
    Grateful for every moment in this joyful, collaborative adventure!`,
	},
	{
		title: 'My Experience',
		image: '/images/testimonials/5.webp',
		job: 'Outreach and Designer 2023',
		name: 'Isa Hassan',
		url: 'https://www.linkedin.com/in/isa-hasan-59375a226/',
		description: `My journey with OSC has been an exhilarating ride.
    From day one, I've brought my A-game and let my work do the talking.
    The community's energy and commitment mirror my own,
    creating an environment where excellence is the norm.
    I've found my groove, offering insights and solutions that earn respect.
    As the go-to HR, I've streamlined processes, matched talents,
    and fostered an atmosphere of camaraderie.
    In OSC, results speak volumes,
    and I'm proud to stand as a testament to the power of dedication
    and expertise.`,
	},
	{
		title: 'My Experience',
		image: '/images/testimonials/6.webp',
		job: 'Designer 2023',
		name: 'Soumyadip Chowdhuri',
		url: 'https://www.linkedin.com/in/soumyadip-chowdhuri-b8641b250',
		description: `Man, being in OSC (Open Source Community) has been a blast!
    From my Bengali roots to my ECE background,
    I've brought a fusion of creativity and tech. My design game? On point.
    I've spun out concepts crazier than a rollercoaster, and yeah,
    some left even me scratching my head. Hyper-active? Guilty as charged,
    but that's what fuels my brainstorming sessions.
    The community's like a canvas where my ideas paint the future.
    Sure, I get lost in the chaos, but that's where the magic happens.
    OSC's my playground, where confusion meets innovation!`,
	},
]

export default function TestimonialSection() {
	return (
		<div className={styles.section}>
			<div className={styles.header}>
				<h1 className={styles.title}>What people have to say 💬</h1>
				<p className={styles.subtitle}>
					Community Voices: Our Open Source Impact in the Words of Those We Serve!
				</p>
			</div>
			<div className={styles.cardsContainer}>
				{testimonialsData.map((testimonial, idx) => (
					<TestimonialCard
						key={idx}
						title={testimonial.title}
						image={testimonial.image}
						job={testimonial.job}
						name={testimonial.name}
						url={testimonial.url}
						description={testimonial.description}
					/>
				))}
			</div>
		</div>
	)
}
