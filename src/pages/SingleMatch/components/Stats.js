import { Container, Table, Alert } from "react-bootstrap";
import { formatText } from "../utils/formatText";

export const Stats = ({ data }) => {
  return (
    <>
      {data.statistics ? (
        <Container className="py-5 justify-content-start text-center">
          <Table className="table-borderless d-inline text-start">
            <thead className="border">
              <tr>
                <th>{data.sport_event.competitors[0].name}</th>
                <th></th>
                <th>{data.sport_event.competitors[1].name}</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(
                data.statistics.totals.competitors[0].statistics
              ).map(([key, value], index) => (
                <tr key={index} className="border-bottom text-center ">
                  <td className="py-3">{value}</td>
                  <td className="text-capitalize px-4 py-3">
                    {formatText(key)}
                    {key === "ball_possession" ? " %" : null}
                  </td>
                  <td className="py-3">
                    {data.statistics.totals.competitors[1].statistics[key]
                      ? data.statistics.totals.competitors[1].statistics[key]
                      : "0"}
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
