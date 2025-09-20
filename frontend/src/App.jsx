import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      {/* Common layout */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<h1 className="text-white">Home Page</h1>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
