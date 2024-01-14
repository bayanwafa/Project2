import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Health & Fitness Tracker</h1>
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