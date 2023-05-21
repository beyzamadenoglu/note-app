import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const DeleteModal = ({ open, handleClose}) => {
  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        onClose={() => handleClose(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Notu silmek istediğinize emin misiniz?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           Bu notu silmek istiyor musunuz?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)}>Silme</Button>
          <Button onClick={() => handleClose(true)}>Sil</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteModal;
