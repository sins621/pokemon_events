import { Fragment } from "react";
import MonthViewBox from "./MonthViewBox";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

const MonthView: React.FC = () => {
  const twoDMonthArray = useSelector(
    (state: RootState) => state.calendarData.twoDMonthArray,
  );

  return (
    <section className="grid grid-cols-7 grid-rows-5 lg:h-[100vh]">
      {twoDMonthArray.map((row, i) => (
        <Fragment key={i}>
          {row.map((day, j) => (
            <MonthViewBox key={j} day={day} rowIndex={i} />
          ))}
        </Fragment>
      ))}
    </section>
  );
};

export default MonthView;
