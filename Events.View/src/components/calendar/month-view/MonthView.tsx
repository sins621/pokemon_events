import { Fragment } from "react";
import MonthViewBox from "./monthview-box/MonthViewBox";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const MonthView: React.FC = () => {
  const twoDMonthArray = useSelector(
    (state: RootState) => state.calendarData.twoDMonthArray,
  );
  const parsedTwoDMonthArray = twoDMonthArray.map((week) =>
    week.map((day) => dayjs(day)),
  );

  return (
    <section className="grid grid-cols-7 grid-rows-5 divide-x divide-y divide-gray-300 lg:h-[100vh]">
      {parsedTwoDMonthArray.map((row, i) => (
        <Fragment key={i}>
          {row.map((day, j) => (
            <div key={j}>
              <MonthViewBox day={day} rowIndex={i} />
            </div>
          ))}
        </Fragment>
      ))}
    </section>
  );
};

export default MonthView;
