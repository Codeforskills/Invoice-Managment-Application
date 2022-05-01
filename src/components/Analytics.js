
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react'
import { Grid } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';  
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import { alignProperty } from "@mui/material/styles/cssUtils";
import PieChart from './PieChart';


 function Analytics() {
    const [open, setOpen] = React.useState(false);

    const[pielabels,setPieLabels]=useState([]);
    const[piedata,setPieData]=useState([]);
    const url="http://localhost:8080/HRCProject/chartData";
    const[chartdata,setChartData]=useState(
      {
        fromclearDate:"",
        toclearDate:"",
        fromdueDate:"",
        todueDate:"",
        frombaselineCreateDate:"",
        tobaselineCreateDate:"",
        invoiceCurrency:"",
       
      }
    );


    const submit=e=>
    {
      
      e.preventDefault();
      
        fetch(url, {
          method: "POST",
          body: JSON.stringify({
        fromclearDate:chartdata.fromclearDate,
        toclearDate:chartdata.toclearDate,
        fromdueDate:chartdata.fromdueDate,
        todueDate:chartdata.todueDate,
        frombaselineCreateDate:chartdata.frombaselineCreateDate,
        tobaselineCreateDate:chartdata.tobaselineCreateDate,
        invoiceCurrency:chartdata.invoiceCurrency,
          }),
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
      })
      .then(response => response.json())
        .then((json)=>{
          setPieLabels(Object.keys(json));
          setPieData(Object.values(json))
          
        }).then(()=><PieChart labelspie={pielabels} datapie={piedata}></PieChart>)
        
        .catch(err=>console.log(err))
     setTimeout(()=>{handleClose()},300)
    }
     
          console.log(pielabels);
          console.log(piedata);
    const handleChartData=(e)=>
    {
      const newData={...chartdata}
      newData[e.target.id]=e.target.value
      setChartData(newData)
      console.log(chartdata);
    }




    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
    // const handleAdvanceSearch=()=>{}
    // const showAnalytics=()=>{}
    return (
       <div>
          <Button variant="outlined" onClick={handleClickOpen} class='btn-view' disableRipple style={{cursor:'pointer'}}>
          ANALYTICS VIEW
        </Button>
                  <Dialog open={open} onClose={handleClose}   >
                    <DialogTitle className='ai-title'>Analytics</DialogTitle>
                    <DialogContent style={{backgroundColor:'#2d4250'}}>
                    <span style={{color:'white',paddingBottom:'1em'}}>&nbsp;ClearDate&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; DueDate  
                      </span>
                    <form onSubmit={submit}>
          <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
          
              <Grid item xs={5}>
              
              <input  style={{border:'none',marginTop:'0.8em'}}onChange={(e)=>handleChartData(e)} value={chartdata.fromclearDate}  id='fromclearDate' placeholder="From" type="text" name="Due Date" onFocus={e => (e.target.type = "date")}    />
            </Grid>
            
            <Grid item xs={5}>
            
            <input  style={{border:'none',marginTop:'0.8em'}} onChange={(e)=>handleChartData(e)}  value={chartdata.fromdueDate} id='fromdueDate'   type="text"  onFocus={e => (e.target.type = "date")} placeholder='From' className='inv-id' required/> 
           
            </Grid>
            <Grid item xs={5}>
           
            
            <input style={{border:'none'}}  onChange={(e)=>handleChartData(e)} value={chartdata.toclearDate}  id='toclearDate'  placeholder="To" type="text" name="Due Date" onFocus={e => (e.target.type = "date")}    />
            </Grid>
            <Grid item xs={5}>
            
            <input style={{border:'none'}}  onChange={(e)=>handleChartData(e)}  value={chartdata.todueDate}  id='todueDate'  placeholder="To" type="text" name="Due Date" onFocus={e => (e.target.type = "date")}  className='viewtoduedate'  />
            </Grid>
             

          <div><span style={{color:'white'}}>&emsp;&emsp;BaseLineCreateDate&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;InvoiceCurrency 
                      </span></div>
            <Grid item xs={5}>
           
              <input style={{border:'none',marginTop:'0.6em'}} id='frombaselineCreateDate' onChange={(e)=>handleChartData(e)} value={chartdata.frombaselineCreateDate}   placeholder="From" type="text" name="Due Date" onFocus={e => (e.target.type = "date")}    />
            </Grid>
            <Grid item xs={5}>
           
            <input style={{border:'none',marginTop:'0.6em'}} onChange={(e)=>handleChartData(e)} value={chartdata.invoiceCurrency}  id='invoiceCurrency' type="text"  placeholder='Invoice Currency' className='inv-id' required/> 
            </Grid>
            <Grid item xs={5}>
           
           
            <input  style={{border:'none'}} onChange={(e)=>handleChartData(e)}  id='tobaselineCreateDate' value={chartdata.tobaselineCreateDate}  placeholder="To" type="text" name="Due Date" onFocus={e => (e.target.type = "date")}    />
            </Grid>
           
          </Grid>
        
<DialogActions class='editinvoice-actions'>

            <Button  type='submit'  class='searchads-btn' disableRipple style={{cursor:'pointer'}}>SUBMIT</Button>
            <Button onClick={handleClose} class='cancelads-btn' disableRipple style={{cursor:'pointer'}}>CANCEL</Button>  
          </DialogActions>
 
</form>
                
          </DialogContent>
          
        </Dialog>
       </div>
   
    );
}

export default Analytics;








