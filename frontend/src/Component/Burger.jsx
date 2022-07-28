import React from "react";
import { Card, Button } from "react-bootstrap";

const Burger = (props) => {
  const { burger } = props;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={burger.image} />
      <Card.Body>
        <Card.Title>{burger.name}</Card.Title>
        <Card.Text>{burger.description}</Card.Text>
        <Card.Text>{burger.category}</Card.Text>
        <Card.Text>{burger.price}</Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Burger;
