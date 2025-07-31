/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import React from "react";
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
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:w-full">
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
        <div className="lg:w-[617px] h-[300px]">
          <BarChart width={585} height={268} data={data}>
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
