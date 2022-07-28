import React from "react";
import Pizza from "../Component/Pizza";

const Homescreen = (props) => {
  const { pizzas } = props;
  return (
    <>
      <div className="row">
        {pizzas.map((pizza) => (
          <Pizza key={pizza.id} pizza={pizza}></Pizza>
        ))}
      </div>
    </>
  );
};

export default Homescreen;
