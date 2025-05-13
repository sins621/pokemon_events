import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";

const HeaderRight: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <Select>
        <SelectTrigger className="w-24 focus-visible:outline-none">
          <SelectValue placeholder="Month" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="month">Month</SelectItem>
          <SelectItem value="week">Week</SelectItem>
          <SelectItem value="day">Day</SelectItem>
        </SelectContent>
      </Select>

      <Avatar>
        <AvatarImage src="https://picsum.photos/300/300"/>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default HeaderRight;
