import React from "react";
import { Card, Button } from "react-bootstrap";

const Pizza = (props) => {
  const { pizza } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pizza.image} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>{pizza.description}</Card.Text>
        <Card.Text>{pizza.category}</Card.Text>
        <Card.Text>{pizza.price}</Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Pizza;
