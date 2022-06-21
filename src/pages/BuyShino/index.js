import { Button, Grid, Input, TextField, Typography } from "@mui/material";
import React from "react";
import FollowUs from "../../components/FollowUs";
import CommonFooter from "../../components/Footer";
import MainNav from "../../components/Header";
import Bg2 from "../../assets/images/2.jpg";
import { Box } from "@mui/system";
import SettingsIcon from "@mui/icons-material/Settings";
import HistoryIcon from "@mui/icons-material/History";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SendIcon from "@mui/icons-material/Send";
import DialogGrid from "../../components/dialogGrid";

const BuyShino = () => {
  return (
    <>
      <FollowUs />
      <MainNav />
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${Bg2})`,
          width: "100%",
          backgroundSize: "cover",
        }}
      >
        <Grid
          container
          sx={{
            width: { lg: "43%", md: "70%", sm: "80%", xs: "100%" },
            // height: "780px",
            backgroundColor: "rgb(30,39,53)",
            opacity: "63%",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            marginTop:"80px"
          }}
        >
          <Grid item xs={12}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "20px",
                cursor: "pointer",
                fontWeight: "400",
                marginTop:"32px",
                marginBottom:"10px"
              }}
            >
              Bogged Finance DEX Aggregator
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box
              component={"div"}
              sx={{
                color: "#fff",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  padding: "2px 6px",
                  background: "rgba(255, 222, 106, 0.2)",
                  borderRadius: "18px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "13px",
                }}
              >
                <Typography
                  sx={{ fontSize: "10.8px", color: "rgb(253, 193, 19)" }}
                >
                  10 Gwei
                </Typography>
              </Box>
              <span style={{ paddingRight: "13px" }}>
                <LocalGasStationIcon />
              </span>
              <span style={{ paddingRight: "13px" }}>
                <HistoryIcon />
              </span>
              <span>
                <SettingsIcon />
              </span>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box component={"div"} sx={{ marginTop: "12px" }}>
              <Box
                component={"div"}
                sx={{
                  border: "1px solid rgb(49, 61, 80)",
                  borderRadius: "16px",
                  padding: "0px 16px",
                }}
              >
                <Box component={"div"} sx={{ paddingTop: "16px" }}>
                  <span
                    style={{
                      color: "rgb(27, 200, 112)",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    From
                  </span>
                </Box>
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px",
                  }}
                >
                  <Box component={"div"}>
                    <Input
                      placeholder="0.00"
                      fullWidth
                      size="medium"
                      sx={{
                        color: "white",
                        fontSize: "20px",
                        border: "none",
                        "&.MuiInput-underline:after": {
                          borderColor: "rgb(30, 39, 53)",
                        },
                        "&.MuiInput-underline:focus": {
                          borderColor: "rgb(30, 39, 53)",
                        },
                        "&.Mui-focused": {
                          borderColor: "rgb(30, 39, 53)",
                        },
                      }}
                    />
                    <span>0X1532..4cbdx</span>
                  </Box>
                  <Box
                    component={"div"}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "rgb(253, 193, 19)",
                        fontSize: "16px",
                        fontWeight: "600",
                        marginRight: "16px",
                      }}
                    >
                      Max
                    </span>
                    <DialogGrid />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box component={"div"} sx={{ marginTop: "12px" }}>
              <Box
                component={"div"}
                sx={{
                  border: "1px solid rgb(49, 61, 80)",
                  borderRadius: "16px",
                  padding: "0px 16px",
                }}
              >
                <Box component={"div"} sx={{ paddingTop: "16px" }}>
                  <span
                    style={{
                      color: "rgb(27, 200, 112)",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    From
                  </span>
                </Box>
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px",
                  }}
                >
                  <Box component={"div"}>
                    <Input
                      placeholder="0.00"
                      fullWidth
                      size="medium"
                      sx={{
                        color: "white",
                        fontSize: "20px",
                        border: "none",
                        "&.MuiInput-underline:after": {
                          borderColor: "rgb(30, 39, 53)",
                        },
                        "&.MuiInput-underline:focus": {
                          borderColor: "rgb(30, 39, 53)",
                        },
                        "&.Mui-focused": {
                          borderColor: "rgb(30, 39, 53)",
                        },
                      }}
                    />
                  </Box>
                  <Box
                    component={"div"}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "rgb(253, 193, 19)",
                        fontSize: "16px",
                        fontWeight: "600",
                        marginRight: "16px",
                      }}
                    >
                      Max
                    </span>
                    <DialogGrid />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box component={"div"} sx={{ marginTop: "12px" }}>
              <Box
                component={"div"}
                sx={{
                  border: "1px solid rgb(49, 61, 80)",
                  borderRadius: "16px",
                  padding: "0px 16px",
                }}
              >
                <Box component={"div"} sx={{ paddingTop: "16px" }}>
                  <span
                    style={{
                      color: "rgb(27, 200, 112)",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    From
                  </span>
                </Box>
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px",
                  }}
                >
                  <Box component={"div"}>
                    <Input
                      placeholder="0.00"
                      fullWidth
                      size="medium"
                      sx={{
                        color: "white",
                        fontSize: "20px",
                        border: "none",
                        "&.MuiInput-underline:after": {
                          borderColor: "rgb(30, 39, 53)",
                        },
                        "&.MuiInput-underline:focus": {
                          borderColor: "rgb(30, 39, 53)",
                        },
                        "&.Mui-focused": {
                          borderColor: "rgb(30, 39, 53)",
                        },
                      }}
                    />
                  </Box>
                  <Box
                    component={"div"}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "rgb(253, 193, 19)",
                        fontSize: "16px",
                        fontWeight: "600",
                        marginRight: "16px",
                      }}
                    >
                      Max
                    </span>
                    <DialogGrid />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
         
        </Grid>
      </Grid>
      <CommonFooter />
    </>
  );
};

export default BuyShino;
