// Featured products showcase component

interface Product {
  name: string;
  price: string;
  gradient: string;
  icon: string;
}

const FeaturedProducts = () => {
  const products: Product[] = [
    {
      name: "Premium Laptop",
      price: "$1,240",
      gradient: "from-purple-500 to-purple-700",
      icon: "💻",
    },
    {
      name: "Smart Watch",
      price: "$1,240",
      gradient: "from-blue-500 to-blue-700",
      icon: "⌚",
    },
    {
      name: "Wireless Speaker",
      price: "$1,240",
      gradient: "from-orange-500 to-red-600",
      icon: "🔊",
    },
    {
      name: "Tablet Pro",
      price: "$1,240",
      gradient: "from-gray-600 to-gray-800",
      icon: "📱",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">
          Featured Products
        </h3>
        <button className="text-purple-600 text-sm hover:text-purple-700 font-medium">
          View all
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${product.gradient} p-4 rounded-lg text-white group hover:scale-105 transition-transform duration-200 cursor-pointer`}
          >
            <div className="h-20 bg-white/20 rounded-lg mb-3 flex items-center justify-center text-2xl backdrop-blur-sm group-hover:bg-white/30 transition-colors">
              {product.icon}
            </div>
            <div className="space-y-1">
              <div className="text-sm font-medium opacity-90">
                {product.name}
              </div>
              <div className="text-lg font-bold">{product.price}</div>
              <div className="text-xs opacity-75">+5% this week</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="text-center flex-1">
            <div className="text-2xl font-bold text-gray-800">24</div>
            <div className="text-xs text-gray-500">Total Products</div>
          </div>
          <div className="text-center flex-1">
            <div className="text-2xl font-bold text-gray-800">8</div>
            <div className="text-xs text-gray-500">Categories</div>
          </div>
          <div className="text-center flex-1">
            <div className="text-2xl font-bold text-green-600">94%</div>
            <div className="text-xs text-gray-500">Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
