import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("user-info");
    const userData = JSON.parse(data);
    setUserInfo(userData);
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("user-info");
    navigate("/login");
  };
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="w-[400px] h-60 rounded-xl bg-black text-white flex justify-center items-center flex-col">
        <h1 className=" text-2xl font-semibold pb-2">
          Welcome {userInfo?.name}
        </h1>
        <h2 className="text-lg font-medium pb-2">{userInfo?.email}</h2>
        <img
          className=" rounded-full pb-2"
          src={userInfo?.image}
          alt={userInfo?.email}
        />
        <button
          className="bg-red-600 text-white py-2 px-6 rounded-xl hover:bg-red-700"
          onClick={handleLogOut}
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
