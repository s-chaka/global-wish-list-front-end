import Dashboard from "./Dashboard";
import "./Home.css";
import { useOutletContext } from "react-router-dom";
import User from "./User";

const UsersList = () => {
  const { userData, searchResults } = useOutletContext();
  // console.log("******searchResults", searchResults);
  const results = Object.values(searchResults).map((user) => (
    <User key={user.id} user={user} />
  ));
  // console.log("****results", results);
  const content = results?.length ? (
    results
  ) : (
    <article>
      <p>No Matching result</p>
    </article>
  );

  // console.log("****content", content);
  return <main>{content}</main>;
};

export default UsersList;

// return (
//   <div>
//     {data.map((user) => (
//       <ul key={user.id}>
//         <li>{user.firstName}</li>
//         <li>{user.lastName}</li>
//         <li>{user.email}</li>
//         <li>{user.address.country}</li>
//         <li>{user.address.city}</li>
//       </ul>
//     ))}
//   </div>
//   <table>
//     <tbody>
//        <tr>
//         <th>First Name</th>
//         <th>Last Name</th>
//         <th>Email</th>
//         <th>Country</th>
//         <th>City</th>
//       </tr>
//   {data.map((user) => (
//     <tr key={user.id}>
//       <td>{user.firstName}</td>
//       <td>{user.lastName}</td>
//       <td>{user.email}</td>
//       <td>{user.address.country}</td>
//       <td>{user.address.city}</td>
//     </tr>
//   ))}
//   </tbody>
//   </table>
// );
