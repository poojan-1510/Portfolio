// src/components/Projects.js

import React from 'react';

const projectList = [
    { title: 'Machine Learning Capstone Project', description: 'Led a team in executing a machine learning project predicting market trends in the renewable energy sector. Applied various algorithms for data analysis.' },
    { title: 'CI/CD Pipeline Project', description: 'Spearheaded design and implementation of a CI/CD pipeline for a Python Django website, improving software delivery efficiency.' },
    { title: 'E-commerce Application Development', description: 'Developed an e-commerce application with integrated secure payment systems, enhancing the user experience.' }
];

function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div>
                {projectList.map((project, index) => (
                    <div key={index}>
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
