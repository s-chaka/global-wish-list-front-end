import Home from "../components/Home";

const Homepage = () => {
  return (
    <div>
      <p className="hoempage-p">
        <br /> ✨✨✨✨ Search for someone random and make them smile ✨✨✨✨
        <br />
        <span>
          {" "}
          You can search by first name, last name, country, state or city
        </span>
      </p>
      <Home />
    </div>
  );
};
export default Homepage;
