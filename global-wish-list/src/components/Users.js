import Dashboard from "./Dashboard";

const Users = (props) => {
  const currentUser = props.currentUser;
  console.log("current user from dashboard", currentUser);
  return (
    <div>
      {currentUser.map((user) => (
        <Dashboard
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          address={user.address}
        />
      ))}
    </div>
  );
};

export default Users;
