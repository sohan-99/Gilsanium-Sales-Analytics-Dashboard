/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

// Dummy data for chart and product monitoring
const salesData = [
  { month: "Jan", value: 800, type: "Checkout" },
  { month: "Feb", value: 1200, type: "Checkout" },
  { month: "Mar", value: 3200, type: "Checkout" },
  { month: "Apr", value: 1500, type: "Checkout" },
  { month: "May", value: 900, type: "Checkout" },
  { month: "Jun", value: 400, type: "Checkout" },
];

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

const SealsAnalysis: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full">
      {/* Sale Analytics Card */}
      <div className="bg-white rounded-[10px] border border-[#EFEFEF] p-5 flex flex-col justify-between w-[617px] h-[364px]">
        <div className="flex items-center justify-between  mb-4">
          <div className="flex items-center gap-2 text-[#2B3674] font-normal text-[16px]">
            <img
              src="/Dual-Sim-Signal-4--Streamline-Ultimate.svg"
              alt="icon"
              className="w-4 h-4"
            />
            <span className="font-normal text-[16px] text-[#2B3674] opacity-80">
              Sale Analytics
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1">
              <span className="inline-block w-3 h-3 rounded bg-[#BDBDBD]"></span>{" "}
              <span className="font-normal text-[16px] text-[#2B3674] opacity-80">
                Refund
              </span>
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-3 h-3 rounded bg-[#414FF4]"></span>{" "}
              <span className="font-normal text-[16px] text-[#2B3674] opacity-80">
                Checkout
              </span>
            </span>

            <button className="px-4 py-2 border border-[#DFDFDF] rounded-[10px] text-xs text-[#414FF4] opacity-80 bg-white flex items-center gap-2 font-normal shadow-none">
              This Month
              <img src="/CaretDown (1).svg" alt="" className="w-4 h-4" />
            </button>
          </div>
        </div>
        {/* Chart */}
        <div className="flex items-end gap-3 h-48 px-2">
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month, _idx) => {
            const checkout = salesData.find(
              (d) => d.month === month && d.type === "Checkout"
            );
            const refund = salesData.find(
              (d) => d.month === month && d.type === "Refund"
            );
            return (
              <div key={month} className="flex flex-col items-center w-8">
                {/* Refund bar */}
                <div
                  className="w-2 rounded-t bg-[#BDBDBD] mb-1"
                  style={{
                    height: refund ? `${refund.value / 10}px` : "0px",
                    opacity: refund ? 1 : 0.2,
                  }}
                ></div>
                {/* Checkout bar */}
                <div
                  className={`w-5 rounded-t ${
                    month === "Mar" ? "bg-[#7B61FF]" : "bg-[#E5E5E5]"
                  } relative`}
                  style={{
                    height: checkout ? `${checkout.value / 10}px` : "0px",
                    opacity: checkout ? 1 : 0.2,
                  }}
                >
                  {month === "Mar" && (
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded px-2 py-1 text-xs shadow">
                      Income:
                      <br /> <span className="font-semibold">$108,906</span>
                    </div>
                  )}
                </div>
                <span className="text-xs text-[#BDBDBD] mt-2">{month}</span>
              </div>
            );
          })}
        </div>
      </div>
      {/* Product Monitoring Card */}
      <div className="bg-white rounded-[10px] border border-[#EFEFEF] p-5 flex flex-col justify-between w-[468px] h-[364px]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col gap-0">
            <div className="flex items-center gap-2">
              <img
                src="/Startup-Product-Rocket-Box--Streamline-Ultimate.svg"
                alt="icon"
                className="w-6 h-6 text-[#414FF4]"
              />
              <span className="text-[#2B3674] font-medium text-[16px] leading-tight">
                Product Monitoring
              </span>
            </div>
            <span className="text-sm text-[#2B3674] opacity-50 font-normal ml-8 mt-1">
              Popular Product
            </span>
          </div>
          <button className="px-4 py-2 border border-[#DFDFDF] rounded-[10px] text-[12px] text-[#414FF4] opacity-70 bg-white flex items-center gap-2 font-medium shadow-none">
            Order
            <img src="/CaretDown (1).svg" alt="" className="w-4 h-4" />
          </button>
        </div>
        <ul className="divide-y divide-gray-100">
          {productMonitoring.map((item, _idx) => (
            <li
              key={item.rank}
              className={`flex items-center py-3 px-2 rounded-lg relative ${
                item.highlight ? "bg-[#F6F3FF]" : ""
              }`}
            >
              {item.highlight && (
                <span
                  className="absolute left-0 top-2 bottom-2 w-2 rounded-l-[8px] bg-[#7B61FF]"
                  style={{ height: "calc(100% - 16px)" }}
                ></span>
              )}
              <span
                className={`w-6 text-center font-medium text-[16px] z-10 ${
                  item.highlight ? "text-[#2B3674]" : "text-gray-400"
                }`}
                style={item.highlight ? { marginLeft: "8px" } : {}}
              >
                {String(item.rank).padStart(2, "0")}
              </span>
              <img
                src={item.image}
                alt={item.name}
                className="w-8 h-8 rounded-lg mx-3 z-10"
              />
              <span className="flex-1 font-medium text-[#2B3674] text-sm z-10">
                {item.name}
              </span>
              <span
                className={`font-semibold text-xs z-10 ${
                  item.highlight ? "text-[#7B61FF]" : "text-gray-400"
                }`}
              >
                {item.orders.toLocaleString()} Orders
              </span>
            </li>
          ))}
        </ul>
        <button className="mt-2 text-xs opacity-40 font-normal text-[#7B61FF] underline mx-auto flex items-center">
          view all details
        </button>
      </div>
    </div>
  );
};

export default SealsAnalysis;
