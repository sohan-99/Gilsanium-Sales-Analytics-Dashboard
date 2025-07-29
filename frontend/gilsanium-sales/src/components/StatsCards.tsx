// Stats cards component showing key metrics

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon?: string;
}

const StatCard = ({
  title,
  value,
  change,
  changeType,
  icon,
}: StatCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
        {icon && <span className="text-gray-400 text-xl">{icon}</span>}
      </div>
      <div className="text-3xl font-bold text-gray-800 mb-2">{value}</div>
      <div
        className={`text-sm ${
          changeType === "positive" ? "text-green-500" : "text-red-500"
        }`}
      >
        {change}
      </div>
    </div>
  );
};

const StatsCards = () => {
  const stats = [
    {
      title: "Total Sales",
      value: "$198,000",
      change: "+2.3% from last month",
      changeType: "positive" as const,
      icon: "📈",
    },
    {
      title: "Orders",
      value: "+2,345",
      change: "+5.4% from last month",
      changeType: "positive" as const,
      icon: "📦",
    },
    {
      title: "Revenue",
      value: "$294,780",
      change: "+12.5% from last month",
      changeType: "positive" as const,
      icon: "💰",
    },
    {
      title: "Growth",
      value: "+1,230",
      change: "+8.2% from last month",
      changeType: "positive" as const,
      icon: "📊",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsCards;
