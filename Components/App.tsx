import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ProTip from "./ProTip";
import Copyright from "./Copyright";
import Header from "./Header";

const App: React.FC = () => (
  <Container maxWidth="sm">
    <Header />
    <Typography variant="h1" component="h1" gutterBottom>
      Smart crops for lazy people
    </Typography>
    <ProTip />
    <Copyright />
  </Container>
);

export default App;
