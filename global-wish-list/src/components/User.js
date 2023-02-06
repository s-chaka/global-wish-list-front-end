import { useOutletContext, useNavigate } from "react-router-dom";

const User = () => {
  const { userData, searchResults } = useOutletContext();

  // const data = Object.entries(userData);
  // console.log(data.firstName);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/profile");
  };

  return (
    <div>
      {searchResults.map((user) => {
        return (
          <article key={user.id}>
            <h3>
              Name: {user.firstName} {user.lastName}
              <button onClick={handleClick}> view wish </button>
            </h3>
            <p>email: {user.email}</p>
            <p>Country: {user.address.country}</p>
            <p>City: {user.address.city}</p>
            <p>State: {user.address.state} </p>
            <p>Street Adress: {user.address.streetAddress} </p>
            <p>Zip Code: {user.address.zipCode} </p>
          </article>
        );
      })}
    </div>
  );
};
export default User;
