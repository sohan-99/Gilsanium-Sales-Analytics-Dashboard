// Main dashboard layout component
import { useState, useEffect } from "react";
import Slidebar from "../layout/Slidebar";
import MainPart from "../layout/MainPart";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Default to false initially

  // Set sidebar open based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
