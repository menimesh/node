import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home.jsx";
import AddBook from "./components/addBook.jsx";
import Dashboard from "./components/Dashboard.jsx";
import SearchBook from "./components/searchBook.jsx";
import Login from "./components/login.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Use relative path here */}
          <Route path="searchBook" element={<SearchBook />} />
          <Route path="addbook" element={<AddBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
