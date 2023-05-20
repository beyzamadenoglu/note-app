import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { toast } from "react-toastify";
import ReactImageFallback from "react-image-fallback";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
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
    <div className="note">
     <ReactImageFallback
        src={note.image.imagePreviewUrl}
        fallbackImage={<NotFoundImage />}
        alt="note_image"
        className=""
      />
      <p>{note.name}</p>
      <p>{note.information}</p>
      <p>{note.priority}</p>
      <IconButton className="button hovered" onClick={deleteItem}>
        <DeleteOutlinedIcon />
      </IconButton>
      <IconButton component={Link} to={`/updateNote/${note.id}`} className="button hovered">
        <ModeEditOutlineOutlinedIcon />
      </IconButton>
    </div>
  );
};

export default Note;
