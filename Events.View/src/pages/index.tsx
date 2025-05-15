import Calendar from "@/components/calendar/Calendar";
import Header from "@/components/header/Header";
import { getMonthAsISO } from "@/store/calendarDataSlice";
import { useEffect, useState } from "react";

export default function Home() {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number>(new Date().getMonth());

  const [twoDMonthArray, setTwoDMonthArray] = useState<string[][]>(
    getMonthAsISO(new Date().getMonth()),
  );

  useEffect(() => {
    setTwoDMonthArray(getMonthAsISO(selectedMonthIndex));
  }, [selectedMonthIndex]);

  return (
    <div>
      <Header
        selectedMonth={selectedMonthIndex}
        setSelectedMonth={setSelectedMonthIndex}
      />
      <Calendar daysOfMonth={twoDMonthArray} />
    </div>
  );
}
