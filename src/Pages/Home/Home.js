import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import Header from './Header/Header';
import HomeDoctor from './HomeDoctor/HomeDoctor';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutUs></AboutUs>
            <Services></Services>
            <HomeDoctor></HomeDoctor>
        </div>
    );
};

export default Home;