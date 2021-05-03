import React from 'react';

import loxmithProjectImg1 from '../../images/projects-screenshots/loxmith/loxmith-ss1.jpg';
import loxmithProjectImg2 from '../../images/projects-screenshots/loxmith/loxmith-ss2.jpg';
import loxmithProjectImg3 from '../../images/projects-screenshots/loxmith/loxmith-ss3.jpg';

import groceryProjectImg1 from "../../images/projects-screenshots/grocery/grocery-ss1.jpg";
import groceryProjectImg2 from "../../images/projects-screenshots/grocery/grocery-ss2.jpg";
import groceryProjectImg3 from "../../images/projects-screenshots/grocery/grocery-ss3.jpg";

import soccerProjectImg1 from '../../images/projects-screenshots/soccer-league/soccer-ss1.jpg';
import soccerProjectImg2 from '../../images/projects-screenshots/soccer-league/soccer-ss2.jpg';
import soccerProjectImg3 from '../../images/projects-screenshots/soccer-league/soccer-ss3.jpg';
import './Projects.css';

const Projects = () => {
    return (
        <div className="row g-3 mt-2 side-space">
            <h2><span className="ms-3 text-brand custom-brand">Projects</span> I have done</h2>
            <div className="col-md-12 card project-card">
                <div className="card-body">
                    <div className="card-top">
                        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={loxmithProjectImg1} className="d-block w-100 m-auto" alt="..." />
                                    <div className="carousel-caption d-none d-md-block m-3">
                                        <h4 style={{ color: 'dimgray', backgroundColor : 'whitesmoke' }}>Preview of a small portion of The Home Page</h4>
                                        <a href="https://loxmith-in-town.web.app/" className="btn btn-brand text-uppercase">Watch Live Project</a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={loxmithProjectImg2} className="d-block w-100 m-auto" alt="..." />
                                    <div className="carousel-caption d-none d-md-block m-3">
                                        <h4 style={{ color: 'dimgray', backgroundColor : 'whitesmoke' }}>Preview of Half of the About Section</h4>
                                        <a href="https://loxmith-in-town.web.app/" className="btn btn-brand text-uppercase">Watch Live Here</a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={loxmithProjectImg3} className="d-block w-100 m-auto" alt="..." />
                                    <div className="carousel-caption d-none d-md-block m-3">
                                        <h4 style={{ color: 'dimgray', backgroundColor : 'whitesmoke' }}>Preview of Welcome Section</h4>
                                        <a href="https://loxmith-in-town.web.app/" className="btn btn-brand text-uppercase">Watch Live Here</a>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                                <span className="">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                                <span className="">Next</span>
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
                    <div className="links">
                        <a href="https://github.com/rahatAust131/loxmith-in-town-client">Client</a>
                        <a href="https://github.com/rahatAust131/loxmith-in-town-server">Server</a>
                        <a href="https://loxmith-in-town.web.app/">Live</a>
                    </div>
                </div>
            </div>
            <div className="col-md-12 card project-card">
                <div className="card-body">
                    <div className="card-top">
                        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={groceryProjectImg1} className="d-block w-100 m-auto" alt="..." />
                                    <div className="carousel-caption d-none d-md-block m-3">
                                        <h4 style={{ color: 'dimgray', backgroundColor : 'whitesmoke' }}>Preview of a small portion of The Home Page</h4>
                                        <a href="https://loxmith-in-town.web.app/" className="btn btn-brand text-uppercase">Watch Live Project</a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={groceryProjectImg2} className="d-block w-100 m-auto" alt="..." />
                                    <div className="carousel-caption d-none d-md-block m-3">
                                        <h4 style={{ color: 'dimgray', backgroundColor : 'whitesmoke' }}>Preview of the login page</h4>
                                        <a href="https://loxmith-in-town.web.app/" className="btn btn-brand text-uppercase">Watch Live Here</a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={groceryProjectImg3} className="d-block w-100 m-auto" alt="..." />
                                    <div className="carousel-caption d-none d-md-block m-3">
                                        <h4 style={{ color: 'dimgray', backgroundColor : 'whitesmoke' }}>Preview of Admin page</h4>
                                        <a href="https://loxmith-in-town.web.app/" className="btn btn-brand text-uppercase">Watch Live Here</a>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                                <span className="">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                                <span className="">Next</span>
                            </button>
                        </div>
                    </div>
                    <h3 className="card-title">E Grocery BD</h3>
                    <p className="card-text">
                        <ul>
                            Description :
                            <li>React, React Router | Firebase user authentication | mongoDB | node.JS | Express</li>
                            <li>Click on Buy Now redirects to Login Page (if  not logged in, otherwise redirect to Checkout Page) | Checkout page shows ordered product details</li>
                            <li>Logged In user can add product in Admin page</li>
                            <li>A customer can not see the admin dashboard page | Similarly An Admin can not see the customer dashboard page</li>
                        </ul>
                    </p>
                    <div className="links">
                        <a href="https://github.com/rahatAust131/e-grocery-bd-client">Client</a>
                        <a href="https://github.com/rahatAust131/e-grocery-bd-server">Server</a>
                        <a href="http://e-grocery-bd.web.app">Live</a>
                    </div>
                </div>
            </div>
            <div className="col-md-12 card project-card">
                <div className="card-body">
                    <div className="card-top">
                        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={soccerProjectImg1} className="d-block w-100 m-auto" alt="..." />
                                    <div className="carousel-caption d-none d-md-block m-3">
                                        <h4 style={{ color: 'dimgray', backgroundColor : 'whitesmoke' }}>Preview of a small portion of The Home Page</h4>
                                        <a href="https://loxmith-in-town.web.app/" className="btn btn-brand text-uppercase">Watch Live Project</a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={soccerProjectImg2} className="d-block w-100 m-auto" alt="..." />
                                    <div className="carousel-caption d-none d-md-block m-3">
                                        <h4 style={{ color: 'dimgray', backgroundColor : 'whitesmoke' }}>Preview of another portion of the Home Page</h4>
                                        <a href="https://loxmith-in-town.web.app/" className="btn btn-brand text-uppercase">Watch Live Here</a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={soccerProjectImg3} className="d-block w-100 m-auto" alt="..." />
                                    <div className="carousel-caption d-none d-md-block m-3">
                                        <h4 style={{ color: 'dimgray', backgroundColor : 'whitesmoke' }}>Preview of Team details</h4>
                                        <a href="https://loxmith-in-town.web.app/" className="btn btn-brand text-uppercase">Watch Live Here</a>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                                <span className="">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                                <span className="">Next</span>
                            </button>
                        </div>
                    </div>
                    <h3 className="card-title">EPL Soccer League</h3>
                    <p className="card-text">
                        <ul>
                            Description :
                            <li>React, React Router | Firebase user authentication | mongoDB | node.JS | express</li>
                            <li>Used React Hooks to load data & set data | <a href="https://thesportsdb.com/api.php">API</a> used</li>
                            <li>Admin can add a service, add another admin and manage services</li>
                            <li>Click on Explore button enables the dynamic routing to navigate to another page | That page shows details related to the team which clicked</li>
                            <li>The Details page shows a static team photo | The api didn't have the dynamic team photo</li>
                        </ul>
                    </p>
                    <div className="links">
                        <a href="https://github.com/rahatAust131/epl-soccer-league">Code</a>
                        <a href="https://epl-soccer-league.netlify.app/">Live</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;