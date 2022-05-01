
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react'
import { useState } from 'react';
import axios from 'axios';  
 function AddingInvoice(props) {
    const url="http://localhost:8080/HRCProject/addInvoice";
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const[data,setData]=useState(
      {
        businessCode:"",
        customerNumber:"",
        invoiceId:"",
        clearDate:"",
        documentId:"",
        postingDate:"",
        dueDate:"",
        baselineCreateDate:"",
        documentCreateDate:"",
        documentType:"",
        customerPaymentTerms:"",
        invoiceCurrency:"",
        totalOpenAmount:"",
        businessYear:"",
        postingId:""
      }
    );

  
    const submit=e=>
    {
      
      e.preventDefault();
      axios.post(url,{
        businessCode:data.businessCode,
        customerNumber:data.customerNumber,
        invoiceId:data.invoiceId,
        clearDate:data.clearDate,
        documentId:data.documentId,
        postingDate:data.postingDate,
        dueDate:data.dueDate,
        baselineCreateDate:data.baselineCreateDate,
        documentCreateDate:data.documentCreateDate,
        documentType:data.documentType,
        customerPaymentTerms:data.customerPaymentTerms,
        invoiceCurrency:data.invoiceCurrency,
        totalOpenAmount:data.totalOpenAmount,
        businessYear: parseInt(data.businessYear),
        postingId:parseInt(data.postingId)
      },).then((res)=>
        {
          console.log(res);
          props.settingsnackbar(true)
          setTimeout(()=>{props.settingsnackbar(false)},700)
        }).catch(err=>console.log(err))
     setTimeout(()=>{handleClose()},300)
    }
    const handleAdd=(e)=>
    {
      const newData={...data}
      newData[e.target.id]=e.target.value
      setData(newData)
      console.log(data);
    }
    
    
    return (
        
      <div>
        <Button variant="outlined"   onClick={handleClickOpen}  class='btn-add' disableRipple style={{cursor:'pointer'}} >
          ADD
        </Button>
        <Dialog open={open} onClose={handleClose}   maxWidth='lg' style={{height:'550px',marginTop:'4.5em'}} >
          <DialogTitle className='ai-title'>Add</DialogTitle>
          <DialogContent  style={{backgroundColor:'#2d4250'}}>
          
          <form className='add-invoice' onSubmit={submit}> 
      <div>

         
         <input  onChange={(e)=>handleAdd(e)} id="businessCode"  value={data.businessCode}  type="text"   placeholder='Business Code'  className='bcode' name="Business Code" required/>
        
          <input onChange={(e)=>handleAdd(e)} id="customerNumber"value={data.customerNumber}  type="text"  placeholder='Customer Number' name="Customer Number" required  />
          <input  onChange={(e)=>handleAdd(e)}  id="clearDate"  value={data.clearDate} type="text"  placeholder="Clear-Date" name="Clear Date" onFocus={e => (e.target.type = "date")}   />
          <input  onChange={(e)=>handleAdd(e)} id="businessYear"  value={data.businessYear} type="text" placeholder='Business year' name="Business Year" />
      </div>
      <div>
          <input  onChange={(e)=>handleAdd(e)} id="documentId"  value={data.documentId} type="text" placeholder='Document ID'  name="Document Id"/>
         
          
        <input  onChange={(e)=>handleAdd(e)} id="postingDate" value={data.postingDate} name="Posting Date" type="text" placeholder="Posting Date" onFocus={e => (e.target.type = "date")}    />
        <input  onChange={(e)=>handleAdd(e)} id="documentCreateDate" value={data.documentCreateDate}name="Document Create Date" type="text" placeholder="Document Create Date"  onFocus={e => (e.target.type = "date")}   />
        
        <input  onChange={(e)=>handleAdd(e)} id="dueDate"  value={data.dueDate} placeholder="Due Date" type="text" name="Due Date" onFocus={e => (e.target.type = "date")}    />
      </div>
      <div>
          <input  onChange={(e)=>handleAdd(e)} id="invoiceCurrency"  value={data.invoiceCurrency} type="text" placeholder='Invoice Currency' name="Invoice Currency" />
          <input  onChange={(e)=>handleAdd(e)} id="documentType"  value={data.documentType} type="text"  placeholder='Document Type'  name="Document Type"/>
          <input onChange={(e)=>handleAdd(e)} id="postingId"   value={data.postingId} type="text" placeholder='Posting ID'    name="Posting Id"/>
          <input onChange={(e)=>handleAdd(e)} id="totalOpenAmount" value={data.totalOpenAmount}   type="text" placeholder='Total open Amount' name="Total open amount" />

      </div>
      <div>    
         
          <input  onChange={(e)=>handleAdd(e)} id="baselineCreateDate" value={data.baselineCreateDate} type="text" placeholder="Baseline Create Date" name="Baseline Create Date"   onFocus={e => (e.target.type = "date")}  />
          <input onChange={(e)=>handleAdd(e)} id="customerPaymentTerms" value={data.customerPaymentTerms} type="text" placeholder='Customer Payment Terms' name="Customer Payment Terms" />
          <input onChange={(e)=>handleAdd(e)} id="invoiceId" value={data.invoiceId} type="text" placeholder='Invoice id' name="Invoice Id" />
      </div>
      
        
          <DialogActions class='addinvoice-actions'>
         
            <Button  type='submit'  class='addinvoice-btn' disableRipple>ADD</Button>
            <Button onClick={handleClose} class='cancelinvoice-btn' disableRipple>CANCEL</Button>  
          </DialogActions>

      </form>
     
          </DialogContent>
          
        </Dialog>
      </div>
      
    );
}

export default AddingInvoice;






