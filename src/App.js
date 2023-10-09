import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <Router>

            <header>
                    <h1>Muhammad Ubaid Ashraf</h1>
            </header>

            <div className="container">

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

            </div>

            <footer>
                    <p>© 2023 by My Portfolio. Proudly created with React.</p>
            </footer>
        </Router>
    );
}

export default App;
