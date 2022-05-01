
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';
 function DeletingInvoice(props) {
  const url="http://localhost:8080/HRCProject/deleteServlet";
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
     
      setOpen(true);
      
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    const deleteRecords=e=>
     {
      e.preventDefault();
      if(props.deleteinvoice==='')
      {
        window.alert("Please select atleast 1 record to delete ...")
      }
      
      else{
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          delString:props.deleteinvoiceid
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())

    .then(json=>{props.settingdeletesnackbar(true);setTimeout(()=>{props.settingdeletesnackbar(false)},1000);props.setdelete('');
    props.setdatafterdel(json)});
       setTimeout(()=>{handleClose()},300)
  }
    }
    return (
      <div >
        <Button variant="outlined"  onClick={handleClickOpen}  class='btn-delete'   disableRipple style={{cursor:'pointer'}}>
          DELETE
        </Button>
        
        <Dialog open={open}  onClose={handleClose} maxWidth='xs' >
          <DialogTitle className='del-title'>Delete Records ?</DialogTitle>
          <DialogContent style={{backgroundColor:'#2d4250',}}>
            <form>
            <DialogContentText class='content-delete'>
              Are you sure you want to delete these record[s] ?
            </DialogContentText>
            <DialogActions  style={{height:'40px',}}>
            <Button   onClick={handleClose} class='cancel-delete' disableRipple>CANCEL</Button>
            <Button type='submit' onClick={deleteRecords} class='sure-delete' disableRipple>DELETE</Button>
          </DialogActions>
            </form>
          </DialogContent>   
        </Dialog>
      </div>
    );
}

export default DeletingInvoice;
