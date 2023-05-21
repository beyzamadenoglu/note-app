import React, { useEffect, useState } from "react";
import { Button, Box, InputBase } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import { useAuth } from "../context/useAuth";

import "../styles/login.scss";

const initialValues = {
  username: "",
  password: "",
};

const LoginForm = () => {

  const auth = useAuth();

  const handleLogin = async (credentials) => {
    if (
      credentials.username === "admin" &&
      credentials.password === "12345"
    ) {
      auth.login();
    } else {
      toast.error("Kullanıcı adınız veya Şifreniz Hatalı.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };


  return (
    <div className="login-form">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, formikHelpers) => {
          handleLogin(values);
          formikHelpers.resetForm();
        }}
      >
        {() => (
          <Form className="credentials-form">
            <h1>Login</h1>
            <span>Username</span>
            <Field
              name="username"
              type="text"
              placeholder="username"
              as={InputBase}
              variant="filled"
              fullWidth
            />
            <span>Şifre</span>
            <Field
              name="password"
              type="password"
              as={InputBase}
              variant="filled"
              fullWidth
            />
            <Box height={16} />
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="secondary"
              style={{
                borderRadius: "8px",
                padding: "2px 20px",
                fontSize: "18px",
                color: "#FFFFFF",
                textTransform: "none",
              }}
            >
              Login
            </Button>
            <br />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
