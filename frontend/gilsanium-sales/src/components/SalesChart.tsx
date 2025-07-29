// Sales analytics chart component

const SalesChart = () => {
  const chartData = [
    { month: "Jan", value: 40 },
    { month: "Feb", value: 60 },
    { month: "Mar", value: 80 },
    { month: "Apr", value: 100 },
    { month: "May", value: 70 },
    { month: "Jun", value: 50 },
    { month: "Jul", value: 30 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Sales Analytics</h3>
        <div className="flex items-center space-x-4">
          <button className="text-purple-600 font-medium bg-purple-50 px-3 py-1 rounded-lg">
            Weekly
          </button>
          <button className="text-gray-500 hover:text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-50">
            Monthly
          </button>
          <button className="text-gray-500 hover:text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-50">
            Yearly
          </button>
        </div>
      </div>

      {/* Chart Area */}
      <div className="h-64 flex items-end space-x-3 mb-4 px-2">
        {chartData.map((data, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div
              className="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-md transition-all duration-300 hover:from-purple-700 hover:to-purple-500"
              style={{ height: `${data.value}%` }}
            ></div>
          </div>
        ))}
      </div>

      <div className="flex justify-between text-sm text-gray-500 px-2">
        {chartData.map((data, index) => (
          <span key={index} className="text-center">
            {data.month}
          </span>
        ))}
      </div>

      {/* Chart Legend */}
      <div className="mt-4 flex items-center justify-center space-x-6 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
          <span className="text-gray-600">Sales Revenue</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
          <span className="text-gray-600">Previous Period</span>
        </div>
      </div>
    </div>
  );
};

export default SalesChart;
