import { Container, Table, Alert } from "react-bootstrap";
import { CgArrowRight } from "react-icons/cg";
import { formatText } from "../../utils/formatText";
import { EventIcon } from "./components/Icon";

export const TimeLine = ({ data }) => {
  const HandleType = ({ event }) => {
    if (event.type === "period_start") {
      return `${event.period} Half Started`;
    } else if (event.type === "score_change") {
      return (
        <span>
          Goal!{" "}
          <span className="bg-dark text-light px-3 mx-2 fs-6">
            {event.home_score} : {event.away_score}
          </span>
        </span>
      );
    } else {
      return formatText(event.type);
    }
  };

  return (
    <>
      {data.timeline ? (
        <Container className="p-5 justify-content-start text-center">
          <Table className="table-borderless d-inline text-start">
            <tbody>
              {data.timeline
                ?.slice(0)
                .reverse()
                .map((event) => (
                  <tr key={event.id}>
                    <td className="text-end p-4">
                      {event.match_time ? <p>{event.match_time}'</p> : " "}
                    </td>
                    <td className="border-start p-4">
                      <EventIcon event={event.type} />
                    </td>
                    <td className="px-0 py-4 border-bottom">
                      <Container className="w-auto p-0">
                        <p className="text-uppercase fw-bold">
                          <HandleType event={event} />
                        </p>
                        <p className="text-secondary">
                          {event.competitor === "home" &&
                            data.sport_event.competitors[0].name}
                          {event.competitor === "away" &&
                            data.sport_event.competitors[1].name}
                        </p>
                        <p className="text-secondary">
                          {event.players ? ` ${event.players[0].name}` : null}
                          {event.type === "substitution" && (
                            <span>
                              {" "}
                              <CgArrowRight /> {event.players[1].name}
                            </span>
                          )}
                        </p>
                      </Container>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Container>
      ) : (
        <Alert variant="light my-5 mx-1">No data</Alert>
      )}
    </>
  );
};
