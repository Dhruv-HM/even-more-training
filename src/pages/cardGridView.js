import React from 'react';
import JsonData from "../data.json"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { dividerClasses } from '@mui/material';
import {Grid} from '@material-ui/core/';



function DisplayCardGrid() {


    const DisplayGrid = JsonData.map(
        (product) => {
            return (

                <div class="card" style={{ width: "15rem", margin:"2rem" }}>
                    <img class="card-img-top" src={product.image} alt="Card image cap"  />
                    <div class="card-body">
                        <h5 class="card-title">{product.productName}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            )
        }
    )
    return (
        <div className="">
            <Grid                 container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
            {DisplayGrid}
            </Grid>
        </div>
    )
}

export default DisplayCardGrid;

