import React from "react";
import Router from './router/Route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from "./components/Layout";
import "./styles/notes.scss";
import { AuthProvider } from "./context/useAuth";

function App() {
  return (
    <>
    <AuthProvider>
    <Layout>
        <Router />
        <ToastContainer />
      </Layout>
    </AuthProvider>
     


    </>
  );
}

export default App;