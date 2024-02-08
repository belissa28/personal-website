
import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { pdfjs } from 'react-pdf';
import PdfComp from "./PdfComp";
import pdf from './BelissaResume2024.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();


function Work() {
    const [alignment] = useState("");
    return (

        <Typography>
            <h1 align={alignment}>Work</h1>
            <hr></hr>

            <p>In 2020, I worked as a front end developer and educator for high achieving low-income students as part of The Opportunity Network (which I was also a part of).</p>
            <p>Below is the link that takes you to the website I designed and developed through the use of Wordpress.</p>
            <p>There you'll see the students research projects linked to their images.</p>

            <div>
                <a href="https://opportunitynetwork.org/oppnet-ssrp-staff/" target="_blank" rel="noopener noreferrer" class='ssrp-link'>
                    SSRP Webpage </a>

            </div>
            <hr></hr>



            <h1 align={alignment}>Resume</h1>
            <a href={pdf} download="BelissaResume2024.pdf" className="download-resume">Download my resume!</a>
            <PdfComp />



        </Typography >






    );
};




export default Work;