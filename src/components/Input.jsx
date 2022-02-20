import React, { useState } from "react";

export default function Input({ handleCategory }) {
  const [category, setCategory] = useState("Choose...");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (searchTerm == "Choose...") {
  //     navigate("/");
  //   }
  //   if (currentUser) {
  //     setSerachQuery(searchTerm);
  //   } else {
  //     alert("Please login to make a search ");
  //   }
  //   setSearchTerm("");
  // };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleCategory(e, category);
        }}
        className="search"
      >
        <div className="input-group w-50">
          <select
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className="custom-select"
            id="inputGroupSelect04"
            aria-label="Example select with button addon"
          >
            <option selected>Choose...</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
            <option value="electronics">electronics</option>
            <option value="jewelery">jewelery</option>
          </select>
          <div className="input-group-append">
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
