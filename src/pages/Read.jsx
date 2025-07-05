import React, { useEffect, useState } from "react";
import { deleteUser, showUser } from "../store/redux/userDetail";
import { useDispatch, useSelector } from "react-redux";
import ViewDetail from "../component/ViewDetail";
import { useNavigate } from "react-router-dom";

// const dummyData = [
//   { id: 1, name: "John Doe", email: "john@example.com", gender: "Male" },
//   { id: 2, name: "Jane Smith", email: "jane@example.com", gender: "Female" },
//   { id: 3, name: "Alex Ray", email: "alex@example.com", gender: "Male" },
// ];

const Read = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState();

  const { users, loading, searchData } = useSelector((state) => state.app);
  console.log("users...", users);
  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  const filteredData = users.filter((item) => {
    if (filter === "All") return true;
    return item.gender.toLowerCase() === filter.toLowerCase();
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-semibold text-blue-600">Loading...</h2>
      </div>
    );
  }

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };
  return (
    <>
      <ViewDetail isOpen={isOpen} setIsOpen={setIsOpen} id={id} />

      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-4">All Data</h2>

        {/* Radio Buttons */}
        <div className="mb-6 flex gap-6">
          {["All", "Male", "Female"].map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input
                type="radio"
                value={option}
                checked={filter === option}
                onChange={() => setFilter(option)}
              />
              {option}
            </label>
          ))}
        </div>

        {/* Cards */}
        <div className="grid gap-4">
          {filteredData &&
            filteredData
            .filter((ele) => {
              if (searchData.length === 0) {
                return ele;
              } else {
                return ele.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              }
            })
            .map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded-md shadow-md bg-white flex flex-col gap-2"
              >
                <p>
                  <strong>Name:</strong> {item.name}
                </p>
                <p>
                  <strong>Email:</strong> {item.email}
                </p>
                <p>
                  <strong>Gender:</strong> {item.gender}
                </p>

                <div className="flex gap-3 mt-2">
                  <button
                    onClick={() => {
                      setIsOpen(true);
                      setId(item.id);
                    }}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(deleteUser(item.id))}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

          {filteredData.length === 0 && (
            <p className="text-gray-500">No data available for this filter.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Read;
