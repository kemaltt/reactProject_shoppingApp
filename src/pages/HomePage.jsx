import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { data } from "../data";
import AuthContext from "../context/AuthContext";
import Input from "../components/Input";

export default function HomePage() {
  const [totalData, setTotalData] = useState(data);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCategory = (e, category) => {
    e.preventDefault();
    if (category == "Choose...") {
      setTotalData(data);
    } else {
      let filteredData = data.filter((el) => el.category == category);
      setTotalData(filteredData);
    }

    if (currentUser) {
      setTotalData(data);
    } else {
      alert("Please login to make a search ");
      setTotalData(data);
    }
  };

  return (
    <React.Fragment>
      <Input handleCategory={handleCategory} />

      <div className="card-container">
        {totalData.map((obj) => {
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
