import React from 'react';
import './App.css';
import GitHubProjects from './GitHubProjects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Min GitHub Portfolio</h1>
      </header>
      <main>
        <GitHubProjects /> {/* Rendera din GitHubProjects-komponent här */}
      </main>
    </div>
  );
}
export default App;
