import { Table } from "react-bootstrap";
import { getTeamData } from "utils/getTeamData";

export const PlayersList = ({ teamStatus, data }) => {
  getTeamData(teamStatus, data).map((team) => {
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
