import React from "react";
import { Button, Fab, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FingerprintIcon from '@mui/icons-material/Fingerprint';

export const MuiButton = () => {
  return <div style={{ textAlign: "center" }}>
    <h1>MuiButton</h1>
    <Button variant="contained" size="small" color="error">DEMO</Button>
    <Button variant="text" color="success">DEMO</Button>
    <Button variant="outlined" size="large" sx={{color:"white",backgroundColor:"black"}}>DEMO</Button>
    <Button startIcon={<SendIcon/>} variant="contained" >send</Button>
    <IconButton >
        <SendIcon/>
    </IconButton>
    <Fab>
    <FingerprintIcon/>
    </Fab>
  </div>;
};
