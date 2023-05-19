import React from "react";
import IconButton from "@mui/material/IconButton";
import { toast } from "react-toastify";
import ReactImageFallback from "react-image-fallback";
import NotFoundImage from "../Images/NotFound";


import DeleteNote from "../services/Delete";

const Note = ({ note }) => {
  const successMessage = () => {
    toast.success("Succesfully Deleted!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const errorMessage = () => {
    toast.error("Note did not deleted!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const deleteItem = () => {
    DeleteNote(note.id).then((data) => {
      if (data.status === 200) {
        successMessage();
      } else {
        errorMessage();
      }
    });
  };
  return (
    <div>
      <p>{note.information}</p>
      <p>{note.priority}</p>
      <ReactImageFallback
                    src={note.image.imagePreviewUrl}
                    fallbackImage={<NotFoundImage />}
                    alt="note_image"
                    className="" />
      <IconButton className="button" onClick={deleteItem}>
        sill
      </IconButton>
    </div>
  );
};  

export default Note;
