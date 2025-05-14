import Sidebar from "../calendar/sidebar/Sidebar";
import MonthView from "../calendar/month-view/month-view";

const MainView: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="w-full flex-1">
        <MonthView />
      </div>
    </div>
  );
};

export default MainView;
