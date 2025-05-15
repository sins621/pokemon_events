import { useSelector } from "react-redux";
import { RootState } from "@/store";

import MonthView from "@/components/calendar/month-view/MonthView";
import WeekView from "@/components/calendar/week-view/WeekView";
import DayView from "@/components/calendar/day-view/DayView";

interface CalendarProps {
  daysOfMonth: string[][];
}

const Calendar: React.FC<CalendarProps> = (props) => {
  const { daysOfMonth } = props;

  const selectedView = useSelector(
    (state: RootState) => state.calendarView.selectedView,
  );

  return (
    <div className="flex">
      <div className="w-full flex-1">
        {selectedView === "month" && <MonthView daysOfMonth={daysOfMonth} />}
        {selectedView === "day" && <DayView />}
        {selectedView === "week" && <WeekView />}
      </div>
    </div>
  );
};

export default Calendar;
