import "./Home.css";
import { useOutletContext } from "react-router-dom";
import User from "./User";

const UsersList = () => {
  const { searchResults } = useOutletContext();
  if (searchResults === null) {
    return null;
  }
  const results = Object.values(searchResults).map((user) => (
    <User key={user.id} user={user} />
  ));
  const content = results?.length ? (
    results
  ) : (
    <article>
      <p>No Matching result</p>
    </article>
  );
  return <main>{content}</main>;
};

export default UsersList;
