import React from "react";
import NoteForm from "../components/NoteForm";

const UpdatePage = (id) => {
  return (
    <>
        <NoteForm typeForm={"update"} noteId={id} />
    </>
  )
}

export default UpdatePage