import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust the path as necessary
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RecipeListPage from './pages/RecipeListPage';

import './App.css'; // Global styles (optional)

function App() {
  return (
    <Router>
      <div>
        {/* Add Navbar to every page */}
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/recipes" element={<RecipeListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;