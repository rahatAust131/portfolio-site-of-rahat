import React from 'react';
import './Resume.css';

import htmlCertificate from '../../images/certificates/HTML_certificate.jpg';
import javaCertificate from '../../images/certificates/Java_certificate.jpg';
import cCertificate from '../../images/certificates/C_certificate.jpg';
import cPlusPlusCertificate from '../../images/certificates/CPlusPlus_certificate.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
    return (
        <div className="side-space mt-3 mb-3 resume-container">
            <h1 className="text-uppercase text-center">Resume</h1>
            <div clasName="mt-3 mb-3 p-3">
                <h2 className="text-brand" style={{ borderLeft: '3px solid salmon', margin: '0 15px', padding: '5px' }}>Experience</h2>
                <ul>
                    <li>
                        <div className="row g-3">
                            <div className="col-md-6"><h4>Programming Hero</h4></div>
                            <div className="col-md-6">
                                <span className="">Online | WEB Development | December 2020 - PRESENT</span>
                            </div>
                        </div>
                    </li>
                    <ul>
                        <li>HTML, CSS, JavaScript | Many front-end websites</li>
                        <li>React, Node.JS, Express, MongoDB, Firebase | A few full-stack projects</li>
                    </ul>
                    <li>
                        <div className="row g-3">
                            <div className="col-md-6"><h4>Academic Project</h4></div>
                            <div className="col-md-6">
                                <span className="">Tejgaon, Dhaka | Group Project | June 2019 - October 2019</span>
                            </div>
                        </div>
                        <ul>
                            <li>Created a mini game using C Language. </li>
                            <li>Technologies/Tools used : iGraphics, VS 2010</li>
                            <li>Here is the game-play review <a href="https://youtu.be/0EyQrlrYgOM">video</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="row g-3">
                            <div className="col-md-6"><h4>The Alpha Team</h4></div>
                            <div className="col-md-6">
                                <span className="">Mirpur, Dhaka | Volunteer Work | 26/02/2021 & 08/03/2021 </span>
                            </div>
                        </div>
                    </li>
                    <ul>
                        <li>It was a one day event | The task was to provide service door to door</li>
                        <li>Delivery of Gift pack on the first time and Lunch pack on the second time</li>
                        <li>Had the experience two times | With a little bit formal dress-up</li>
                        <li>Provided Service door to door travelling along with CNG driver in different places of Dhaka City</li>
                        <li>While providing services , talked with Service Receivers in formal way | Their feedback was pleasing</li>
                        <li>Got payment on the next day</li>
                    </ul>
                </ul>
            </div>
            <hr />
            <div clasName="mt-3 mb-3 p-3">
                <div className="row g-3 container-fluid m-auto">
                <h2 className="text-brand" style={{ borderLeft: '3px solid salmon' }}>Awards / Certificates</h2>
                    <div className="col-md-6">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src={htmlCertificate} alt="..." />
                            <div className="card-body certificate-card-body">
                                <h5 className="card-title">HTML Fundamental</h5>
                                <p className="card-text">Completed Basic HTML & HTML5 Course from SoloLearn</p>
                                <div className="card-footer certificate-card-footer">
                                    <a href="https://photos.google.com/archive/photo/AF1QipNF31_Tr7PrJCo5euGZOCHJeuDOmdARvjr6g4Fu" className="btn btn-brand">Preview</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src={cCertificate} alt="..." />
                            <div className="card-body certificate-card-body">
                                <h5 className="card-title">C Programming</h5>
                                <p className="card-text">Completed C Programming Language basic Tutorial course</p>
                                <div className="card-footer certificate-card-footer">
                                    <a href="https://photos.google.com/archive/photo/AF1QipMXaGfZdHTNSljR7DFwtUNweEtjKUJo3eUbTvKo" className="btn btn-brand">Preview</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src={cPlusPlusCertificate} alt="..." />
                            <div className="card-body certificate-card-body">
                                <h5 className="card-title">C++ Programming</h5>
                                <p className="card-text">Completed C++ Programming Language basic Tutorial course</p>
                                <div className="card-footer certificate-card-footer">
                                    <a href="https://photos.google.com/archive/photo/AF1QipOwRBkIhmX_LMwy4x-0eLQC4PrpFtlbM_izmLWz" className="btn btn-brand">Preview</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src={javaCertificate} alt="..." />
                            <div className="card-body certificate-card-body">
                                <h5 className="card-title">JAVA</h5>
                                <p className="card-text">Completed JAVA Tutorial Course</p>
                                <div className="card-footer certificate-card-footer">
                                    <a href="https://photos.google.com/archive/photo/AF1QipN_lm8NIna2rAilfrJwbKtg2xCoZ_r8EomtuJCZ" className="btn btn-brand">Preview</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="mt-3 mb-3 p-3 row g-3">
            <div className="col-md-6">
                <h2 className="text-brand" style={{ borderLeft: '3px solid salmon' }}>Programming Skill Set</h2>
                <ul>
                    <li>Solved 200+ Problems on C Language in <a href="https://www.urionlinejudge.com/">URI</a> | 10+ Problems on <a href="https://onlinejudge.org/">UVA</a> | 20+ Problems on <a href="https://www.hackerrank.com/">HackerRank</a></li>
                    <li>Preferred Language : C, C++, JavaScript</li>
                </ul>
            </div>
            <div className="col-md-6">
                <h2 className="text-brand" style={{ borderLeft: '3px solid salmon' }}>Education</h2>
                <h4>Ahsanullah University of Science & Technology</h4>
                <div className="row g-3">
                    <div className="col-md-6">BSc. in Computer Science Engineering</div>
                    <div className="col-md-6">July 2018 - Present</div>
                    <p>Currently studying here | C, Java(basic), C++(basic), Data Structure, Algorithm</p>
                </div>
            </div>
            </div>
            <a href="https://drive.google.com/u/0/uc?id=17xb8QK7NORhnLaqdtu_ENnTma58pHjLV&export=download"><button className="btn btn-brand w-50 d-block m-auto"><FontAwesomeIcon icon={faDownload} /> Download Full Resume</button></a>
        </div>
    );
};

export default Resume;