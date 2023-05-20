import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Logo from "../Images/Logo";
import NoteAdd from "../Images/NoteAdd";
import { Link } from "react-router-dom";

const Header = () => {

  const [auth, setAuth] = useState(false);
  const isAuth = JSON.parse(localStorage.getItem("auth"));

  const navigate = useNavigate();

  useEffect(() => {
   setAuth(isAuth);
  }, [isAuth]);

  const handleLogout = () => {
    localStorage.setItem("auth", false);
    navigate("/");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ background: "#000000" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component={Link}
            to="/listNotes"
          >
            <Logo />
          </IconButton>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component={Link}
            to="/addNote"
          >
            <NoteAdd />
          </IconButton>
          {auth && <Button onClick={handleLogout} color="secondary">ÇIKIŞ YAP</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
