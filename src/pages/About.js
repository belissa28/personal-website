// About.js
import React from 'react';
import Belissaheart from './Belissaheart.jpg';
import './styles.css';

function About() {
    return (
        // <div>
        //     <img src={Belissaheart} alt="belissa" height={500} width={400} />
        //     <p >This is some text to the right of the image.</p>
        // </div>
        <div className="about-container">
            <img src={Belissaheart} alt="heart" height={500} width={400} />
            <p>This is some text to the right of the image.</p>
        </div >

    );

}


// const About = () => <h1>About Page</h1>;

export default About;