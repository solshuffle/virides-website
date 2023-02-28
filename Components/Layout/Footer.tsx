import { Link, Typography } from "@mui/material";
import * as Styled from "./styles";

const Footer: React.FC = () => (
  <Styled.Footer>
    <Typography variant="body2">
      Copyright © Virides {new Date().getFullYear()}.
    </Typography>
    <Typography variant="body2">
      Photo by{" "}
      <Link
        color="inherit"
        href="https://unsplash.com/pt-br/@joshcala?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      >
        Josh Calabrese
      </Link>{" "}
      on{" "}
      <Link
        color="inherit"
        href="https://unsplash.com/photos/XXpbdU_31Sg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      >
        Unsplash
      </Link>
    </Typography>
  </Styled.Footer>
);

export default Footer;
