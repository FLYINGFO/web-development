import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for routing

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/recipes">Recipe List</Link>
        </li>
      </ul>
    </nav>
  );
}