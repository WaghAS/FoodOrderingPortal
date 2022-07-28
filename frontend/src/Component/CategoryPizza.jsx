import React from "react";
import Homescreen from "../Screen/Homescreen";
import pizza from "./pizzadata";

const CategoryPizza = () => {
  const { pizzas } = pizza;

  return (
    <div className="block">
      <h1>Pizzas</h1>
      <br></br>
      <Homescreen pizzas={pizzas}></Homescreen>
    </div>
  );
};

export default CategoryPizza;
