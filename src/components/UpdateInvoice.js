
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { createTheme } from '@material-ui/core';
 function UpdateInvoice(props) {
   const url="http://localhost:8080/HRCProject/updateServlet";
    const [open, setOpen] =React.useState(false);
    const[id,setId]=React.useState(null);
    React.useEffect(()=>{setDisabled(props.updatetoggle)},[props])
    const[isdisabled,setDisabled]=useState(props.updatetoggle)
   
    const handleClickOpen = () => {
      
      setOpen(true);
    };  
  
    const handleClose = () => {
      setOpen(false);
    };
    const[data,setData]=useState(
      { 
        customerPaymentTerms:"",
        invoiceCurrency:"",
      }
    );
     const update=e=>
     {
      e.preventDefault();
      axios.post(url,{
        invoiceCurrency:data.invoiceCurrency,
        customerPaymentTerms:data.customerPaymentTerms,
        id:props.editinvoiceid
      }).then((res)=>
        {
          console.log(res);
          props.settingeditsnackbar(true)
          setTimeout(()=>{props.settingeditsnackbar(false)},1000)
          
        }).catch(err=>console.log(err))
       
        setTimeout(()=>{handleClose()},300)
    }
    const handleUpdate=(e)=>
    {
      const newData={...data}
      newData[e.target.id]=e.target.value
      setData(newData)
     
    }
    
    
    
    return (
      <div>
       
        <button  variant="outlined" disabled={isdisabled} onClick={handleClickOpen} class='btn-edit'  disableRipple style={isdisabled===true?{ cursor:'default',backgroundColor:'#2d4250',border:0}:{cursor:'pointer'}} >
          EDIT
        </button>
        <Dialog open={open} onClose={handleClose}   maxWidth='sm' style={{height:'500px',marginTop:'4.5em'}} >
          <DialogTitle className='ai-title'>Edit</DialogTitle>
          <DialogContent  style={{backgroundColor:'#2d4250'}}>
          <form className='edit-invoice' >
      <div>
          <input  onChange={(e)=>handleUpdate(e)} id="invoiceCurrency"  value={data.invoiceCurrency} type="text" placeholder='Invoice Currency' className='invoice-curr' required/>
          <input onChange={(e)=>handleUpdate(e)} id="customerPaymentTerms" value={data.customerPaymentTerms} type="text"  placeholder='Customer Payment Terms'  className='cp-terms' required/>
          
      </div>
          <DialogActions class='editinvoice-actions'>
            <Button  type='submit'  onClick={update} class='editinvoice-btn' disableRipple >EDIT</Button>
            <Button onClick={handleClose} class='canceleditinvoice-btn' disableRipple>CANCEL</Button>  
          </DialogActions>

      </form>
     
          </DialogContent>
          
        </Dialog>
      </div>
    );
}

export default UpdateInvoice;



















