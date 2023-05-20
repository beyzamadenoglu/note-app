import React, { useEffect, useState } from "react";
import { Button, Box, InputBase } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { toast } from "react-toastify";

import "../styles/login.scss";

const initialValues = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const [auth, setAuth] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    if (
      credentials.username === "admin" &&
      credentials.password === "12345"
    ) {
      setAuth((prev) => !prev);
    } else {
      toast.error("Kullanıcı adınız veya Şifreniz Hatalı.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("auth", auth);
    console.log(auth)
    if(auth) {
        navigate("/listNotes");
    }else{
        navigate("/");
    }
  }, [auth]);

  return (
    <div className="login-form">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
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
              style={{
                borderRadius: "8px",
                backgroundColor: "rgb(248 211 149 / 48%)",
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
