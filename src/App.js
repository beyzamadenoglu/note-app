import React from "react";
import Router from './router/Route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  "./styles/notes.scss";

function App() {
  return (
    <>
      <Router />
      <ToastContainer />

    </>
  );
}

export default App;