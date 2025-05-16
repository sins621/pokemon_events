import MonthView from "@/components/calendar/month-view/MonthView";
import WeekView from "@/components/calendar/week-view/WeekView";
import DayView from "@/components/calendar/day-view/DayView";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getMonthAsISO } from "@/store/calendarDataSlice";
import CalendarHeader from "./calendar-header/CalendarHeader";
import type { selectedDate } from "@/types/calendar";

const Calendar: React.FC = () => {
  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState<selectedDate>({
    monthIndex: 0,
    weekIndex: 0,
    dayIndex: 0,
  });

  const [selectedView, setSelectedView] = useState<string>("month");

  const [twoDMonthArray, setTwoDMonthArray] = useState<string[][]>([]);

  useEffect(() => {
    if (router.isReady) {
      const monthFromQuery = Number(router.query.month);
      const weekFromQuery = Number(router.query.week);
      const dayFromQuery = Number(router.query.day);

      const validMonth = !isNaN(monthFromQuery)
        ? monthFromQuery
        : new Date().getMonth();
      const validWeek = !isNaN(weekFromQuery) ? weekFromQuery : 0;
      const validDay = !isNaN(dayFromQuery) ? dayFromQuery : 0;

      setSelectedDate({
        monthIndex: validMonth,
        weekIndex: validWeek,
        dayIndex: validDay,
      });
    }
  }, [router.isReady, router.query.month, router.query.week, router.query.day]);

  useEffect(() => {
    if (selectedDate) {
      setTwoDMonthArray(getMonthAsISO(selectedDate.monthIndex));
      router.replace(
        {
          pathname: router.pathname,
          query: {
            ...router.query,
            month: selectedDate.monthIndex,
            week: selectedDate.weekIndex,
            day: selectedDate.dayIndex,
          },
        },
        undefined,
        { shallow: true, scroll: false },
      );
    }
  }, [selectedDate]);

  if (!selectedDate) return null;

  return (
    <>
      <CalendarHeader
        selectedMonth={selectedDate.monthIndex}
        setSelectedDate={setSelectedDate}
      />
      <div className="flex">
        <div className="w-full flex-1">
          {selectedView === "month" && (
            <MonthView daysOfMonth={twoDMonthArray} />
          )}
          {selectedView === "day" && <DayView />}
          {selectedView === "week" && <WeekView />}
        </div>
      </div>
    </>
  );
};

export default Calendar;
