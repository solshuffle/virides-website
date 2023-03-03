import { Typography } from "@mui/material";
import * as Styled from "./styles";

const Hero: React.FC = () => {
  return (
    <Styled.Hero>
      <Typography variant="h1" component="h1" gutterBottom>
        Smart crops for lazy people.
      </Typography>
    </Styled.Hero>
  );
};

export default Hero;
