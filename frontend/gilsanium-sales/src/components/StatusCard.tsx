// Stats cards component showing key metrics
import { useState } from "react";

interface StatusCardProps {
  title: string;
  title2?: React.ReactNode;
  value: string;
  value2?: string;
  change: string;
  changeType: "positive" | "negative";
  icon?: React.ReactNode;
  threedot?: React.ReactNode;
}

const StatusCard = ({
  title,
  title2,
  value,
  change,
  changeType,
  icon,
  threedot,
}: StatusCardProps) => {
  // Extract percentage and direction for change
  const isNegative = changeType === "negative";
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-[#F9F9F9] rounded-[10px] overflow-hidden border border-gray-100 w-full">
      <div className="bg-white p-3 md:p-2 rounded-[10px]">
        {/* Top row: Icon, Title, Menu */}
        <div className="flex items-start justify-between mb-3 md:mb-4">
          <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
            <div className="w-6 h-6 md:w-8 md:h-8  flex items-center justify-center flex-shrink-0">
              {icon}
            </div>
            <span className="text-[#2B3674] opacity-80 font-normal text-[10px] md:text-[12px] truncate">
              {title}
            </span>
          </div>
          <div className="relative">
            <div
              onClick={toggleDropdown}
              className="text-gray-400 hover:text-gray-600 cursor-pointer flex-shrink-0 ml-2"
            >
              {threedot || (
                <svg
                  width="16"
                  height="16"
                  className="md:w-5 md:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle cx="5" cy="12" r="1.5" fill="currentColor" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                  <circle cx="19" cy="12" r="1.5" fill="currentColor" />
                </svg>
              )}
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-[8px] shadow-lg p-2 w-48 z-50">
                <div className="text-xs text-[#2B3674] font-medium mb-2">
                  More Information
                </div>
                <div className="space-y-2">
                  <button
                    onClick={closeDropdown}
                    className="w-full text-left px-2 py-1 text-xs text-gray-600 hover:bg-gray-50 rounded flex items-center gap-2"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    View Details
                  </button>
                  <button
                    onClick={closeDropdown}
                    className="w-full text-left px-2 py-1 text-xs text-gray-600 hover:bg-gray-50 rounded flex items-center gap-2"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Export Data
                  </button>
                  <button
                    onClick={closeDropdown}
                    className="w-full text-left px-2 py-1 text-xs text-gray-600 hover:bg-gray-50 rounded flex items-center gap-2"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Settings
                  </button>
                  <hr className="my-1 border-gray-100" />
                  <div className="px-2 py-1 text-xs text-gray-500">
                    <div className="mb-1">Last Updated:</div>
                    <div className="font-medium text-[#2B3674]">2 mins ago</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Value and Change */}
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 flex-wrap">
          <span className="text-lg md:text-xl lg:text-2xl font-medium text-[#2B3674] min-w-0">
            {value}
          </span>
          <div
            className={`flex items-center text-[10px] md:text-[12px] font-medium px-1 md:px-2 py-1 rounded flex-shrink-0 ${
              isNegative
                ? "bg-red-50 text-red-600"
                : "bg-green-50 text-green-600"
            }`}
          >
            {isNegative ? (
              <img
                src="/Graph-Stats-Descend--Streamline-Ultimate.svg"
                alt="Decrease"
                className="w-3 h-3 md:w-4 md:h-4 mr-1"
              />
            ) : (
              <img
                src="/Graph-Stats-Descend--Streamline-Ultimate (1).svg"
                alt="Increase"
                className="w-3 h-3 md:w-4 md:h-4 mr-1"
              />
            )}
            {change}
          </div>
        </div>
      </div>

      {/* Subtext */}
      <div className="text-[10px]  font-normal p-2 md:p-2 text-[#2B3674] leading-relaxed">
        {title2}
      </div>
    </div>
  );
};

const StatsCards = () => {
  const stats = [
    {
      title: "Monthly Earnings",
      title2: (
        <span className="font-normal text-[12px]">
          You earn extra{" "}
          <span className="font-semibold text-[#2B3674]">$5,990</span> this
          month
        </span>
      ),
      value: "$108,906",
      value2: "$5,990",
      change: "5.2%",
      changeType: "negative" as const,
      icon: <img src="/Money-Bag-Dollar--Streamline-Ultimate.svg" alt="" />,
      threedot: <img src="/DotsThreeVertical.svg" alt="" />,
    },
    {
      title: "Total Orders",
      title2: (
        <span className="font-normal text-[12px]">
          You received <span className="font-semibold text-[#2B3674]">180</span>{" "}
          more orders this month
        </span>
      ),
      value: "$2,345",
      value2: "180",
      change: "8.2%",
      changeType: "positive" as const,
      icon: <img src="/Shipment-Star--Streamline-Ultimate.svg" alt="" />,
      threedot: <img src="/DotsThreeVertical.svg" alt="" />,
    },
    {
      title: "Total Sales",
      title2: (
        <span className="font-normal text-[12px]">
          Sales revenue fell by{" "}
          <span className="font-semibold text-[#2B3674]">$10,200</span> this
          month
        </span>
      ),
      value: "$256,740",
      change: "+3.8%",
      changeType: "positive" as const,
      icon: <img src="/Shopping-Basket-Star--Streamline-Ultimate.svg" alt="" />,
      threedot: <img src="/DotsThreeVertical.svg" alt="" />,
    },
    {
      title: "New Customers",
      title2: (
        <span className="font-normal text-[12px]">
          Gained <span className="font-semibold text-[#2B3674]">65</span> new
          customers this month
        </span>
      ),
      value: "+1,230",
      change: "+5.7%",
      changeType: "positive" as const,
      icon: <img src="/Multiple-Users-1--Streamline-Ultimate.svg" alt="" />,
      threedot: <img src="/DotsThreeVertical.svg" alt="" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatusCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsCards;
