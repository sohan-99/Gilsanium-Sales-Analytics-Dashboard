import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import React, { useState, useEffect } from "react";
// import ProductMonotoringCard from "./ProductMonotoringCard";
const productMonitoring = [
  {
    rank: 1,
    name: "Smartwatch",
    orders: 1500,
    image: "/Product Image.svg", // Updated image path
    highlight: true,
  },
  {
    rank: 2,
    name: "Speaker",
    orders: 900,
    image: "/Product Image Container.svg",
  },
  {
    rank: 3,
    name: "Drone",
    orders: 900,
    image: "/Product Image Container (1).svg",
  },
  {
    rank: 4,
    name: "Handphone",
    orders: 10,
    image: "/Product Image Container (2).svg",
  },
];
const data = [
  {
    name: "Jan",
    uv: 1.2,
    pv: 3.4,
  },
  {
    name: "Feb",
    uv: 0.5,
    pv: 0.18,
  },
  {
    name: "Mar",
    uv: 1,
    pv: 2.5,
  },
  {
    name: "Apr",
    uv: 0.6,
    pv: 2,
  },
  {
    name: "May",
    uv: 1.8,
    pv: 0.7,
  },
  {
    name: "Jun",
    uv: 0.2,
    pv: 1,
  },
];

const SealsAnalysis: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    setWindowWidth(window.innerWidth);

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get chart dimensions based on breakpoints
  const getChartDimensions = () => {
    if (windowWidth >= 1024) {
      // lg - 3/5 of grid
      return { width: 480, height: 268 };
    } else if (windowWidth >= 768) {
      // md - 2 columns
      return { width: 350, height: 220 };
    } else {
      // sm - full width
      return { width: windowWidth - 80, height: 200 };
    }
  };

  const { width, height } = getChartDimensions();

  // Format date to display current month
  const formatMonth = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(new Date(event.target.value));
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleApplyDate = () => {
    setIsModalOpen(false);
    // Here you can add logic to filter data based on selected date
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 lg:w-full">
      {/* Sale Analytics Card */}
      <div className="bg-white rounded-[10px] border border-[#EFEFEF] p-3 md:p-5 flex flex-col justify-between md:col-span-2 lg:col-span-3 h-auto min-h-[300px] lg:h-[364px]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3 sm:gap-0">
          <div className="flex items-center gap-2 text-[#2B3674] font-normal text-[14px] sm:text-[16px]">
            <img
              src="/Dual-Sim-Signal-4--Streamline-Ultimate.svg"
              alt="icon"
              className="w-4 h-4"
            />
            <span className="font-normal text-[14px] sm:text-[16px] text-[#2B3674] opacity-80">
              Sale Analytics
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-medium relative">
            <span className="flex items-center gap-1">
              <span className="inline-block w-3 h-3 rounded bg-[#BDBDBD]"></span>{" "}
              <span className="font-normal text-[12px] sm:text-[14px] md:text-[16px] text-[#2B3674] opacity-80">
                Refund
              </span>
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-3 h-3 rounded bg-[#414FF4]"></span>{" "}
              <span className="font-normal text-[12px] sm:text-[14px] md:text-[16px] text-[#2B3674] opacity-80">
                Checkout
              </span>
            </span>

            <div className="relative">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-2 sm:px-4 py-1 sm:py-2 border border-[#DFDFDF] rounded-[10px] text-[10px] sm:text-xs text-[#414FF4] opacity-80 bg-white flex items-center gap-1 sm:gap-2 font-normal shadow-none"
              >
                <span className="hidden sm:inline">
                  {formatMonth(selectedDate)}
                </span>
                <span className="sm:hidden">
                  {selectedDate.toLocaleDateString("en-US", { month: "short" })}
                </span>
                <img
                  src="/CaretDown (1).svg"
                  alt=""
                  className="w-3 h-3 sm:w-4 sm:h-4"
                />
              </button>

              {/* Date Selection Popup */}
              {isModalOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-[#DFDFDF] rounded-[10px] shadow-lg p-4 w-64 z-50">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-[#2B3674]">
                      Select Date
                    </h3>
                    <button
                      onClick={handleModalClose}
                      className="text-gray-400 hover:text-gray-600"
                    >
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-medium text-[#2B3674] mb-2">
                      Month and Year
                    </label>
                    <input
                      type="month"
                      value={selectedDate.toISOString().slice(0, 7)}
                      onChange={handleDateChange}
                      className="w-full px-3 py-2 border border-[#DFDFDF] rounded-[5px] focus:outline-none focus:ring-1 focus:ring-[#414FF4] focus:border-transparent text-sm"
                    />
                  </div>

                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={handleModalClose}
                      className="px-3 py-1 border border-[#DFDFDF] rounded-[5px] text-xs text-[#666] hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleApplyDate}
                      className="px-3 py-1 bg-[#414FF4] text-white rounded-[5px] hover:bg-[#3139d4] text-xs"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Chart */}
        <div className="w-full h-auto flex justify-center overflow-x-auto">
          <BarChart width={width} height={height} data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              tick={(props) => {
                const { x, y, payload } = props;
                const isMar = payload.value === "Mar";
                return (
                  <text
                    x={x}
                    y={y + 19}
                    textAnchor="middle"
                    fontSize={16}
                    fontWeight={isMar ? 600 : 500}
                    fill="#2B3674"
                    opacity={isMar ? 0.8 : 0.6}
                  >
                    {payload.value}
                  </text>
                );
              }}
            />
            <YAxis
              dataKey="pv"
              tickFormatter={(value) => `${value.toFixed(1)}k`}
            />
            <Tooltip cursor={{ fill: "rgba(65, 79, 244, 0.1)" }} />
            {/* <Legend /> */}
            <Bar dataKey="pv" radius={40}>
              {data.map((entry, idx) => (
                <Cell
                  key={`cell-pv-${idx}`}
                  fill={entry.name === "Mar" ? "#414FF4" : "#FAFAFA"}
                  radius={40}
                />
              ))}
            </Bar>
            <Bar dataKey="uv" fill="#D9D9D933 " radius={40} />
          </BarChart>
        </div>
      </div>
      {/* Product Monitoring Card */}
      <div className="md:col-span-2 lg:col-span-2">
        <div className="bg-white rounded-[10px] border border-[#EFEFEF] p-3 md:p-5 flex flex-col justify-between w-full h-auto min-h-[300px] lg:h-[364px]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3 sm:gap-0">
            <div className="flex flex-col gap-0">
              <div className="flex items-center gap-2">
                <img
                  src="/Startup-Product-Rocket-Box--Streamline-Ultimate.svg"
                  alt="icon"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#414FF4]"
                />
                <span className="text-[#2B3674] font-medium text-[14px] sm:text-[16px] leading-tight">
                  Product Monitoring
                </span>
              </div>
              <span className="text-xs sm:text-sm text-[#2B3674] opacity-50 font-normal ml-6 sm:ml-8 mt-1">
                Popular Product
              </span>
            </div>
            <button className="px-2 sm:px-4 py-1 sm:py-2 border border-[#DFDFDF] rounded-[10px] text-[10px] sm:text-[12px] text-[#414FF4] opacity-70 bg-white flex items-center gap-1 sm:gap-2 font-medium shadow-none">
              Order
              <img
                src="/CaretDown (1).svg"
                alt=""
                className="w-3 h-3 sm:w-4 sm:h-4"
              />
            </button>
          </div>
          <ul className="divide-y divide-gray-100 space-y-1">
            {productMonitoring.map((item) => (
              <li
                key={item.rank}
                className={`flex items-center py-2 sm:py-3 px-1 sm:px-2 rounded-lg relative ${
                  item.highlight ? "bg-[#F6F3FF]" : ""
                }`}
              >
                {item.highlight && (
                  <span
                    className="absolute left-0 top-1 sm:top-2 bottom-1 sm:bottom-2 w-1.5 sm:w-2 rounded-r-[8px] bg-[#7B61FF]"
                    style={{ height: "calc(100% - 8px)" }}
                  ></span>
                )}
                <span
                  className={`w-4 sm:w-6 text-center font-medium text-[14px] sm:text-[16px] z-10 ${
                    item.highlight ? "text-[#2B3674]" : "text-gray-400"
                  }`}
                  style={item.highlight ? { marginLeft: "6px" } : {}}
                >
                  {String(item.rank).padStart(2, "0")}
                </span>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg mx-2 sm:mx-3 z-10"
                />
                <span className="flex-1 font-medium text-[#2B3674] text-xs sm:text-sm z-10 truncate">
                  {item.name}
                </span>
                <span
                  className={`font-semibold text-[10px] sm:text-xs z-10 whitespace-nowrap ml-2 ${
                    item.highlight ? "text-[#7B61FF]" : "text-gray-400"
                  }`}
                >
                  {item.orders.toLocaleString()} Orders
                </span>
              </li>
            ))}
          </ul>
          <button className="mt-2 text-[10px] sm:text-xs opacity-40 font-normal text-[#7B61FF] underline mx-auto flex items-center">
            view all details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SealsAnalysis;
