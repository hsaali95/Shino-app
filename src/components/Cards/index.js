import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from '../../CssFile'

const CardShino = ({text,number}) => {
  const classes = useStyles()
  return (
    <>
         <Card
                    sx={{
                      background: "#1a191f",
                      opacity: "90%",
                      // padding: "0px 0px 0px 0px",
                      // paddingBottom: "11px",
                      // paddingTop: "2px",
                      borderRadius: "6px",
                      
                    }}
                    className={classes.Card_Setting}
                  >
                    <CardContent 
                    sx={{height:{lg:"71px",md:"128px",sm:"106px"}}}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          textAlign: "center",
                          color: "#b02922",
                          fontWeight: "800",
                          fontFamily: "var(--font-family-heading)",
                          // marginBottom: "8px",
                          fontSize: "18px",
                          
                        }}
                      >
                        {text}
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          textAlign: "center",
                          fontWeight: "800",
                          fontFamily: "var(--font-family-heading)",
                          color: "#fff",
                          // marginBottom: "8px",
                          fontSize: "35px",
                        }}
                      >
                        {number}
                      </Typography>
                    </CardContent>
                  </Card>
    </>
  )
}

export default CardShino