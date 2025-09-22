import { useState, useEffect } from 'react'
import './EventCard.css'

export default function EventCard({
	url = '#',
	image = 'https://www.oscvitap.org/static/media/4.f0c6291e2c00644ded8f.jpg',
	title = 'Sample Title For Event',
	sub_title = 'Sample Subtitle',
	venue = 'Venue',
	date = 'Date',
	attendance = '200+',
}) {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		setTimeout(() => setVisible(true), 50)
	}, [])

	return (
		<a href={url} className={`event-card ${visible ? 'visible' : ''}`}>
			<img
				alt={title}
				src={image || 'https://i.ibb.co/7CSS8gg/Place-Holder-black.png'}
				className="event-image"
				onError={(e) => {
					e.target.onerror = null //prevent loop
					e.target.src = 'https://i.ibb.co/7CSS8gg/Place-Holder-black.png' //placeholder image
				}}
			/>

			<div className={`event-content ${visible ? 'visible' : ''}`}>
				<div>
					<div>
						<dt className="sr-only">Event sub title</dt>
						<div className="event-subtitle">{sub_title}</div>
					</div>
					<div>
						<dt className="sr-only">Event title</dt>
						<div className="event-title">{title}</div>
					</div>
				</div>

				<div className="event-meta">
					{/* Venue */}
					<div className="event-meta-item">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="gray"
							viewBox="0 0 24 24"
							className="icon"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M3 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5H15v-18a.75.75 0 000-1.5H3zM6.75 19.5v-2.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75z"
							/>
						</svg>
						<div>
							<div className="event-meta-label">Venue</div>
							<div className="event-meta-value">{venue}</div>
						</div>
					</div>

					{/* Date */}
					<div className="event-meta-item">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="gray"
							viewBox="0 0 24 24"
							className="icon"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75
								 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75
								 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75
								 0 000-1.5h-3.75V6z"
							/>
						</svg>
						<div>
							<div className="event-meta-label">Date</div>
							<div className="event-meta-value">{date}</div>
						</div>
					</div>

					{/* Attendance */}
					<div className="event-meta-item">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="gray"
							viewBox="0 0 24 24"
							className="icon"
						>
							<path
								d="M4.5 6.375a4.125 4.125 0 118.25 0
							 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375
							 3.375 0 116.75 0 3.375 3.375 0 01-6.75
							 0zM1.5 19.125a7.125 7.125 0 0114.25
							 0v.003l-.001.119a.75.75.0 01-.363.63
							 13.067 13.067 0 01-6.761 1.873c-2.472
							 0-4.786-.684-6.76-1.873a.75.75.0
							 01-.364-.63l-.001-.122z"
							/>
						</svg>
						<div>
							<div className="event-meta-label">Attendance</div>
							<div className="event-meta-value">{attendance}</div>
						</div>
					</div>
				</div>
			</div>
		</a>
	)
}
