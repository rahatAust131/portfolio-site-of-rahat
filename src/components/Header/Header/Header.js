import React from 'react';
import myImage from '../../../images/img1.jpg'
import './Header.css';

const Header = () => {
    return (
        <div className="header-container row g-3">
            <div className="col-md-6 header-columns header-first-column">
                <h2><span className="text-brand">Rahat</span> Chowdhury</h2>
                <h3>WEB Developer | Designer</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nulla nemo expedita temporibus reiciendis voluptate vero provident, at excepturi debitis obcaecati non aperiam aliquam quasi porro iusto distinctio adipisci! Enim eligendi, nobis recusandae impedit explicabo quasi possimus suscipit qui quisquam, molestias illum eos, deleniti repellendus!</p>
                <a href="https://drive.google.com/u/0/uc?id=17xb8QK7NORhnLaqdtu_ENnTma58pHjLV&export=download"><button className="btn btn-brand w-25">Hire Me</button></a>
            </div>
            <div className="col-md-6 header-columns header-second-column">
                <img src={myImage} className="header-img img-fluid" alt="" />
            </div>
        </div>
    );
};

export default Header;