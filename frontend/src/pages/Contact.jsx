import { useState, useMemo } from 'react'
import './Contact.css'

export default function Contact() {
	const [isHovered, setIsHovered] = useState(false)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	const mailtoLink = useMemo(() => {
		return `mailto:osc@vitap.ac.in?subject=Message from ${encodeURIComponent(
			name
		)}&body=${encodeURIComponent(message)}`
	}, [name, message])

	const validateForm = (e) => {
		if (!name || !email || !message) {
			e.preventDefault()
			alert('All fields are required!')
			return false
		}

		if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
			e.preventDefault()
			alert('Please enter a valid email address!')
			return false
		}

		return true
	}

	return (
		<section>
			<div className="container">
				<div className="contact-wrapper">
					<div className="contact-info">
						<h1>Contact Us.</h1>
						<div>
							Have something to discuss or a brilliant idea to share? Feel free to contact us! Our
							virtual doors are always open, waiting to hear your thoughts. Drop us a line, and
							let's make things happen together.
						</div>

						<div className="contact-details">
							<a href="mailto:osc@vitap.ac.in">Email: osc@vitap.ac.in</a>
							<address>
								Mailing Address: VIT-AP University, Beside AP Secretariat, Near Vijayawada, Andhra
								Pradesh, India - 522241.
							</address>
						</div>
					</div>

					<div
						className={`card ${isHovered ? 'hovered' : ''}`}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						<form className="form">
							<div className="header">Want to tell us Something?</div>

							<div>
								<input
									type="text"
									placeholder="Name"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>

							<div className="email-input">
								<input
									type="text"
									placeholder="name@mail.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>

							<div>
								<textarea
									placeholder="Message"
									rows="5"
									value={message}
									onChange={(e) => setMessage(e.target.value)}
								></textarea>
							</div>

							<div className="submit-button">
								<a href={mailtoLink} onClick={validateForm}>
									<div className="button-content">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="icon"
										>
											<path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
										</svg>
										<span>Send Message</span>
									</div>
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
