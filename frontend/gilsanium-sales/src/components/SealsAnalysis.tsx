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
import ProductMonotoringCard from "./ProductMonotoringCard";

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
      // lg
      return { width: 585, height: 268 };
    } else if (windowWidth >= 768) {
      // md
      return { width: 450, height: 220 };
    } else {
      // sm
      return { width: 220, height: 180 };
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
    <div className="lg:flex flex-col lg:flex-row lg:gap-6 lg:w-full">
      {/* Sale Analytics Card */}
      <div className="bg-white rounded-[10px] border border-[#EFEFEF] p-5 lg:flex lg:flex-col justify-between lg:w-[617px] lg:h-[364px]">
        <div className="lg:flex items-center justify-between  mb-4">
          <div className="lg:flex items-center gap-2 text-[#2B3674] lg:font-normal lg:text-[16px]">
            <img
              src="/Dual-Sim-Signal-4--Streamline-Ultimate.svg"
              alt="icon"
              className="lg:w-4 lg:h-4"
            />
            <span className="lg:font-normal lg:text-[16px] text-[#2B3674] opacity-80">
              Sale Analytics
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium relative">
            <span className="flex items-center gap-1">
              <span className="inline-block w-3 h-3 rounded bg-[#BDBDBD]"></span>{" "}
              <span className="lg:font-normal lg:text-[16px] text-[#2B3674] opacity-80">
                Refund
              </span>
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-3 h-3 rounded bg-[#414FF4]"></span>{" "}
              <span className="lg:font-normal lg:text-[16px] text-[#2B3674] opacity-80">
                Checkout
              </span>
            </span>

            <div className="relative">
              <button
                onClick={() => setIsModalOpen(true)}
                className="lg:px-4 lg:py-2 border border-[#DFDFDF] rounded-[10px] lg:text-xs text-[#414FF4] opacity-80 bg-white flex items-center gap-2  lg:font-normal shadow-none"
              >
                {formatMonth(selectedDate)}
                <img
                  src="/CaretDown (1).svg"
                  alt=""
                  className="lg:w-4 lg:h-4"
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
        <div className="lg:w-[617px] h-[300px]">
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
      <ProductMonotoringCard />
    </div>
  );
};

export default SealsAnalysis;
