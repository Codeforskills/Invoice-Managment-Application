import React, { useState } from 'react'
import {Pie } from "react-chartjs-2";
import { borderColor } from '@mui/system';
 


export default function PieChart(props) {
    console.log("pie",props.labelspie)
    const[data,setData]=useState({
        labels:props.labelspie,
        datasets:[
            {
                label:"PieChart",
                backgroundColor:"",
                borderColor:"",
                data:props.datapie
            }
        ]
    }) 
  return (
  
   <div className='piechart'>
        <h1>PieChart</h1>
        <Pie chartData={data} options={{}}>
        </Pie>
    </div>
   


  )
}
