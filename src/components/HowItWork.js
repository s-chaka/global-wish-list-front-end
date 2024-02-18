import React from "react";
import "./Home.css";

const HowItWorks = () => {
  return (
    <div className="container">
      <article className="HowPage-article">
        <h4> How Global-Wish-List Works </h4>
        <br />
        <p>
        Global Wish List connects people worldwide, fostering kindness and community. 
        Our platform is perfect for those eager to make a difference in someone's life.
        </p>
        <p>
        To explore wishes, simply search by name, country, state, or city, 
        or opt for a random selection.
        </p>
        <p>
        Express interest in fulfilling a wish by clicking the "Interested" button. 
        The heart will turn yellow ("💛"), signaling your desire to help. Use the provided user 
        information to reach out and make their dream a reality.
        </p>
        <p>
        A green heart ("💚") indicates that the wish has already been granted, 
        spreading joy throughout the community.
        </p>
        <p>
        Join us in spreading happiness, one wish at a time.
        </p>
      </article>
    </div>
  );
};
export default HowItWorks;
