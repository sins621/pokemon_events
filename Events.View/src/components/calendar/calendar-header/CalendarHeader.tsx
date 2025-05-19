import { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import dayjs, { Dayjs } from "dayjs";

interface HeaderProps {
  selectedDate: Dayjs;
  setSelectedDate: Dispatch<SetStateAction<Dayjs>>;
  selectedView: string;
  setSelectedView: Dispatch<SetStateAction<CalendarViewType>>;
}

const CalendarHeader: React.FC<HeaderProps> = ({
  selectedDate,
  setSelectedDate,
  selectedView,
  setSelectedView,
}) => {
  const handlePrev = () => {
    if (selectedView === "month") {
      setSelectedDate((prev) => prev.subtract(1, "month"));
    } else if (selectedView === "week") {
      setSelectedDate((prev) => prev.subtract(1, "week"));
    } else {
      setSelectedDate((prev) => prev.subtract(1, "day"));
    }
  };

  const handleNext = () => {
    if (selectedView === "month") {
      setSelectedDate((prev) => prev.add(1, "month"));
    } else if (selectedView === "week") {
      setSelectedDate((prev) => prev.add(1, "week"));
    } else {
      setSelectedDate((prev) => prev.add(1, "day"));
    }
  };

  const resetToToday = () => {
    setSelectedDate(dayjs());
  };

  let dateLabel = "";
  if (selectedView === "month") {
    dateLabel = selectedDate.format("MMMM YYYY");
  } else if (selectedView === "week") {
    const start = selectedDate.startOf("week").format("MMM D");
    const end = selectedDate.endOf("week").format("MMM D, YYYY");
    dateLabel = `${start} – ${end}`;
  } else {
    dateLabel = selectedDate.format("dddd, MMMM D, YYYY");
  }

  return (
    <div className="mx-3 flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <div className="hidden items-center lg:flex">
          <Button variant="ghost" className="rounded-full p-2">
            <Menu className="size-6" />
          </Button>
        </div>

        <Button className="select-none" variant="outline" onClick={resetToToday}>
          Today
        </Button>

        <div className="flex items-center gap-3">
          <MdKeyboardArrowLeft
            className="size-6 cursor-pointer font-bold"
            onClick={handlePrev}
          />
          <MdKeyboardArrowRight
            className="size-6 cursor-pointer font-bold"
            onClick={handleNext}
          />
          <h1 className="hidden select-none text-xl lg:block">{dateLabel}</h1>
        </div>
      </div>

      <div className="flex select-none items-center space-x-4">
        <Select
          onValueChange={(value) => setSelectedView(value as CalendarViewType)}
          defaultValue={selectedView}
        >
          <SelectTrigger
            className="w-24 focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <SelectValue placeholder="View" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="month">Month</SelectItem>
            <SelectItem value="week">Week</SelectItem>
            <SelectItem value="day">Day</SelectItem>
          </SelectContent>
        </Select>

        <Avatar>
          <AvatarImage src="https://picsum.photos/300/300" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default CalendarHeader;
