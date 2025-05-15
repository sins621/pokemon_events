import Calendar from "@/components/calendar/Calendar";
import Header from "@/components/header/Header";
import { getMonthAsISO } from "@/store/calendarDataSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number | null>(
    null,
  );
  const [twoDMonthArray, setTwoDMonthArray] = useState<string[][]>([]);

  // On initial load, set selectedMonthIndex from URL
  useEffect(() => {
    if (router.isReady) {
      const monthFromQuery = Number(router.query.month);
      const validMonth = !isNaN(monthFromQuery)
        ? monthFromQuery
        : new Date().getMonth();
      setSelectedMonthIndex(validMonth);
    }
  }, [router.isReady, router.query.month]);

  // When selectedMonthIndex updates, update the calendar and the URL
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

  if (selectedMonthIndex === null) return null; // Avoid rendering before state is set

  return (
    <div>
      {JSON.stringify(selectedMonthIndex)}
      <Header
        selectedMonth={selectedMonthIndex}
        setSelectedMonth={setSelectedMonthIndex}
      />
      <Calendar daysOfMonth={twoDMonthArray} />
    </div>
  );
}
