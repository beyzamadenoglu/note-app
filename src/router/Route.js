import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/LoginPage";
import Notes from "../pages/NotesPage";
import AddNote from "../pages/AddPage";
import Update from "../pages/UpdatePage";


function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listNotes" element={<Notes />} />
        <Route path="/addNote" element={<AddNote />} />
        <Route path="/updateNote/:id" element={<Update />}/>
      </Routes>
    </>
  );
}

export default Router;
