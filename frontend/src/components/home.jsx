import React, { useEffect, useState } from "react";
import api from "../api/config.js";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await api.get("/book");
        setData(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchBook();
  }, []);
  return (
    <>
      <h1>Home</h1>
      <div>
        {data.length > 0 ? (
          <ul>
            {data.map((book, index) => (
              <li key={index}>{book.name}</li>
            ))}
          </ul>
        ) : (
          <p>No books available</p>
        )}
      </div>
    </>
  );
};

export default Home;
