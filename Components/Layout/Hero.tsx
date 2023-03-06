import { Typography } from "@mui/material";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { withTranslation } from "react-i18next";

import * as Styled from "./styles";

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation(["home", "main"]);

  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language); //change the language
  };

  return (
    // <Styled.Hero>
    //   <Typography variant="h1" component="h1" gutterBottom>
    //     Smart crops for lazy people.
    //   </Typography>
    // </Styled.Hero>
    <div className="align">
      <select
        className="custom-select"
        style={{ width: 200 }}
        onChange={onClickLanguageChange}
      >
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>

      <div>
        {t("line1")} <br />
      </div>
    </div>
  );
};

export default Hero;
