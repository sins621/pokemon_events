import { cn } from "@/lib/utils";
import Create from "./create";
import SideBarCalendar from "./side-bar-calendar";

const Sidebar: React.FC = () => {
  return (
    <div>
      <aside
        className={cn(
          "hidden w-92 border-t px-2 py-3 transition-all duration-300 ease-in-out lg:block",
        )}
      ></aside>
      <Create />
      {/* <SideBarCalendar/> */}
    </div>
  );
};

export default Sidebar;
