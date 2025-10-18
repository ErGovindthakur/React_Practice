import React, { useState } from "react";

const MultiFieldForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    country: "India",
    gender: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data =>", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-700 shadow-lg rounded-xl p-6 w-full max-w-md flex flex-col gap-4"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
          Registration Form
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter your name"
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter your password"
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Country */}
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          <option value="India" className="text-gray-900">India</option>
          <option value="USA" className="text-gray-900">USA</option>
          <option value="Japan" className="text-gray-900">Japan</option>
        </select>

        {/* Gender */}
        <div className="flex gap-4 items-center">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
              className="accent-purple-500"
            />
            Male
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
              className="accent-purple-500"
            />
            Female
          </label>
        </div>

        {/* Terms */}
        <label className="flex items-center gap-2 text-gray-700 text-sm">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="accent-purple-500"
          />
          <span className="text-white">
          I agree to the terms and conditions
          </span>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!formData.agree}
          className={`w-full py-2 rounded-lg text-white font-medium transition-colors ${
            formData.agree
              ? "bg-purple-600 hover:bg-purple-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MultiFieldForm;
