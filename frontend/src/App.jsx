import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import './App.css'
import './index.css'
import GradientLayout from './layout/GradientLayout'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<GradientLayout />}>
					<Route
						index
						element={
							<h1
								style={{ height: '700px' }}
								className="relative z-10 text-center text-4xl font-bold text-white mt-20"
							>
								Home Page
							</h1>
						}
					/>

					<Route path="contact" element={<Contact />} />
				</Route>
			</Routes>
		</Router>
	)
}

export default App
