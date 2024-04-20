import React from 'react';
import './header.css'; // Import the CSS file

const Header = () => (
    <header className="header_section">
        
        <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            <a href="#page" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#page1" className="nav-link">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a href="#page2" className="nav-link">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#page3" className="nav-link">Contacts</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
);

export default Header;
