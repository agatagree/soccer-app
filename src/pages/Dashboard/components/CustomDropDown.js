import { useContext } from "react";
import { Alert, Container, Dropdown } from "react-bootstrap";
import { API_BASE_URL } from "api/consts";
import { useFetch } from "utils/useFetch";
import { Loader } from "components/Loader";
import { DashboardContext } from "../providers/DashboardProvider";

export const CustomDropDown = () => {
  const { selectedSeason, setSelectedSeason } = useContext(DashboardContext);

  const { data, loading, error, errorStatusCode } = useFetch(
    `${API_BASE_URL}competitions/sr:competition:202/seasons.json?api_key=${process.env.REACT_APP_APIKEY}`
  );

  if (error) {
    return (
      <Alert variant="danger">
        Error: Error: {errorStatusCode}, {error.message}
      </Alert>
    );
  } else if (loading === false) {
    return <Loader />;
  } else
    return (
      <Container className="d-flex justify-content-end p-0">
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            {data.seasons.find((season) => season.id === selectedSeason).name}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {data.seasons.map((season, index) => (
              <Dropdown.Item
                key={index}
                onClick={() => setSelectedSeason(season.id)}
              >
                {season.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    );
};
