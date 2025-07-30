// Main dashboard content area
import Header from "../components/Header";
import StatsCards from "../components/StatusCard";
import DatePiker from "../components/DatePiker";
interface MainPartProps {
  onToggleSidebar: () => void;
}

const MainPart: React.FC<MainPartProps> = ({ onToggleSidebar }) => {
  return (
    <div className="flex-1 bg-white overflow-auto">
      <Header onToggleSidebar={onToggleSidebar} />
      <DatePiker />
      {/* Main Content */}
      <div className="px-10">
        <StatsCards />
      </div>
    </div>
  );
};

export default MainPart;

