import HeaderLeft from "@/components/header/header-left/HeaderLeft";
import HeaderRight from "@/components/header/header-right/HeaderRight";

const Header: React.FC = () => {
  return (
    <div className="mx-3 flex items-center justify-between py-4">
      <HeaderLeft />
      <HeaderRight />
    </div>
  );
};

export default Header;
