import MonthView from "@/components/calendar/month-view/MonthView";
import WeekView from "@/components/calendar/week-view/WeekView";
import DayView from "@/components/calendar/day-view/DayView";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getMonthAsISO } from "@/store/calendarDataSlice";
import CalendarHeader from "./calendar-header/CalendarHeader";

const Calendar: React.FC = () => {
  const router = useRouter();

  const [twoDMonthArray, setTwoDMonthArray] = useState<string[][]>([]);

  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number | null>(
    null,
  );

  const [selectedView, setSelectedView] = useState<string>("month");

  useEffect(() => {
    if (router.isReady) {
      const monthFromQuery = Number(router.query.month);
      const validMonth = !isNaN(monthFromQuery)
        ? monthFromQuery
        : new Date().getMonth();
      setSelectedMonthIndex(validMonth);
    }
  }, [router.isReady, router.query.month]);

  useEffect(() => {
    if (selectedMonthIndex !== null) {
      setTwoDMonthArray(getMonthAsISO(selectedMonthIndex));
      router.replace(
        {
          pathname: router.pathname,
          query: { ...router.query, month: selectedMonthIndex },
        },
        undefined,
        { shallow: true, scroll: false },
      );
    }
  }, [selectedMonthIndex]);

  if (selectedMonthIndex === null) return null;

  return (
    <>
      <CalendarHeader   
        selectedMonth={selectedMonthIndex}
        setSelectedMonth={setSelectedMonthIndex}
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
