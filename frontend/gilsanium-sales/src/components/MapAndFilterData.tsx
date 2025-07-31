import { useState } from "react";
const MapAndFilterData = () => {
  const [showFilters, setShowFilters] = useState(false);
  const items = [
    {
      name: "Laptop",
      price: "$1,240",
      image: "/e950145c72e49e7de18fa4432cecc3cc43d4dbd0.png",
    },
    {
      name: "bag",
      price: "$1,240",
      image: "/110ac03843eaa6d28e5deaf9f5a3f6f757f8fdc4.jpg",
    },
    {
      name: "Monbitor",
      price: "$1,240",
      image: "/2489d9e21fd5a6ecbfd7fd619f5cc0969ddeb4b6.jpg",
    },
    {
      name: "iPhone",
      price: "$1,240",
      image: "/5e1f4adcf39c20de9a0de0f18c89bb26f2c28c5e.png",
    },
  ];
  return (
    <div className="my-6 p-6 border border-[#EFEFEF] rounded-[10px] space-y-4 w-full mx-auto">
      {/* Search + Filter */}
      <div className=" flex items-center  justify-between gap-2">
        <div className="flex items-center justify-between h-12 w-[110px] border  px-2 py-1 border-[#EFEFEF] rounded-[8px] ">
          <span className="text-[16px] font-normal  text-[#2B3674]">
            For sale
          </span>
          <img src="/Group 55.svg" alt="" />
        </div>
        <div className="flex items-center h-12 w-full border  px-2 py-1 border-[#EFEFEF] rounded-[8px] ">
          <input
            type="text"
            placeholder="Search Shop"
            className="w-full border-0 outline-none  bg-transparent"
          />
          <img
            src="/search-01.svg"
            alt="search"
            className="w-5 h-5 text-gray-500"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="p-2 rounded-[8px] h-12 w-12 bg-[#2B3674] text-white"
        >
          <img src="/filter-horizontal.svg" alt="" />
        </button>
      </div>

      {/* Result Count */}
      <div className="flex items-center justify-between">
        <div className="text-[16px] text-[#2B3674] font-medium">
          1 - 8 of 8 Results
        </div>
        <div className="flex items-center justify-between h-12 w-[110px] border  px-2 py-1 border-[#EFEFEF] rounded-[8px] ">
          <span className="text-[16px] font-normal  text-[#2B3674]">
            Default sort
          </span>
          <img src="/Group 55.svg" alt="" />
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="p-4 bg-white border shadow rounded-lg w-full max-w-sm absolute z-50 right-6 top-32 space-y-4">
          <div>
            <div className="flex justify-between text-sm font-semibold">
              <span>Date Range</span>
              <button className="text-xs text-violet-600">Reset</button>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <input
                type="date"
                className="border p-2 rounded w-full"
                defaultValue="2025-09-10"
              />
              <input
                type="date"
                className="border p-2 rounded w-full"
                defaultValue="2025-09-11"
              />
            </div>
            <div className="flex justify-between text-xs mt-2">
              <button className="text-gray-600">Today</button>
              <button className="text-gray-600">This Week</button>
              <button className="text-gray-600">This Month</button>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm font-semibold">
              <span>Amount</span>
              <button className="text-xs text-violet-600">Reset</button>
            </div>
            <select className="border p-2 w-full mt-2 rounded text-sm">
              <option>Low to High (Lowest First)</option>
              <option>High to Low (Highest First)</option>
            </select>
          </div>

          <div>
            <div className="flex justify-between text-sm font-semibold">
              <span>Price Range</span>
              <button className="text-xs text-violet-600">Reset</button>
            </div>
            <input type="range" className="w-full mt-2" />
          </div>

          <div className="flex justify-between">
            <button className="text-sm px-4 py-2 rounded border">
              Reset All
            </button>
            <button className="text-sm px-4 py-2 rounded bg-violet-600 text-white">
              Apply Filters (3)
            </button>
          </div>
        </div>
      )}

      {/* Main Grid - Responsive */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {/* Map */}
        <div className="relative col-span-1 h-64 md:h-auto order-2 md:order-1">
          <img
            src="/image 3.svg"
            alt="map"
            className="rounded-lg object-cover h-full w-full min-h-[200px] md:min-h-0"
          />
        </div>

        {/* Items */}
        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-[10px] order-1 md:order-2">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="w-full max-w-[311.5px] h-[320px] sm:h-[385px] bg-white rounded-md shadow relative overflow-hidden mx-auto"
            >
              {/* Top-Right Badge and Icon */}
              <div className="absolute top-3 right-3 flex items-center space-x-2 z-10">
                {/* Featured Badge */}
                <span className="bg-[#2B3674] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  FEATURED
                </span>
                {/* Icon Button */}
                <button className="bg-[#2B3674] w-7 h-7 rounded-full flex items-center justify-center">
                  <img src="/location-04.svg" alt="" />
                </button>
              </div>

              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="rounded-md w-full h-[180px] sm:h-[240px] md:w-[311.5px] md:h-[385px] object-cover"
              />

              {/* Overlay Text at Bottom of Image */}
              <div className="absolute bottom-0 left-0 w-full p-3 bg-[#2B3674B2]/70 rounded-b-md text-white">
                <div className="text-[16px] font-medium">{item.name}</div>
                <div className="text-2xl font-semibold">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapAndFilterData;
