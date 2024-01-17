import React from 'react';
import Belissacomputer from './Belissacomputer.jpg';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// const bull = (
//     <Box
//         component="span"
//         sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//         •
//     </Box>
// );
function Home() {
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
                        {/* <Typography variant="h4" component="div">
                            Heading
            </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            describes the heading
            </Typography>
                        <Typography variant="body1">
                            Card content
              <br />
                            {'"describes the content"'}
                        </Typography> */}
                    </CardContent>
                    <CardActions>
                        <Button size="small">About me</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );

};

// const Home = () => <h1>Home Page</h1>;


export default Home;