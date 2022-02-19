import React from "react";

export default function Search() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="search">
        <input
          className="search-input"
          type="searc"
          placeholder=" Search a product..."
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className="btn btn-primary" type="submit" value="Search">
          Search
        </button>
      </form>
    </React.Fragment>
  );
}
