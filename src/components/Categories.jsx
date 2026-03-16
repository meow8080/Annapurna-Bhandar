import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    { id: "rice", name: "Rice" },
    { id: "dal", name: "Dal & Pulses" },
    { id: "atta", name: "Atta & Flour" },
    { id: "snacks", name: "Snacks & Namkeen" },
    { id: "biscuits", name: "Biscuits" },
    { id: "dairy", name: "Dairy Products" },
    { id: "beverages", name: "Beverages" },
    { id: "masala", name: "Masala & Spices" },
    { id: "oil", name: "Oil & Ghee" },
    { id: "household", name: "Household Essentials" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/products/${category.id}`}
            className="bg-green-100 hover:bg-green-200 text-green-900 font-semibold p-4 rounded-lg text-center shadow-sm transition"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
