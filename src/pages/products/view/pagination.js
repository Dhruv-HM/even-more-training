import React, { useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import JsonData from "../../../data.json";

const DatatablePage = () => {


    useEffect(() => {
        console.log("some text",JsonData);
        if (JsonData) {
          JsonData.map((item) => {
            item.image = (
              <img
                src={item.img_url} 
                alt="alt image"
                className="someImgClass"
                width="100px"
                height="auto"
              />
            )
          })
        }
    
      }, [JsonData])
  const data = {
    columns: [

        {
            label: "Image",
            field: "image",
            sort: "asc",
            width: 200,
          },

      {
        label: 'Product Name',
        field: 'productName',
        sort: 'asc',
        width: 270
      },

      {
        label: 'Product Details',
        field: 'productDetails',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Price',
        field: 'price',
        sort: 'asc',
        width: 100
      },
     
    ],
    rows: 
     JsonData
    
  };

  return (
    <MDBDataTable
    noBottomColumns={true} 
    
    striped 
    
      data={data}
    />
  );
}

export default DatatablePage;