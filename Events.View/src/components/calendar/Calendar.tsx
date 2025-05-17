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

  const [isDateInitialized, setIsDateInitialized] = useState(false);
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs>(dayjs());
  const [selectedView, setSelectedView] = useState<string>("month");
  const [twoDMonthArray, setTwoDMonthArray] = useState<Dayjs[][]>([]);

  useEffect(() => {
    if (!router.isReady || isDateInitialized) return;

    const dateFromQuery = dayjs(router.query.date as string);
    setSelectedDate(dateFromQuery.isValid() ? dateFromQuery : dayjs());
    setIsDateInitialized(true);
  }, [router.isReady, router.query.date, isDateInitialized]);

  useEffect(() => {
    if (!isDateInitialized) return;

    setTwoDMonthArray(getMonth(selectedDate.month()));

    router.replace(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          date: selectedDate.format("YYYY-MM-DD"),
        },
      },
      undefined,
      { shallow: true, scroll: false },
    );
  }, [selectedDate, isDateInitialized]);

  if (!isDateInitialized) return null;

  return (
    <>
      <CalendarHeader
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedView={selectedView}
        setSelectedView={setSelectedView}
      />
      <div className="flex">
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
