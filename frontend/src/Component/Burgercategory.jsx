import React from "react";
import Burgerscreen from "../Screen/Burgerscreen";
import burger from "./burgerdata";

const Burgercategory = () => {
  const { burgers } = burger;
  return (
    <div className="block">
      <h1>Burgers</h1>
      <br></br>
      <Burgerscreen burgers={burgers}></Burgerscreen>
    </div>
  );
};

export default Burgercategory;
