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
    
      <button
  className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-8 rounded"
  onClick={handleOpen}
>
  Edit
</button>


        </div>
      <Dialog open={open} onClose={handleClose}>      
        <DialogContent>
          <DialogContentText>
           {/* Batch Form Content */}
            <EditBatchForm editd={props.item} batchDetails={props.batchDetails} open={open} handleClose={handleClose}/>
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