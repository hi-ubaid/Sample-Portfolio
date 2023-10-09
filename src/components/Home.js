import React from 'react';
import '../App.css';
import profileImage from '../assets/my-passport-photo-modified.png';

function Home() {
    return (
        <div className="home-container">
            <img src={profileImage} alt="Your Name" className="profile-image"/>
            <h1>Welcome to My Portfolio</h1>
            <p>I'm Muhammad Ubaid Ashraf, a passionate Web Developer specialized in MERN Stack.</p>
            <div className="skills">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
                <span>Node.js</span>
                <span>MySQL</span>
            </div>
            <a href="/projects" className="cta-button">View My Work</a>
        </div>
    );
}

export default Home;
