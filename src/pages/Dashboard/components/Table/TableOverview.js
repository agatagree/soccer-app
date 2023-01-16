import { useContext } from "react";
import { Alert, Card, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { API_BASE_URL } from "api/consts";
import { useFetch } from "utils/useFetch";
import { DashboardContext } from "pages/Dashboard/providers/DashboardProvider";
import { Loader } from "components/Loader";
import { getTeamData } from "../../../../utils/getTeamData";
import { getColorForResult } from "./utils/getColorForResult";
import dayjs from "dayjs";

export const TableOverview = () => {
  const { selectedSeason } = useContext(DashboardContext);

  const { data, loading, error, errorStatusCode } = useFetch(
    `${API_BASE_URL}seasons/${selectedSeason}/schedules.json?api_key=${process.env.REACT_APP_APIKEY}`,
    selectedSeason
  );

  if (error) {
    return (
      <Alert variant="danger">
        Error: {errorStatusCode}, {error.message}
      </Alert>
    );
  } else if (loading === false) {
    return <Loader />;
  } else
    return (
      <Card className="d-flex align-items-center flex-column shadow-sm">
        <Table hover>
          <thead className="bg-light">
            <tr className="text-nowrap align-middle">
              <th className="d-none d-sm-table-cell py-3">Date</th>
              <th className="text-end">Home team</th>
              <th className="text-center d-none d-sm-table-cell">Score</th>
              <th className="text-center d-table-cell d-sm-none"></th>
              <th>Away team</th>
              <th className="text-center text-secondary d-none d-md-table-cell">
                1st Half
              </th>
              <th className="d-none d-md-table-cell">Stadium</th>
            </tr>
          </thead>
          <tbody>
            {data.schedules.map((event, index) => (
              <LinkContainer
                to={`/${event.sport_event.id}`}
                style={{ cursor: "pointer" }}
                key={index}
              >
                <tr className="align-middle">
                  <td className="text-nowrap d-none d-sm-table-cell">
                    {dayjs(event.sport_event.start_time).format("YYYY-MM-DD")}
                  </td>
                  <td className="text-end rounded">
                    <p
                      className="rounded p-2 m-2 d-inline-block"
                      style={{
                        backgroundColor: getColorForResult(
                          event.sport_event_status.home_score,
                          event.sport_event_status.away_score
                        ),
                      }}
                    >
                      {getTeamData("home", event.sport_event.competitors).map(
                        (team) => (
                          <span key={team.id}>{team.name}</span>
                        )
                      )}
                    </p>
                  </td>
                  <td className="fw-bold text-center text-nowrap">
                    {event.sport_event_status.status === "closed"
                      ? `${event.sport_event_status.home_score} : ${event.sport_event_status.away_score}`
                      : "-"}
                  </td>
                  <td>
                    <p
                      className="rounded p-2 m-2 d-inline-block"
                      style={{
                        backgroundColor: getColorForResult(
                          event.sport_event_status.away_score,
                          event.sport_event_status.home_score
                        ),
                      }}
                    >
                      {getTeamData("away", event.sport_event.competitors).map(
                        (team) => (
                          <span key={team.id}>{team.name}</span>
                        )
                      )}
                    </p>
                  </td>
                  <td className="text-center text-secondary font-weight-light d-none d-md-table-cell">
                    {event.sport_event_status.status === "closed"
                      ? `${event.sport_event_status.period_scores[0].home_score} : ${event.sport_event_status.period_scores[0].away_score}`
                      : "-"}
                  </td>
                  <td className="d-none d-md-table-cell">
                    {event.sport_event.venue.name}
                  </td>
                </tr>
              </LinkContainer>
            ))}
          </tbody>
        </Table>
      </Card>
    );
};
