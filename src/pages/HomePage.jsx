import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { data } from "../data";
import AuthContext from "../context/AuthContext";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchQuery, setSerachQuery] = useState("");
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  let content;

  let filteredCards = data.filter((el) => {
    // console.log(el);
    return el.category.indexOf(searchQuery) !== -1;
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm == "Choose...") {
      navigate("/");
    }
    if (currentUser) {
      setSerachQuery(searchTerm);
    } else {
      alert("Please login to make a search ");
    }
    setSearchTerm("");
  };

  // const handleInput = (e) => {
  //   setSearchTerm(e.target.value);

  //   // if (currentUser) {
  //   //   setSearchTerm(e.target.value);
  //   // } else {
  //   //   alert("Please login to make a search ");
  //   //   setTimeout(() => {
  //   //     // navigate("/login");
  //   //   }, 1000);
  //   // }
  //   // setSerachQuery(searchTerm);
  // };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="search">
        {/* <input
          className="search-input"
          type="searc"
          placeholder=" Search a product..."
          value={searchTerm}
          onChange={handleInput}
        />

        <button className="btn btn-primary" type="submit" value="Search">
          Search
        </button> */}

        <div className="input-group w-50">
          <select
            onChange={(e) => {
              setSearchTerm(e.target.value);
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

      <div className="card-container">
        {filteredCards.map((obj) => {
          console.log(obj);
          return (
            <ProductCard
              category={obj.category}
              description={obj.description}
              image={obj.image}
              price={obj.price}
              id={obj.product_id}
              title={obj.title}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}
