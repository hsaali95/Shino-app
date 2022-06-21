import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";

const FollowUs = () => {
  return (
    <>
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
    </>
  );
};

export default FollowUs;
