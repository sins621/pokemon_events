import MonthView from "@/components/calendar/month-view/MonthView";
import WeekView from "@/components/calendar/week-view/WeekView";
import DayView from "@/components/calendar/day-view/DayView";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CalendarHeader from "./calendar-header/CalendarHeader";
import dayjs, { Dayjs } from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { getMonth } from "@/lib/getTime";

dayjs.extend(weekOfYear);

const Calendar: React.FC = () => {
  const router = useRouter();

  const [isInitialized, setIsInitialized] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [selectedView, setSelectedView] = useState<CalendarViewType>("month");
  const [twoDMonthArray, setTwoDMonthArray] = useState<Dayjs[][]>([]);

  useEffect(() => {
    if (!router.isReady || isInitialized) return;

    const dateFromQuery = dayjs(router.query.date as string);
    const viewFromQuery = router.query.view as CalendarViewType;

    setSelectedDate(dateFromQuery.isValid() ? dateFromQuery : dayjs());
    setSelectedView(viewFromQuery ?? "month");

    setIsInitialized(true);
  }, [router.isReady, router.query.date, router.query.view, isInitialized]);

  useEffect(() => {
    if (!isInitialized) return;

    setTwoDMonthArray(getMonth(selectedDate.month()));

    router.replace(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          date: selectedDate.format("YYYY-MM-DD"),
          view: selectedView,
        },
      },
      undefined,
      { shallow: true, scroll: false }
    );
  }, [selectedDate, selectedView, isInitialized]);

  if (!isInitialized) return null;

  return (
    <>
      <CalendarHeader
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedView={selectedView}
        setSelectedView={setSelectedView}
      />
      <div className="select-none flex">
        <div className="w-full flex-1">
          {selectedView === "month" && (
            <MonthView daysOfMonth={twoDMonthArray} />
          )}
          {selectedView === "day" && <DayView selectedDate={selectedDate} />}
          {selectedView === "week" && <WeekView selectedDate={selectedDate} />}
        </div>
      </div>
    </>
  );
};

export default Calendar;
