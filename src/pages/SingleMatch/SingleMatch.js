import { useState } from "react";
import { Alert, Card, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { API_BASE_URL } from "api/consts";
import { useFetch } from "utils/useFetch";
import { TimeLine, Navigation, MainInfo, Stats, Teams } from "./components";
import { Loader } from "components";

export const SingleMatch = () => {
  const [currentTab, setCurrentTab] = useState("tab1");
  const { id } = useParams();

  const { data, loading, error, errorStatusCode } = useFetch(
    `${API_BASE_URL}sport_events/${id}/timeline.json?api_key=${process.env.REACT_APP_APIKEY}`,
    id
  );

  if (loading === false) {
    return <Loader />;
  } else if (error) {
    return (
      <Alert variant="danger">
        Error: {errorStatusCode}, {error.message}
      </Alert>
    );
  } else
    return (
      <Container className="d-flex gap-3 flex-column p-0 flex-grow-1">
        <MainInfo data={data} />
        <Card className="shadow-sm flex-grow-1">
          <Navigation setCurrentTab={setCurrentTab} />
          {currentTab === "tab1" && <TimeLine data={data} />}
          {currentTab === "tab2" && <Stats data={data} />}
          {currentTab === "tab3" && <Teams data={data} />}
        </Card>
      </Container>
    );
};
