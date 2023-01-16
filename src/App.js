import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "routes/AppRouter";
import "./styles/global.css";
import { Header, Footer } from "components";

export const App = () => {
  return (
    <BrowserRouter>
      <Container fluid className="min-vh-100 d-flex flex-column p-0 bg-light">
        <Header />
        <AppRouter />
        <Footer />
      </Container>
    </BrowserRouter>
  );
};
