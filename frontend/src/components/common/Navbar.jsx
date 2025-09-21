import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa'
import { HiHome } from 'react-icons/hi2'
import { IoClose } from 'react-icons/io5'
import { MdPeopleAlt, MdOutlineEventNote } from 'react-icons/md'
import { TbMessages } from 'react-icons/tb'
import './navbar.css'
import OSCFullLogoWhite from '../../assets/OSCFullLogoWhite'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className="navbar">
			<div className="navbar-container">
				{/* Logo */}
				<Link to="/" className="logo">
					<OSCFullLogoWhite height="35" />
				</Link>

				{/* Desktop Menu */}
				<nav className="nav-links">
					<Link to="/">Home</Link>
					<Link to="/team">Team</Link>
					<Link to="/events">Events</Link>
					<Link to="/contact">Contact</Link>

					{/* OSC Platforms Button */}
					<OSCButtonWithHamburger onHamburgerClick={() => setIsOpen(!isOpen)} />
				</nav>

				{/* Hamburger Button */}
				<button className="hamburger md:hidden" onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <FaTimes /> : <FaBars />}
				</button>
			</div>

			{/* Mobile Drawer */}
			<div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
				<div className="nav-menu-header">
					<div className="nav-menu-text">Navigation Menu</div>
					<button onClick={() => setIsOpen(false)} className="close-icon">
						<IoClose size={25} />
					</button>
				</div>

				<nav className="mobile-nav-links">
					<Link to="/" onClick={() => setIsOpen(false)}>
						<HiHome /> Home
					</Link>
					<Link to="/team" onClick={() => setIsOpen(false)}>
						<MdPeopleAlt /> Team
					</Link>
					<Link to="/events" onClick={() => setIsOpen(false)}>
						<MdOutlineEventNote /> Events
					</Link>
					<Link to="/contact" onClick={() => setIsOpen(false)}>
						<TbMessages /> Contact
					</Link>
					<Link
						to="/coming-soon"
						onClick={() => setIsOpen(false)}
						className="platform-link flex items-center gap-2"
					>
						<FaGlobe /> OSC Platforms
					</Link>
				</nav>
			</div>
		</header>
	)
}

const OSCButtonWithHamburger = ({ onHamburgerClick }) => {
	return (
		<div className="osc-container">
			<div className="osc-inner">
				{/* OSC Platforms Button */}
				<Link to="/coming-soon" className="osc-button">
					<span className="osc-shine"></span>
					<span className="osc-content">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="osc-icon"
						>
							<path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
						</svg>
						<span className="osc-text">OSC Platforms</span>
					</span>
				</Link>

				{/* Mobile Hamburger Button */}
				<div className="hamburger-container">
					<button className="hamburger-btn" onClick={onHamburgerClick}>
						<FaBars className="hamburger-icon" />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Navbar
