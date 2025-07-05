import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateUser } from "../store/redux/userDetail";
import { useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    age: "",
  });
  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    if (id && users.length > 0) {
      const singleUser = users.find((item) => item.id.toString() === id);
      if (singleUser) {
        setFormData(singleUser);
      }
    }
  }, [id, users]);

  console.log("formData", formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log("formData...", formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Data:", formData);
    dispatch(updateUser(formData));
    setFormData({
      name: "",
      email: "",
      gender: "",
      age: "",
    });
    navigate("/");
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      gender: "",
      age: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-8 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
        Update User
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            name="name"
            type="text"
            placeholder="Enter name"
            value={formData && formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md text-gray-900"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={formData && handleChange}
            className="w-full px-3 py-2 border rounded-md text-gray-900"
            required
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gender
          </label>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData && formData.gender === "Male"}
                onChange={handleChange}
                className="form-radio text-blue-600"
              />
              <span className="text-gray-700">Male</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData && formData.gender === "Female"}
                onChange={handleChange}
                className="form-radio text-pink-600"
              />
              <span className="text-gray-700">Female</span>
            </label>
          </div>
        </div>

        {/* Age */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            name="age"
            type="number"
            placeholder="Enter age"
            value={formData && formData.age}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md text-gray-900"
            required
          />
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="submit"
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded"
          >
            Update
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
