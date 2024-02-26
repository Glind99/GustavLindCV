import React, { useState, useEffect } from 'react';

const GitHubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null); // Tillstånd för det valda projektet för detaljvyn

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('https://api.github.com/users/GLind99/repos');
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  if (loading) {
    return <p>Laddar in projekt från GitHub...</p>;
  }

  return (
    <div className='portfolio-style'>
      <h1>Mina GitHub-projekt</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <button onClick={() => openModal(project)}>Visa detaljer</button> {/* Knapp för att öppna modal */}
          </li>
        ))}
      </ul>
      {selectedProject && ( // Rendera modalen om ett projekt är valt
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedProject.name}</h2>
            <p>{selectedProject.description}</p>
            <button onClick={closeModal}>Stäng</button> {/* Knapp för att stänga modal */}
          </div>
        </div>
      )}
    </div>
  );
}

export default GitHubProjects;

