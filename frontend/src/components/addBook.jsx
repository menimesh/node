import React, { useState } from "react";
import "./AddBook.css";
import api from "../api/config.js";
const AddBook = () => {
  const [formData, setformData] = useState({
    name: "",
    author: "",
    genre: "",
    description: "",
  });
  const handlechange = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    setformData({
      ...formData,
      [key]: value,
    });
  };
  const add = async (e) => {
    e.preventDefault();
    const response = await api.post("/book/add", {
      ...formData,
    });
    console.log(response);
    console.log("form submitted");
  };
  return (
    <div className="container">
      <h1 className="heading">Add a New Book</h1>
      <form className="form" onSubmit={add}>
        <div className="form-group">
          <label htmlFor="name" className="label">
            Book Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="input"
            onChange={handlechange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author" className="label">
            Author
          </label>
          <input
            type="text"
            name="author"
            id="author"
            className="input"
            onChange={handlechange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre" className="label">
            Genre
          </label>
          <input
            type="text"
            name="genre"
            id="genre"
            className="input"
            onChange={handlechange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="label">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="textarea"
            onChange={handlechange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image" className="label">
            Book Cover
          </label>
          <input
            type="file"
            name="image"
            id="image"
            className="file-input"
            onChange={handlechange}
          />
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddBook;
