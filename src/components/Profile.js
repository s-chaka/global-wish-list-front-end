import { useOutletContext } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  const {
    updateWish,
    foundUserWish,
    foundUser,
    makeWishReal,
    pickYellowHeart,
    pickGreenHeart,
  } = useOutletContext();

  return (
    <div className="container">
      <Card
        className="container"
        style={{ color: "#000", width: "50rem", hight: "5rem" }}
      >
        <article className="profile-article">
          {foundUser.map((user, id) => {
            return (
              <div key={id}>
                <h4> You're viewing {user.firstName}'s Wish List </h4>
                <p>
                  Full Name: {user.firstName} {user.lastName}
                </p>
                <p>email: {user.email}</p>
                <p>
                  Country: {user.address.country} City: {user.address.city}
                </p>
                <p>
                  State: {user.address.state} Zip Code: {user.address.zipCode}
                </p>
              </div>
            );
          })}
        </article>
      </Card>
      <br />
      <br />
      <div className="wishes-article">
        <Row xs={1} md={3} className="g-4">
          {foundUserWish.map((wish, id) => {
            return (
              <Col key={id}>
                <Card bg="light" border="dark">
                  <Card.Header>Wish Card </Card.Header>
                  <Card.Body>
                    <Card.Text> Wish: {wish.wishList}</Card.Text>{" "}
                    <Card.Text> Story: {wish.story} </Card.Text>
                    {pickGreenHeart(wish.satisfied)}{" "}
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => {
                        makeWishReal(wish.id);
                        updateWish(wish.id, {
                          ...wish,
                          interested: !wish.interested,
                        });
                        window.confirm(
                          "Are you sure you want to share your interest with the wish's owner? If you're please contact the wish owner"
                        );
                      }}
                    >
                      Interested
                    </Button>{" "}
                    {pickYellowHeart(wish.interested)}{" "}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};
export default Profile;
