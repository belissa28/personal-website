import React from 'react';
import Belissacomputer from './Belissacomputer.jpg';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

// import routes from '../routes';

function Home() {
    // const aboutRoute = routes.find((route) => route.path === '/about');
    return (
        <div>

            {/* <div>
                <img src={Belissacomputer} alt="Belissa" height={150} width={250} />
                <h1> Home Page bb</h1>
            </div> */}

            <div style={{ margin: '7%', height: '20px' }}>
                <Card sx={{ maxWidth: 12000 }}>
                    <CardContent>
                        {/* <Typography variant='h3' gutterBottom>
                            A Simple Material UI Card
            </Typography> */}
                        <CardMedia
                            component="img"
                            height="650"
                            width="140"
                            image={Belissacomputer}
                            alt="Belissa"
                        />
                        <Typography variant="h4" component="div">
                            Hi there and welcome to my webpage! I'm Belissa a software engineer with full stack experience, with a passion for frontend and design!
                            Want to learn more about me? Click the 'About me' button below and have fun.
            </Typography>
                        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            describes the heading
            </Typography>
                        <Typography variant="body1">
                            Card content
              <br />
                            {'"describes the content"'}
                        </Typography> */}
                    </CardContent>
                    <CardActions>
                        {/* <NavLink to={aboutRoute.path}>
                            <Button size="small">About me</Button>
                        </NavLink> */}

                        <NavLink to='/about'>
                            <Button size="small">About Me</Button>
                        </NavLink>
                        {/* <NavLink to='/about'>
                            <Button size="small">About me</Button>
                        </NavLink> */}
                    </CardActions>
                </Card>
            </div>
        </div>
    );

};

// const Home = () => <h1>Home Page</h1>;


export default Home;