import { Nav } from "react-bootstrap";

export const Navigation = ({ setCurrentTab }) => {
  return (
    <Nav fill variant="tabs" defaultActiveKey="tab1">
      <Nav.Item>
        <Nav.Link eventKey="tab1" onClick={() => setCurrentTab("tab1")}>
          Timeline
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="tab2" onClick={() => setCurrentTab("tab2")}>
          Statistics
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="tab3" onClick={() => setCurrentTab("tab3")}>
          Teams
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
