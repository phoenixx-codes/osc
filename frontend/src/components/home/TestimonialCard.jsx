import styles from './TestimonialCard.module.css'

export default function TestimonialCard({
	title = 'Sample Title',
	description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.',
	image = 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png',
	url = 'https://www.google.com',
	name = 'Sample Name',
	job = 'Sample Job',
}) {
	return (
		<div className={styles.cardWrapper}>
			<div className={styles.card}>
				<div className={styles.title}>{title}</div>
				<div className={styles.description}>{description}</div>
			</div>

			<a href={url} target="_blank" rel="noopener noreferrer" className={styles.user}>
				<img src={image} alt={`${name}'s pfp`} className={styles.avatar} />
				<div className={styles.userInfo}>
					<div className={styles.name}>{name}</div>
					<div className={styles.job}>{job}</div>
				</div>
			</a>
		</div>
	)
}
