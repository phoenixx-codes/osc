import './TeamCard.css'

export default function TeamCard({
	image = 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png',
	title = 'Sample Name',
	disc = 'lorem ipsum dolor sit amet.',
	link = '#',
}) {
	return (
		<a href={link} target="_blank" rel="noreferrer" className="team-link">
			<section className="team-card">
				<div className="team-grid">
					<img src={image} alt={title} className="team-image" />
					<div className="team-info">
						<div className="team-title">{title}</div>
						<div className="team-desc">{disc}</div>
					</div>
				</div>
			</section>
		</a>
	)
}
