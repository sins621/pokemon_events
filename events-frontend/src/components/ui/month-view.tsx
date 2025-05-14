import { getMonth } from "@/lib/getTime";
import { Fragment } from "react";

const MonthView: React.FC = () => {
  const currentMonth = getMonth();
  console.table(currentMonth);

  return (
    <section className="grid grid-cols-7 grid-rows-5 lg:h-[100vh]">
      {currentMonth.map((row, i) => (
        <Fragment key={i}>
          {row.map((day, j) => (
            <h3 key={j}>{day.format("D")}</h3>
          ))}
        </Fragment>
      ))}
    </section>
  );
};

export default MonthView;
