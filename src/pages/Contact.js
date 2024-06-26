// Contact.js
import React, { useState } from 'react';
import { Typography } from '@mui/material';
import pdf from './BelissaResume2024.pdf';

function Contact() {
    const [alignment] = useState("");
    return (
        <Typography>
            <h1 alaign={alignment}> Let's Connect!</h1>
            <hr></hr>
            <div>
                <a href='https://www.linkedin.com/in/belissa-baez/' class='linkedin-link' target="_blank" rel="noopener noreferrer">
                    Connect with me on Linkedin!
        </a>
                <br></br>

                <a href='mailto:belissa.baez.28@gmail.com' class='email-link' target="_blank" rel="noopener noreferrer">
                    Email me!
        </a>
                <br></br>
                <a href={pdf} download="BelissaResume2024.pdf" className="download-resume">Download my resume, yay!</a>

            </div>

        </Typography>


    )
}

// const Contact = () => <h1>Contact Page</h1>;

export default Contact;