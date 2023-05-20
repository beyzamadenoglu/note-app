import React from "react";
import Router from './router/Route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from "./components/Layout";
import "./styles/notes.scss";

function App() {
  return (
    <>
      <Layout>
        <Router />
        <ToastContainer />
      </Layout>


    </>
  );
}

export default App;