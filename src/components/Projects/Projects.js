import React from 'react';
import projectImg1 from '../../images/project1.png';
import projectImg2 from '../../images/project2.png';
import projectImg3 from '../../images/porject3.png';
import './Projects.css';

const Projects = () => {
    return (
        <div className="row g-3">
            <h2><span className="text-brand custom-brand">Projects</span> I have done</h2>
            <div className="col-md-4 card project-card">
                <div className="card-body">
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
                <img src={projectImg1} className="card-img-bottom img-fluid p-3 d-block w-75 m-auto" alt="..." />
            </div>
            <div className="col-md-4 card project-card">
                <div className="card-body">
                    <h3 className="card-title">E Grocery BD</h3>
                    <p className="card-text">
                        <ul>
                            Description :
                            <li>React | React Router | Firebase user authentication | mongoDB | node.JS | Express</li>
                            <li>Click on Buy Now redirects to Login Page (if  not logged in, otherwise redirect to Checkout Page) | Checkout page shows ordered product details</li>
                            <li>Logged In user can add product in Admin page</li>
                            <li>Also Logged in user can delete a product</li>
                        </ul>
                    </p>
                    <div className="links">
                        <a href="https://github.com/rahatAust131/e-grocery-bd-client">Client</a>
                        <a href="https://github.com/rahatAust131/e-grocery-bd-server">Server</a>
                        <a href="https://loxmith-in-town.web.app/">Live</a>
                    </div>
                </div>
                <img src={projectImg2} className="card-img-bottom img-fluid p-3 d-block w-75 m-auto" alt="..." />
            </div>
            <div className="col-md-4 card project-card">
                <div className="card-body">
                    <h3 className="card-title">EPL Soccer League</h3>
                    <p className="card-text">
                        <ul>
                            Description :
                            <li>React | React Router | Firebase user authentication | mongoDB | node.JS | express</li>
                            <li>Used React Hooks to load data and set data | <a href="https://thesportsdb.com/api.php">API</a> used</li>
                            <li>Click on Explore button enables the dynamic routing to navigate to another page | That page shows details related to the team which clicked</li>
                        </ul>
                    </p>
                    <div className="links">
                        <a href="https://github.com/rahatAust131/epl-soccer-league">Code</a>
                        <a href="https://epl-soccer-league.netlify.app">Live</a>
                    </div>
                </div>
                <img src={projectImg3} className="card-img-bottom img-fluid p-3 d-block w-75 m-auto" alt="..." />
            </div>
        </div>
    );
};

export default Projects;