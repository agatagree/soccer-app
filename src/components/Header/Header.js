import { Navbar, Container } from "react-bootstrap";
import { GiSoccerBall } from "react-icons/gi";
import { LinkContainer } from "react-router-bootstrap";

export const Header = () => {
  return (
    <Navbar className="bg-white shadow-sm">
      <Container fluid="xxl">
        <LinkContainer to="/">
          <Navbar.Brand className="d-flex gap-2 align-items-center">
            <GiSoccerBall /> Soccer
          </Navbar.Brand>
        </LinkContainer>
      </Container>
    </Navbar>
  );
};
