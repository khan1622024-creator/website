import React from "react";

function Projects() {
  return (
    <div className="container">
      <h1>My Projects</h1>

      <div className="project-card">
        <h3>Tic-Tac-Toe in C</h3>
        <p>Console based Tic-Tac-Toe game using C language.</p>
        <a
          href="https://github.com/khan1622024-creator/Tic-tac-toe.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>

      <div className="project-card">
        <h3>Bank Management System</h3>
        <p>Banking system project using C language.</p>
        <a
          href="https://github.com/khan1622024-creator/bank-management-system.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>

      <div className="project-card">
        <h3>Progress Bar in C</h3>
        <p>Simple animated progress bar using C.</p>
        <a
          href="https://github.com/khan1622024-creator/pro.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default Projects;
