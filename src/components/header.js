import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/icon.jpg';

function Header() {
    return (
        <header>
            <div className="header-content">
                <img src={logo} alt="Logo" />
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/activity">Activity Log</Link>
                    <Link to="">Progress Visualizer</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;