import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { useDispatch } from "react-redux";
import { setView } from "@/store/calendarViewSlice";

const HeaderRight: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center space-x-4">
      <Select onValueChange={(day) => dispatch(setView(day))}>
        <SelectTrigger className="focus-visible:ring-ring w-24 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none">
          <SelectValue placeholder="Month" />
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
  );
};

export default HeaderRight;
