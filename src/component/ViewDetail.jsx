import React from "react";
import { useSelector } from "react-redux";

const ViewDetail = ({ isOpen, setIsOpen, id }) => {
  const allUsers = useSelector((state) => state.app.users);
  const singleUser = allUsers.find((item) => item.id === id); // ✅ Use find()

  if (!isOpen || !singleUser) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* Modal content */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="mb-4 border-b pb-2 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">User Details</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700 text-xl font-bold"
          >
            ×
          </button>
        </div>

        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              value={singleUser.name}
              disabled
              className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-700"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              value={singleUser.email}
              disabled
              className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-700"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender:</label>
            <input
              type="text"
              value={singleUser.gender}
              disabled
              className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-700"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Age:</label>
            <input
              type="number"
              value={singleUser.age}
              disabled
              className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-700"
            />
          </div>
        </form>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-500 rounded"
          >
            Deactivate
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetail;
