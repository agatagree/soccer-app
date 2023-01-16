import { Container } from "react-bootstrap";
import { TableOverview } from "./components";

export const Dashboard = () => {
  return (
    <Container className="d-flex gap-3 flex-column p-0 my-3">
      <TableOverview />
    </Container>
  );
};
