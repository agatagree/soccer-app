import { Container, Alert } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "pages/Dashboard";
import { SingleMatch } from "pages/SingleMatch";

export const AppRouter = () => {
  return (
    <Container className="flex-grow-1 my-5 d-flex flex-column">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/:id" element={<SingleMatch />} />
        <Route
          path="*"
          element={<Alert variant="light">Page, not found</Alert>}
        />
      </Routes>
    </Container>
  );
};
