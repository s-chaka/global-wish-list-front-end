import Dashboard from "../components/Dashboard";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const DashboardPage = () => {
  const { userData } = useOutletContext();
  return (
    <div>
      <h2 className="h2">Dashboard </h2>
      <Dashboard data={userData} />
      {/* <Users /> */}
    </div>
  );
};
export default DashboardPage;
