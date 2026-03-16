import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { productsData } from "../data/productsData";

function Products() {
  const { category } = useParams();
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");

  const products = productsData[category] || [];

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="px-4 md:px-10 py-6">
        <h1 className="text-2xl font-bold mb-4 capitalize">
          {category}
        </h1>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {filteredProducts.length === 0 ? (
          <p className="text-gray-500">No products found.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h2 className="font-semibold text-sm">
                    {item.name}
                  </h2>

                  <p className="text-gray-700 mt-1">
                    ₹{item.price} / {item.unit}
                  </p>
                </div>

                <button
                  onClick={() => addToCart(item)}
                  className="mt-3 bg-indigo-600 text-white py-2 rounded-lg text-sm hover:bg-indigo-700"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Products;
