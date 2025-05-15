import HeaderLeft from "@/components/header/header-left/HeaderLeft";
import HeaderRight from "@/components/header/header-right/HeaderRight";
import { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface HeaderProps {
  selectedMonth: number;
  setSelectedMonth: Dispatch<SetStateAction<number | null>>;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { selectedMonth, setSelectedMonth } = props;
  return (
    <div className="mx-3 flex items-center justify-between py-4">
      <HeaderLeft />

      <HeaderRight />
      <Select
        defaultValue={selectedMonth.toString()}
        onValueChange={(month) => setSelectedMonth(Number(month))}
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

export default Header;
