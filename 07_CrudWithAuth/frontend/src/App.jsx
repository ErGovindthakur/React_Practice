import React, { useState } from "react";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const toggleSideBar = () => setToggle((prev) => !prev);

  return (
    <div className="relative h-screen bg-zinc-900 text-white overflow-hidden">
      {/* 🟣 Sidebar Section */}
      <div
        className={`fixed top-0 left-0 h-full bg-zinc-800 shadow-xl shadow-violet-500/30 transition-all duration-500 ease-in-out
        ${toggle ? "translate-x-0 w-[400px]" : "-translate-x-full w-[400px]"}`}
      >
        <div className="p-6 flex flex-col h-full">
          <h3 className="text-2xl font-semibold mb-5">Add Product</h3>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter Product Title*"
              className="rounded-md outline-none border-2 border-violet-400 bg-transparent px-4 py-2 text-lg"
            />
            <input
              type="number"
              placeholder="Enter Product Price*"
              className="rounded-md outline-none border-2 border-violet-400 bg-transparent px-4 py-2 text-lg"
            />
            <textarea
              placeholder="Enter Product Description*"
              className="rounded-md outline-none border-2 border-violet-400 bg-transparent px-4 py-2 text-lg"
            />
            <button className="bg-violet-700 px-4 py-2 rounded-md hover:bg-violet-800 transition">
              Add Product
            </button>
          </form>
        </div>
      </div>

      {/* 🔳 Optional Dark Overlay (click to close sidebar) */}
      {toggle && (
        <div
          className="fixed inset-0 bg-black/50 transition-opacity duration-500"
          onClick={toggleSideBar}
        ></div>
      )}

      {/* 🟢 Main Content Area */}
      <div className="relative z-10 flex flex-col items-center h-full text-center  transition-all duration-500 ease-in-out">
        <h1 className="text-4xl font-bold pt-9 pb-3">Welcome to Product Dashboard</h1> 

        <button
          className="bg-violet-700 px-5 py-3 rounded-md text-white cursor-pointer hover:bg-violet-800 transition absolute top-5 right-5"
          onClick={toggleSideBar}
        >
          {toggle ? "Close Sidebar" : "Add Product"}
        </button>
      <div className="text-white text-3xl">
        Here is your Product List
      </div>
      </div>

    </div>
  );
};

export default App;
