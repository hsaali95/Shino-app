import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import TwitterIcon from "@mui/icons-material/Twitter";
import React, { useState } from "react";
import MainNav from "../../components/Header";
import { useStyles } from "../../CssFile";
import BasicTable from "../../components/Table";
import CustomCheckBox from "../../components/Box";
import CardShino from "../../components/Cards";

const Home = () => {
  const [active, setActive] = useState(1);
  const cardObject = [
    {
      text: "REWARD CLAIMED",
      NumbertEXT: "115506",
    },
    {
      text: "STAKER:",
      NumbertEXT: "104 PEOPLE",
    },
    {
      text: "TOTAL AMOUNT STAKED (SHINO):",
      NumbertEXT: "467152741",
    },
    {
      text: "TOTAL DISTRIBUTED AMOUNT TO REWARD (SHINO):",
      NumbertEXT: "-467152741",
    },
  ];
  const classes = useStyles();
  return (
    <>
      {/* Follow us section */}
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          background: "#1a191f",
          padding: "20px 0px",
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "100%", sm: "80%" },
          }}
        >
          <Grid
            item
            xs={12}
            md={8}
            lg={8}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography
              sx={{
                color: " #fff",
                fontFamily: " var(--font-family-heading)",
                fontWeight: "700",
                marginRight: "15px",
              }}
            >
              Follow us on :
            </Typography>
            <Box
              component="div"
              sx={{
                background: "#333442",
                borderRadius: "5px",
                border: "1px solid #28282e",
                textAlign: "center",
                boxShadow: "0 3px 5.58px 0.42px rgb(33 34 47 / 27%)",
                marginLeft: "4px",
              }}
            >
              <TwitterIcon
                sx={{
                  width: "35px",
                  height: "15px",
                  textAlign: "center",
                  color: "red",
                  padding: "5px 0px 5px 0px",
                }}
              />
            </Box>
            <Box
              component="div"
              sx={{
                background: "#333442",
                borderRadius: "5px",
                border: "1px solid #28282e",
                textAlign: "center",
                boxShadow: "0 3px 5.58px 0.42px rgb(33 34 47 / 27%)",
                marginLeft: "8px",
              }}
            >
              <TwitterIcon
                sx={{
                  width: "35px",
                  height: "15px",
                  textAlign: "center",
                  color: "red",
                  padding: "5px 0px 5px 0px",
                }}
              />
            </Box>
            <Box
              component="div"
              sx={{
                background: "#333442",
                borderRadius: "5px",
                border: "1px solid #28282e",
                textAlign: "center",
                boxShadow: "0 3px 5.58px 0.42px rgb(33 34 47 / 27%)",
                marginLeft: "8px",
              }}
            >
              <TwitterIcon
                sx={{
                  width: "35px",
                  height: "15px",
                  textAlign: "center",
                  color: "red",
                  padding: "5px 0px 5px 0px",
                }}
              />
            </Box>
            <Box
              component="div"
              sx={{
                background: "#333442",
                borderRadius: "5px",
                border: "1px solid #28282e",
                textAlign: "center",
                boxShadow: "0 3px 5.58px 0.42px rgb(33 34 47 / 27%)",
                marginLeft: "8px",
              }}
            >
              <TwitterIcon
                sx={{
                  width: "35px",
                  height: "15px",
                  textAlign: "center",
                  color: "red",
                  padding: "5px 0px 5px 0px",
                }}
              />
            </Box>
            <Box
              component="div"
              sx={{
                background: "#333442",
                borderRadius: "5px",
                border: "1px solid #28282e",
                textAlign: "center",
                boxShadow: "0 3px 5.58px 0.42px rgb(33 34 47 / 27%)",
                marginLeft: "8px",
              }}
            >
              <TwitterIcon
                sx={{
                  width: "35px",
                  height: "15px",
                  textAlign: "center",
                  color: "red",
                  padding: "5px 0px 5px 0px",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {/* End of follow us section */}
      {/* =================================================================================== */}

      {/* app bar */}
      <MainNav />
      {/* end of app bar */}
      {/* =================================================================================== */}

      {/* Shino heading */}
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          background: "#1a191f",
        }}
      >
        <Grid
          container
          sx={{ display: "dlex", justifyContent: "center", width: "80%" }}
        >
          <Grid item md={8}>
            <Box component="div">
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  color: "#b02922",
                  fontWeight: "800",
                  padding: "20px 0px 20px",
                  fontFamily: "var(--font-family-heading)",
                }}
              >
                SHINO STACKING DASHBOARD
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {/* end of shino heading */}
      {/* =================================================================================== */}

      {/* cards section  */}
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          background: "#1a191f",
        }}
      >
        <Card sx={{ width: "80%", background: "black" }}>
          <Grid
            container
            sx={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <Grid item xs={12} md={12}>
              <Typography
                variant="h4"
                color={"white"}
                sx={{
                  textAlign: "center",
                  fontSize: "22px",
                  fontWeight: "800",
                  mt: 2,
                  fontFamily: "var(--font-family-heading)",
                }}
              >
                STATS
              </Typography>
            </Grid>
            {/* card grid */}
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid
                container
                spacing={1}
                rowSpacing={{ xs: "15" }}
                col
                sx={{
                  padding: " 0px 10px 10px 10px",
                  marginTop:"24px"
                }}
                
              >
                {cardObject.map((value) => {
                  return (
                    <Grid item xs={12} sm={6}>
                      <CardShino text={value.text} number={value.NumbertEXT} />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            {/* end of card grid  */}
          </Grid>
        </Card>
      </Grid>
      {/* end of cards section */}
      {/* =================================================================================== 

      {/* <BasicTable/> */}
      {/* table section */}
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          background: "#1a191f",
          padding: "10px 0px 0px 0px",
        }}
      >
        <Card sx={{ width: "80%", background: "black" }}>
          <Grid
            container
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} md={12}>
              <Typography
                variant="h4"
                color={"white"}
                sx={{
                  textAlign: "center",
                  fontSize: "22px",
                  fontWeight: "800",
                  mt: 2,
                  fontFamily: "var(--font-family-heading)",
                }}
              >
                STAKE YOUR SHINO TOCKENS
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "#fff", marginTop: "46px" }}>
                Profit Description
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BasicTable />
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "5px 0px 5px 0px",
              }}
            >
              <Typography sx={{ color: "#fff", marginTop: "24px" }}>
                Select your Duration to stake SHINO
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <CustomCheckBox
                label="Had"
                active={active}
                setActive={setActive}
                id={3}
              />
              <CustomCheckBox
                label="Had"
                active={active}
                setActive={setActive}
                id={4}
              />
              <CustomCheckBox
                label="Had"
                active={active}
                setActive={setActive}
                id={5}
              />
              <CustomCheckBox
                label="Had"
                active={active}
                setActive={setActive}
                id={6}
              />
            </Grid>
            <Grid item xs={12} md={12} sx={{ marginTop: "10px" }}>
              <Card
                sx={{
                  backgroundColor: "#1a191f",
                  opacity: "90%",
                  padding: "8px 29px 0px 29px",
                  margin: "0px 15px",
                }}
              >
                <Grid container>
                  <Grid item xs={8} sm={8} md={8}>
                    <Box>
                      <Typography sx={{ color: "white" }}>
                        Amount(SHINO)
                      </Typography>
                      <TextField
                        placeholder="value"
                        size="small"
                        fullWidth
                        textInfo
                        sx={{ backgroundColor: "rgb(55, 47, 71)" }}
                      />
                      <Box sx={{ display: "flex" }}>
                        <Typography sx={{ color: "white" }}>
                          Amount(SHINO)
                        </Typography>
                        <Typography sx={{ color: "white" }}>
                          Amount(SHINO)
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sm={4}
                    md={4}
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Button variant="contained">MAX</Button>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid container>
              <Grid
                item
                md={12}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  margin: "23px 0px 23px 0px",
                }}
              >
                <Button variant="contained" sx={{ color: "white" }}>
                  AUTHORIZE
                </Button>
                <Button variant="contained" sx={{ color: "white" }}>
                  STAKE
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      {/* end of table section */}

      {/* ===================================================================================  */}

      {/* heading section */}
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          background: "#1a191f",
          padding: "10px 0px 0px 0px",
        }}
      >
        
          <Grid container sx={{ width: "80%" }}>
            <Grid item xs={12} md={12}>
              <Typography
                sx={{
                  fontSize: "35px",
                  color: "rgb(212, 212, 212)",
                  fontWeight: "800",
                  textAlign: "center",
                  background: "#1a191f",
                }}
              >
                YOUR SHINO STAKE
              </Typography>
            </Grid>
          </Grid>
        
      </Grid>
      {/* heading section  */}
      {/* ====================================================================================== */}
      {/* footer section */}
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "rgb(37, 38, 52)",
          padding: "10px 0px 0px 0px",
        }}
      >
        
          <Grid container sx={{width:"80%"}}>
            <Grid item xs={12} md={12}>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "rgb(200, 200, 200)",
                  fontWeight: "600",
                  textAlign: "center",
                  backgroundColor: "rgb(37, 38, 52)",
                }}
              >
                Follow Us
              </Typography>
            </Grid>
          </Grid>
        
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "rgb(37, 38, 52)",
          padding: "20px 0px",
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "100%", sm: "80%" },
          }}
        >
          <Grid
            item
            xs={12}
            md={8}
            lg={8}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              component="div"
              sx={{
                backgroundColor: " rgb(176, 41, 34)",
                borderRadius: "5px",
                border: "1px solid #28282e",
                textAlign: "center",
                boxShadow: "0 3px 5.58px 0.42px rgb(33 34 47 / 27%)",
                marginLeft: "4px",
              }}
            >
              <TwitterIcon
                sx={{
                  width: "35px",
                  height: "15px",
                  textAlign: "center",
                  color: " rgb(255, 255, 255)",
                  padding: "5px 0px 5px 0px",
                }}
              />
            </Box>
            <Box
              component="div"
              sx={{
                backgroundColor: " rgb(176, 41, 34)",
                borderRadius: "5px",
                border: "1px solid #28282e",
                textAlign: "center",
                boxShadow: "0 3px 5.58px 0.42px rgb(33 34 47 / 27%)",
                marginLeft: "4px",
              }}
            >
              <TwitterIcon
                sx={{
                  width: "35px",
                  height: "15px",
                  textAlign: "center",
                  color: " rgb(255, 255, 255)",
                  padding: "5px 0px 5px 0px",
                }}
              />
            </Box>
            <Box
              component="div"
              sx={{
                backgroundColor: " rgb(176, 41, 34)",
                borderRadius: "5px",
                border: "1px solid #28282e",
                textAlign: "center",
                boxShadow: "0 3px 5.58px 0.42px rgb(33 34 47 / 27%)",
                marginLeft: "4px",
              }}
            >
              <TwitterIcon
                sx={{
                  width: "35px",
                  height: "15px",
                  textAlign: "center",
                  color: " rgb(255, 255, 255)",
                  padding: "5px 0px 5px 0px",
                }}
              />
            </Box>
            <Box
              component="div"
              sx={{
                backgroundColor: " rgb(176, 41, 34)",
                borderRadius: "5px",
                border: "1px solid #28282e",
                textAlign: "center",
                boxShadow: "0 3px 5.58px 0.42px rgb(33 34 47 / 27%)",
                marginLeft: "4px",
              }}
            >
              <TwitterIcon
                sx={{
                  width: "35px",
                  height: "15px",
                  textAlign: "center",
                  color: " rgb(255, 255, 255)",
                  padding: "5px 0px 5px 0px",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "rgb(37, 38, 52)",
          padding: "10px 0px 0px 0px",
        }}
      >
        
          <Grid container sx={{ width: "80%",backgroundColor: "rgb(37, 38, 52)"}}>
            <Grid item xs={12} md={12}>
              <Typography
                sx={{
                  fontSize: "12.8px",
                  color: "rgb(200, 200, 200)",
                  fontWeight: "500",
                  textAlign: "center",
                  backgroundColor: "rgb(37, 38, 52)",
                  paddingBottom:"16px"
                }}
              >
                Copyright © 2022&nbsp;
                <a href="" style={{ color: "rgb(176, 41, 34)" }}>
                  Shino Kft
                </a>
                . All Rights Reserved.
              </Typography>
            </Grid>
          </Grid>
        
      </Grid>
      {/* end of footer section  */}
      {/* ========================================================================================= */}
    </>
  );
};

export default Home;
