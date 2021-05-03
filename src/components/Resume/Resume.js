import React from 'react';
import './Resume.css';

import htmlCertificate from '../../images/certificates/HTML_certificate.jpg';
import javaCertificate from '../../images/certificates/Java_certificate.jpg';
import cCertificate from '../../images/certificates/C_certificate.jpg';
import cPlusPlusCertificate from '../../images/certificates/CPlusPlus_certificate.jpg';

const Resume = () => {
    return (
        <div className="side-space">
            <div clasName="mt-3">
                <h2 className="text-brand custom-brand ">EXPERIENCE</h2>
                <ul>
                    <li><h4>Programming Hero |</h4><span className='less-weighted-text'>Online | WEB Development | December 2020 - PRESENT</span></li>
                    <ul>
                        <li>HTML, CSS, JavaScript | Many front-end websites</li>
                        <li>React, Node.JS, Express, MongoDB, Firebase | A few full-stack projects</li>
                    </ul>
                    <li><h4>Academic Project | <span className='less-weighted-text'>Tejgaon, Dhaka | Group Project | June 2019 - October 2019</span></h4></li>
                    <ul>
                        <li>Created a mini game using C Language. </li>
                        <li>Technologies/Tools used : iGraphics, VS 2010</li>
                        <li>Here is the game-play review <a href="https://youtu.be/0EyQrlrYgOM">video</a></li>
                    </ul>
                    <li><h4>The ALPHA Team | <span className='less-weighted-text'>Mirpur, Dhaka | Volunteer Work | 	26/02/2021 & 08/03/2021</span></h4></li>
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
            <div clasName="mt-3">
                <h2 className="text-brand custom-brand ">Awards / Certificates</h2>
                <div className="row g-3 container-fluid m-auto">
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
        </div>
    );
};

export default Resume;