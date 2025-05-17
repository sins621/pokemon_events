import { getHours, isCurrentDay } from "@/lib/getTime";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";

interface DayViewProps {
  selectedDate: Dayjs;
}

const DayView: React.FC<DayViewProps> = ({ selectedDate }) => {
  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const isToday = selectedDate.isSame(dayjs(), "day");

  return (
    <>
      <div className="grid grid-cols-[auto_auto_1fr] px-4">
        <div className="w-16 border-r border-gray-300 text-xs">GMT +2</div>
        <div className="flex w-16 flex-col items-center">
          <div className={cn("text-xs", isToday && "text-custom-mint")}>
            {selectedDate.format("ddd")}
          </div>
          <div
            className={cn(
              "h-12 w-12 rounded-full p-2 text-2xl",
              isToday && "bg-custom-mint text-white",
            )}
          >
            {selectedDate.format("DD")}
          </div>
        </div>
      </div>

      <ScrollArea className="h-[70vh]">
        <div className="grid grid-cols-[auto_1fr] p-4">
          <div className="w-16 border-r border-gray-300 pr-2">
            {getHours.map((hour, index) => (
              <div key={index} className="relative h-16">
                <div className="absolute -top-2 text-xs text-gray-600">
                  {hour.format("HH:mm")}
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            {getHours.map((_, i) => (
              <div
                key={i}
                className="hover:bg-custom-mint relative flex h-16
                  cursor-pointer flex-col items-center gap-y-2 border-b
                  border-gray-300"
              />
            ))}

            {isToday && (
              <div
                className="absolute h-0.5 w-full bg-red-500"
                style={{
                  top: `${((currentTime.hour() * 60 + currentTime.minute()) / (24 * 60)) * 100}%`,
                }}
              />
            )}
          </div>
        </div>
      </ScrollArea>
    </>
  );
};

export default DayView;
