import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';
// import Final_CSC_499_Paper_Belissa_Baez from './Final_CSC_499_Paper_Belissa_Baez.pdf';
import { Typography } from '@mui/material';


function Work() {
    const [alignment] = useState("");
    const pdfURL = 'Final_CSC_499_Paper_Belissa_Baez.pdf';
    return (
        <Typography>
            <h1 align={alignment}>Work/Resume</h1>

            <p>In 2020, I worked as a front end developer and educator for high achieving low-income students as part of The Opportunity Network (which I was also a part of).</p>
            <p>Below is the link that takes you to the website I designed and developed through the use of Wordpress.</p>
            <p>There you'll see the students research projects linked to their images.</p>

            <div>
                <a href="https://opportunitynetwork.org/oppnet-ssrp-staff/" target="_blank" rel="noopener noreferrer">
                    SSRP Webpage </a>

            </div>

            {/* //sends you into an endless loop..similar to life */}
            {/* <div>
                <iframe src='Final_CSC_499_Paper_Belissa_Baez' width='100%' height='500px'></iframe>

            </div> */}
            {/* <div>
                <Document file={pdfURL}>
                    <Page pageNumber={1} />
                </Document>
            </div> */}








        </Typography>

    )



};

// const Home = () => <h1>Home Page</h1>;


export default Work;