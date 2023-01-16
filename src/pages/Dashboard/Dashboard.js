import { Container } from "react-bootstrap";
import { TableOverview, CustomDropDown } from "./components";
import { DashboardProvider } from "./providers/DashboardProvider";

export const Dashboard = () => {
  return (
    <DashboardProvider>
      <Container className="d-flex gap-3 flex-column p-0 my-3">
        <CustomDropDown />
        <TableOverview />
      </Container>
    </DashboardProvider>
  );
};
