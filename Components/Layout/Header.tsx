// import NavDrawer from "./NavDrawer";
// import LogoName from "./LogoName";
// import * as Styled from "./styles";

// const Header: React.FC = () => (
//   <Styled.Header>
//     <LogoName />
//     <NavDrawer />
//   </Styled.Header>
// );

// export default Header;

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const handleLocaleChange = (event: React.ChangeEvent<any>): void => {
    const value = event.target.value;

    router.push(router.route, router.asPath, {
      locale: value,
    });
  };

  return (
    <header>
      <select onChange={handleLocaleChange} value={router.locale}>
        <option value="en">English</option>
        <option value="es">espanol</option>
        <option value="fr">french</option>
      </select>
    </header>
  );
};

export default Header;
