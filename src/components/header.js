import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/icon.jpg';

function Header() {
    return (
        <header>
            <div className="header-content">
                <img src={logo} alt="Logo" />
                <h1>Health & Fitness Tracker</h1>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/activity">Activity Log</Link>
                <Link to="">Progress Visualizer</Link>
                <Link to="">Nutrition Log</Link>
                <Link to="">Nutrition Visualizer</Link>
            </nav>
        </header>
    );
}

export default Header;