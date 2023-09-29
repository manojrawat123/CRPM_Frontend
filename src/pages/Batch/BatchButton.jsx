import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import AddBatchForm from './AddBatchForm';

function BatchButton() {
    
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <div className='text-center m-4'>
      <Button variant="outlined" onClick={handleOpen}>
      Create New Batch
      </Button>
        </div>
      <Dialog open={open} onClose={handleClose}>      
        <DialogContent>
          <DialogContentText>
           {/* Batch Form Content */}
           <AddBatchForm />
           {/* Batch Form Content End */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>          
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default BatchButton;