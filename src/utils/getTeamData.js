export const getTeamData = (teamStatus, data) => {
  return data
    .filter((team) => {
      return team.qualifier === teamStatus;
    })
    .map((team) => <span key={team.id}>{team.name}</span>);
};
