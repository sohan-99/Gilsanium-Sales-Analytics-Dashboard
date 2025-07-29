// Main dashboard content area
import Header from "../components/Header";
import StatsCards from "../components/StatsCards";
import SalesChart from "../components/SalesChart";
import ProductMarketing from "../components/ProductMarketing";
import RegionalSales from "../components/RegionalSales";
import FeaturedProducts from "../components/FeaturedProducts";

interface MainPartProps {
  onToggleSidebar: () => void;
}

const MainPart: React.FC<MainPartProps> = ({ onToggleSidebar }) => {
  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <Header onToggleSidebar={onToggleSidebar} />

      {/* Main Content */}
      <div className="p-6">
        {/* Stats Cards */}
        <StatsCards />

        {/* Chart and Product Marketing Section */}
        <div className="grid grid-cols-12 gap-6 mb-6">
          {/* Chart Section */}
          <div className="col-span-8">
            <SalesChart />
          </div>

          {/* Product Marketing */}
          <div className="col-span-4">
            <ProductMarketing />
          </div>
        </div>

        {/* Bottom Section - Regional Sales and Featured Products */}
        <div className="grid grid-cols-12 gap-6">
          {/* Regional Sales */}
          <div className="col-span-6">
            <RegionalSales />
          </div>

          {/* Featured Products */}
          <div className="col-span-6">
            <FeaturedProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPart;
