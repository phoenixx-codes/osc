// src/pages/Events.jsx
import React, { useState } from 'react'
import YearWiseData from '../data/events.json'
import './Events.css'
import EventCard from '../components/events/EventCard'

const Events = () => {
	const years = Object.keys(YearWiseData).reverse()
	const [selectedYear, setSelectedYear] = useState(years[0])

	const onYearClicked = (year) => {
		setSelectedYear(year)
	}

	const yearData = YearWiseData[selectedYear]
	const events = Object.keys(yearData)

	return (
		<div className="events-container">
			<div className="events-header">Events</div>

			{/* Year Selector */}
			<div className="year-grid">
				{years.map((year) => (
					<label key={year} className="year-label">
						<input
							type="radio"
							name="year"
							checked={selectedYear === year}
							onChange={() => onYearClicked(year)}
						/>
						<div className={`year-btn ${selectedYear === year ? 'year-btn-active' : ''}`}>
							{year}
							<svg
								aria-hidden="true"
								className="arrow-icon"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fillRule="evenodd"
									d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 
                     1.414l-4 4a1 1 0 01-1.414-1.414L14.586 
                     11H3a1 1 0 110-2h11.586l-2.293-2.293a1 
                     1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
						</div>
					</label>
				))}
			</div>

			{/* Event Cards */}
			<div className="event-grid">
				{events.map((evnt) =>
					yearData[evnt].map((gathering, idx) => (
						<EventCard
							key={idx}
							url={gathering.url}
							image={gathering.image}
							title={gathering.title}
							sub_title={gathering.sub_title}
							venue={gathering.venue}
							date={gathering.date}
							data={gathering.data}
							attendance={gathering.attandance}
						/>
					))
				)}
			</div>
		</div>
	)
}

export default Events
