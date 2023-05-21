import React, { useState} from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { toast } from "react-toastify";
import ReactImageFallback from "react-image-fallback";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import NotFoundImage from "../Images/NotFound";
import DeleteModal from "./DeleteModal";

import DeleteNote from "../services/Delete";

const Note = ({ note, onNoteDelete }) => {
  const [modalState, setModalState] = useState(false);

  const successMessage = () => {
    toast.success("Not silindi!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const errorMessage = () => {
    toast.error("Not silinemedi!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const deleteItem = (userApproval) => {
    setModalState(false);

    if (!userApproval) { return false };

    DeleteNote(note.id).then((data) => {
      if (data.status === 200) {
        onNoteDelete();
        successMessage();
      } else {
        errorMessage();
      }
    });

  };

  return (
    <>
    <div className="note">
      <DeleteModal open={modalState} handleClose={deleteItem} />
     <ReactImageFallback
        src={note.image.imagePreviewUrl}
        fallbackImage={<NotFoundImage />}
        alt="note_image"
        className=""
      />
      <p>{note.name}</p>
      <p>{note.information}</p>
      <p>{note.priority || "-"}</p>
      <IconButton className="button hovered" onClick={() => {setModalState(true)}}>
        <DeleteOutlinedIcon />
      </IconButton>
      <IconButton component={Link} to={`/updateNote/${note.id}`} className="button hovered">
        <ModeEditOutlineOutlinedIcon />
      </IconButton>
    </div>
    </>

  );
};

export default Note;
