import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  // for getting user data
  const [userData, setUserData] = useState(null);
  // for find dynamic user
  const [findUser, setFindUser] = useState("");
  // for handling loading state
  const [loading, setLoading] = useState(true);
  // for managing error
  const [error, setError] = useState(null);

  // Function to fetch user
  const fetchUser = async () => {
    try {
     setLoading(true);
     setError(null);
     // Number(findUser);
      const user = await fetch(`https://jsonplaceholder.typicode.com/users/${Number(findUser) || 1}`);

      if (!user.ok) {
        throw new Error("Failed to Fetch Data");
      }
      const res = await user.json();

      console.log(res);

      setUserData(res);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // creating a useEffect hook to handle side effect
  useEffect(() => {
    fetchUser();
  }, []);

  const handleFindUser = (e) => {
     e.preventDefault();
     fetchUser();
     console.log(`Uid -> ${findUser}`);
  }
  if(error){
     return <p>Failed to Load Data..</p>
  }
  return (
    <div className="w-75 h-30 bg-zinc-700 rounded-md flex items-center gap-3 flex-col">
      <div className="pt-3">
      <form onSubmit={handleFindUser}>
        <input
          type="text"
          value={findUser}
          onChange={(e)=>setFindUser(e.target.value)}
          placeholder="Enter Uid"
          className="border-2 rounded-l-full px-2 py-1 border-gray-200 outline-none"
        />
        <button className="bg-gray-500 rounded-r-full px-2 py-[6px]">
          Search
        </button>
      </form>
      </div>
      <div>
        {loading ? (
          <p>Data is Loading...</p>
        ) : (
          <div>
            <p>Name -: {userData?.name}</p>
            <p>City -: {userData?.address?.city}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UseEffectHook;
