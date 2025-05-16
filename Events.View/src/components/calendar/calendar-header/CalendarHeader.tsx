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
import { useDispatch } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { setView } from "@/store/calendarViewSlice";
import type { selectedDate } from "@/types/calendar";

interface HeaderProps {
  selectedMonth: number;
  setSelectedDate: Dispatch<SetStateAction<selectedDate>>;
}

const CalendarHeader: React.FC<HeaderProps> = (props) => {
  const { selectedMonth, setSelectedDate } = props;

  const dispatch = useDispatch();

  return (
    <div className="mx-3 flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <div className="hidden items-center lg:flex">
          <Button variant="ghost" className="rounded-full p-2">
            <Menu className="size-6" />
          </Button>
        </div>
        <Button variant={"outline"}>Today</Button>

        <div className="flex items-center gap-3">
          <MdKeyboardArrowLeft
            className="size-6 cursor-pointer font-bold"
            // onClick={handlePrevClick}
          />
          <MdKeyboardArrowRight
            className="size-6 cursor-pointer font-bold"
            // onClick={handlePrevClick}
          />
          <h1 className="hidden text-xl lg:block">May 14 2025</h1>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Select onValueChange={(day) => dispatch(setView(day))}>
          <SelectTrigger className="focus-visible:ring-ring w-24 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none">
            <SelectValue placeholder="Month" />
          </SelectTrigger>
          <SelectContent className="bg-white">
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
      <Select
        defaultValue={selectedMonth.toString()}
        onValueChange={(month) =>
          setSelectedDate((prev) => ({
            ...prev,
            monthIndex: Number(month),
          }))
        }
      >
        <SelectTrigger className="focus-visible:ring-ring w-24 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none">
          <SelectValue placeholder="Select Month" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="0">Januray</SelectItem>
          <SelectItem value="1">Fewbruary</SelectItem>
          <SelectItem value="2">March</SelectItem>
          <SelectItem value="3">April</SelectItem>
          <SelectItem value="4">May</SelectItem>
          <SelectItem value="5">June</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CalendarHeader;
