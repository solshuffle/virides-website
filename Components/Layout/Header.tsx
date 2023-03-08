import { useTranslation } from "react-i18next";

import NavDrawer from "./Drawer";
import LogoName from "./LogoName";
import * as Styled from "./styles";

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Styled.Header>
      <LogoName />
      <h6>{t("home")}</h6>
      <h6>{t("page2")}</h6>
      <NavDrawer />
    </Styled.Header>
  );
};

export default Header;
