import * as React from "react";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  MenuItem,
  Typography,
} from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as Styled from "./styles";
import Link from "next/link";

export default function NavDrawer() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  const { i18n, t } = useTranslation();

  function changeLanguage(e: React.ChangeEvent<any>) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <>
      <IconButton size="large" onClick={handleOpen}>
        <DehazeIcon fontSize="large" />
      </IconButton>
      <Styled.NavDrawer anchor={"right"} open={open} onClose={handleClose}>
        <MenuItem>
          <Link href={"/devices"}>{t("devices")}</Link>
        </MenuItem>
        <MenuItem>{t("how-it-works")}</MenuItem>
        <MenuItem>
          <Link href={"/contact"}>{t("contact")}</Link>
        </MenuItem>

        <Accordion disableGutters elevation={0} square>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{t("language")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <MenuItem component="button" onClick={changeLanguage} value="en">
              {t("english")}
            </MenuItem>
            <MenuItem component="button" onClick={changeLanguage} value="es">
              {t("spanish")}
            </MenuItem>
          </AccordionDetails>
        </Accordion>
      </Styled.NavDrawer>
    </>
  );
}
