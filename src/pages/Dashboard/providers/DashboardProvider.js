import { createContext, useState } from "react";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [selectedSeason, setSelectedSeason] = useState("sr:season:77453");
  return (
    <DashboardContext.Provider value={{ selectedSeason, setSelectedSeason }}>
      {children}
    </DashboardContext.Provider>
  );
};
