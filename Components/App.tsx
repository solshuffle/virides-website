import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Hero from "./Layout/Hero";
import * as Styled from "./Layout/styles";

const App: React.FC = () => (
  <Styled.Background>
    <Styled.Layout>
      <Header />
      <Hero />
      <Footer />
    </Styled.Layout>
  </Styled.Background>
);

export default App;
