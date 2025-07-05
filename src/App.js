import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages/components
import Read from "./pages/Read";
import Create from "./pages/Create";
import Navbar from "./component/Navbar";
import UpdateUser from "./component/UpdateUser";

function App() {
  return (
    <Router>
      {/* Navbar shown on all pages */}
      <Navbar />

      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<UpdateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
