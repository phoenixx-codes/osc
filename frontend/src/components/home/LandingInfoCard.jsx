import TestIcon from '../../assets/aca.svg'
import styles from './LandingInfoCard.module.css'

export default function LandingInfoCard({
	title = 'Title',
	description = 'Default description',
	url = '#',
}) {
	return (
		<a href={url} className={styles.card}>
			<span className={styles.iconWrapper}>
				<img src={TestIcon} alt={title} className={styles.icon} />
			</span>

			<div className={styles.cardTitle}>{title}</div>
			<div className={styles.cardDescription}>{description}</div>
		</a>
	)
}
