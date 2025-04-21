import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  const user = {
    name: 'Suprava Modak',
    role: 'Full Stack Developer',
    bio: 'Passionate about building scalable web applications using React and Node.js.',
    color: '#4a90e2'
  };

  return (
    <>
      <div className="app-container">
        <h1>User Profile</h1>
        <ProfileCard user={user} />
      </div>
    </>
  );
}

export default App;
