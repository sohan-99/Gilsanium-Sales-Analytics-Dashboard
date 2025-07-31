// Main dashboard layout component
import { useState } from "react";
import Slidebar from "../layout/Slidebar";
import MainPart from "../layout/MainPart";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Default to true for desktop

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex  bg-gray-50 font-sans">
      <Slidebar isOpen={sidebarOpen} onClose={handleCloseSidebar} />
      <MainPart />
    </div>
  );
};

export default Dashboard;
