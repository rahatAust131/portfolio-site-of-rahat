import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="">{"< DevRahat />"}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto text-center">
                        <Link className="nav-links"  id="home" aria-current="page" to="/home">Home</Link>
                        <Link className="nav-links" id="about" to="/about">About</Link>
                        <Link className="nav-links" id="projects" to="/projects">Projects</Link>
                        <Link className="nav-links" id="blogs" to="/blogs">Blogs</Link>
                        <Link className="nav-links" id="resume" to="/resume">Resume</Link>
                        <Link className="nav-links" id="contact" to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;