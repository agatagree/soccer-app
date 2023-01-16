import { Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <Container fluid className="bg-white py-3">
      <p className="m-0">&copy; {new Date().getFullYear()} xyz</p>
    </Container>
  );
};
