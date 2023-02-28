import { Link, Typography } from "@mui/material";

const Copyright: React.FC = () => (
  <Typography variant="body2" align="center">
    {"Copyright © "}
    <Link color="inherit" href="https://mui.com/">
      Your Website
    </Link>{" "}
    {new Date().getFullYear()}.
  </Typography>
);

export default Copyright;
