import { Fragment } from "react";
import MonthViewBox from "@/components/calendar/month-view/monthview-box/MonthViewBox";
import { Dayjs } from "dayjs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface MonthViewProps {
  daysOfMonth: Dayjs[][];
}

const MonthView: React.FC<MonthViewProps> = (props) => {
  const { daysOfMonth } = props;

  return (
    <ScrollArea className="h-[80vh]">
      <section className="grid grid-cols-7 grid-rows-5 lg:h-[100vh]">
        {daysOfMonth.map((row, i) => (
          <Fragment key={i}>
            {row.map((day, j) => {
              const isLastRow = i === daysOfMonth.length - 1;
              const isLastCol = j === row.length - 1;

              return (
                <div
                  key={j}
                  className={cn(
                    !isLastRow && "border-b",
                    !isLastCol && "border-r",
                  )}
                >
                  <MonthViewBox day={day} rowIndex={i} />
                </div>
              );
            })}
          </Fragment>
        ))}
      </section>
    </ScrollArea>
  );
};

export default MonthView;
