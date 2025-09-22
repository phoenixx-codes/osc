import styles from './ComingSoon.module.css'

export default function ComingSoon() {
	return (
		<section>
			<div className={styles.container}>
				<div className={styles.title}>Coming Soon</div>

				<svg
					className={styles.icon}
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 16 20"
				>
					<path
						stroke="white"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M15 1H1m14 18H1m2 0v-4.333a2 2 0 0 1 .4-1.2L5.55 10.6a1 1 0 0 0 0-1.2L3.4 6.533a2 2 0 0 1-.4-1.2V1h10v4.333a2 2 0 0 1-.4 1.2L10.45 9.4a1 1 0 0 0 0 1.2l2.15 2.867a2 2 0 0 1 .4 1.2V19H3Z"
					/>
				</svg>

				<p className={styles.description}>We're working on some exciting things. Stay tuned!</p>
			</div>
		</section>
	)
}
