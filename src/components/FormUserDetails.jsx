import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  TextField,
  Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const FormUserDetails = ({ nextStep, handleChange, values }) => {
  const moveOn = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h4">Enter User Details</Typography>
        </Toolbar>
      </AppBar>

      <TextField
        label="first name"
        name="firstName"
        variant="outlined"
        style={{ marginTop: "4rem", marginBottom: "1em" }}
        onChange={handleChange}
        defaultValue={values.firstName}
      />
      <br />
      <TextField
        variant="outlined"
        style={{ marginBottom: "1em" }}
        label="last name"
        name="lastName"
        onChange={handleChange}
        defaultValue={values.lastName}
      />
      <br />
      <TextField
        type="email"
        variant="outlined"
        style={{ marginBottom: "1em" }}
        label="email"
        name="email"
        onChange={handleChange}
        defaultValue={values.email}
      />
      <br />
      <Button color="primary" onClick={moveOn} variant="contained">
        next
      </Button>
    </>
  );
};

export default FormUserDetails;
