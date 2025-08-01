/* eslint-disable @typescript-eslint/no-unused-vars */
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

const ProductMonotoringCard = () => {
  return (
    <div className="bg-white rounded-[10px] border border-[#EFEFEF] p-5 flex flex-col justify-between lg:w-[468px] lg:h-[364px]">
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
                className="absolute left-0 top-2 bottom-2 w-2 rounded-r-[8px] bg-[#7B61FF]"
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
  );
};

export default ProductMonotoringCard;
