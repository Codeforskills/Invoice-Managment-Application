// import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react'
import { Grid } from '@mui/material';
import { MenuItem } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
 function AdvanceSearch(props) {

  const url="http://localhost:8080/HRCProject/advanceSearchServlet";
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const[data,setData]=useState(
      {
        documentId:"",
        invoiceId:"",
        customerNumber:"",
        businessYear:"",
        
      }
    );

    const advanceSearch=e=>
    {
      e.preventDefault();
      
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
        documentId:data.documentId,
        invoiceId:data.invoiceId,
        customerNumber:data.customerNumber,
        businessYear: parseInt(data.businessYear),
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => {console.log(json);props.setadvsearchinvoices(json)});
      setTimeout(()=>{handleClose()},500)
    }

    
    
    const handleAdvanceSearch=(e)=>
    {
      const newData={...data}
      newData[e.target.id]=e.target.value
      setData(newData)
      console.log(data);
    }
    return (
      <div >
        <Button variant="outlined" onClick={handleClickOpen} class='btn-advancesearch' disableRipple style={{cursor:'pointer'}}>
        ADVANCE SEARCH
        </Button>
        <Dialog open={open} onClose={handleClose} maxWidth='sm' style={{height:'500px',marginTop:'4.5em'}} >
          <DialogTitle className='ai-title' >Advance Search</DialogTitle>
          <DialogContent  style={{backgroundColor:'#2d4250'}}>
            <form onSubmit={advanceSearch}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
              <Grid item xs={5}>
              <input onChange={(e)=>handleAdvanceSearch(e)} id="documentId"  value={data.documentId} type="text" placeholder='Document ID' className='doc-id'  />
            </Grid>
            <Grid item xs={5}>
            <input onChange={(e)=>handleAdvanceSearch(e)} id="invoiceId" value={data.invoiceId} type="text"  placeholder='Invoice ID' className='inv-id' /> 
            </Grid>
            <Grid item xs={5}>
            <input onChange={(e)=>handleAdvanceSearch(e)} id="customerNumber"value={data.customerNumber}  type="text" placeholder='Customer Number' className='cust-num' required/>
            </Grid>
            <Grid item xs={4}>
            <input   onChange={(e)=>handleAdvanceSearch(e)} id="businessYear"  value={data.businessYear} type="text"  placeholder='Business Year'  className='buis-year' />
            </Grid>
          </Grid>
<DialogActions class='editinvoice-actions'>

            <Button  type='submit'  class='searchads-btn' disableRipple style={{cursor:'pointer'}}>SEARCH</Button>
            <Button onClick={handleClose} class='cancelads-btn' disableRipple style={{cursor:'pointer'}}>CANCEL</Button>  
          </DialogActions>
 
</form>
      
     
          </DialogContent>
          
        </Dialog>
      </div>
    );
}

export default AdvanceSearch;





   