import { useState, useEffect } from "react";
import { Alert, Card, Table } from "react-bootstrap";
import { API_BASE_URL } from "api/consts";
import { Loader } from "components/Loader";
import { getTeamData } from "./utils/getTeamData";

export const TableOverview = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [statusCode, setStatusCode] = useState();

  useEffect(() => {
    fetch(
      `${API_BASE_URL}seasons/sr:season:77453/schedules.json?api_key=${process.env.REACT_APP_APIKEY}`
    )
      .then((res) => {
        setStatusCode(res.status);
        return res.json();
      })
      .then(
        (result) => {
          setLoading(true);
          setData(result);
          setError(null);
        },
        (error) => {
          setLoading(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return (
      <Alert variant="danger">
        Error: {statusCode}, {error.message}
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
              <th className="d-none d-sm-table-cell py-3">Teams</th>
              <th className="text-center d-none d-sm-table-cell">Score</th>
            </tr>
          </thead>
          <tbody>
            {data.schedules.map((event, index) => (
              <tr key={index} className="align-middle">
                <td>
                  {getTeamData("home", event.sport_event.competitors).map(
                    (team) => (
                      <p key={team.id}>{team.name}</p>
                    )
                  )}
                  {getTeamData("away", event.sport_event.competitors).map(
                    (team) => (
                      <p key={team.id}>{team.name}</p>
                    )
                  )}
                </td>
                <td className="fw-bold text-center text-nowrap">
                  {event.sport_event_status.status === "closed"
                    ? `${event.sport_event_status.home_score} : ${event.sport_event_status.away_score}`
                    : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    );
};
