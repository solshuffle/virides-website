import styled from "@emotion/styled";
import theme from "../../theme/theme";
import img from "../../assets/plant-bg.jpg";

export const Background = styled.div`
  background-image: url(${img.src});
  background-position: bottom right;
  background-size: cover;
`;

export const Layout = styled.div`
  display: grid;
  grid-gap: ${theme.spacing(8)};
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  max-width: 44rem;
  padding: ${theme.spacing(8)};
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  max-height: ${theme.spacing(4)};

  svg {
    max-height: 100%;
  }
`;

export const Footer = styled.div``;

export const Hero = styled.div``;