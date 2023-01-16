import { Card, Container, Col, Row } from "react-bootstrap";
import dayjs from "dayjs";

export const MainInfo = ({ data }) => {
  return (
    <Card className="px-4 shadow-sm">
      <Container className="border-bottom d-flex justify-content-between align-items-center py-4 gap-4">
        <p>{data.sport_event_status.status}</p>
        <h6 className="text-uppercase text-center fw-bold">
          {data.sport_event.sport_event_context.season.name}
        </h6>
        <p>{data.sport_event.sport_event_context.category.name}</p>
      </Container>
      <Container className="border-bottom py-5">
        <Row className="align-items-center pt-5 flex-nowrap">
          <Col>
            <h5 className="text-end">{data.sport_event.competitors[0].name}</h5>
          </Col>
          <Col>
            <h1 className="text-nowrap text-center fw-bold">
              {data.sport_event_status.home_score} -{" "}
              {data.sport_event_status.away_score}
            </h1>
          </Col>
          <Col>
            <h5>{data.sport_event.competitors[1].name}</h5>
          </Col>
        </Row>
        <Container className="text-nowrap text-center text-secondary">
          <p className="m-0 pt-2">Half time:</p>
          <p className="fw-bold">
            {data.sport_event_status.status === "closed"
              ? `${data.sport_event_status.period_scores[0].home_score} : ${data.sport_event_status.period_scores[0].away_score}`
              : "-"}
          </p>
        </Container>
      </Container>
      <Container className="py-4">
        <Row className="align-items-center flex-nowrap align-middle fw-bold text-secondary">
          <Col>
            <p className="text-nowrap">
              {dayjs(data.sport_event.start_time).format("YYYY-MM-DD")}
            </p>
          </Col>
          <Col className="text-center">
            <p>{data.sport_event.venue.name}</p>
          </Col>
          <Col className="text-end">{data.sport_event.venue.city_name}</Col>
        </Row>
      </Container>
    </Card>
  );
};
