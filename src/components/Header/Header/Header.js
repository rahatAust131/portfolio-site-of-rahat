import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import myImage from '../../../images/me/img1.jpg'
import './Header.css';

const Header = () => {
    return (
        <div className="header-container row g-3">
            <div className="col-md-6 header-columns header-first-column">
                <h2><span className="text-brand">Rahat</span> Chowdhury</h2>
                <h3>WEB Developer | Designer</h3>
                <p>My main objective is to learn new technologies & make projects using them. To be frank, Programming, Coding or implementing what I've learnt, is what I like & I don't get tired of doing what I like to do (I think nobody does). However, I also want to increase my communication skill & network. I want to gather new experience & learn & improve myself through that experience</p>
                <a href="https://drive.google.com/u/0/uc?id=17xb8QK7NORhnLaqdtu_ENnTma58pHjLV&export=download"><button className="btn btn-brand w-50"><FontAwesomeIcon icon={faDownload} className="" /> Download CV</button></a>
            </div>
            <div className="col-md-6 header-columns header-second-column">
                <img src={myImage} className="header-img img-fluid w-75" alt="" />
            </div>
        </div>
    );
};

export default Header;