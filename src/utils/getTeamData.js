export const getTeamData = (teamStatus, data) => {
  return data.filter((team) => {
    return team.qualifier === teamStatus;
  });
};
