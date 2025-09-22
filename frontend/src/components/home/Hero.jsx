import styles from './Hero.module.css'

export default function Hero() {
	return (
		<div className={styles.heroContainer}>
			<div className={styles.heroContent}>
				{/* Left Section */}
				<section className={styles.heroLeft}>
					<div className={styles.heroTextWrapper}>
						<h1 className={styles.heroTitle}>Zero Limits, Infinite Awesomeness!</h1>

						<p className={styles.heroDescription}>
							Open source community: Unleashing collaboration, innovation, and limitless
							possibilities, where code is shared, minds unite, and progress knows no bounds.
						</p>

						<a
							href="https://discord.com/invite/DXgfsxXv6c"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.discordButton}
						>
							<span className={styles.discordContent}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className={styles.discordIcon}
								>
									<path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
									<path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
								</svg>
								<span className={styles.discordText}>Join our Discord channel</span>
							</span>
						</a>
					</div>
				</section>

				{/* Right Section */}
				<section className={styles.heroRight}>
					<div className={styles.eventCard}>
						<div className={styles.eventTitle}>Upcoming Event</div>
						<p className={styles.eventDescription}>
							Get ready to put your hacking skills to the test at "Cyber Syndicate"! Join our
							thrilling Capture the Flag (CTF) event, where you'll tackle real-world cybersecurity
							challenges and compete for exciting prizes. Don't miss out!
						</p>
						<a href="#" className={styles.eventButton}>
							Read more
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className={styles.eventButtonIcon}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
								/>
							</svg>
						</a>
					</div>
				</section>
			</div>
		</div>
	)
}
