import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../store/redux/userDetail";

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchDate, setSearchData] = useState();
  const allUsers = useSelector((state) => state.app.users);

  useEffect(() => {
    dispatch(searchUser(searchDate));
  }, [searchDate]);
  return (
    <nav className="bg-white shadow-md px-4 py-2 flex items-center justify-between">
      {/* Left: Logo + Nav Links */}
      <div className="flex items-center space-x-6">
        <div className="text-xl font-bold text-gray-800">MyApp</div>
        <ul className="flex space-x-4 text-gray-700 font-medium">
          <Link to="/create">
            <li className="hover:text-blue-500 cursor-pointer">Create Post</li>
          </Link>
          <Link to="/">
            <li className="hover:text-blue-500 cursor-pointer">
              All Post ({allUsers.length})
            </li>
          </Link>
        </ul>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 max-w-md mx-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchDate}
          onChange={(e) => setSearchData(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right: Auth Buttons */}
      <div className="space-x-4">
        <button className="text-gray-700 hover:text-blue-500">Login</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
