import React, { useState } from 'react'
import TeamCard from '../components/team/TeamCard'
import YearWiseData from '../data/team.json'
import './Team.css'

export default function Team() {
	const Years = Object.keys(YearWiseData).sort((a, b) => b - a) // descending
	const [selectedYear, setSelectedYear] = useState(Years[0])
	const YearData = YearWiseData[selectedYear]
	const Dept = Object.keys(YearData)

	const onYearClicked = (year) => {
		setSelectedYear(year)
	}

	return (
		<div className="team-container">
			<h1 className="team-heading">Our Team</h1>

			<div className="year-selector">
				{Years.map((year) => (
					<label key={year} className="year-label">
						<input
							type="radio"
							name="year"
							checked={selectedYear === year}
							onChange={() => onYearClicked(year)}
							className="sr-only"
						/>
						<div className={`year-button ${selectedYear === year ? 'selected' : ''}`}>
							{year}
							<svg
								aria-hidden="true"
								className="year-arrow"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
					</label>
				))}
			</div>

			{Dept.map((dept) => (
				<div key={dept} className="department-section">
					<h2 className="department-title">{dept}</h2>
					<div className="department-members">
						{YearData[dept].map((member) => (
							<TeamCard
								key={member.title + member.link}
								title={member.title}
								disc={member.disc}
								image={member.image}
								link={member.link}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	)
}
