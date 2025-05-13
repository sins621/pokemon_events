import MonthView from "./month-view";

const MainView: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-full flex-1">
        <MonthView />
      </div>
    </div>
  );
};

export default MainView;
