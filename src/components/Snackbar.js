import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

 function CustomizedSnackbars(props) {
    React.useEffect(()=>{setOpen(props.setvisible)},[props])
    const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
     
      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Record Added Sucessfully !
          
        </Alert>
      </Snackbar>
      
    </Stack>
  );
}
function CustomizedSnackbarsEdit(props) {
   
    React.useEffect(()=>{setOpen(props.seteditsnackbar)},[props])
    const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
         
          {props.message}
        </Alert>
      </Snackbar>
    </Stack>
  );

}

function CustomizedSnackbarsDelete(props) {
  
  React.useEffect(()=>{setOpen(props.setdeletesnackbar)},[props])
  const [open, setOpen] = React.useState(false);
const handleClick = () => {
  setOpen(true);
};

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};

return (
  <Stack spacing={2} sx={{ width: '100%' }}>
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Record Deleted Successfully !!
      </Alert>
    </Snackbar>
  </Stack>
);
}


export default CustomizedSnackbars;
export { CustomizedSnackbarsEdit};
export {CustomizedSnackbarsDelete};