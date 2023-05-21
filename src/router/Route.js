import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/LoginPage";
import Notes from "../pages/NotesPage";
import AddNote from "../pages/AddPage";
import Update from "../pages/UpdatePage";
import { ProtectedRoute } from "../utils/ProtectedRoute";


function Router() {
  return (
    <>
      <Routes>
      <Route
        path="/listNotes"
        element={
          <ProtectedRoute>
            <Notes />
          </ProtectedRoute>
        }
      />
       <Route
        path="/addNote"
        element={
          <ProtectedRoute>
            <AddNote />
          </ProtectedRoute>
        }
      />
       <Route
        path="/updateNote/:id"
        element={
          <ProtectedRoute>
            <Update />
          </ProtectedRoute>
        }
      />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default Router;
