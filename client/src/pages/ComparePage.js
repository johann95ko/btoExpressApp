// import React from "react";
// import "./pages.css";

// //MaterialUI imports 
// import Typography from '@material-ui/core/Typography'
// import Grid from '@material-ui/core/Grid'
// import AppBar from '@material-ui/core/AppBar'
// import ToolBar from '@material-ui/core/ToolBar'
// import Card from '@material-ui/core/Card'
// import CardActions from '@material-ui/core/CardActions'
// import CardContent from '@material-ui/core/CardContent'
// import CardMedia from '@material-ui/core/CardMedia'

// import Button from '@material-ui/core/Button'

// export const ComparePage = () => {
//   return (
//     <div className="pageContainer">
//       <p> yeet </p>

//     </div>
//   );
// };

// export default ComparePage;

import React, { Component } from 'react';
import Map from "../components/Map";


export const ComparePage = () => {
  return (
    <div style={{margin:'5'}}>
				<Map
          google={() => this.google()}
					center={{lat: 1.301674, lng: 103.838076}}
					height='300px'
					zoom={15}
				/>
       

    </div>
  );
};

export default ComparePage;



// <Card>
// <CardMedia style={{height:0,paddingTop:'63.25%'}}
//   image="https://cdn1-www.dogtime.com/assets/uploads/2011/01/file_23230_coton-de-tulear-460x290.jpg"
//   title="Cute Dog"
//   />
// <CardContent>
//   <Typography gutterBottom variant="headline" component="h2">This is a cute dog</Typography>
// </CardContent>
// <CardActions>
//     <Button size="small" color="primary" href="http://google.com/" target="_blank">
//     Click here for more!
//     </Button>
// </CardActions>
// </Card>