import React from "react";
import Burger from "../Component/Burger";

const Burgerscreen = (props) => {
  const { burgers } = props;
  return (
    <>
      <div className="row">
        {burgers.map((burger) => (
          <Burger key={burger.id} burger={burger}></Burger>
        ))}
      </div>
    </>
  );
};

export default Burgerscreen;
