import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/LoginPage";
import Notes from "../pages/NotesPage";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </>
  );
}

export default Router;
