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
import { useAuth } from "../context/useAuth";

const Header = () => {

  const auth = useAuth();


  const navigate = useNavigate();


  const handleLogout = () => {
  auth.logout();
    navigate("/");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ background: "rgb(64 64 64)" }}>
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
          {auth && <Button onClick={handleLogout} style={{color:"white"}}>ÇIKIŞ YAP</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
