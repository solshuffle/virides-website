import * as React from "react";
import Link from "next/link";
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

  return (
    <>
      <IconButton size="large" onClick={handleOpen}>
        <Dehaze fontSize="large" />
      </IconButton>
      <Styled.NavDrawer anchor={"right"} open={open} onClose={handleClose}>
        <MenuItem>DEVICES</MenuItem>
        <MenuItem>
          <Link href="/how-it-works">HOW IT WORKS</Link>
        </MenuItem>
        <MenuItem>CONTACT</MenuItem>
      </Styled.NavDrawer>
    </>
  );
}
