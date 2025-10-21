import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [copyName, setCopyName] = useState("");

  const [naam, setNaam] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCopyName(name);
  };
  return (
    <div>
      <div>
        <p>Example 1 (Not an example of two way binding)</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <button>Submit</button>
        </form>
        <p>Hello -: {copyName || "Guest"}</p>
      </div>
      <div>
        <p>Example 2 (It's an example of two way binding)</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={naam}
            placeholder="Enter your name"
            onChange={(e) => setNaam(e.target.value)}
          />
        </form>
        <p>Hello -: {naam || "Guest"}</p>
      </div>
    </div>
  );
};

export default App;
