import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/icon.jpg';

function Header() {
    return (
        <header>
            {/* Header content with logo and navigation */}
            <div className="header-content">
                <img src={logo} alt="Logo" /> {/* Display the logo */}
                <nav>
                    <Link to="/">Home</Link> {/* Link to the Home route */}
                    <Link to="/activity">Activity Log</Link> {/* Link to the Activity Log route */}
                </nav>
            </div>
        </header>
    );
}

export default Header;