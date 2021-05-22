import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Succes = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h4">Success</Typography>
        </Toolbar>
      </AppBar>

      <div>
        <h1 style={{ marginTop: "2em" }}>Thank you for your submisson</h1>
        <p>You will get an email with further instructions</p>
      </div>
    </>
  );
};

export default Succes;
