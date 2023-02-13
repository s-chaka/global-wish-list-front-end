import Home from "../components/Home";
import { useOutletContext } from "react-router-dom";

const Homepage = () => {
  const { userData } = useOutletContext();
  return (
    <div>
      <p className="hoempage-p">
        <br /> ✨✨✨✨✨✨✨✨✨ Search for someone random and make them smile
        ✨✨✨✨✨✨✨✨✨
        <br />
        <span>
          {" "}
          you can search by first name, last name, country, state or city
        </span>
      </p>
      <p></p>
      <Home data={userData} />
    </div>
  );
};
export default Homepage;
