// import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useEffect } from 'react'
import { useState } from 'react';
 function PredictInvoice(props) {
    const [open, setOpen] = React.useState(false);
    const url="http://localhost:8080/HRCProject/predictServlet";
    React.useEffect(()=>{setDisabled(props.togglepredictbtn)},[props])
    const[isdisabled,setDisabled]=useState(props.togglepredictbtn)
    const handleClickOpen = () => {
      console.log("Predicting:",props.predictinvoiceids)
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          predictinvoice:props.predictinvoiceids
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json()).then(json =>console.log(json));
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
         {/* variant="outlined"  */}
         {/* style={{cursor:'pointer'}} */}
        
        <button disabled={isdisabled} onClick={handleClickOpen} class='btn-predict' disableRipple  style={isdisabled===true?{ cursor:'default',backgroundColor:'#14aff1',border:0}:{cursor:'pointer'}}  >
          PREDICT
        </button>
        {/* <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Predict</DialogTitle>
          <DialogContent>
          <form className='add-invoice' >
      <div>
          <input type="text" placeholder='Business Code' className='bcode' required/>
          <input type="text" onkeypress="return /[0-9]/i.test(event.key)" placeholder='Customer Number' />
          <input type="date" required pattern="\d{2}-\d{2}-\d{4}" placeholder='clear Date' input/>
          <input type="text" placeholder='Business year' />
      </div>
      <div>
          <input type="text" placeholder='Document ID' />
          <input type="date"  placeholder='Posting Date' />
          <input type="date" placeholder='Document Create Date' />
          <input type="date" placeholder='Due Date' />

      </div>
      <div>
          <input type="text" placeholder='Invoice Currency' />
          <input type="text"  placeholder='Document Type' />
          <input type="text" placeholder='Posting ID' />
          <input type="text" placeholder='Total open Amount' />

      </div>
      <div>    
          <input type="date" placeholder='Baseline Create Date' />
          <input type="text" placeholder='Customer Payment Terms' />
          <input type="text" placeholder='Invoice id' />
      </div>
      
         <div >
         <button className='addinvoice-btn'>ADD</button>
         <button className='cancelinvoice-btn'onClick={() => navigate("/")}  >CANCEL</button>
   
         </div>

      </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} disableRipple>Cancel</Button>
            <Button onClick={handleClose} disableRipple>Subscribe</Button>
          </DialogActions>
        </Dialog> */}
      </div>
    );
}

export default PredictInvoice;
