import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { ButtonGroup, Theme } from '@material-ui/core';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
// {children},
export default function CustomizedDialogs({children,...otherProps}) {
  const [open, setOpen] = React.useState(false);

  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    console.log("clicked")
  };
// backgroundColor:'gray',width:'30px',height:'50px'
  return (
    <div class='holder' >
      <Button style={{color:'white',}}variant="outlined" onClick={handleClickOpen} class={otherProps.className}>
       {otherProps.title}
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth='xl'
        
        
      >
        {/* <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        {otherProps.title}
        </BootstrapDialogTitle> */}
        <div className='popup-head'>
        {otherProps.heading}
        </div>
        {/* 320 */}
        <DialogContent dividers  style={{height:'350px',backgroundColor:'#2d4250'}}  >
          {children}
        </DialogContent>
         <DialogActions style={{backgroundColor:'#2d4250'}}>
         {/* <button className='addinvoice-btn' onClick={handleClick}>ADD</button> */}
         {/* style={{width:'450px',height:'45px',marginTop:'27px',border: '2px solid white', color:'white',}} */}
          {/* <button autoFocus onClick={handleClose} class='saved' style={{width:'450px',height:'45px',marginTop:'28px',borderRadius:'3px',border: '2px solid white', color:'white',}}  >
            CANCEL
          </button>  */}
          
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
