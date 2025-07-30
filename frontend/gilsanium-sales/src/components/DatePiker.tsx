import React, { useState, useRef, useEffect } from "react";
import StatsCard from "../components/StatusCard";

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
    <div className="mb-8">
      {/* Header with date filter and download button */}
      <div className="flex items-center justify-between my-4 mx-10">
        <div className="flex items-center space-x-4 ">
          <div className=" w-[128px] h-[48px] flex items-center justify-center text-center text-[#2B3674] border border-[#EFEFEF] rounded-lg">
            <div
              className="relative flex items-center space-x-2 text-base font-normal" 
              ref={datePickerRef}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.7995 14.5683L14.7656 21.6022L11.3086 22.2937L12 18.8366L19.0339 11.8027C19.3997 11.437 19.8958 11.2316 20.413 11.2316C20.9303 11.2316 21.4264 11.437 21.7922 11.8027L21.7995 11.8101C21.9809 11.9911 22.1247 12.2061 22.2228 12.4428C22.3209 12.6794 22.3715 12.933 22.3715 13.1892C22.3715 13.4454 22.3209 13.6991 22.2228 13.9357C22.1247 14.1724 21.9809 14.3874 21.7995 14.5683Z"
                  stroke="#2B3674"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.23438 16.8398H3.01172C2.64498 16.8398 2.29325 16.6942 2.03392 16.4349C1.77459 16.1755 1.62891 15.8238 1.62891 15.457V4.40837C1.62891 4.04163 1.77459 3.68991 2.03392 3.43058C2.29325 3.17125 2.64498 3.02556 3.01172 3.02556H15.457C15.8238 3.02556 16.1755 3.17125 16.4349 3.43058C16.6942 3.68991 16.8398 4.04163 16.8398 4.40837V8.54298"
                  stroke="#2B3674"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.62891 7.16016H16.8398"
                  stroke="#2B3674"
                  stroke-width="1.25"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.77087 4.39453V1.62891"
                  stroke="#2B3674"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.685 4.39453V1.62891"
                  stroke="#2B3674"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <button
                onClick={handlePeriodClick}
                className="text-sm font-normal text-[#2B3674] opacity-80 bg-white border-none outline-none cursor-pointer hover:text-gray-900 flex items-center space-x-1"
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
                <div className="absolute  top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg  p-4 z-10 min-w-[280px]">
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

          <span className="text-base font-normal w-[93px] h-[48px] flex items-center justify-center text-center text-[#2B3674] border border-[#EFEFEF] rounded-lg">
            {formatDisplayDate(startDate)}
          </span>
          <div className="flex items-center space-x-2 ">
            <span className="text-sm text-[#2b3674]">to</span>
            <span className="text-sm font-normal w-[93px] h-[48px] flex items-center justify-center text-center text-[#2B3674] border border-[#EFEFEF] rounded-lg">
              {formatDisplayDate(endDate)}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-base font-normal w-[171px] h-[48px]  justify-center text-center text-[#2B3674] border border-[#EFEFEF] rounded-lg">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5352 6.74536H9.46487C9.09612 6.74536 8.81956 6.92974 8.63518 7.2063L6.05393 11.5391C5.86956 11.8156 5.86956 12.1844 6.05393 12.4609L8.63518 16.7938C8.81956 17.0703 9.09612 17.2547 9.46487 17.2547H14.5352C14.9039 17.2547 15.1805 17.0703 15.3648 16.7938L17.9461 12.4609C18.1305 12.1844 18.1305 11.8156 17.9461 11.5391L15.3648 7.2063C15.1805 6.92974 14.9039 6.74536 14.5352 6.74536Z"
                  stroke="#2B3674"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.0461 13.6594C12.9625 13.6594 13.7055 12.9164 13.7055 12C13.7055 11.0836 12.9625 10.3406 12.0461 10.3406C11.1297 10.3406 10.3867 11.0836 10.3867 12C10.3867 12.9164 11.1297 13.6594 12.0461 13.6594Z"
                  stroke="#2B3674"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.8354 21.0343L15.3649 16.7937"
                  stroke="#2B3674"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.57983 8.44529L6.05396 12.4609"
                  stroke="#2B3674"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.4902 6.74536H14.5352"
                  stroke="#2B3674"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.7266 2.96558H7.27335C6.90624 2.96558 6.63089 3.14995 6.44734 3.42651L1.76658 11.5391C1.58302 11.8156 1.58302 12.1844 1.76658 12.4609L6.44734 20.5733C6.63089 20.8499 6.90624 21.0343 7.27335 21.0343H16.7266C17.0937 21.0343 17.3691 20.8499 17.5526 20.5733L22.2335 12.4609C22.417 12.1844 22.417 11.8156 22.2335 11.5391L17.5526 3.42651C17.3691 3.14995 17.002 2.96558 16.7266 2.96558Z"
                  stroke="#2B3674"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
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
            className=" bg-[#414FF4] text-sm w-[123px] h-[48px] flex items-center justify-center text-center text-[#2B3674] border border-[#EFEFEF] rounded-lg space-x-1"
          >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.001 4.39453V15.457" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.85254 11.3086L12.001 15.457L16.1494 11.3086" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.3721 15.457V16.8398C22.3721 17.5733 22.0807 18.2768 21.562 18.7954C21.0434 19.3141 20.3399 19.6055 19.6064 19.6055H4.39551C3.66202 19.6055 2.95857 19.3141 2.43992 18.7954C1.92126 18.2768 1.62988 17.5733 1.62988 16.8398V15.457" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            <span className="text-white">Download</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stats) => (
          <StatsCard key={stats.id} stats={stats} />
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;
