// Regional sales map component

const RegionalSales = () => {
  const regions = [
    {
      name: "North America",
      sales: "$45,230",
      growth: "+8.2%",
      color: "bg-blue-500",
    },
    {
      name: "Europe",
      sales: "$32,400",
      growth: "+5.7%",
      color: "bg-green-500",
    },
    {
      name: "Asia Pacific",
      sales: "$28,900",
      growth: "+12.3%",
      color: "bg-purple-500",
    },
    {
      name: "South America",
      sales: "$15,600",
      growth: "+3.1%",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Sales by Region</h3>
        <div className="text-sm text-gray-500">Last 30 days</div>
      </div>

      {/* Map placeholder with interactive elements */}
      <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center mb-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 to-blue-100/30"></div>
        <div className="text-gray-400 text-center z-10">
          <svg
            className="w-16 h-16 mx-auto mb-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <span className="text-sm">Interactive Map View</span>
        </div>

        {/* Sample data points */}
        <div className="absolute top-4 left-8 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-12 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-6 left-16 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-8 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
      </div>

      {/* Regional breakdown */}
      <div className="space-y-3">
        {regions.map((region, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 rounded hover:bg-gray-50"
          >
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 ${region.color} rounded-full`}></div>
              <span className="text-sm font-medium text-gray-700">
                {region.name}
              </span>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-gray-800">
                {region.sales}
              </div>
              <div className="text-xs text-green-500">{region.growth}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionalSales;
