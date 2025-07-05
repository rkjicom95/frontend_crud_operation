import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../store/redux/userDetail";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    dispatch(createUser(formData));
    setFormData({
      name: "",
      email: "",
      age: "",
      gender: "",
    });
    navigate("/");
    // You can add form validation or API submission here
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Create User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Age */}
        <div>
          <label className="block font-medium mb-1">Age</label>
          <input
            type="number"
            name="age"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-500"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block font-medium mb-1">Gender</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              <span>Male</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              <span>Female</span>
            </label>
          </div>
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
