import { BsFillFileFill, BsFillStopwatchFill } from "react-icons/bs";
import { CgArrowsExchange } from "react-icons/cg";
import { GiSoccerKick } from "react-icons/gi";
import { GrTopCorner } from "react-icons/gr";
import { MdSportsSoccer } from "react-icons/md";
import { VscDebugStart } from "react-icons/vsc";

export const eventTypeList = [
  {
    type: "yellow_card",
    icon: <BsFillFileFill style={{ color: "var(--main-yellow)" }} />,
  },
  {
    type: "red_card",
    icon: <BsFillFileFill style={{ color: "var(--main-red)" }} />,
  },
  {
    type: "yellow_red_card",
    icon: <BsFillFileFill style={{ color: "var(--main-orange)" }} />,
  },
  {
    type: "period_start",
    icon: <VscDebugStart />,
  },
  {
    type: "substitution",
    icon: <CgArrowsExchange />,
  },
  {
    type: "score_change",
    icon: <MdSportsSoccer />,
  },
  {
    type: "free_kick",
    icon: <GiSoccerKick />,
  },
  {
    type: "match_ended",
    icon: <BsFillStopwatchFill />,
  },
  {
    type: "corner_kick",
    icon: <GrTopCorner />,
  },
];

export const EventIcon = ({ event }) => {
  const evenSpecialIcon = eventTypeList.find((item) => item.type === event);

  return <h4>{evenSpecialIcon ? evenSpecialIcon.icon : null}</h4>;
};
