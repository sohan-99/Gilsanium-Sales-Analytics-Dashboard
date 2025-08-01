import { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const calendarIcon = (
  <span className="flex items-center justify-center bg-[#F7F7F9] rounded-lg p-1.5 ml-2">
    <svg width="20" height="20" fill="none" stroke="#8C929A">
      <rect x="3" y="5" width="14" height="12" rx="2" strokeWidth="2" />
      <path d="M7 3v2M13 3v2M3 9h14" strokeWidth="2" />
    </svg>
  </span>
);

const inputClass =
  "w-32 text-gray-500 text-lg font-medium tracking-wide bg-white outline-none";

const MapAndFilterData = () => {
  const [showFilters, setShowFilters] = useState(false);

  // Filter States
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [sortOrder, setSortOrder] = useState("Low to High (Lowest First)");
  const [priceRange, setPriceRange] = useState(50);

  // Example coordinates for items (San Francisco area)
  const items = [
    {
      name: "Laptop",
      price: "$1,240",
      image: "/e950145c72e49e7de18fa4432cecc3cc43d4dbd0.png",
      lngLat: [-122.494, 37.786],
      locationDistance: "$5.4m",
    },
    {
      name: "bag",
      price: "$1,340",
      image: "/110ac03843eaa6d28e5deaf9f5a3f6f757f8fdc4.jpg",
      lngLat: [-122.472, 37.771],
      locationDistance: "$1.2m",
    },
    {
      name: "Monbitor",
      price: "$1,440",
      image: "/2489d9e21fd5a6ecbfd7fd619f5cc0969ddeb4b6.jpg",
      lngLat: [-122.457, 37.759],
      locationDistance: "$890k",
    },
    {
      name: "iPhone",
      price: "$1,540",
      image: "/5e1f4adcf39c20de9a0de0f18c89bb26f2c28c5e.png",
      lngLat: [-122.49, 37.743],
      locationDistance: "$1.5m",
    },
  ];

  // Date Range Shortcuts
  const handleToday = () => {
    const today = new Date();
    setStartDate(today);
    setEndDate(today);
  };

  const handleThisWeek = () => {
    const now = new Date();
    const first = now.getDate() - now.getDay();
    const last = first + 6;
    const start = new Date(now);
    start.setDate(first);
    start.setHours(0, 0, 0, 0);
    const end = new Date(now);
    end.setDate(last);
    end.setHours(23, 59, 59, 999);
    setStartDate(start);
    setEndDate(end);
  };

  const handleThisMonth = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    setStartDate(start);
    setEndDate(end);
  };

  // Reset Handlers
  const resetDateRange = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const resetSortOrder = () => {
    setSortOrder("Low to High (Lowest First)");
  };

  const resetPriceRange = () => {
    setPriceRange(50);
  };

  const resetAllFilters = () => {
    resetDateRange();
    resetSortOrder();
    resetPriceRange();
  };

  // Count active filters
  const getActiveFiltersCount = () => {
    let count = 0;

    // Check if date range is set
    if (startDate || endDate) {
      count++;
    }

    // Check if sort order is changed from default
    if (sortOrder !== "Low to High (Lowest First)") {
      count++;
    }

    // Check if price range is changed from default
    if (priceRange !== 50) {
      count++;
    }

    return count;
  };

  // Mapbox setup
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
    console.log("Mapbox Access Token:", mapboxgl.accessToken);

    // Inject marker-content CSS into document head if not already present
    const markerStyleId = "marker-content-style";
    if (!document.getElementById(markerStyleId)) {
      const style = document.createElement("style");
      style.id = markerStyleId;
      style.innerHTML = `
        .marker-content {
          background: white;
          color: #333333;
          padding: 8px 12px;
          border-radius: 8px;
          text-align: center;
          min-width: 80px;
          position: relative;
          border: 2px solid #333333;
          display: inline-block;
          font-size: 22px;
          font-weight: 500;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .marker-content::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid #333333;
        }
        .marker-content::before {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid #ffffff;
          z-index: 1;
        }
        .mapboxgl-ctrl-logo {
          display: none !important;
        }
        .mapboxgl-ctrl-attrib {
          display: none !important;
        }
      `;
      document.head.appendChild(style);
    }

    if (!mapboxgl.accessToken) {
      console.error(
        "Mapbox access token is not set. Please check your .env file."
      );
      return;
    }

    if (mapRef.current) return; // Prevent re-initialization
    if (!mapContainer.current) return;
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-122.47, 37.76],
      zoom: 11.5,
      attributionControl: false,
    });

    // Hide Mapbox watermark/logo
    const mapContainer_element = map.getContainer();
    const mapboxLogo = mapContainer_element.querySelector(
      ".mapboxgl-ctrl-logo"
    );
    if (mapboxLogo) {
      (mapboxLogo as HTMLElement).style.display = "none";
    }
    mapRef.current = map;

    // Store marker elements for cleanup
    const markerElements: HTMLDivElement[] = [];

    // Function to update marker positions
    const updateMarkers = () => {
      items.forEach((item, index) => {
        const pixel = map.project(item.lngLat as [number, number]);
        const marker = markerElements[index];
        if (marker) {
          marker.style.left = `${pixel.x}px`;
          marker.style.top = `${pixel.y}px`;
          marker.style.transform = "translate(-50%, -100%)"; // Center the marker
        }
      });
    };

    // Add locationDistance markers as lng/lat overlays inside the map container
    map.on("load", () => {
      items.forEach((item) => {
        const marker = document.createElement("div");
        marker.className = "marker-content";
        marker.style.position = "absolute";
        marker.style.pointerEvents = "none"; // Prevent interference with map interactions
        marker.style.zIndex = "1";
        marker.innerText = item.locationDistance;

        map.getContainer().appendChild(marker);
        markerElements.push(marker);
      });

      // Initial marker positioning
      updateMarkers();
    });

    // Update marker positions when map moves, zooms, or rotates
    map.on("move", updateMarkers);
    map.on("zoom", updateMarkers);
    map.on("rotate", updateMarkers);

    return () => {
      // Clean up markers
      markerElements.forEach((marker) => {
        if (marker.parentNode) {
          marker.parentNode.removeChild(marker);
        }
      });
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="my-6 p-6 border border-[#EFEFEF] rounded-[10px] space-y-4 w-full mx-auto">
      {/* Search + Filter */}
      <div className="flex items-center justify-between gap-2">
        <div className="p-2 flex items-center justify-between h-12 w-[110px] border border-[#EFEFEF] rounded-[8px]">
          <span className="text-[16px] font-normal text-[#2B3674]">
            For sale
          </span>
          <img src="/Group 55.svg" alt="" />
        </div>
        <div className="flex items-center h-12 p-2 w-full border border-[#EFEFEF] rounded-[8px]">
          <input
            type="text"
            placeholder="Search Shop"
            className="w-full border-0 outline-none bg-transparent"
          />
          <img
            src="/search-01.svg"
            alt="search"
            className="w-5 h-5 text-gray-500"
          />
        </div>

        <div className="relative">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="p-2 rounded-[8px] h-12 w-12 bg-[#2B3674] text-white"
          >
            <img src="/filter-horizontal.svg" alt="" />
          </button>

          {showFilters && (
            <div className="p-6 bg-white w-[446px] h-[535px] border-[#EFEFEF] border-[1px] rounded-xl shadow-2xl absolute z-30 top-14 right-0 space-y-6 animate-fade-in">
              <div>
                <div className="text-[13.55px] font-medium text-[#555E67]">
                  Filter By:
                </div>

                {/* Date Range */}
                <div className="mt-6 flex justify-between text-sm font-semibold">
                  <span className="text-[15.81px] text-[#2B3674]">
                    Date Range
                  </span>
                  <button
                    onClick={resetDateRange}
                    className="text-[15.81px] text-[#2B3674]"
                  >
                    Reset
                  </button>
                </div>
                <div className="mt-6 flex text-[#555E67] justify-between text-[13.55px] font-medium">
                  <span>From</span>
                  <span>To</span>
                </div>
                <div className="flex flex-row gap-2 mt-2">
                  <div className="inline-flex w-[190px] h-[56px] items-center gap-2 p-2 border border-[#F2F2F4] rounded-xl bg-white">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="MM-dd-yyyy"
                      className={inputClass}
                      placeholderText="09-10-2025"
                    />
                    {calendarIcon}
                  </div>
                  <div className="inline-flex w-[190px] h-[56px] items-center gap-2 p-2 border border-[#F2F2F4] rounded-xl bg-white">
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      dateFormat="MM-dd-yyyy"
                      className={inputClass}
                      placeholderText="09-11-2025"
                    />
                    {calendarIcon}
                  </div>
                </div>

                <div className="flex justify-center items-center gap-x-4 mx-auto text-xs mt-4">
                  <button
                    className="text-[13.55px] border w-[120px] h-[56px] rounded-lg"
                    onClick={handleToday}
                  >
                    Today
                  </button>
                  <button
                    className="text-[13.55px] border w-[120px] h-[56px] rounded-lg"
                    onClick={handleThisWeek}
                  >
                    This Week
                  </button>
                  <button
                    className="text-[13.55px] border w-[120px] h-[56px] rounded-lg"
                    onClick={handleThisMonth}
                  >
                    This Month
                  </button>
                </div>

                {/* Sort Order */}
                <div className="mt-6 flex justify-between text-sm font-semibold">
                  <span className="text-[15.81px] text-[#2B3674]">Amount</span>
                  <button
                    onClick={resetSortOrder}
                    className="text-[15.81px] text-[#2B3674]"
                  >
                    Reset
                  </button>
                </div>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="w-full h-[56px] text-[#555E67] p-2 border border-[#F2F2F4] rounded-xl bg-white"
                >
                  <option>Low to High (Lowest First)</option>
                  <option>High to Low (Highest First)</option>
                </select>

                {/* Price Range */}
                <div className="mt-6 flex justify-between text-sm font-semibold">
                  <span className="text-[15.81px] text-[#2B3674]">
                    Price Range
                  </span>
                  <button
                    onClick={resetPriceRange}
                    className="text-[15.81px] text-[#2B3674]"
                  >
                    Reset
                  </button>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full mt-2 accent-[#2B3674]"
                />

                <div className="mt-4 flex justify-between gap-2">
                  <button
                    className="text-sm px-4 py-2 rounded text-[#414FF4] font-semibold bg-gray-100 hover:bg-violet-50 transition"
                    onClick={resetAllFilters}
                  >
                    Reset All
                  </button>
                  <button className="text-sm px-4 py-2 rounded bg-[#414FF4] text-white font-semibold shadow transition">
                    Apply Filters ({getActiveFiltersCount()})
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Result Count */}
      <div className="flex items-center justify-between">
        <div className="text-[16px] text-[#2B3674] font-medium">
          1 - 8 of 8 Results
        </div>
        <div className="flex items-center justify-between p-2 h-12 w-[110px] border border-[#EFEFEF] rounded-[8px]">
          <span className="text-[16px] font-normal text-[#2B3674]">
            Default sort
          </span>
          <img src="/Group 55.svg" alt="" />
        </div>
      </div>

      {/* Map & Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {/* Mapbox Map */}
        <div className="relative h-[320px] col-span-1 md:h-auto order-2 md:order-1 overflow-hidden">
          <div
            ref={mapContainer}
            className="rounded-lg w-full h-full"
            style={{ height: "100%", minHeight: 256 }}
          />
        </div>

        {/* Items */}
        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-[10px] order-1 md:order-2">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="w-full max-w-[311.5px] h-[320px] sm:h-[385px] bg-white rounded-md shadow relative overflow-hidden mx-auto"
            >
              <div className="absolute top-3 right-3 flex items-center space-x-2 z-10">
                <span className="bg-[#2B3674] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  FEATURED
                </span>
                <button className="bg-[#2B3674] w-7 h-7 rounded-full flex items-center justify-center">
                  <img src="/location-04.svg" alt="" />
                </button>
              </div>

              <img
                src={item.image}
                alt={item.name}
                className="rounded-md w-full h-[180px] sm:h-[240px] md:w-[311.5px] md:h-[385px] object-cover"
              />

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