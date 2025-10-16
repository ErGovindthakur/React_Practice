import React, { useState, useMemo } from "react";

const UseMemoHook = () => {
  const [students] = useState([
    { name: "Aarav", marks: 95 },
    { name: "Riya", marks: 88 },
    { name: "Karan", marks: 91 },
    { name: "Sneha", marks: 76 },
    { name: "Anuj", marks: 94 },
  ]);
  const [theme, setTheme] = useState("dark");

  // ⚡ Heavy computation: filtering top scorers
  const topStudents = useMemo(() => {
    console.log("Filtering top students..."); // 👈 Watch when this runs
    return students.filter((s) => s.marks > 90);
  }, [students]); // runs only when student data changes

  return (
    <div
      className={`w-96 p-4 rounded-md ${
        theme === "light" ? "bg-gray-200 text-black" : "bg-gray-800 text-white"
      }`}
    >
      <h2 className="text-lg font-semibold">Top Students</h2>
      {topStudents.map((student, index) => (
        <p key={index}>{student.name} - {student.marks}</p>
      ))}

      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="mt-3 bg-blue-500 px-3 py-1 rounded-md text-white"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default UseMemoHook;
