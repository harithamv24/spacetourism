import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home__class">
      <div className="home__content">
        <div className="left__content">
          <p>So, you want to travel to</p>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="right__content">
          <div className="right__circle">
            <p>Explore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
