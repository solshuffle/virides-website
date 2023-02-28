import { Typography } from "@mui/material";
import Logo from "./Logo";

const Header: React.FC = () => (
  <>
    <Logo />
    <Typography variant="h6" component="h2">
      Virides
    </Typography>
  </>
);

export default Header;
