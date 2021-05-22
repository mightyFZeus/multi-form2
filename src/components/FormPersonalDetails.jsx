import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  TextField,
  Button,
  Backdrop
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const FormPersonalDetails = ({ nextStep, backStep, handleChange, values }) => {
  const moveOn = (e) => {
    e.preventDefault();
    nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    backStep();
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
        label="city"
        name="city"
        variant="outlined"
        style={{ marginTop: "4rem", marginBottom: "1em" }}
        onChange={handleChange}
        defaultValue={values.city}
      />
      <br />
      <TextField
        variant="outlined"
        style={{ marginBottom: "1em" }}
        label="occupation"
        name="occupation"
        onChange={handleChange}
        defaultValue={values.occupation}
      />
      <br />
      <TextField
        
        variant="outlined"
        style={{ marginBottom: "1em" }}
        label="bio"
        name="bio"
        onChange={handleChange}
        defaultValue={values.bio}
      />
      <br />
      <Button onClick={moveOn} color='primary' variant="contained">
        next
      </Button>
      <Button onClick={back} color='secondary' variant="contained">
        back
      </Button>
    </>
  );
};

export default FormPersonalDetails;
Backdrop