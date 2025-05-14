import { useSelector } from "react-redux";
import { RootState } from "@/store";

// import Sidebar from "../calendar/sidebar/Sidebar";
import MonthView from "../calendar/month-view/month-view";
import WeekView from "../calendar/week-view/week-view";
import DayView from "../calendar/day-view/day-view";

const MainView: React.FC = () => {
  const selectedView = useSelector(
    (state: RootState) => state.calendarView.selectedView,
  );

  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="w-full flex-1">
        {selectedView === "month" && <MonthView />}
        {selectedView === "day" && <DayView />}
        {selectedView === "week" && <WeekView />}
      </div>
    </div>
  );
};

export default MainView;
