import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import AddBatchForm from './AddBatchForm';
import EditBatchForm from './EditBatchById';

function EditBatchButton(props) {
    
  const [open, setOpen] = useState(false);
  const item = props.item 

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='inline-block'>
        <div className='text-center m-4'>
      <Button variant="outlined" onClick={handleOpen}>
      Edit
      </Button>
        </div>
      <Dialog open={open} onClose={handleClose}>      
        <DialogContent>
          <DialogContentText>
           {/* Batch Form Content */}
            <EditBatchForm editd={props.item} batchDetails={props.batchDetails}/>
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

export default EditBatchButton;