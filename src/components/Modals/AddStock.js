import React, { useState } from "react";
import { Drawer, Button, Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import InputGroup from "../FormElements/InputGroup";
import SelectGroupOne from "../FormElements/SelectGroup/SelectGroupOne";

export default function AddStock() {
  const [open, setOpen] = React.useState(false);

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
      <button
        onClick={handleClickOpen}
        className="flex items-center justify-center rounded-[7px] bg-primary px-3 py-[7px] font-medium text-gray-2 hover:bg-opacity-90"
        type="submit"
      >
        + Add to stock
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add new Stock"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="rounded-[10px]   bg-white  dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
              <form action="#">
                <div className="p-6.5">
                  <div className="mb-4.5 flex flex-col gap-4.5 xl:flex-row">
                    <InputGroup
                      label="Product name"
                      type="text"
                      placeholder="Enter your first name"
                      customClasses="w-full xl:w-1/2"
                    />

                    <InputGroup
                      label="Cost"
                      type="number"
                      placeholder="cost price"
                      customClasses="w-full xl:w-1/2"
                    />
                  </div>
                  <div className="mb-4.5 flex flex-col gap-4.5 xl:flex-row">
                    <InputGroup
                      label="Expiry date"
                      type="date"
                      placeholder="Expiry date"
                      customClasses="w-full xl:w-1/2"
                    />

                    <InputGroup
                      label="Manufactured date"
                      type="date"
                      placeholder="Manufactured date"
                      customClasses="w-full xl:w-1/2"
                    />
                  </div>


                  <SelectGroupOne />

                  <div className="mb-6">
                    <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                      Description
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Type description"
                      className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                    ></textarea>
                  </div>

                  <button className="flex w-full justify-center rounded-[7px] bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
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
