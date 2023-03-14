import NavDrawer from "./Drawer";
import LogoName from "./LogoName";
import * as Styled from "./styles";

const Header: React.FC = () => (
  <Styled.Header>
    <LogoName />
    <NavDrawer />
  </Styled.Header>
);

export default Header;
