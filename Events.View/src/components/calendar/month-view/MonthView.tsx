import { Dispatch, Fragment, SetStateAction } from "react";
import MonthViewBox from "./monthview-box/MonthViewBox";
import dayjs from "dayjs";

interface MonthViewProps {
  daysOfMonth: string[][];
}

const MonthView: React.FC<MonthViewProps> = (props) => {
  const { daysOfMonth } = props;

  const parsedTwoDMonthArray = daysOfMonth.map((week) =>
    week.map((day) => dayjs(day)),
  );

  return (
    <>
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
    </>
  );
};

export default MonthView;
