import styled from "@emotion/styled";
import theme from "../../theme/theme";
import img from "../../assets/plant-bg.png";
import imgMobile from "../../assets/plant-bg-mobile.png";
import { Drawer } from "@mui/material";

export const Background = styled.div`
  background-image: url(${imgMobile.src});
  background-position: bottom right;
  background-size: cover;

  @media screen and (min-width: 570px) {
    background-image: url(${img.src});
  }
`;

export const Layout = styled.div`
  display: grid;
  grid-gap: ${theme.spacing(8)};
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  max-width: 45rem;
  padding: ${theme.spacing(8)};
  font-family: "Montserrat";
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: ${theme.spacing(5)};

  svg {
    max-height: 100%;
  }
`;

export const Footer = styled.div`
  p {
    font-weight: 600;
  }
`;

export const NavDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    padding: ${theme.spacing(4)};
    min-width: 20vw;
  }
`;
