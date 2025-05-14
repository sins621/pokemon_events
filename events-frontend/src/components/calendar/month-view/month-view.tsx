import { getMonth } from "@/lib/getTime";
import { Fragment, useMemo } from "react";
import MonthViewBox from "./MonthViewBox";

const MonthView: React.FC = () => {
  const currentMonth = useMemo(() => getMonth(), []);

  return (
    <section className="grid grid-cols-7 grid-rows-5 lg:h-[100vh]">
      {currentMonth.map((row, i) => (
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
