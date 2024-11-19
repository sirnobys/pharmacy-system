import React, { useState } from "react";
import { Drawer, Button, Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import InputGroup from "../FormElements/InputGroup";
import SelectGroupOne from "../FormElements/SelectGroup/SelectGroupOne";
import Invoice from '@/components/invoice/Invoice';

export default function InvoiceModal(props) {

  const [open, setOpen] = React.useState(false);
  console.log(props);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <div>

      {
        props.invoiceDetails?.length !== 0 ?
          <button
            onClick={handleClickOpen}
            className="flex items-center justify-center rounded-[7px] bg-primary px-3 py-[7px] font-medium text-gray-2 hover:bg-opacity-90"
            type="submit"
          >
            print preview
          </button> : ''

      }
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Invoice invoiceDetails={props.invoiceDetails} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
