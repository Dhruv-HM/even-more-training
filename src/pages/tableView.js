import React from 'react';
import JsonData from "../data.json"
import { Pagination } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';


function DisplayTable(props){

    const DisplayData=JsonData.slice(1,3).map(
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

            <Pagination count={10}/>

             
        </div>
    )
}

export default DisplayTable;