import { useSelector } from "react-redux";
import { RootState } from "@/store";

import MonthView from "@/components/calendar/month-view/MonthView";
import WeekView from "@/components/calendar/week-view/WeekView";
import DayView from "@/components/calendar/day-view/DayView";

const Calendar: React.FC = () => {
  const selectedView = useSelector(
    (state: RootState) => state.calendarView.selectedView,
  );

  return (
    <div className="flex">
      <div className="w-full flex-1">
        {selectedView === "month" && <MonthView />}
        {selectedView === "day" && <DayView />}
        {selectedView === "week" && <WeekView />}
      </div>
    </div>
  );
};

export default Calendar;
