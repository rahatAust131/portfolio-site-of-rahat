import React from 'react';
import loxmithProjectImg1 from '../../images/projects-screenshots/loxmith/loxmith-ss1.jpg';
import loxmithProjectImg2 from '../../images/projects-screenshots/loxmith/loxmith-ss2.jpg';
import loxmithProjectImg3 from '../../images/projects-screenshots/loxmith/loxmith-ss3.jpg';
import loxmithProjectImg4 from '../../images/projects-screenshots/loxmith/loxmith-ss4.jpg';
import loxmithProjectImg5 from '../../images/projects-screenshots/loxmith/loxmith-ss5.jpg';
import './Projects.css';

const Projects = () => {
    return (
        <div className="row g-3">
            <h2><span className="text-brand custom-brand">Projects</span> I have done</h2>
            <div className="col-md-4 card project-card">
                <div className="card-body">
                    <div className="card-top">
                        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={loxmithProjectImg1} class="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block m-3">
                                        <h4 style={{ color: 'whitesmoke' }}>Preview of a small portion of The Home Page</h4>
                                        <a href="https://loxmith-in-town.web.app/" className="btn btn-brand text-uppercase">Watch Live Project</a>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={loxmithProjectImg2} class="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block m-3">
                                        <h4 style={{ color: 'whitesmoke' }}>Preview of Half of the About Section</h4>
                                        <a href="https://loxmith-in-town.web.app/" className="btn btn-brand text-uppercase">Watch Live Here</a>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={loxmithProjectImg3} class="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block m-3">
                                        <h4 style={{ color: 'whitesmoke' }}>Preview of Welcome Section</h4>
                                        <a href="https://loxmith-in-town.web.app/" className="btn btn-brand text-uppercase">Watch Live Here</a>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={loxmithProjectImg4} class="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block m-3">
                                        <h4 style={{ color: 'whitesmoke' }}>Preview of Services Section</h4>
                                        <a href="https://loxmith-in-town.web.app/" className="btn btn-brand text-uppercase">Watch Live Here</a>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={loxmithProjectImg5} class="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block m-3">
                                        <h4 style={{ color: 'whitesmoke' }}>Preview of Login Section</h4>
                                        <a href="https://loxmith-in-town.web.app/" className="btn btn-brand text-uppercase">Watch Live Here</a>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <h3 className="card-title">LockSmith In Town</h3>
                    <p className="card-text">
                        <ul>
                            Description :
                            <li> React | React Router | Firebase authentication, for both user and admin | mongoDB | node.JS | Express</li>
                            <li>User  authentication (Admin and Customer) | Both can login separately | Unique Dashboard for admin and customer</li>
                            <li>Admin can add a service, add another admin and manage services</li>
                            <li>A customer can not see the admin dashboard page | Similarly An Admin can not see the customer dashboard page</li>
                            <li>A customer can order service and buy the service</li>
                            <li>Also Payment method is used when ordering a service</li>
                        </ul>
                    </p>
                    <div className="as">
                        <a href="https://github.com/rahatAust131/loxmith-in-town-client">Client</a>
                        <a href="https://github.com/rahatAust131/loxmith-in-town-server">Server</a>
                        <a href="https://loxmith-in-town.web.app/">Live</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;