import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import Home from './home';
import ActivityList from './ActivityList';

function App() {
  return (
    <div>
      <Router>
        <Header /> {/* Render the Header component */}
        <Routes>
          {/* Define routes for Home and ActivityList components */}
          <Route path="/" element={<Home />} />
          <Route path="/activity" element={<ActivityList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
