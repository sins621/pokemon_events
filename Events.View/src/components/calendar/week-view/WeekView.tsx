import { getHours, getWeekDays } from "@/lib/getTime";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";

interface WeekViewProps {
  selectedDate: Dayjs;
}

const WeekView: React.FC<WeekViewProps> = ({ selectedDate }) => {
  const weekDays = getWeekDays(selectedDate.startOf("week"));
  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Header row with day names */}
      <div className="grid grid-cols-[auto_1fr_1fr_1fr_1fr_1fr_1fr_1fr] place-items-center px-4 py-2">
        <div className="w-16 border-r border-gray-300">
          <div className="relative h-16">
            <div className="absolute top-2 text-xs text-gray-600">GMT +2</div>
          </div>
        </div>

        {weekDays.map(({ currentDate, today }, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className={cn("text-xs", today && "text-accent")}>
              {currentDate.format("ddd")}
            </div>
            <div
              className={cn(
                "h-12 w-12 rounded-full p-2 text-2xl",
                today && "bg-accent text-white",
              )}
            >
              {currentDate.format("DD")}
            </div>
          </div>
        ))}
      </div>

      {/* Time grid */}
      <ScrollArea className="h-[70vh]">
        <div className="grid grid-cols-[auto_1fr_1fr_1fr_1fr_1fr_1fr_1fr] px-4 py-2">
          {/* Time column */}
          <div className="w-16 border-r border-gray-300">
            {getHours.map((hour, index) => (
              <div key={index} className="relative h-16">
                <div className="absolute -top-2 text-xs text-gray-600">
                  {hour.format("HH:mm")}
                </div>
              </div>
            ))}
          </div>

          {/* Daily columns */}
          {weekDays.map(({ currentDate, today }, index) => (
            <div key={index} className="relative border-r border-gray-300">
              {getHours.map((hour, i) => (
                <div
                  key={i}
                  className="relative flex h-16 cursor-pointer flex-col items-center gap-y-2 border-b border-gray-300 hover:bg-accent"
                  onClick={() => {
                    // setDate(currentDate.hour(hour.hour()));
                    // openPopover();
                  }}
                />
              ))}

              {/* Current time indicator */}
              {currentDate.isSame(dayjs(), "day") && (
                <div
                  className="absolute h-0.5 w-full bg-red-500"
                  style={{
                    top: `${(currentTime.hour() / 24) * 100}%`,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </>
  );
};

export default WeekView;
