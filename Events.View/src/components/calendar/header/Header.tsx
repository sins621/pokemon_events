import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header: React.FC = () => {
  return (
    <div className="mx-3 flex items-center justify-between py-4">
      <HeaderLeft />
      <HeaderRight />
    </div>
  );
};

export default Header;
