import React, { useState, useRef, useEffect } from "react";

// Example stats data (replace with real data as needed)
const statsData = [
  {
    id: "1",
    title: "Total Sales",
    value: "$108,906",
    change: "+2,345",
    period: "Month",
    isPositive: true,
    description: "Compared to last month",
  },
  {
    id: "2",
    title: "Total Revenue",
    value: "$205,740",
    change: "+1,230",
    period: "Month",
    isPositive: true,
    description: "Compared to last month",
  },
  {
    id: "3",
    title: "New Customers",
    value: "1,230",
    change: "+120",
    period: "Month",
    isPositive: true,
    description: "Compared to last month",
  },
  {
    id: "4",
    title: "Refunds",
    value: "$1,200",
    change: "-30",
    period: "Month",
    isPositive: false,
    description: "Compared to last month",
  },
];

const DashboardStats: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Month");
  const [startDate, setStartDate] = useState("2024-03-01");
  const [endDate, setEndDate] = useState("2024-03-30");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const datePickerRef = useRef<HTMLDivElement>(null);

  const formatDisplayDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
    });
  };

  const handlePeriodClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  // Close date picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target as Node)
      ) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-8 w-full">
      {/* Header with date filter and download button */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 my-4 md:mx-10 mx-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 w-full md:w-auto">
          <div className="w-full sm:w-[128px] h-[48px] flex items-center justify-center text-center text-[#2B3674] border border-[#EFEFEF] rounded-lg mx-auto sm:mx-0">
            <div
              className="relative flex items-center space-x-2 text-base font-normal w-full justify-center"
              ref={datePickerRef}
            >
              <img
                src="/Calendar-Edit-1--Streamline-Ultimate.svg"
                alt="Calendar"
                className="w-5 h-5"
              />
              <button
                onClick={handlePeriodClick}
                className="text-sm font-normal text-[#2B3674] bg-white border-none outline-none cursor-pointer hover:text-gray-900 flex items-center space-x-1"
              >
                <span>{selectedPeriod}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Dropdown date picker for period selection */}
              {showDatePicker && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg p-4 z-10 min-w-[220px] w-max max-w-xs">
                  <div className="space-y-2 mb-4 border border-[#EFEFEF] rounded-lg p-3">
                    <h3 className="text-sm font-medium text-[#2B3674] mb-2">
                      Select Period
                    </h3>
                    <button
                      onClick={() => {
                        setSelectedPeriod("Week");
                        setShowDatePicker(false);
                      }}
                      className="block w-full text-left px-3 py-2 text-sm font-normal hover:bg-gray-100 rounded"
                    >
                      Week
                    </button>
                    <button
                      onClick={() => {
                        setSelectedPeriod("Month");
                        setShowDatePicker(false);
                      }}
                      className="block w-full text-left px-3 py-2 text-sm font-normal hover:bg-gray-100 rounded"
                    >
                      Month
                    </button>
                    <button
                      onClick={() => {
                        setSelectedPeriod("Year");
                        setShowDatePicker(false);
                      }}
                      className="block w-full text-left px-3 py-2 text-sm font-normal hover:bg-gray-100 rounded"
                    >
                      Year
                    </button>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <label className="block text-xs font-medium text-gray-700 mb-2">
                      Custom Date Range
                    </label>
                    <div className="space-y-2">
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">
                          From
                        </label>
                        <input
                          type="date"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          className="w-full text-sm border border-gray-200 rounded px-3 py-2 outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">
                          To
                        </label>
                        <input
                          type="date"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          className="w-full text-sm border border-gray-200 rounded px-3 py-2 outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-2 w-full sm:w-auto mt-2 sm:mt-0">
            <span className="text-base font-normal w-full sm:w-[93px] h-[48px] flex items-center justify-center text-center text-[#2B3674] border border-[#EFEFEF] rounded-lg">
              {formatDisplayDate(startDate)}
            </span>
            <span className="text-sm text-[#2b3674]">to</span>
            <span className="text-sm font-normal w-full sm:w-[93px] h-[48px] flex items-center justify-center text-center text-[#2B3674] border border-[#EFEFEF] rounded-lg">
              {formatDisplayDate(endDate)}
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full md:w-auto mt-2 md:mt-0">
          <div className="flex items-center space-x-2 text-base font-normal w-full sm:w-[171px] h-[48px] justify-center text-center text-[#2B3674] border border-[#EFEFEF] rounded-lg">
            <div className="w-8 h-8 flex items-center justify-center">
              <img
                src="/Remote-Access--Streamline-Ultimate.svg"
                alt="Download"
                className="w-5 h-5"
              />
            </div>
            <span className="text-sm text-[#2B3674]">Customer Widget</span>
          </div>
          <button
            onClick={() => {
              // Generate CSV data based on current stats
              const csvContent =
                "data:text/csv;charset=utf-8," +
                "Metric,Value,Change,Period\n" +
                statsData
                  .map(
                    (stat) =>
                      `${stat.title},${stat.value},${stat.change},${selectedPeriod}`
                  )
                  .join("\n");

              const encodedUri = encodeURI(csvContent);
              const link = document.createElement("a");
              link.setAttribute("href", encodedUri);
              link.setAttribute(
                "download",
                `dashboard-stats-${startDate}-to-${endDate}.csv`
              );
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="bg-[#414FF4] text-sm w-full sm:w-[123px] h-[48px] flex items-center justify-center text-center text-[#2B3674] border border-[#EFEFEF] rounded-lg space-x-1"
          >
            <img
              src="/Download-Bottom--Streamline-Ultimate.svg"
              alt="Download"
              className="w-5 h-5"
            />
            <span className="text-white">Download</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
