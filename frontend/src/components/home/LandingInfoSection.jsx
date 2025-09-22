import LandingInfoCard from './LandingInfoCard'
import styles from './LandingInfoSection.module.css'

const infoCardsData = [
	{
		title: 'GITTY UP',
		description: 'A workshop to teach Git & GitHub.',
		url: 'https://opensource101.oscvitap.org/',
	},
	{
		title: 'Idea Oryx',
		description: 'An Ideathon to pitch your innovative ideas.',
		url: 'https://ideaoryx.oscvitap.org/',
	},
	{
		title: 'Bootcamps',
		description: 'A course that teaches a certain skill from scratch.',
		url: '#',
	},
	{
		title: 'Cyber Syndicate',
		description: 'Annual Beginner Level Capture The Flag.',
		url: '#',
	},
	{
		title: 'Tech Eden',
		description: 'A Hackathon for Tech Enthusiasts.',
		url: 'https://techeden.oscvitap.org/',
	},
	{
		title: 'SFF',
		description: 'An Annual Fest to Celebrate Open-Source.',
		url: '#',
	},
]

export default function LandingInfoSection() {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.gridWrapper}>
					{/* Left Text Section */}
					<div className={styles.textSection}>
						<h1 className={styles.title}>What do we do?</h1>
						<p className={styles.description}>
							We offer a platform that brings together enthusiasts of open source technology,
							facilitating the sharing of knowledge and seamless collaboration. Our mission is to
							cultivate a culture of productive cooperation, enabling students to unite their
							efforts and embark on collective exploration beyond the traditional classroom setting.
						</p>
						<a
							href="https://forms.gle/fXRMynbsf1iVgJHz9"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.joinButton}
						>
							Join us today
						</a>
					</div>

					{/* Right Cards Section */}
					<div className={styles.cardsGrid}>
						{infoCardsData.map((card) => (
							<LandingInfoCard
								key={card.title}
								title={card.title}
								description={card.description}
								url={card.url}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
