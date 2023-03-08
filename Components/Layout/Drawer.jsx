import * as React from "react";
import { useTranslation } from "react-i18next";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import Dehaze from "@mui/icons-material/Dehaze";
import * as Styled from "./styles";

export default function NavDrawer() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  const { i18n } = useTranslation();

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <>
      <IconButton size="large" onClick={handleOpen}>
        <Dehaze fontSize="large" />
      </IconButton>
      <Styled.NavDrawer anchor={"right"} open={open} onClose={handleClose}>
        <MenuItem>DEVICES</MenuItem>
        <MenuItem>HOW IT WORKS</MenuItem>
        <MenuItem>CONTACT</MenuItem>
        <button onClick={changeLanguage} value="en">
          English
        </button>
        <button onClick={changeLanguage} value="es">
          Español
        </button>
      </Styled.NavDrawer>
    </>
  );
}
