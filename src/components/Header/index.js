import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShinoLogo from "../../assets/icons/shinologo.jpg";
import PersistentDrawerRight from "../Drawer";

const pages = [
  "STACK",
  "BUYSHIND",
  "TOKENOMICS",
  "GITBOOK",
  "ROADMAP",
  "CONTACT",
];


const MainNav = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

 

  return (
    <AppBar position="static" sx={{ backgroundColor: "#252634" }}>
      <Container >
        <Toolbar disableGutters sx={{ height: "96px",display:"flex",justifyContent:"space-between" }}>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Box
            component="div"
            sx={{
              mr: 2,
              

              marginLeft:{xs:"0px",sm:"50px"},
              backgroundColor: "#b02922",
            }}
          >
            <img src={ShinoLogo} height="87px" />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
           
          </Box>
          
          {/* nav link */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", lg: "flex" },
              justifyContent: "end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                
                sx={{
                  my: 2,
                  color: "#fff",
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "700px",
                  paddingRight:"41px"
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box>
            <Tooltip title="Open settings">
              <Box component={"div"} sx={{display:"flex"}}>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "25px",
                    background: "#b02922",
                    color: "#252634",
                    borderWidth: "1px",
                    padding: "10px 20px",
                    marginRight:"66px",
                    fontFamily: "var(--font-family-heading)",
                    display:{xs:"none",sm:"flex"}
                  }}
                  startIcon={<AccountBalanceWalletIcon />}
                >
                  CONNECT WALLET
                </Button>

                {/* <Button onClick={handleDrawerOpen}>open</Button> */}
                <Box sx={{display:{lg:"none"},border:"1px solid #b02922",textAlign:"center"}}>

                <Box><PersistentDrawerRight/></Box>
                </Box>
              </Box>
            </Tooltip>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MainNav;
