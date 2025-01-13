import React from 'react';
import "../styles/ProjectsSection.css"
import projectsImage from '../assets/наши клиенты.png'; 

const ProjectsSection: React.FC = () => (
<div className="projects-section">
    <h2>Наши проекты</h2>
    <div className="projects-image-container">
    <img src={projectsImage} alt="Наши проекты" className="projects-image" />
    </div>
</div>
)

export default ProjectsSection;