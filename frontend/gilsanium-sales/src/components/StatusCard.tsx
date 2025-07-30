// Stats cards component showing key metrics

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
          <div className="text-gray-400 hover:text-gray-600 cursor-pointer flex-shrink-0 ml-2">
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
