import React from 'react';
import JsonData from "../data.json"
import { Pagination } from '@mui/material';


function DisplayTable(){

    const DisplayData=JsonData.map(
    (product)=>{
        return(
            <tr>
            <td>{product.id}</td>
            <td>{product.productName}</td>
            <td>{product.productDetails}</td>
        </tr>
        )
    }
    )

    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Product Name</th>
                    <th>Product Details</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>

            <Pagination count={10} />

             
        </div>
    )
}

export default DisplayTable;