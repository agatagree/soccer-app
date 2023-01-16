import { Dashboard } from "pages/Dashboard";
import { Container } from "react-bootstrap";
import "./styles/global.css";

export const App = () => {
  return (
    <Container fluid className="min-vh-100 d-flex flex-column p-0 bg-light">
      <Dashboard />
    </Container>
  );
};
