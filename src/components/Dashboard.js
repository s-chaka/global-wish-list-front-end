import React, { useState } from "react";
import "./Dashboard.css";
import { useOutletContext } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import WishForm from "../components/WishForm";
import UpdateForm from "./UpdateForm";

const Dashboard = () => {
  const {
    wishData,
    currentUser,
    deleteUser,
    deleteWish,
    satisfyWish,
    pickGreenHeart,
    pickYellowHeart,
    updateWish,
  } = useOutletContext();

  const [showForm, setShowForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const wishList = [];
  for (let wish of wishData) {
    if (currentUser.id === wish.owner) {
      wishList.push(wish);
      continue;
    }
  }

  return (
    <div className="container">
      <div className="row">
        <p className="userName"> Hello {currentUser.firstName} 👋🏼</p>
        <div className="position-relative">
          <div>
            <br />
            <Row>
              <Col md={4}>
                <Button
                  variant="outline-dark"
                  size="sm"
                  onClick={() => setShowForm(!showForm)}
                >
                  {showForm === true
                    ? "Hide Create Wish Card"
                    : "Create Wish Card"}
                </Button>
                {showForm && <WishForm />}
              </Col>
              <Col md={4}>
                <Button
                  variant="outline-info"
                  size="sm"
                  onClick={() => setShowUpdateForm(!showUpdateForm)}
                >
                  {showUpdateForm === true
                    ? "Hide Update My Account"
                    : "Update My Account"}
                </Button>
                {showUpdateForm && <UpdateForm />}
              </Col>
              <Col md={4}>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => {
                    deleteUser?.(currentUser.id);
                    // logout();
                  }}
                >
                  Delete My Account
                </Button>
              </Col>
            </Row>
          </div>
        </div>
        <Card
          className="container"
          style={{ color: "#000", width: "50rem", hight: "5rem" }}
        >
          <article className="profile-article">
            <p>
              Full Name: {currentUser.firstName}
              {"  "}
              {currentUser.lastName}
            </p>
            <p>Email: {currentUser.email}</p>
            <p>
              Country: {currentUser.address?.country} City:{" "}
              {currentUser.address?.city} State: {currentUser.address?.state}{" "}
            </p>
            <p>
              {" "}
              Street Address: {currentUser.address?.streetAddress} Zip Code:{" "}
              {currentUser.address?.zipCode}
            </p>
          </article>
        </Card>
        <br />
        <br />

        <Row xs={1} md={3} className="g-4">
          {wishList.map((wish) => (
            <Col key={wish.id}>
              <Card bg="info" text="dark" border="dark">
                <Card.Header>Wish Card </Card.Header>
                <Card.Body>
                  <Card.Text>Url: {wish.url}</Card.Text>
                  <Card.Text>Wish: {wish.wishList}</Card.Text>
                  <Card.Text>Story: {wish.story}</Card.Text>{" "}
                  {pickGreenHeart(wish.satisfied)}{" "}
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() => {
                      satisfyWish(wish.id);
                      updateWish(wish.id, {
                        ...wish,
                        satisfied: !wish.satisfied,
                      });
                    }}
                  >
                    Satisfied
                  </Button>{" "}
                  {pickYellowHeart(wish.interested)}{" "}
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => {
                      deleteWish?.(wish.id);
                    }}
                  >
                    {" "}
                    Remove Wish{" "}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
export default Dashboard;
