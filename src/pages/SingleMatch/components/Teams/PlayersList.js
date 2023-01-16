import { Table } from "react-bootstrap";

export const PlayersList = ({ teamStatus, data }) => {
  return data
    .filter((team) => {
      return team.qualifier === teamStatus;
    })
    .map((team) => {
      return (
        <Table key={team.id} className="table-borderless">
          <thead className="border-bottom">
            <tr>
              <th>{team.name}</th>
            </tr>
          </thead>
          <tbody>
            {team.players.map((player) => {
              if (player.starter) {
                return (
                  <tr key={player.id} className="d-flex">
                    <td>{player.name}</td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </Table>
      );
    });
};
