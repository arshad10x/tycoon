import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TextField from '@mui/material/TextField';
import Model from "./assets/tshirt.png"; 
import Logo from "./assets/logo.png"; 

export default function AlertDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true); 
  }, []); 

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md" 
      >
        <DialogTitle id="alert-dialog-title">
          <CloseIcon
            onClick={handleClose}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: "8px",
              right: "8px",
            }}
          />
        </DialogTitle>
        <DialogContent style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={Model} alt="Model" className="model_img" style={{ width: "85%", backgroundColor:"gray"}} />
          </div>
          <div style={{ flex: 1 }}>
            <DialogContentText id="alert-dialog-description">
            <div style={{flex: 1 }}>
            <img src={Logo} alt="Model"  style={{ width: "100%"}} />
          </div>
              {/* <h1 style={{ textTransform: 'uppercase' }}>tycoon couture</h1> */}
              <p style={{fontSize:'1rem', marginBottom:"-3rem"}}>
                Apologies for any inconvenience. Our website is currently under
                construction. For orders, you can reach us on Instagram, We are happy
                to assist you.
              </p>
{/*               <TextField
                id="email-input"
                label="Enter your Email"
                variant="outlined"
                fullWidth
                style={{ marginTop: '5rem',}}
              />
              <Button variant="contained" className="btn" style={{ marginTop: '16px', backgroundColor:"#DEAF66", }}>Join</Button> */}
            </DialogContentText>
          </div>
        </DialogContent>
        
        <DialogActions>
        <div className="icons" style={{ textAlign: "right", marginTop: "0px"}}>
          <InstagramIcon
            style={{ marginRight: "8px",  cursor: "pointer" }}
            onClick={() => window.open("https://www.instagram.com/tycoon.couture/?igsh=MW96N3BoNHM4Z2hheA%3D%3D")}
          />
       <EmailIcon
              style={{ marginRight: "8px",  cursor: "pointer" }}
              onClick={() => window.open("mailto:support@tycooncouture.com")}
            />
        </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
