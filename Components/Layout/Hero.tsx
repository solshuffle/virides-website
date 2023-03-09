import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import * as Styled from "./styles";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Styled.Hero>
      <Typography variant="h1" component="h1" gutterBottom>
        {t("slogan")}
      </Typography>
    </Styled.Hero>
  );
};
export default Hero;
