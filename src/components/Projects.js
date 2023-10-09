import React from 'react';
import '../App.css';
import project1Image from '../assets/project1.jfif';

function Projects() {
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <p>Here are some of the projects I've worked on...</p>

            <div className="project-card">
                <img src={project1Image} alt="Project 1" />
                <h2>To Do List App</h2>
                <p>To do List app is created using CRUD through MERN Stack in which MySQL, Express.js, React.js and Node.js is used.</p>
                <a href="https://github.com/hi-ubaid/to-do-list.git" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>

        </div>
    );
}

export default Projects;
