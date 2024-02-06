import React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';


function Fun() {
    const [alignment] = useState("");
    return (

        <Typography>
            <h1 align={alignment}>Okay okay, I get it you want to see my fun/funny side that's why you clicked this tab, didn't you. I know you did. Well, here it goes:</h1>
            <hr></hr>
            <ol>
                <li>I have been to Hawaii!</li>
                <li>I got a kiss from a dolphin once.</li>
                <li>I can cook some amazing Dominican rice and chicken.</li>
                <li>I LOVE watching anime. Death Note has to be one of my favorites.</li>
                <li>I don't drink coffee (I know, crazy, right?), but in this economy I appreciate that I don't have a liking for it because I fear Starbucks would make me go broke.</li>
                <li>I'm funny, please laugh at my jokes or I'll akwardly stare at you, just kidding...or am I?</li>
                <li>I'm a native Spanish speaker and I can understand some French, emphasis on <u>some.</u> </li>
                <li>I was valedictorian of my graduating high school class, 2016.</li>
                <li>I can get a gif for any situation, I know so very Gen z of me.</li>
                <li>I like listening to music.</li>
                <li>I took some tae-kwaendo and can say my kicks are pretty lethal.</li>
                <li>In college, I took an Astronomy class where I used a large telescope to photograph a galaxy. I still have the picture!</li>



            </ol>

        </Typography>




    );
};

// const Home = () => <h1>Home Page</h1>;


export default Fun;