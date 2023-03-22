import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import * as Styled from "./styles";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <Styled.Background>
    <Styled.Layout>
      <Header />
      {children}
      <Footer />
    </Styled.Layout>
  </Styled.Background>
);

export default Layout;
