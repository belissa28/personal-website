// About.js
import React from 'react';
import { useState } from "react";
import Belissaheart from './Belissaheart.jpg';
import './styles.css';
import Typography from '@mui/material/Typography';

function About() {
    const [alignment] = useState("");
    return (
        // <div>
        //     <img src={Belissaheart} alt="belissa" height={500} width={400} />
        //     <p >This is some text to the right of the image.</p>
        // </div>
        <div className="about-container">
            <img src={Belissaheart} alt="heart" height={500} width={400} />

            <Typography>
                <p>I hope by now you aren't tired of hearing it, but, I'm Belissa! Let me give you a rundown of my recent background.</p>
                <h1>2016-2021</h1>
                <p>Went to Union College (go dutchmen!) where I was involved in AOP (Academic Opportunity Program), Work Study and I was a residential advisor!
                     And ended up pursuing a Bachelors degree in Computer Science, with a minor in Astronomy (fun fact about me).</p>




                <h2>2021-2022</h2>
                <p>After graduation, I got a job as a Quality Assurance Engineer working for a company called Cognizant! There I learned more about testing, which allowed me to truly
                appreciate the work that goes into testing the product.
                </p>
                <h3 id="h3" align={alignment}>
                    2022-2023

        </h3>
                <p>In the end, I really enjoyed developing and creating, so I jumped ship and decided to pursue a career in software engineering! I was able to develop, deploy final versions
                of applications and present work in meetings with other teams.
                </p>

            </Typography>
        </div >

    );

}


// const About = () => <h1>About Page</h1>;

export default About;