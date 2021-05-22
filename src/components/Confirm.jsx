import React from "react";
import {AppBar, List, ListItem,ListItemText, Toolbar, Button, Typography} from '@material-ui/core'

const Confirm = ({nextStep, values, backStep}) => {
  const moveOn = e =>{
    e.preventDefault()
    //Process form
    nextStep()
  }

   const back = (e) => {
    e.preventDefault();
    backStep();
  };
  return (
  
  <>
      <AppBar>
        <Toolbar>
        
          <Typography variant="h4">
           Confirm User Data
          </Typography>

        </Toolbar>
      </AppBar>
      <List>
        <ListItem style={{marginTop:'2em'}}>
          <ListItemText 
          primary="First Name"
          secondary={values.firstName}
          
          />
        </ListItem>
        <ListItem >
          <ListItemText 
          primary="last Name"
          secondary={values.lastName}
          
          />
        </ListItem>
        <ListItem >
          <ListItemText 
          primary="email"
          secondary={values.email}
          
          />
        </ListItem>
        <ListItem >
          <ListItemText 
          primary="occupation"
          secondary={values.occupation}
          
          />
        </ListItem>
        <ListItem >
          <ListItemText 
          primary="city"
          secondary={values.city}
          
          />
        </ListItem>
        <ListItem >
          <ListItemText 
          primary="bio"
          secondary={values.bio}
          
          />
        </ListItem>
        
      </List>
      <Button onClick={moveOn} color='primary' variant="contained">
       confirm and continue
      </Button>
      <Button onClick={back} color='secondary' variant="contained">
        back
      </Button>
  </>

  )
};

export default Confirm;
