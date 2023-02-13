import { useOutletContext } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const User = () => {
  const { searchResults, handleSearchResult } = useOutletContext();

  return (
    <div>
      {searchResults.map((user) => {
        return (
          <div key={user.id}>
            <article>
              <h6>
                Name: {user.firstName} {user.lastName}{" "}
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={handleSearchResult}
                >
                  {" "}
                  view wish{" "}
                </Button>
              </h6>
              <p>
                email: {user.email} Country: {user.address.country} City:{" "}
                {user.address.city} State: {user.address.state} Street Adress:{" "}
                {user.address.streetAddress} Zip Code: {user.address.zipCode}{" "}
              </p>
            </article>
          </div>
        );
      })}
    </div>
  );
};
export default User;
