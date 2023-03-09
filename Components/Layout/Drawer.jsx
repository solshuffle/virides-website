import * as React from "react";
import { useTranslation } from "react-i18next";
import MenuItem from "@mui/material/MenuItem";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Typography,
} from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
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
        <DehazeIcon fontSize="large" />
      </IconButton>
      <Styled.NavDrawer anchor={"right"} open={open} onClose={handleClose}>
        <MenuItem>DEVICES</MenuItem>
        <MenuItem>HOW IT WORKS</MenuItem>
        <MenuItem>CONTACT</MenuItem>

        <Accordion disableGutters elevation={0} square>
          <AccordionSummary
            expandIcon={<DehazeIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

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
