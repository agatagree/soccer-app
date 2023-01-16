import { Container, Row, Col, Alert } from "react-bootstrap";
import { PlayersList } from "./PlayersList";

export const Teams = ({ data }) => {
  return (
    <>
      {data.statistics ? (
        <Container className="py-5 px-md-5">
          <Row className="gap-5">
            <Col>
              <PlayersList
                teamStatus={"home"}
                data={data.statistics.totals.competitors}
              />
            </Col>
            <Col>
              <PlayersList
                teamStatus={"away"}
                data={data.statistics.totals.competitors}
              />
            </Col>
          </Row>
        </Container>
      ) : (
        <Alert variant="light my-5 mx-1">No data</Alert>
      )}
    </>
  );
};
