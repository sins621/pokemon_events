import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const HeaderLeft: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="hidden items-center lg:flex">
        <Button variant="ghost" className="rounded-full p-2">
          <Menu className="size-6" />
        </Button>
      </div>
      <Button variant="outline">Today</Button>

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
  );
};

export default HeaderLeft;
