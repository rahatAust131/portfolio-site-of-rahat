import React from 'react';
import About from '../About/About';
import Header from '../Header/Header/Header';
import Resume from '../Resume/Resume';

const Home = () => {
    return (
        <div>
            <Header />
            <hr/>
            <About />
            <hr/>
            <Resume />
        </div>
    );
};

export default Home;