import { getWeekDays } from "@/lib/getTime";
import { RootState } from "@/store";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

const WeekView: React.FC = () => {
  const userSelectedDate = dayjs(
    useSelector((state: RootState) => state.calendarData.userSelectedDate),
  );
  console.log("Parsed Date: ", userSelectedDate.toISOString());
  const Days = getWeekDays(userSelectedDate);
  return <div></div>;
};

export default WeekView;
