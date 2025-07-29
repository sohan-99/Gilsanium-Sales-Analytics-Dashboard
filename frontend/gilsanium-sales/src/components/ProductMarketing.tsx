// Product marketing analytics component

interface ProductItem {
  name: string;
  category: string;
  sales: string;
  color: string;
  icon: string;
}

const ProductMarketing = () => {
  const products: ProductItem[] = [
    {
      name: "Smartphone",
      category: "Electronics",
      sales: "$340 sold",
      color: "bg-blue-100",
      icon: "📱",
    },
    {
      name: "Laptop",
      category: "Electronics",
      sales: "$280 sold",
      color: "bg-green-100",
      icon: "💻",
    },
    {
      name: "Headphones",
      category: "Audio",
      sales: "$180 sold",
      color: "bg-yellow-100",
      icon: "🎧",
    },
    {
      name: "Smart Watch",
      category: "Wearables",
      sales: "$220 sold",
      color: "bg-purple-100",
      icon: "⌚",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">
          Product Marketing
        </h3>
        <button className="text-purple-600 text-sm hover:text-purple-700">
          View all
        </button>
      </div>

      <div className="space-y-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-12 h-12 ${product.color} rounded-lg flex items-center justify-center text-lg`}
              >
                {product.icon}
              </div>
              <div>
                <div className="font-medium text-gray-800">{product.name}</div>
                <div className="text-sm text-gray-500">{product.category}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-gray-800">
                {product.sales}
              </div>
              <div className="text-xs text-green-500">+12% this week</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Total Products</span>
          <span className="font-medium text-gray-800">1,234</span>
        </div>
        <div className="flex items-center justify-between text-sm mt-2">
          <span className="text-gray-600">Active Campaigns</span>
          <span className="font-medium text-gray-800">8</span>
        </div>
      </div>
    </div>
  );
};

export default ProductMarketing;
