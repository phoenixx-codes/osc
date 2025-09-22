import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css'
import GradientLayout from './layout/GradientLayout'
import Home from './pages/Home'
import Team from './pages/Team'
import Events from './pages/Events'
import Contact from './pages/Contact'
import ComingSoon from './components/ComingSoon'
import Error404 from './components/Error404'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<GradientLayout />}>
					<Route index element={<Home />} />
					<Route path="team" element={<Team />} />
					<Route path="events" element={<Events />} />
					<Route path="contact" element={<Contact />} />
					<Route path="coming-soon" element={<ComingSoon />} />
					{/* 404 route */}
					<Route path="*" element={<Error404 />} />
				</Route>
			</Routes>
		</Router>
	)
}

export default App
