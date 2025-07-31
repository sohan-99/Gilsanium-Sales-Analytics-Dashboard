// Main dashboard content area
import Header from "../components/Header";
import StatsCards from "../components/StatusCard";
import DatePiker from "../components/DatePiker";
import SealsAnalysis from "../components/SealsAnalysis";
import MapAndFilterData from "../components/MapAndFilterData";

const MainPart: React.FC = () => {
  // Mock user data (replace with real user data as needed)
  const user = {
    name: "Amiril mu’",
    email: "amirilmu@mail.example",
    avatar: "/Profileimage Container.svg",
  };
  const handleMenuClick = () => {};
  return (
    <div className="flex-1 bg-white overflow-auto">
      <Header onMenuClick={handleMenuClick} user={user} />
      <DatePiker />
      {/* Main Content */}
      <div className="px-10">
        <StatsCards />
        <SealsAnalysis />
        <MapAndFilterData />
      </div>
    </div>
  );
};

export default MainPart;
