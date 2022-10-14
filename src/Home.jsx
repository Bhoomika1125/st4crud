import React from 'react';
import web from "../src/images/image4.svg";
import Common from "./Common";
const Home =()=> {
    return (
        <>
        <Common 
        name="Welcome to My World" 
        imgsrc={web}
        visit="/Service"
        btname="Get Started"
        />
        </>
    );
};

export default Home;