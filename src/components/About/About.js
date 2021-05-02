import { faFacebook, faGithub, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import myImage from '../../images/img2.jpg';
import './About.css';

const About = () => {
    return (
        <div className="row g-3 ms-auto about-section">
            <div className="col-md-3 about-columns about-first-column">
                <img src={myImage} className="about-img img-fluid w-75" alt="" />
            </div>
            <div className="col-md-9 about-columns about-second-column">
                <div className="w-100">
                    <h2>About <span className="text-brand custom-brand">Me</span></h2>
                    <h4>Hello , I am <span className="text-brand">Rahat</span> Chowdhury</h4>
                    <p>I am not your typical WEB Developer . I have <span className="text-brand">Critical thinking</span> & <span className="text-">Creative</span> mind-set. I have worked with React-Router, JS, DOM, GitHub, Bootstrap. I have positive mind-set or <span className="text-brand">'Can Do'</span>  attitude | Can handle <span className="text-brand">challenging</span> situations with ease. I DON'T get bothered by <span className="text-brand">NEW TECHS</span> | Rather find them interesting</p>
                    <a href="https://www.linkedin.com/in/rahat-chowdhury-zisan/"><FontAwesomeIcon icon={faLinkedinIn} className="icons linkedin" /></a>
                    <a href="https://www.facebook.com/usrnm.error"><FontAwesomeIcon icon={faFacebook} className="icons facebook" /></a>
                    <a href="https://www.instagram.com/rahat__chowdhury"><FontAwesomeIcon icon={faInstagram} className="icons instagram" /></a>
                    <a href="https://www.youtube.com/channel/UCoRS1CiEIBZQk5UGqa-LV7w"><FontAwesomeIcon icon={faYoutube} className="icons youtube" /></a>
                    <a href="https://github.com/rahatAust131"><FontAwesomeIcon icon={faGithub} className="icons github" /></a>
                    <br />
                    <a href='https://drive.google.com/u/0/uc?id=17xb8QK7NORhnLaqdtu_ENnTma58pHjLV&export=download'><button className="btn btn-brand">Download Resume</button></a>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox?compose=GTvVlcRzCbcgXhxTpwsctgDxNNspJjFDbgZmvgcDGghbBmXbtwjnVgFlWWHcwcqSnPXFdwTJtBBCS"><button className="btn contact-btn">Contact Me</button></a>
                </div>
            </div>
        </div>
    );
};

export default About;