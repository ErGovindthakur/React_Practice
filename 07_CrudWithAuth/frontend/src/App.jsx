import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  // 🟢 State Management
  const [product, setProduct] = useState([]);
  const [newProduct,setNewProduct] = useState({
    name:"",
    price:0,
    description:""
  });

  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); //Added error handling state
  const [toggle, setToggle] = useState(false);

  // 🧠 Function to Fetch Products from Backend
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:9090/api/v1/product/getProducts");
      console.log(res)
      const {product} = res.data;
      setProduct(product || []); //Added fallback to avoid undefined errors
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); //Stop loading in both success/failure
    }
  };

  const handleChange = (e) => {
    const {name,value} = e.target;
    setNewProduct((prev)=>({...prev,[name]:value}));
  }
  const addProduct = async(e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:9090/api/v1/product/createProduct',newProduct);

      setNewProduct({
        name:"",
        price:0,
        description:""
      })
      fetchProducts();
      setToggle(false);
    } catch (error) {
      console.log(error.message)
    }
  }
  //Run only once on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  //Toggle sidebar visibility
  const toggleSideBar = () => setToggle((prev) => !prev);

  return (
    <div className="relative min-h-screen bg-zinc-900 text-white overflow-hidden">
      {/* 🟣 Sidebar Section */}
      <div
        className={`fixed top-0 left-0 h-full bg-zinc-800 shadow-xl shadow-violet-500/30 transition-all duration-500 ease-in-out
        ${toggle ? "translate-x-0 w-[400px]" : "-translate-x-full w-[400px]"} 
        z-50`} //Sidebar comes above everything
      >
        <div className="p-6 flex flex-col h-full">
          <h3 className="text-2xl font-semibold mb-5">Add Product</h3>

          <form onSubmit={addProduct} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleChange}
              placeholder="Enter Product Title*"
              className="rounded-md outline-none border-2 border-violet-400 bg-transparent px-4 py-2 text-lg"
            />
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              placeholder="Enter Product Price*"
              className="rounded-md outline-none border-2 border-violet-400 bg-transparent px-4 py-2 text-lg"
            />
            <textarea
              name="description"
              value={newProduct.description}
              onChange={handleChange}
              placeholder="Enter Product Description*"
              className="rounded-md outline-none border-2 border-violet-400 bg-transparent px-4 py-2 text-lg"
            />
            <button
              type="submit"
              className="bg-violet-700 px-4 py-2 rounded-md hover:bg-violet-800 transition"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>

      {/* 🔳 Optional Overlay (click to close sidebar) */}
      {toggle && (
        <div
          className="fixed inset-0 bg-black/50 transition-opacity duration-500 z-40"
          onClick={toggleSideBar}
        ></div>
      )}

      {/* 🟢 Main Content Area */}
      <div className="relative z-10 flex flex-col items-center h-full text-center transition-all duration-500 ease-in-out">
        <h1 className="text-4xl font-bold pt-18 pb-9">
          Welcome to Product Dashboard
        </h1>

        <button
          className="bg-violet-700 px-5 py-3 rounded-md text-white cursor-pointer hover:bg-violet-800 transition absolute top-5 right-5"
          onClick={toggleSideBar}
        >
          {toggle ? "Close Sidebar" : "Add Product"}
        </button>

        {/* 🟨 Product Area */}
        <div className="w-full flex justify-center gap-4 flex-wrap mt-12 px-4">
          {loading ? (
            <p className="text-xl text-gray-400 animate-pulse">
              Loading Products...
            </p>
          ) : error ? (
            <p className="text-red-400 text-xl">Error: {error}</p>
          ) : product.length === 0 ? (
            <p className="text-gray-400 text-xl">No Products Found</p>
          ) : (
            product.map((item, index) => (
              <div
                className="bg-zinc-800 border border-violet-500/30 shadow-md shadow-violet-400/10 text-white w-[320px] h-[180px] rounded-xl p-4 flex flex-col justify-center hover:scale-[1.03] transition"
                key={index}
              >
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-violet-400 font-medium mt-1">
                  ₹{item.price}
                </p>
                <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                  {item.description}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
