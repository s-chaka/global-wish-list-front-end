import React from "react";
import "./Home.css";

const HowItWorks = () => {
  return (
    <div className="container">
      <article className="HowPage-article">
        <h4> How Global-Wish-List web app works ? </h4>
        <br />
        <p>
          Global Wish List web app links all people on the planet. GWL is the
          ideal online app for you if you have the ability to brighten someone's
          day.
        </p>
        <p>
          To view someone's wishes, you can search for them by name, nation,
          state, or city, or you can choose a random individual.
        </p>
        <p>
          By clicking the "interested" button, you can let the wish owner know
          that you're interested in granting their desire. The heart will then
          turn yellow ("💛"), and you can get in touch with them using the user
          information you've been given.
        </p>
        <p>
          If the heart is green ( "💚"), their wish has already been granted.
        </p>
      </article>
    </div>
  );
};
export default HowItWorks;
