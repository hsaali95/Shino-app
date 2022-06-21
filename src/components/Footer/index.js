import { Box, Grid, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";

const CommonFooter = () => {
  return (
    <>
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
        <Grid container sx={{ width: "80%" }}>
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
        <Grid
          container
          sx={{ width: "80%", backgroundColor: "rgb(37, 38, 52)" }}
        >
          <Grid item xs={12} md={12}>
            <Typography
              sx={{
                fontSize: "12.8px",
                color: "rgb(200, 200, 200)",
                fontWeight: "500",
                textAlign: "center",
                backgroundColor: "rgb(37, 38, 52)",
                paddingBottom: "16px",
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
    </>
  );
};

export default CommonFooter;
