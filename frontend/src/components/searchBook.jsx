import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import api from "../api/config.js";

const SearchBook = () => {
  const [data, setData] = useState("");
  const [search, sData] = useState([]);

  const searchData = (e) => {
    setData(e.target.value); // Update the state with input value
  };

  const findData = async () => {
    if (!data.trim()) {
      console.warn("Search query is empty");
      return;
    }
    try {
      console.log("Searching for:", data);
      const response = await api.get("/book/find/all", {
        params: { q: data },
      });
      console.log("Response Data:", response.data);
      sData(response.data); // Update the search results
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const containerStyle = {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    marginTop: "20px",
  };

  const inputStyle = {
    padding: "10px",
    width: "80%",
    maxWidth: "400px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    fontSize: "16px",
    marginRight: "10px",
  };

  const iconStyle = {
    fontSize: "24px",
    color: "#555",
    cursor: "pointer",
    verticalAlign: "middle",
  };

  const headerStyle = {
    fontSize: "24px",
    color: "#333",
    marginBottom: "20px",
  };

  const listStyle = {
    textAlign: "left",
    margin: "20px auto",
    width: "80%",
    maxWidth: "400px",
    padding: "0",
    listStyleType: "none",
  };

  const listItemStyle = {
    padding: "10px",
    borderBottom: "1px solid #ccc",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Search Books</h1>
      <input
        type="text"
        placeholder="Type to search..."
        value={data}
        onChange={searchData}
        style={inputStyle}
      />
      <i className="ri-search-line" style={iconStyle} onClick={findData}></i>
      <ul style={listStyle}>
        {search.map((book, index) => (
          <li key={index} style={listItemStyle}>
            {book.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBook;
