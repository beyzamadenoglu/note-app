import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/LoginPage";
import Notes from "../pages/NotesPage";
import NoteForm from "../components/NoteForm";


function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listNotes" element={<Notes />} />
        <Route path="/addNote" element={<NoteForm />} />
      </Routes>
    </>
  );
}

export default Router;
