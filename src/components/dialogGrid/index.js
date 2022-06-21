import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box } from "@mui/system";
import Icon1 from "../../assets/icons/icon1.png";

const emails = ["username@gmail.com", "user02@gmail.com"];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Typography>Grid</Typography>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function DialogGrid() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Box
      component={"div"}
      sx={{ background: "rgba(255, 222, 106, 0.2)", borderRadius: "19px" }}
    >
      <Button
        endIcon={<KeyboardArrowDownIcon />}
        // startIcon={<Icon1 />}

        onClick={handleClickOpen}
        sx={{
          color: "rgb(255, 255, 255)",
          fontSize: "14px",
          fontWeight: "600",
          border: "1px solid rgb(253, 193, 19)",
          borderRadius: "19px",
          "&.css-1yb8sy7-MuiButtonBase-root-MuiButton-root:hover": {
            border: "1px solid rgb(253, 193, 19)",
          },
        }}
      >
        <span>
          <img
            src={Icon1}
            alt="image"
            height="28px"
            style={{
              display: "block",
              verticalAlign: "middle",
              paddingRight: "5px",
            }}
          />
        </span>{" "}
        BNB
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </Box>
  );
}
