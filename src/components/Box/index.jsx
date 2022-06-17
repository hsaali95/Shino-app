import { Button } from "@mui/material";
import React from "react";

const CustomCheckBox = ({ label, id, setActive, active }) => {
  return (
    <Button
      sx={{ border: "1px solid #ccc", marginRight: "10px" }}
      onClick={() => setActive(id)}
    >
      {active === id ? <span style={{ marginRight: "10px" }}>?</span> : null}
      {label}
    </Button>
  );
};

export default CustomCheckBox;
