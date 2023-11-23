import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditForm from './EditForm';


function MyModal(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='my-4'>
      <Button variant="contained" onClick={handleOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose} sx={{
          '& .MuiDialog-paper': {
            width: '-webkit-fill-available', // Apply the custom width
          },
        }}>
        <DialogTitle>Edit Fees Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <EditForm fees_data={props?.fees_data} name={props.name} total_fees={props.total_fees}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          {/* Add more actions or buttons here */}
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default MyModal;  